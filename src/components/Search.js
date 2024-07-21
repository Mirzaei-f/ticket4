


// // import React, { useState } from 'react';
// // import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
// // import Autocomplete from 'react-native-autocomplete-input';
// // import { useQuery } from '@tanstack/react-query';
// // import { useAsyncStorage } from "@react-native-async-storage/async-storage";

// // import { Context } from "./Context";


// // const    Search= (props) => {
// //   const [query, setQuery] = useState('');

// //   const { getItem } = useAsyncStorage('auth');
// //   const { type, status } = props.route.params;

 

// //   const fetchTickets = async () => {
// //     let auth = await getItem();
// //     const response = await fetch('https://mahsaonlin.com/admin/coach/tickets/list', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         'Authorization': `Bearer ${auth}`
// //       },
// //       body: JSON.stringify({
// //          page: '1',
// //         type: type,
// //         status: status,
// //         mobile: ' '
// //       })
// //     });

// //     if (!response.ok) {
// //       const errorMessage = await response.text();
// //       throw new Error(`Network response was not ok: ${errorMessage}`);
// //     }

// //     const res = await response.json();
// //     console.log("res.data.ticket", res.data.ticket);
// //     return res.data.ticket;
// //   };

// //   const { isLoading, error, data, refetch } = useQuery({
// //     queryKey: ['tickets'],
// //     queryFn: fetchTickets,
// //     // Optional configuration for react-query
// //     // staleTime: 0, // Time (ms) after which data is considered stale and refetched (default: 0)
// //     // cacheTime: 5 * 60 * 1000, // Time (ms) to keep data in cache even if stale (default: 5 minutes)
// //   });




// //   const filteredTickets = data?.filter((ticket) =>
// //     ticket.user.mobile.toLowerCase().includes(query.toLowerCase())
// //   ) || [];

// //   const renderItem = ({ item }) => (
// //     <TouchableOpacity onPress={() => setQuery(item.user.mobile)}>
// //       <Text>{item.user.mobile}</Text>
// //       <Text>{item.user.name}</Text>
// //       <Text>{item.user.lname}</Text>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>جستجوی شماره تلفن</Text>
// //       {isLoading ? (
// //         <Text>در حال بارگذاری شماره ها...</Text>
// //       ) : error ? (
// //         <Text>خطا در بارگذاری: {error.message}</Text>
// //       ) : (
// //         <>
// //           <Autocomplete
// //             data={filteredTickets}
// //             value={query}
// //             onChangeText={(text) => setQuery(text)}
// //             flatListProps={{
// //               keyExtractor: (item) => item.user.mobile, // Use a unique identifier for each ticket
// //               renderItem,
// //             }}
// //           />
// //           <TouchableOpacity onPress={refetch}>
// //             <Text style={styles.refreshButton}>تازه سازی</Text>
// //           </TouchableOpacity>
// //         </>
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //   },
// //   refreshButton: {
// //     marginTop: 10,
// //     padding: 10,
// //     backgroundColor: '#ccc',
// //   },
// // });
// /////////////////////////////////////////////////////





// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import Autocomplete from 'react-native-autocomplete-input';
// import { useQuery } from '@tanstack/react-query';
// import { useAsyncStorage } from "@react-native-async-storage/async-storage";
// import { SafeAreaView, Text, View, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet, Image, Dimensions } from 'react-native';
// import { Context } from "./Context";
// import { JDate } from '../components/JDate';
// import {ComponentLoading} from "../components/ComponentLoading";
// import Group396 from "../assets/images/Group396.png";
// import { RFValue } from "react-native-responsive-fontsize";
//       import FontAwesome from "react-native-vector-icons/FontAwesome";
//       import AntDesign from "react-native-vector-icons/AntDesign";
// const Search = (props) => {
//   const [query, setQuery] = useState('');

//   const { getItem } = useAsyncStorage('auth');
//   const { type, status } = props.route.params;
//       const navigation = useNavigation();
//   console.log(" type ===>",type)
//   console.log("status  ===>",status )

//   const fetchTickets = async () => {
//     let auth = await getItem();
//     const response = await fetch('https://mahsaonlin.com/admin/coach/tickets/list', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${auth}`
//       },
//       body: JSON.stringify({
//          page: '1',
//         type: type,
//         status: status,
//         mobile: ' '
//       })
//     });

//     if (!response.ok) {
//       const errorMessage = await response.text();
//       throw new Error(`Network response was not ok: ${errorMessage}`);
//     }

//     const res = await response.json();
//     console.log("res.data.ticket", res.data.ticket);
//     return res.data.ticket;
//   };

//   const { isLoading, error, data, refetch } = useQuery({
//     queryKey: ['tickets1'],
//     queryFn: fetchTickets,
//     // Optional configuration for react-query
//     // staleTime: 0, // Time (ms) after which data is considered stale and refetched (default: 0)
//     // cacheTime: 5 * 60 * 1000, // Time (ms) to keep data in cache even if stale (default: 5 minutes)
//   });




