


import React, {useState,useEffect, useContext} from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Button,
    ScrollView,
    Image,BackHandler, Alert, FlatList, moment, unix, Animated, PermissionsAndroid

} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon2 from "react-native-vector-icons/FontAwesome";

import Icon from "react-native-vector-icons/MaterialIcons";
import {RFValue} from "react-native-responsive-fontsize";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Header } from '../../components/Header';
import { Context } from '../../components/Context';
import { usefetchuser } from '../../components/usefetchuser';
import { ActivityIndicator } from 'react-native-paper';
import { JDate ,JTime} from '../../components/JDate';

//const backImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAPn39erRR9L6idkDhDTCCf0Ck1OjE-cbZJnK1FA1TU_PNdmpaohVDGVFnnkKTVLIaP8&usqp=CAU'
const backImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEzlrR7F82RZ11PzM0C7caAt7NjNG_zy51zW3caIBdJtNfBm3zBDWHHjVFvT92AsMQLw&usqp=CAU'
const TicketList = (props) => {
  const navigation=useNavigation()

  const {type,status} = props.route.params;
console.log("type=>",type)
console.log("status=>",status)
  const [mobilenumber,setmobilenumber]=useState("");

  const [data,setdata]=useState([])
  const [total,settotal]=useState(0)
  const {request} = usefetchuser('tickets/list')
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [messages,setmessages]=useState('')



////////////////////////////////
useEffect(() => {
  const backAction =() => {

         // navigation.navigate('ticket',{})
      navigation.navigate("paneluser")
      return true;
  };

  const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
  );

  return () => backHandler.remove();
}, []);

/////////////////////////////////////////////














  const setAPI=(page)=>{
    request(
{
type:type,
status:status,
mobile:mobilenumber,
page:page,
}


    ).then(res=>{

       // console.log('res--tickets ---tickets/list----->',res.data)
       // console.log('res--tickets ---tickets/list----->',res.data.ticket[0].id)
       console.log('res-lENGHT----->',res.data.ticket.length)
        if(res.error == true){
            alert(res.message)
        }
        else{
            if(res.data== []  || res.data == undefined || typeof res.data == 'undefined'){
                setmessages('errrorrrrrrrrrrrrrrrrrrrrrrrrrrrr')
            }else {

                settotal(res.data.total)
                console.log("tttttttttt",total)
                setdata(res.data.ticket)

            }
        }

    })
}





useFocusEffect(
  React.useCallback(()=>{
     setAPI(page)
     console.log("PAGeE",page)
  },[page])
)





  // Function to handle pagination button clicks
  const handleNextPage = () => {
    if (pages > page) {
        setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
        setPage(page - 1);
    }
  };





const MyListItem = React.memo(({ item,key}) => {
  
  // Render your list item here
  let Tickets = (<TouchableOpacity     onPress={()=>{navigation.navigate("ticket",{id:item.id,type:type})}}       style={Styles.pakegmahsa} key={key} >
        
    <View style={Styles.parentdatestaetend}>
    <Text style={{color:'#000',fontSize:RFValue(13),marginVertical:'5%',}}>{item.user.mobile}</Text>
    
    <Text style={{color:'#000',fontSize:RFValue(13),marginVertical:'5%',}}>{item.user.name}  {item.user.lastname}</Text>
  
    </View>
     
    
      <View style={Styles.parentdatestaetend}>
    
      {/* //<Text style={Styles.textdate} >{item.id}</Text> */}
    
    <Text style={Styles.textdate} ></Text> 
      <Text style={Styles.textdate}>تاریخ آخرین پیام: {JDate(item.date_update)}</Text>
    </View>
  
      </TouchableOpacity>
    )
    return (
 
    Tickets
    );
});





useEffect(
    React.useCallback(()=>{
        setPages(Math.ceil(total/50))
    })
  )
  



// //////////////////////////////////////////////////////////////////////////////////////
// const renderItem = ({item}) => {
//   const Tickets = (<TouchableOpacity style={Styles.pakegmahsa} >
        
//   <View style={Styles.parentdatestaetend}>
//   <Text style={{color:'#000',fontSize:RFValue(13),marginVertical:'5%',}}>{item.user.mobile}</Text>
  
//   <Text style={{color:'#000',fontSize:RFValue(13),marginVertical:'5%',}}>{item.user.name}  {item.user.lastname}</Text>

//   </View>
   
  
//     <View style={Styles.parentdatestaetend}>
  
//     {/* //<Text style={Styles.textdate} >{item.id}</Text> */}
  
//   <Text style={Styles.textdate} ></Text> 
//     <Text style={Styles.textdate}>تاریخ آخرین پیام: {JDate(item.date_update)}</Text>
//   </View>

