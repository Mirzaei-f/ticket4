


// import React, {useState,useEffect, useContext} from 'react';
// import {
//     SafeAreaView,
//     Text,
//     StyleSheet,
//     View,
//     TouchableOpacity,
//     Dimensions,
//     TextInput,
//     Button,
//     ScrollView,
//     Image,BackHandler, Alert, FlatList, moment, unix, Animated, PermissionsAndroid

// } from 'react-native';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Icon2 from "react-native-vector-icons/FontAwesome";

// import Icon from "react-native-vector-icons/MaterialIcons";
// import {RFValue} from "react-native-responsive-fontsize";
// import { useFocusEffect, useNavigation } from "@react-navigation/native";
// import { Header } from '../../components/Header';
// import { Context } from '../../components/Context';
// import { usefetchuser } from '../../components/usefetchuser';
// import { ActivityIndicator } from 'react-native-paper';
// import { JDate ,JTime} from '../../components/JDate';

// //const backImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAPn39erRR9L6idkDhDTCCf0Ck1OjE-cbZJnK1FA1TU_PNdmpaohVDGVFnnkKTVLIaP8&usqp=CAU'
// const backImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEzlrR7F82RZ11PzM0C7caAt7NjNG_zy51zW3caIBdJtNfBm3zBDWHHjVFvT92AsMQLw&usqp=CAU'
// const TicketList = (props) => {
//   const navigation=useNavigation()

//   const {type,status} = props.route.params;
// console.log("type=>",type)
// console.log("status=>",status)
//   const [mobilenumber,setmobilenumber]=useState("");

//   //const [data,setdata]=useState([])
//   const [total,settotal]=useState(0)
//   const {request} = usefetchuser('tickets/list')
//  // const [page, setPage] = useState(1);
//   const [pages, setPages] = useState(1);
//   const [messages,setmessages]=useState('')



// ////////////////////////////////
// useEffect(() => {
//   const backAction =() => {

//          // navigation.navigate('ticket',{})
//       navigation.navigate("paneluser")
//       return true;
//   };

//   const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       backAction,
//   );

//   return () => backHandler.remove();
// }, []);

// ////////////////////////infinit start/////////////////////



// const [data,setData]=useState([]);
// const [page,setPage]=useState(1);
// const [isLoading,setIsloading]=useState(false);
// const [hasMore,setHasMore]=useState(true);


// useEffect(()=>{
//   FetchData(page)
// },[page])

// const FetchData=async(page)=>{
// if (isLoading) return;
// setIsloading(true)
// try {
//   // const response= await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
//   const response= await request(
//     {
//     type:type,
//     status:status,
//     mobile:mobilenumber,
//     page:page,
//     })
//   //  console.log("response ===>",response)
// //const newData=await response.json();
// const newData=await response.data.ticket

// //console.log("newData ===>",newData)
// console.log("response.data.ticket ===>",response.data.ticket)

// //setData(newData)
// setData(prevData => [...prevData, ...newData]);

// //console.log("newData.lenght ===>",newData.lenght>0)

// setHasMore(newData.length > 0);
// } catch (error) {
//   console.error(error)
// }finally{
//   setIsloading(false)
// }


// }


// const  loadMore=()=>{
  
//   if (!isLoading && hasMore) {
//            setPage(prevPage => prevPage + 1);
           
          
//          }
// }
// const renderFooter=()=>{
//   if (!isLoading) return null;
//       return <ActivityIndicator color={"#f00"}  style={Styles.loader}/>;
// }


// console.log("page ===>",page)
// // console.log("Data ===>",data)
// console.log("hasMore ===>",hasMore)










// /////////////////////////////infinit end///////////////////////////////////////////////////






// const MyListItem = React.memo(({ item, index}) => {


  
//   // Render your list item here
//   let Tickets = (<TouchableOpacity     onPress={()=>{navigation.navigate("ticket",{id:item.id,type:type})}}       style={Styles.pakegmahsa}  key={`${item.id}-${index}`} >
        
//     <View style={Styles.parentdatestaetend}>
//     <Text style={{color:'#000',fontSize:RFValue(13),marginVertical:'5%',}}>{item.user.mobile}</Text>
    
//     <Text style={{color:'#000',fontSize:RFValue(13),marginVertical:'5%',}}>{item.user.name}  {item.user.lastname}</Text>
  
