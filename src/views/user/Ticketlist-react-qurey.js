import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    BackHandler,
    StyleSheet,
    Dimensions,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import Icon2 from "react-native-vector-icons/FontAwesome";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { JDate } from '../../components/JDate';

const fetchTickets = async ({ pageParam = 1 }) => {
  const response = await fetch('https://api.yourservice.com/tickets/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type: type,
      status: status,
      mobile: mobilenumber,
      page: pageParam,
    }),
  });

  return response.json();
};

const TicketList = (props) => {
  const navigation = useNavigation();
  const { type, status } = props.route.params;
  const [mobilenumber, setmobilenumber] = useState("");

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery('tickets', fetchTickets, {
    getNextPageParam: (lastPage, allPages) => lastPage.nextPage ?? false,
  });

  useEffect(() => {
    const backAction = () => {
      navigation.navigate("paneluser");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderFooter = () => {
    if (!isFetchingNextPage) return null;
    return <ActivityIndicator color={"#f00"} style={Styles.loader} />;
  };

  const MyListItem = React.memo(({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => { navigation.navigate("ticket", { id: item.id, type: type }) }} style={Styles.pakegmahsa} key={`${item.id}-${index}`}>
        <View style={Styles.parentdatestaetend}>
          <Text style={{ color: '#000', fontSize: RFValue(13), marginVertical: '5%' }}>{item.user.mobile}</Text>
          <Text style={{ color: '#000', fontSize: RFValue(13), marginVertical: '5%' }}>{item.user.name} {item.user.lastname}</Text>
        </View>
        <View style={Styles.parentdatestaetend}>
          <Text style={Styles.textdate}></Text>
          <Text style={Styles.textdate}>تاریخ آخرین پیام: {JDate(item.date_update)}</Text>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.searchSection}>
        <Icon2 style={Styles.searchIcon} name="search" size={25} color="#000" />
        <TextInput
          style={Styles.inputs}
          placeholder='جستجو بر اساس شماره موبایل'
          value={mobilenumber}
          onChangeText={(text) => {
            setmobilenumber(text);
          }}
          selectionColor={'red'}
        />
      </View>
      {data.pages.length === 0 ? (
        <ActivityIndicator size={50} style={{ flex: 1 }} />
      ) : (
        <FlatList
          data={data.pages.flatMap(page => page.data.ticket)}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={({ item, index }) => <MyListItem item={item} index={index} />}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      )}
    </SafeAreaView>
  );
};

export { TicketList }
