


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


///////////////////////////////222222222222222222222222222222222222222222222222222222/////////////////////////////////////////////////////

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
import { usefetchuser } from '../../components/usefetchuser';
import { JDate } from '../../components/JDate';


const backImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEzlrR7F82RZ11PzM0C7caAt7NjNG_zy51zW3caIBdJtNfBm3zBDWHHjVFvT92AsMQLw&usqp=CAU';

const TicketList = (props) => {
    const navigation = useNavigation();
    const { type, status } = props.route.params;
    const [mobilenumber, setmobilenumber] = useState("");
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [messages, setMessages] = useState('');
    const { request } = usefetchuser('tickets/list');

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

    useEffect(() => {
        if (page === 1) {
            setData([]);
        }
        FetchData(page);
    }, [page]);

    const FetchData = async (page) => {
        if (isLoading) return;
        setIsLoading(true);
        try {
            const response = await request({
                type: type,
                status: status,
                mobile: mobilenumber,
                page: page,
            });

            const newData = await response.data.ticket;

      // // مرتب‌سازی داده‌ها بر اساس تاریخ آخرین پیام
      // newData.sort((a, b) => new Date(b.date_update) - new Date(a.date_update));
            setData(prevData => {
                const uniqueData = [...new Map([...prevData, ...newData].map(item => [item.id, item])).values()];
                return uniqueData;
            });

            setHasMore(newData.length > 0);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const loadMore = () => {
        if (!isLoading && hasMore) {
            setPage(prevPage => prevPage + 1);
        }
    }

    const renderFooter = () => {
        if (!isLoading) return null;
        return <ActivityIndicator color={"#f00"} style={Styles.loader} />;
    }

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
                        setPage(1);  // Reset to the first page when mobile number changes
                    }}
                    selectionColor={'red'}
                />
            </View>
            <Text style={{ fontSize: RFValue(20), color: 'red', alignSelf: 'center' }}>{messages}</Text>
            {data.length === 0 && !isLoading ? (
                <ActivityIndicator size={50} style={{ flex: 1 }} />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    renderItem={({ item, index }) => <MyListItem item={item} index={index} />}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={renderFooter}
                />
            )}
        </SafeAreaView>
    );
}

export { TicketList }


const Styles=StyleSheet.create({
  container:{
      flex:1,
     // alignItems:'center',
    //  justifyContent:'center',
      backgroundColor:'#5221BD'
  },

  parents:{
    width: '80%',
    
    backgroundColor:' #F5F5F5',
  
    alignSelf:'center',
    height:(Dimensions.get('window').height /100 )*25,
    marginVertical:'2%',
    borderRadius:10
},

titlearticle:{
    color:'black',
    fontSize:RFValue(14),
    alignSelf:'flex-end',
    marginHorizontal:'5%',
    marginVertical:'4%'
},

header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:(Dimensions.get('window').height /100 )*7,
    backgroundColor:'white'
},
logo:{
    width:50,
    height:50
},
Viewalert:{
    width: '100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    backgroundColor: '#5220BD',
    borderRadius:5,
    marginVertical:'2%',

},
textalert:{
    color:'white',
    fontSize:RFValue(12),
    width:'95%',
    marginVertical:'1%'
},
mainparentalert:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'95%',
    alignSelf:'center',
},
parentoptions:{
    width: '100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:'3%'
},
options:{
    borderRadius:10,
    borderColor:'#5220BD',
    borderWidth:2,
    width:'45%',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    height:(Dimensions.get('window').height /100 )*12,
    backgroundColor:'white'
},
pakegmahsa:{
  //  backgroundColor:'#5220BD',
  backgroundColor:'#f5f5f5',
    borderRadius:10,
    width:'95%',
    alignSelf: 'center',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:'3%',
    shadowColor:"#f0f",
    shadowOffset:{
        width:0,
        height:10,
    },
    shadowOpacity:.3,
    shadowRadius:20,
},
txtpakegs:{
    color:'bleck',fontSize:RFValue(19),fontWeight:'bold',marginVertical:'5%',alignSelf:'center'
},
parentdatestaetend:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'95%',
},
textdate:{
    color:'#000',fontSize:RFValue(12),marginVertical:'2%',alignSelf:'center'
},
submitpakege:{
    width:'95%',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
  
   backgroundColor:"#FFD119",
   
  
    marginVertical:'2%'
}
,texsubmitpakege:{
    color:'black',fontSize:RFValue(14),marginVertical:'2%',alignSelf:'center'

},
needs:{
    width:'95%',
    backgroundColor:'white',
    alignSelf:'center'
},
parentneeds:{
    width: '100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:'5%'
},
neddoption:{
    borderRadius:10,
    width:'45%',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
},
newArticle:{
width:'95%',
backgroundColor:'white',
alignSelf:'center',
marginVertical:"3%"
},
imagenewArticle:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-around',
width:'100%',
marginVertical:'3%'
},

maintex:{
width:'90%',
alignSelf:'center',
marginVertical:'10%'

},
childArticle:{
borderColor:'#5220BD',
borderWidth:2,
borderRadius:10,
width:'95%',
alignSelf:'center',
marginVertical:'4%'

},
containu:{
color:'#5220BD',
fontSize:RFValue(14),
alignSelf:'flex-end',
marginHorizontal:'5%',
marginVertical:'4%'
},


input:{
    backgroundColor:'#100530',
    fontSize: RFValue(17),
    color:'#fff',
    padding:15,
    marginVertical:"2%",
    //borderRadius:5,
    width:"80%",
    //height:Dimensions.get("window").width>576?"20%":"8%",
    height:"90%",
    textAlign:"center",
    // ...Platform.select({ web: {
    //   cursor: 'pointer',
    // }}),
    //opacity: (state) ? 0 : 1
    
    },
    searchSection: {
          width:"90%",
         // flex:1,
         alignSelf:"center",
          flexDirection: 'row-reverse',
          justifyContent: 'center',
          alignItems: 'center',
        //  backgroundColor:'#100530',
        //  backgroundColor:'#f5f5f5',
        backgroundColor:'#FFD119',
        
      
        top:"2%",
         borderRadius:5,

        
         
      },
      searchIcon: {
            padding: 10,
         },
         
inputs: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  //  backgroundColor:'#100530',
   // backgroundColor:'#f5f5f5',
 
   backgroundColor:'#FFD119',
   color:'#000',
    textAlign:"center",
   // borderBottomLeftRadius:5,
    borderRadius:5,
},    

loader: {
  marginVertical: 20,
},

})