//     </View>
     
    
//       <View style={Styles.parentdatestaetend}>
 
    
//     <Text style={Styles.textdate} ></Text> 
//       <Text style={Styles.textdate}>تاریخ آخرین پیام: {JDate(item.date_update)}</Text>
//     </View>
  
//       </TouchableOpacity>
//     )
//     return (
 
//     Tickets
//     );
// });









// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  
//   return(
//   <SafeAreaView style={Styles.container}>


//   <View style={Styles.searchSection}>
//       <Icon2  style={Styles.searchIcon} name="search" size={25} color="#000" />
//     <TextInput 
//    //  style={[styles.input, {opacity: (inputtext) ? 0 : 1}]}
//     // style={styles.input}
//     style={Styles.inputs}
//     placeholder='جستجو بر اساس شماره موبایل'
//     value={mobilenumber}
//     onChangeText={(text)=>setmobilenumber(text)}
//    //onFocus={()=>setAPI()}
//    onFocus={()=>setPage("1")}
//     selectionColor={'red'}
    
//     >
    
//     </TextInput>

 

//     </View>


//   <Text style={{fontSize:RFValue(20),color:'red',alignSelf:'center'}}>{messages}</Text>

// {
// data==[] ? <ActivityIndicator size={50} style={{
// flex: 1,
// }}/> : 

// <>


// <FlatList
//   data={data}
//   // keyExtractor={(item)=> item.id.toString()}
//   // renderItem={({ item }) => <MyListItem  item={item} index={item.id}  />}
//   keyExtractor={(item, index) => `${item.id}-${index}`}  // Combine id and index for uniqueness
//   renderItem={({ item, index }) => <MyListItem item={item} index={index} key={`${item.id}-${index}`} />}
// onEndReached={loadMore}
// onEndReachedThreshold={0.5}
// ListFooterComponent={renderFooter}
//   />


// </>

// }




// </SafeAreaView >

// )


// }


// export { TicketList}


///////////////////////////////infinit list/////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import {
//     SafeAreaView,
//     Text,
//     View,
//     TouchableOpacity,
//     TextInput,
//     BackHandler,
//     StyleSheet,
//     Dimensions,
//     FlatList,
//     ActivityIndicator,
// } from 'react-native';
// import Icon2 from "react-native-vector-icons/FontAwesome";
// import { RFValue } from "react-native-responsive-fontsize";
// import { useNavigation } from "@react-navigation/native";
// import { usefetchuser } from '../../components/usefetchuser';
// import { JDate } from '../../components/JDate';


// const backImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEzlrR7F82RZ11PzM0C7caAt7NjNG_zy51zW3caIBdJtNfBm3zBDWHHjVFvT92AsMQLw&usqp=CAU';

// const TicketList = (props) => {
//     const navigation = useNavigation();
//     const { type, status } = props.route.params;
//     const [mobilenumber, setmobilenumber] = useState("");
//     const [data, setData] = useState([]);
//     const [page, setPage] = useState(1);
//     const [isLoading, setIsLoading] = useState(false);
//     const [hasMore, setHasMore] = useState(true);
//     const [messages, setMessages] = useState('');
//     const { request } = usefetchuser('tickets/list');

//     useEffect(() => {
//         const backAction = () => {
//             navigation.navigate("paneluser");
//             return true;
//         };

//         const backHandler = BackHandler.addEventListener(
//             'hardwareBackPress',
//             backAction,
//         );

//         return () => backHandler.remove();
//     }, []);

//     useEffect(() => {
//         console.log("mobilenumber====>",mobilenumber)
//         if (page === 1) {
//             setData([]);
//         }
//         FetchData(page);
//     }, [page]);

//     const FetchData = async (page) => {
//         console.log("mobilenumber",mobilenumber)
//         if (isLoading) return;
//         setIsLoading(true);
//         try {
//             const response = await request({
//                 type: type,
//                 status: status,
//                mobile: mobilenumber,
                
//                 page: page,
//             });

//             const newData = await response.data.ticket;

//       // // مرتب‌سازی داده‌ها بر اساس تاریخ آخرین پیام
//       // newData.sort((a, b) => new Date(b.date_update) - new Date(a.date_update));
//             setData(prevData => {
//                 const uniqueData = [...new Map([...prevData, ...newData].map(item => [item.id, item])).values()];
//                 return uniqueData;
//             });