//     </TouchableOpacity>
//   )
//   return (
//     Tickets
//   );
// };



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  
  return(
  <SafeAreaView style={Styles.container}>
{/* <Image

source={{uri:backImage}}
style={StyleSheet.absoluteFillObject}
blurRadius={40}

/> */}
  {/* <Header/> */}
{/* 
<Text>{Math.ceil(total/50)}</Text>
<Text>{`pages:${pages}`}</Text> */}

  <View style={Styles.searchSection}>
      <Icon2  style={Styles.searchIcon} name="search" size={25} color="#000" />
    <TextInput 
   //  style={[styles.input, {opacity: (inputtext) ? 0 : 1}]}
    // style={styles.input}
    style={Styles.inputs}
    placeholder='جستجو بر اساس شماره موبایل'
    value={mobilenumber}
    onChangeText={(text)=>setmobilenumber(text)}
   //onFocus={()=>setAPI()}
   onFocus={()=>setPage("1")}
    selectionColor={'red'}
    
    >
    
    </TextInput>
    {/* <View style={{top:"1%",backgroundColor:"yellow",alignItems:"center",justifyContent:"center"}}> */}
 

    </View>


  <Text style={{fontSize:RFValue(20),color:'red',alignSelf:'center'}}>{messages}</Text>

{
data==[] ? <ActivityIndicator size={50} style={{
flex: 1,
}}/> : 

<>
<FlatList
data={data}
//renderItem={renderItem}
renderItem={({ item }) => <MyListItem index={item.id} item={item} />}
keyExtractor={item => item.id}
//onEndReached={()=>setPage(page + 1)} // Load more data when reaching the end
//onEndReachedThreshold={0.1} // Adjust this threshold as needed
//estimatedItemSize={8}
//initialNumToRender={4} 

//maxToRenderPerBatch={20}



// showsVerticalScrollIndicator={false}
// ListFooterComponent={loader ? <MoreLoader /> : null}
// ItemSeparatorComponent={ListSeparator}




/>




</>

}


<View style={{ flexDirection: 'row', justifyContent: 'space-between',alignSelf:"center" }}>
{/* <Button title="Previous Page" onPress={handlePrevPage} disabled={page === 1} /> */}

<TouchableOpacity onPress={handlePrevPage} disabled={page === 1}   >
<Icon name="arrow-back-ios" size={24} color={page === 1?"#c3c3c3":"#fff"}/>
    
    </TouchableOpacity>



<Text style={{color:"#FFD119",fontWeight:"bold",fontSize:RFValue(18)}}>Page {page}</Text>



<TouchableOpacity onPress={handleNextPage} disabled={pages < page}   >
<Icon name="arrow-forward-ios" size={24}   color={pages < page?"#c3c3c3":"#fff"}/>
    
    </TouchableOpacity>


{/* 
<Button title="Next Page" onPress={handleNextPage} disabled={pages < page} /> */}
</View>


</SafeAreaView >

)


}


export { TicketList}




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



})




// /********************************************** */
// <FlatList
//     ref={(ref) => {this.searchListRef = ref}}
//     data={this.state.search_list}
//     renderItem={this.renderSearchItem}
//     keyExtractor={(item, index) => index}
//     onEndReached={(infos) => this.searchMore(infos)}
//     onEndReachedThreshold={0.8}
//     numColumns={2}
//     removeClippedSubviews
//     initialNumToRender={6}
//     updateCellsBatchingPeriod={100}
//     maxToRenderPerBatch={6}
//     windowSize={10}
//     onScroll={(e) => this.handleSearchScroll(e.nativeEvent.contentOffset.y)}
//     getItemLayout={(data, index) => (
//         {length: 316, offset: 316 * index, index}
//     )}
//     ListEmptyComponent={<View>...</View>}
//     ItemSeparatorComponent={() => <View style={{marginBottom: 10}}></View>}
//     ListFooterComponent={<View>...</View>}
//     ListHeaderComponent={<View>...</View>}
// />
// /********************************************** */
// {
//   data==[] ? <ActivityIndicator size={50} style={{
//   flex: 1,
//   }}/> : data.map((item,i)=>{
  
//     //  console.log("Item=>",item)
//   return(
  
//     <TouchableOpacity style={Styles.pakegmahsa} key={i}>
//   <View 
  
//   style={Styles.parentdatestaetend}
  
//   >
  
  
//   <Text style={{color:'#000',fontSize:RFValue(13),marginVertical:'5%',}}>{item.user.mobile}</Text>
  
//   <Text style={{color:'#000',fontSize:RFValue(13),marginVertical:'5%',}}>{item.user.name}  {item.user.lastname}</Text>
  
  
  
  
//   </View>
   
  
//     <View style={Styles.parentdatestaetend}>
  
//     {/* //<Text style={Styles.textdate} >{item.id}</Text> */}
  
//   <Text style={Styles.textdate} ></Text> 
//     <Text style={Styles.textdate}>تاریخ آخرین پیام: {JDate(item.date_update)}</Text>
//   </View>
    
  
    
//     </TouchableOpacity>
//   )
//   })
//   }
  