//   const filteredTickets = data?.filter((ticket) =>
//     ticket.user.mobile.toLowerCase().includes(query.toLowerCase())
//   ) || [];

//   const renderItem = ({ item }) => (
//     // <TouchableOpacity onPress={() => setQuery(item.user.mobile)}>
//     // <TouchableOpacity        onPress={() => navigation.navigate('ticket', { id: item.id, type: type })} style={Styles.pakegmahsa}>
    
//     //   <Text>{item.user.mobile}</Text>
//     //   <Text>{item.user.name}</Text>
//     //   <Text>{item.user.lname}</Text>
//     // </TouchableOpacity>

//     <TouchableOpacity onPress={() => navigation.navigate('ticket', { id: item.id, type: type })} style={Styles.pakegmahsa} >
//                   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
//                       <FontAwesome name="user-circle-o" size={45} color="#EDEEF2" />
//                   </View>
//                   <View style={{ flex: 4 }}>
//                       <View style={Styles.parentdatestaetend}>
//                           <Text style={[Styles.txt, { fontSize: RFValue(12) }]}>{item.user.mobile}</Text>
//                           <Text style={[Styles.txt, { fontSize: RFValue(14) }]}>{item.user.name} {item.user.lastname}</Text>
//                       </View>
//                       <View style={Styles.parentdatestaetend}>
//                           <Text style={Styles.textdate}></Text>
//                           <Text style={[Styles.textdate, { color: "#000" }]}>تاریخ آخرین پیام: {JDate(item.date_update)}</Text>
//                       </View>
//                   </View>
//               </TouchableOpacity>
//   );

//   return (
//     // <View >
//     //   <Text >جستجوی شماره تلفن</Text>
//     //   {isLoading ? (
//     //     <Text>در حال بارگذاری شماره ها...</Text>
//     //   ) : error ? (
//     //     <Text>خطا در بارگذاری: {error.message}</Text>
//     //   ) : (
//     //     <>
//     //       <Autocomplete
//     //         data={filteredTickets}
//     //         value={query}
//     //         onChangeText={(text) => setQuery(text)}
//     //         flatListProps={{
//     //           keyExtractor: (item) => item.user.mobile, // Use a unique identifier for each ticket
//     //           renderItem,
//     //         }}
//     //       />
//     //       <TouchableOpacity onPress={refetch}>
//     //         <Text >تازه سازی</Text>
//     //       </TouchableOpacity>
//     //     </>
//     //   )}
//     // </View>



//     <SafeAreaView style={Styles.container}>
//     {/* {isLoading? <ActivityIndicator  size="large" color={'red'} /> */}

//     {isLoading ? <ComponentLoading isFetching={isLoading}/> // Use LoadingDots here
//         : <>
//             {/* <View style={Styles.searchSection}>
//                 <TouchableOpacity  >
//                     <AntDesign style={Styles.searchIcon} name="arrowleft" size={25} color="#B828B9" />
//                 </TouchableOpacity>
          
              

                


//             </View> */}
//             <Autocomplete
//            containerStyle={{borderWidth:0}}
//            listContainerStyle={{}}
//             data={filteredTickets}
//             value={query}
//             onChangeText={(text) => setQuery(text)}
//             flatListProps={{
//               keyExtractor: (item) => item.user.mobile, // Use a unique identifier for each ticket
//               renderItem,
//             }}
//           />
//         </>
//     }
// </SafeAreaView>


//   );
// };
// const Styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff'
//     },
//     pakegmahsa: {
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         width: '90%',
//         alignSelf: 'center',
//         flexDirection: 'row-reverse',
//         marginVertical: '3%',
//         shadowColor: '#2196F3',
//         shadowOffset: {
//             width: 0,
//             height: 3,
//         },
//         shadowOpacity: 0.27,
//         shadowRadius: 4.65,
//         elevation: 10,
//     },
//     txtpakegs: {
//         color: 'black',
//         fontSize: RFValue(19),
//         fontWeight: 'bold',
//         marginVertical: '5%',
//         alignSelf: 'center'
//     },
//     parentdatestaetend: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         marginLeft: "2%",
//         width: '95%',
//     },
//     textdate: {
//         color: '#000',
//         fontSize: RFValue(10),
//         marginVertical: '2%',
//         alignSelf: 'center'
//     },
//     submitpakege: {
//         width: '95%',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 8,
//         backgroundColor: "#FFD119",
//         marginVertical: '2%'
//     },
//     searchSection: {
//         width: "100%",
//         paddingHorizontal: "2%",
//         height: (Dimensions.get('window').height / 100) * 7,
//         alignSelf: "center",
//         flexDirection: 'row-reverse',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         top: "2%",
//         borderRadius: 5,
//     },
//     searchIcon: {
//         padding: 10,
//     },
//     txt: {
//         color: '#000',
//         marginVertical: '5%',
//     },
//     inputs: {
//         flex: 1,
//         paddingTop: 10,
//         paddingRight: 10,
//         paddingBottom: 10,
//         paddingLeft: 0,
//         backgroundColor: '#FFD119',
//         color: '#000',
//         textAlign: "center",
//         borderRadius: 5,
//     },
//     loader: {
//         marginVertical: 20,
//     },
// });