//             setHasMore(newData.length > 0);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setIsLoading(false);
//         }
//     }

//     const loadMore = () => {
//         if (!isLoading && hasMore) {
//             setPage(prevPage => prevPage + 1);
//         }
//     }

//     const renderFooter = () => {
//         if (!isLoading) return null;
//         return <ActivityIndicator color={"#f00"} style={Styles.loader} />;
//     }

//     const MyListItem = React.memo(({ item, index }) => {
//         return (
//             <TouchableOpacity onPress={() => { navigation.navigate("ticket", { id: item.id, type: type }) }} style={Styles.pakegmahsa} key={`${item.id}-${index}`}>
//                 <View style={Styles.parentdatestaetend}>
//                     <Text style={{ color: '#000', fontSize: RFValue(13), marginVertical: '5%' }}>{item.user.mobile}</Text>
//                     <Text style={{ color: '#000', fontSize: RFValue(13), marginVertical: '5%' }}>{item.user.name} {item.user.lastname}</Text>
//                 </View>
//                 <View style={Styles.parentdatestaetend}>
//                     <Text style={Styles.textdate}></Text>
//                     <Text style={Styles.textdate}>تاریخ آخرین پیام: {JDate(item.date_update)}</Text>
//                 </View>
//             </TouchableOpacity>
//         );
//     });

//     return (
//         <SafeAreaView style={Styles.container}>
//             {/* <View style={Styles.searchSection}>
//                 <Icon2 style={Styles.searchIcon} name="search" size={25} color="#000" />
//                 <TextInput
//                     style={Styles.inputs}
//                     placeholder='جستجو بر اساس شماره موبایل'
//                     value={mobilenumber}
//                     onChangeText={(text) => {
//                         setmobilenumber(text);
//                         setPage(1);  // Reset to the first page when mobile number changes
//                     }}
//                     selectionColor={'red'}
//                 />
//             </View> */}
//             <Text style={{ fontSize: RFValue(20), color: 'red', alignSelf: 'center' }}>{messages}</Text>
//             {data.length === 0 && !isLoading ? (
//                 <ActivityIndicator size={50} style={{ flex: 1 }} />
//             ) : (
//                 <FlatList
//                     data={data}

//                     keyExtractor={(item, index) => `${item.id}-${index}`}
//                     renderItem={({ item, index }) => <MyListItem item={item} index={index} />}
//                     onEndReached={loadMore}
//                     onEndReachedThreshold={0.5}
//                     ListFooterComponent={renderFooter}
//                 />
//             )}
//         </SafeAreaView>
//     );
// }

// export { TicketList }


// const Styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#5221BD'
//     },
//     pakegmahsa: {
//         backgroundColor: '#f5f5f5',
//         borderRadius: 10,
//         width: '95%',
//         alignSelf: 'center',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginVertical: '3%',
//         shadowColor: "#f0f",
//         shadowOffset: {
//             width: 0,
//             height: 10,
//         },
//         shadowOpacity: .3,
//         shadowRadius: 20,
//     },
//     txtpakegs: {
//         color: 'black', fontSize: RFValue(19), fontWeight: 'bold', marginVertical: '5%', alignSelf: 'center'
//     },
//     parentdatestaetend: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         width: '95%',
//     },
//     textdate: {
//         color: '#000', fontSize: RFValue(12), marginVertical: '2%', alignSelf: 'center'
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
//         width: "90%",
//         alignSelf: "center",
//         flexDirection: 'row-reverse',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#FFD119',
//         top: "2%",
//         borderRadius: 5,
//     },
//     searchIcon: {
//         padding: 10,
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

/////////////////useInfiniteQuery//////////////////////useInfiniteQuery////////////////////////////////////////////////////////////




// import React, { useState,useContext } from 'react';
// import { SafeAreaView, Text, View, TouchableOpacity, TextInput, FlatList, ActivityIndicator,StyleSheet, Image,Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { RFValue } from "react-native-responsive-fontsize";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import { useInfiniteQuery } from '@tanstack/react-query';
// import { JDate } from '../../components/JDate';
// import {useAsyncStorage} from "@react-native-async-storage/async-storage";
// import { Context } from "./Context";
// import Group396 from "../../assets/images/Group396.png"
// const TicketList = ( props ) => {
//     const {getItem} = useAsyncStorage('auth')
//     const navigation = useNavigation();
//     const { type, status } = props.route.params;
//     const [mobilenumber, setmobilenumber] = useState('');


//     //const fetchTickets = async (pageParam) => {
//     const fetchTickets = async ({ pageParam = 1 })  => {


//         console.log("pageParam====>",pageParam)
//         let autch = await getItem();


//         const response = await fetch('https://mahsaonlin.com/admin/coach/tickets/list', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${autch}`
//             },
//             body: JSON.stringify({
//                 page: pageParam,
//                 type: type,
//                 status: status,
//                 mobile:mobilenumber
//             })
//         });

// const res=await response.json();

// //console.log("res.data.ticket", res.data.ticket)
//         return  res.data.ticket
//     };

//     const {
//         data,
//         fetchNextPage,
//         hasNextPage,
//         isFetchingNextPage,
//         isLoading,
//         isError,
//         isFetching,
//     } = useInfiniteQuery( {
 
//            queryKey: [ 'tickets'],
//            queryFn: fetchTickets,
//            getNextPageParam: (lastPage) => {
//         // بررسی کنید که آیا اطلاعاتی برای صفحه بعدی وجود دارد یا خیر
//         if (lastPage && lastPage.length > 0) {
//             return lastPage[lastPage.length - 1].id; // مثلاً اگر آخرین داده صفحه فعلی را برگرداند
//         } else {
//             return undefined; // در غیر این صورت، صفحه بعدی وجود ندارد
//         }
//     },

// });

//  console.log("hasNextPage======>", hasNextPage)
//  console.log("isFetchingNextPage=======>",isFetchingNextPage)
// // console.log("data=======>",data)
//     const handleLoadMore = () => {
//        // if (!isFetchingNextPage && hasNextPage) {
//         if ( hasNextPage) {
//             fetchNextPage();
//         }
//     };



// const RenderItem =(({ item , index}) => 
    
//     <TouchableOpacity onPress={() => navigation.navigate('ticket', { id: item.id, type: type })}        style={Styles.pakegmahsa}   key={`${item.id}-${index}`}  >
//                 <View style={{flex:1,
//                     alignItems:"center",justifyContent:"center"
//                     }} >
//                 <FontAwesome  name="user-circle-o" size={45} color="#EDEEF2" />
//                 </View>
//                 <View style={{flex:4}}>
//          <View style={Styles.parentdatestaetend}>
         
//         <Text style={[Styles.txt,{    fontSize: RFValue(12), }]}>{item.user.mobile}</Text>
//         <Text style={[Styles.txt,{    fontSize: RFValue(14) ,  }]}>{item.user.name} {item.user.lastname}</Text>

//         </View>
//         <View style={Styles.parentdatestaetend}>
//         <Text style={Styles.textdate}></Text>
//         <Text style={[Styles.textdate,{color:"#000",}]}>تاریخ آخرین پیام: {JDate(item.date_update)}</Text>
      
//         </View>
//         </View>
//     </TouchableOpacity>

// );
    

//     if (isLoading) return <ActivityIndicator size="large"  color={"pink"}/>;
//     if (isError) return <Text>Error fetching data</Text>;







    
//     return (
//         <SafeAreaView style={Styles.container}>
//     {isFetching  ? <ActivityIndicator size="large" color={'red'} />
// :<>
// <View style={Styles.searchSection}>
//     <TouchableOpacity >
//     <FontAwesome style={Styles.searchIcon} name="search" size={25} color="#B828B9" />
//     </TouchableOpacity>
             

             
//              <Image source={Group396} style={{width:"40%",height:"70%"}}/>
//             {/* <TextInput
//               style={Styles.inputs}
//                 placeholder='جستجو بر اساس شماره موبایل'
//                 value={mobilenumber}
//                 onChangeText={setmobilenumber}
//             />  */}
//              </View>

             

//              <FlatList

//             data={data.pages.flat()}
//               //  keyExtractor={(item) => item.id.toString()}
          
//                      keyExtractor={(item, index) => `${item.id}-${index}`}
//                 //renderItem={renderItem}
//                 renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
             
//                 onEndReached={handleLoadMore}
//                 onEndReachedThreshold={0.5}
//                 ListFooterComponent={isFetchingNextPage && <ActivityIndicator size={22} color={'pink'} />}
            
//             />
// </>    



// }
            
//         </SafeAreaView>
//     );
// };

// export { TicketList };