// export   {Search}
////////////////////////////////////////////////////////
import React, { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Autocomplete from 'react-native-autocomplete-input';
import { useQuery } from '@tanstack/react-query';
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Dimensions, TextInput,FlatList,BackHandler} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { RFValue } from "react-native-responsive-fontsize";
import { JDate } from '../components/JDate';
import { ComponentLoading } from "../components/ComponentLoading";

const Search = (props) => {
  const [query, setQuery] = useState('');
  const { getItem } = useAsyncStorage('auth');
  const { type, status } = props.route.params;
  const navigation = useNavigation();






  useEffect(() => {
    
const backAction = () => {
  navigation.navigate('ticketlist', { status:status , type: type })

    return true;
}


const backHandler = BackHandler.addEventListener(
  'hardwareBackPress',
   backAction,
);

return () => backHandler.remove();

}, []);

















  const fetchTickets = async () => {
    let auth = await getItem();
    const response = await fetch('https://mahsaonlin.com/admin/coach/tickets/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth}`
      },
      body: JSON.stringify({
        page: '1',
        type: type,
        status: status,
        mobile: ' '
      })
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Network response was not ok: ${errorMessage}`);
    }

    const res = await response.json();
    return res.data.ticket;
  };

  const {  error, data, refetch,isFetching, isError} = useQuery({
    queryKey: ['tickets1'],
    queryFn: fetchTickets,
  });

  const filteredTickets = data?.filter((ticket) =>
    ticket.user.mobile.toLowerCase().includes(query.toLowerCase())
  ) || [];
console.log("filteredTickets===>",filteredTickets)
  const RenderItem  = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ticket', { id: item.id, type: type })} style={Styles.pakegmahsa}  key={item.id} >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FontAwesome name="user-circle-o"  size={45} color="#EDEEF2" />
      </View>
      <View style={{ flex: 4 }}>
        <View style={Styles.parentdatestaetend}>
          <Text style={[Styles.txt, { fontSize: RFValue(12) }]}>{item.user.mobile}</Text>
          <Text style={[Styles.txt, { fontSize: RFValue(14) }]}>{item.user.name} {item.user.lastname}</Text>
        </View>
        <View style={Styles.parentdatestaetend}>
          <Text style={Styles.textdate}></Text>
          <Text style={[Styles.textdate, { color: "#000" }]}>تاریخ آخرین پیام: {JDate(item.date_update)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );




  if (isFetching) return <ComponentLoading isFetching={isFetching}/> ;
          if ( isError) return <Text>Error fetching data</Text>;
      






  return (
    <SafeAreaView style={Styles.container}>
      {isFetching? (
        <ComponentLoading isFetching={isFetching} />
      ) : (
        <>
          <View style={Styles.searchSection}>
          <TouchableOpacity    onPress={()=>{navigation.navigate('ticketlist', { status:status , type: type })}} style={Styles.backButton}>
              <AntDesign name="arrowleft"  size={25} color="#F2BA08" />
            </TouchableOpacity>
     
            <TextInput
              style={Styles.input}
              placeholder="جستجو براساس شماره موبایل....."
              value={query}
          keyboardType='number-pad'
              onChangeText={(text) => setQuery(text)}
            />
                   <AntDesign  name="search1" size={25} color="#B828B9" style={Styles.searchIcon} />
          </View>
          {/* <Autocomplete
            containerStyle={Styles.autocompleteContainer}
            inputContainerStyle={Styles.inputContainer}
            listStyle={Styles.listContainer}
            data={filteredTickets}
            value={query}
            onChangeText={(text) => setQuery(text)}
            flatListProps={{
              keyExtractor: (item) => item.user.mobile,
              renderItem,
            }}
          /> */}

<FlatList
                            data={filteredTickets?.map((item, index) => ({ ...item, uniqueId: `${item.id}-${index}` })) }
                            keyExtractor={(item) => item.uniqueId}
                              renderItem={({ item }) => <RenderItem item={item} />}
                        
                          />
         
        </>
      )}
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchIcon: {
    paddingRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    fontSize: 16,
  },
  backButton: {
    paddingLeft: 10,
  },
  autocompleteContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  inputContainer: {
    borderWidth: 0,
  },
  listContainer: {
    borderWidth: 0,
  },
  pakegmahsa: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row-reverse',
    marginVertical: '3%',
    shadowColor: '#2196F3',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
  },
  parentdatestaetend: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: "2%",
    width: '95%',
  },
  textdate: {
    color: '#000',
    fontSize: RFValue(10),
    marginVertical: '2%',
    alignSelf: 'center',
  },
  txt: {
    color: '#000',
    marginVertical: '5%',
  },
  refreshButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#FFD119',
    borderRadius: 25,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  refreshButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export { Search };