// const Styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff'
//         //backgroundColor: '#5221BD'
//     },
//     pakegmahsa: {
//         backgroundColor: '#fff',
//        // backgroundColor: '#f5f5f5',
//         borderRadius: 10,
//         width: '90%',
//         alignSelf: 'center',
//         flexDirection: 'row-reverse',
//         //alignItems: 'center',
//      //   justifyContent: 'flex-start',
//         marginVertical: '3%',
       
// shadowColor: '#2196F3',

// shadowOffset: {
// 	width: 0,
// 	height: 3,
// },
// shadowOpacity: 0.27,
// shadowRadius: 4.65,

// elevation: 10,

//     },
//     txtpakegs: {
//         color: 'black', 
//         fontSize: RFValue(19), 
//         fontWeight: 'bold',
//          marginVertical: '5%', 
//          alignSelf: 'center'
//     },
//     parentdatestaetend: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         marginLeft:"2%",
//         width: '95%',
//     },
//     textdate: {
//         color: '#000',
//          fontSize: RFValue(10),
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
//         paddingHorizontal:"2%",
//         height:(Dimensions.get('window').height /100 )*7,
//         alignSelf: "center",
//         flexDirection: 'row-reverse',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//       //  backgroundColor: '#FFD119',
//         top: "2%",
//         borderRadius: 5,
//     },
//     searchIcon: {
//         padding: 10,
//     },
//     txt:{
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

      /////////////////////useInfiniteQuery2////////////////////////////////useInfiniteQuery2////////////////////////////////

      import React, { useState } from 'react';
      import { SafeAreaView, Text, View, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet, Image, Dimensions } from 'react-native';
      import { useNavigation } from '@react-navigation/native';
      import { RFValue } from "react-native-responsive-fontsize";
      import FontAwesome from "react-native-vector-icons/FontAwesome";
      import { useInfiniteQuery } from '@tanstack/react-query';
      import { JDate } from '../../components/JDate';
      import { useAsyncStorage } from "@react-native-async-storage/async-storage";
      import Group396 from "../../assets/images/Group396.png";
import { alignSelf } from 'react-native-wind/dist/styles/flex/align-self';
      import {ComponentLoading} from "../../components/ComponentLoading"
      const TicketList = (props) => {
          const { getItem } = useAsyncStorage('auth');
          const navigation = useNavigation();
          const { type, status } = props.route.params;
          const [mobilenumber, setmobilenumber] = useState('');
      
          const fetchTickets = async ({ pageParam = 1 }) => {
              let auth = await getItem();
      
              const response = await fetch('https://mahsaonlin.com/admin/coach/tickets/list', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${auth}`
                  },
                  body: JSON.stringify({
                      page: pageParam,
                      type: type,
                      status: status,
                      mobile: mobilenumber
                  })
              });
      
              const res = await response.json();
              return res.data.ticket;
          };
      
          const {
              data,
              fetchNextPage,
              hasNextPage,
              isFetchingNextPage,
              isLoading,
              isError,
              isFetching,
          } = useInfiniteQuery({
              queryKey: ['tickets'],
              queryFn: fetchTickets,
              getNextPageParam: (lastPage) => {
                  if (lastPage && lastPage.length > 0) {
                      return lastPage[lastPage.length - 1].id;
                  } else {
                      return undefined;
                  }
              },
          });
      //console.log("isFetchingNextPage======>",isFetchingNextPage)
     // console.log("data======>",data?.pages.flat())
          const handleLoadMore = () => {
              if (hasNextPage) {
                  fetchNextPage();
              }
          };
      
          const RenderItem = React.memo(({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('ticket', { id: item.id, type: type })} style={Styles.pakegmahsa} key={item.id}>
                  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
                      <FontAwesome name="user-circle-o" size={45} color="#EDEEF2" />
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
          ));
      
          if (isLoading) return <ComponentLoading isFetching={isLoading}/> ;
          if (isError) return <Text>Error fetching data</Text>;
      
          const renderFooter = () => {
              if (!isFetchingNextPage) return null;
              return <ActivityIndicator color={"#ff0"} size={44} style={Styles.loader} />;
          };
         
          return (
              <SafeAreaView style={Styles.container}>
                  {/* {isFetching ? <ActivityIndicator  size="large" color={'red'} /> */}
             
                  {isFetching ? <ComponentLoading isFetching={isFetching}/> // Use LoadingDots here
                      : <>
                          <View style={Styles.searchSection}>
                              <TouchableOpacity onPress={()=>{navigation.navigate('search', { status:status , type: type })}}>
                                  <FontAwesome style={Styles.searchIcon} name="search" size={25} color="#B828B9" />
                              </TouchableOpacity>
                              <Image source={Group396} style={{ width: "40%", height: "70%" }} />
                              {/* <TextInput
                                  style={Styles.inputs}
                                  placeholder='جستجو بر اساس شماره موبایل'
                                  value={mobilenumber}
                                  onChangeText={setmobilenumber}
                              /> */}
                          </View>
                          <FlatList
                              data={data?.pages ? data.pages.flat().map((item, index) => ({ ...item, uniqueId: `${item.id}-${index}` })) : []}
                              keyExtractor={(item) => item.uniqueId}
                              renderItem={({ item }) => <RenderItem item={item} />}
                              onEndReached={handleLoadMore}
                              onEndReachedThreshold={0.5}
                              ListFooterComponent={renderFooter}
                          />
                      </>
                  }
              </SafeAreaView>
          );
      };
      
      export { TicketList };
      
      const Styles = StyleSheet.create({
          container: {
              flex: 1,
              backgroundColor: '#fff'
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
          txtpakegs: {
              color: 'black',
              fontSize: RFValue(19),
              fontWeight: 'bold',
              marginVertical: '5%',
              alignSelf: 'center'
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
              alignSelf: 'center'
          },
          submitpakege: {
              width: '95%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              backgroundColor: "#FFD119",
              marginVertical: '2%'
          },
          searchSection: {
              width: "100%",
              paddingHorizontal: "2%",
              height: (Dimensions.get('window').height / 100) * 7,
              alignSelf: "center",
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#fff',
              top: "2%",
              borderRadius: 5,
          },
          searchIcon: {
              padding: 10,
          },
          txt: {
              color: '#000',
              marginVertical: '5%',
          },
          inputs: {
              flex: 1,
              paddingTop: 10,
              paddingRight: 10,
              paddingBottom: 10,
              paddingLeft: 0,
              backgroundColor: '#FFD119',
              color: '#000',
              textAlign: "center",
              borderRadius: 5,
          },
          loader: {
              marginVertical: 20,
          },
      });
      


///////////////////Autocomplete///////////////////AutocompleteAutocomplete////////////////////////////////////////////



// import React, { useState } from 'react';
// import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
// import Autocomplete from 'react-native-autocomplete-input';
// import { useQuery } from '@tanstack/react-query';
// import { useAsyncStorage } from "@react-native-async-storage/async-storage";

// import { Context } from "./Context";


// const TicketList = (props) => {
//   const [query, setQuery] = useState('');

//   const { getItem } = useAsyncStorage('auth');
//   const { type, status } = props.route.params;

 

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
//     queryKey: ['tickets'],
//     queryFn: fetchTickets,
//     // Optional configuration for react-query
//     // staleTime: 0, // Time (ms) after which data is considered stale and refetched (default: 0)
//     // cacheTime: 5 * 60 * 1000, // Time (ms) to keep data in cache even if stale (default: 5 minutes)
//   });




//   const filteredTickets = data?.filter((ticket) =>
//     ticket.user.mobile.toLowerCase().includes(query.toLowerCase())
//   ) || [];

//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => setQuery(item.user.mobile)}>
//       <Text>{item.user.mobile}</Text>
//       <Text>{item.user.name}</Text>
//       <Text>{item.user.lname}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>جستجوی شماره تلفن</Text>
//       {isLoading ? (
//         <Text>در حال بارگذاری شماره ها...</Text>
//       ) : error ? (
//         <Text>خطا در بارگذاری: {error.message}</Text>
//       ) : (
//         <>
//           <Autocomplete
//             data={filteredTickets}
//             value={query}
//             onChangeText={(text) => setQuery(text)}
//             flatListProps={{
//               keyExtractor: (item) => item.user.mobile, // Use a unique identifier for each ticket
//               renderItem,
//             }}
//           />
//           <TouchableOpacity onPress={refetch}>
//             <Text style={styles.refreshButton}>تازه سازی</Text>
//           </TouchableOpacity>
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   refreshButton: {
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: '#ccc',
//   },
// });

// export { TicketList };
