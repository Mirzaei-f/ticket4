import React, {useContext, useEffect, useRef, useState} from "react";
import {Text, View, TouchableOpacity, StyleSheet, Image, Dimensions, BackHandler,Animated,Easing} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {RFValue} from "react-native-responsive-fontsize";
import { Context } from "../../components/Context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { List } from 'react-native-paper';

const Drawerpage = () => {

    const {auth, setauth} = useContext(Context)
    const navigation=useNavigation()
   const [isActive, setIsActive] = useState(false);

   const [isActive1, setIsActive1] = useState(false);
   const [isActive2, setIsActive2] = useState(false);


const animationController=useRef(new Animated.Value(0)).current;

const animationController1=useRef(new Animated.Value(0)).current;
const animationController2=useRef(new Animated.Value(0)).current;

      // const arrayOfObjects1 = [
      //   {  id:"1",  title: 'تیکت های تغذیه',   subtitle1: 'پیام های جدید',   subtitle2:'پیام های خوانده شده'},
      //   {   id:"2",  title: 'تیکت های آنالیز',   subtitle1: 'پیام های جدید', subtitle2:'پیام های خوانده شده' },
      //   {  id:"3",  title: 'تیکت های مربی',  subtitle1: 'پیام های جدید', subtitle2:'پیام های خوانده شده' },
      // ];








    // const [expanded, setExpanded] = React.useState(false);
    // const [expanded1, setExpanded1] = React.useState(false);
    // const [expanded2, setExpanded2] = React.useState(false);

    //  const handlePress = () => setExpanded(!expanded);
    // const handlePress1 = () => setExpanded1(!expanded1);
    // const handlePress2= () => setExpanded2(!expanded2);


    const toggleListItem=()=>{
      const config={
        duration:300,
        toValue:isActive? 0 : 1,
        useNativeDriver:true
      };
      Animated.timing(animationController,config).start();
      setIsActive(!isActive)
    }

    const toggleListItem1=()=>{
      const config={
        duration:300,
        toValue:isActive1? 0 : 1,
        useNativeDriver:true
      };
      Animated.timing(animationController1,config).start();
      setIsActive1(!isActive1)
    }


    const toggleListItem2=()=>{
      const config={
        duration:300,
        toValue:isActive2? 0 : 1,
        useNativeDriver:true
      };
      Animated.timing(animationController2,config).start();
      setIsActive2(!isActive2)
    }



 const    arrowTransform=animationController.interpolate(
  {
    inputRange:[0, 1],
    outputRange:["0deg", "180deg"]
  })

  const    arrowTransform1=animationController1.interpolate(
    {
      inputRange:[0, 1],
      outputRange:["0deg", "180deg"]
    })
  

    const    arrowTransform2=animationController2.interpolate(
      {
        inputRange:[0, 1],
        outputRange:["0deg", "180deg"]
      })
    

/////////////////////////////
//const [expandedItems, setExpandedItems] = useState([]);


// const animatedValues= arrayOfObjects1.map(() => new Animated.Value(0));

//   const toggleItem = (index) => {
//     if (expandedItems.includes(index)) {
//       // Item is currently expanded, so collapse it
//       setExpandedItems(expandedItems.filter((item) => item !== index));

//     } else {
//       // Item is currently collapsed, so expand it
//       setExpandedItems([...expandedItems, index]);

//     }

// // // Toggle the rotation animation
// // const toValue = expandedItems.includes(index) ? 0 : 1;
// // Animated.timing(animatedValues[index], {
// //   toValue,
// //   duration: 300, // Animation duration in milliseconds
// //   easing: Easing.ease,
// //   useNativeDriver: false, // Set to true if possible, for better performance
// // }).start();

//   };





    return (
        <View style={styles.container}>

{/* 
{arrayOfObjects1.map(
        ({ title, subtitle1,subtitle2,id }) => 
        <View key={id}>

          
           <TouchableOpacity  onPress={() => toggleItem(id)} style={styles.touchable}>
             <Text style={styles.touchText}>{title} </Text>


             <Icon
                name={expandedItems.includes(id) ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} // Icon names may vary depending on your library
                size={20}
              /> 
          </TouchableOpacity>
  
          {expandedItems.includes(id)    && <View  style={{justifyContent:"space-between",backgroundColor:"#fff",padding:20,borderRadius:25}}>

<Text   style={styles.fontSize1}>{subtitle1}</Text>
<Text  onPress={()=>{navigation.navigate("ticketlist")}}
style={styles.fontSize}>{subtitle2}

</Text>

</View>}
        </View>
      )} */}








             {/* { isActive?<Icon name="keyboard-arrow-up" size={24} color="#000"/>:<Icon name="keyboard-arrow-down" size={24} color="#000"/>}  */}
          {/* <Animated.View  style={{transform:[{rotateZ:arrowTransform}]}}>
         <Icon name="keyboard-arrow-down" size={24} color="#000"/>
         </Animated.View>  */}
            
{/* 
            <Animated.View  
            //style={{transform:[{rotateZ:arrowTransform}]}}
            

            // style={{
            //   transform: [
            //     {
            //       rotate:animatedValues[id].interpolate({
            //         inputRange: [0, 1],
            //         outputRange: ['0deg', '180deg'],
            //       }),
            //     },
            //   ],
            // }}



            
            > 
            <Icon
                name={expandedItems.includes(id) ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} // Icon names may vary depending on your library
                size={20}
              />
          </Animated.View> */}

        
        {/* <Text>`Coffee type ${title} in a ${subtitle1} size.` </Text> */}


        
        
        
      



 
    <TouchableOpacity 
       onPress={toggleListItem}
    style={styles.touchable}>
        <Text style={styles.touchText}>تیکت های تغذیه</Text>
       {/* { expanded?<Icon name="keyboard-arrow-up" size={24} color="#000"/>:<Icon name="keyboard-arrow-down" size={24} color="#000"/>} */}
   
       <Animated.View  style={{transform:[{rotateZ:arrowTransform}]}}>
         <Icon name="keyboard-arrow-down" size={24} color="#000"/>
         </Animated.View>
   
    </TouchableOpacity>


{isActive?

<View  style={{justifyContent:"space-between",backgroundColor:"#fff",padding:20,marginBottom:5}}>
   
        <Text   
          onPress={()=>{navigation.navigate("ticketlist",{type:"diet",status:""})}}
       // onpress={ navigation.navigate('guest',{screen:'login'})}
        style={styles.fontSize1}>پیام های جدید</Text>
        <Text 
          onPress={()=>{navigation.navigate("ticketlist",{type:"diet",status:"checked"})}}
      //  onpress={ navigation.navigate('guest',{screen:'login'})}
        style={styles.fontSize}>پیام های خوانده شده</Text>
    
</View>
:
null


}
            


<TouchableOpacity 
       onPress={toggleListItem1}
    style={styles.touchable}>
        <Text style={styles.touchText}>تیکت های آنالیز </Text>
       {/* { expanded1?<Icon name="keyboard-arrow-up" size={24} color="#000"/>:<Icon name="keyboard-arrow-down" size={24} color="#000"/>} */}
    
       <Animated.View  style={{transform:[{rotateZ:arrowTransform1}]}}>
         <Icon name="keyboard-arrow-down" size={24} color="#000"/>
         </Animated.View>
    </TouchableOpacity>


{isActive1?

<View  style={{justifyContent:"space-between",backgroundColor:"#fff",padding:20}}>
   
        <Text   
          onPress={()=>{navigation.navigate("ticketlist",{type:"analyze",status:""})}}
      //  onpress={ navigation.navigate('guest',{screen:'login'})}
        style={styles.fontSize1}>پیام های جدید</Text>
        <Text 
        onPress={()=>{navigation.navigate("ticketlist",{type:"analyze",status:"checked"})}}
      //  onpress={ navigation.navigate('guest',{screen:'login'})}
        style={styles.fontSize}>پیام های خوانده شده</Text>
    
</View>
:
null


}





<TouchableOpacity 
       onPress={toggleListItem2}
    style={styles.touchable}>
        <Text  style={styles.touchText}>تیکت های مربی</Text>
       {/* { expanded2?<Icon name="keyboard-arrow-up" size={24} color="#000"/>:<Icon name="keyboard-arrow-down" size={24} color="#000"/>} */}
   
   
       <Animated.View  style={{transform:[{rotateZ:arrowTransform2}]}}>
         <Icon name="keyboard-arrow-down" size={24} color="#000"/>
         </Animated.View>
   
    </TouchableOpacity>


{isActive2?

<View  style={{justifyContent:"space-between",backgroundColor:"#fff",padding:20}}>
   
        <Text   

onPress={()=>{navigation.navigate("ticketlist",{type:"coach",status:""})}}
  //onPress={()=>{navigation.navigate("test")}}
 // onPress={()=>{navigation.navigate("uploadfiles")}}
        style={styles.fontSize1}>پیام های جدید</Text>
        <Text 
      onPress={()=>{navigation.navigate("ticketlist",{type:"coach",status:"checked"})}}
    ///  onPress={()=>{navigation.navigate("test",{type:"coach",status:"checked"})}}
        style={styles.fontSize}>پیام های خوانده شده</Text>
    
</View>
:
null


} 






{/*  

{accordionData.map(({item,index}) => (
          



        


      <View key={index}>    
<TouchableOpacity 

       onPress={() => setIsActive(!isActive)}
    style={styles.touchable}>

        <Text  style={styles.touchText}>{item.title}</Text>
       
    </TouchableOpacity>
    {isActive && <View  style={{justifyContent:"space-between",backgroundColor:"#fff",padding:20}}>
   
   <Text   
  // onpress={ navigation.navigate('guest',{screen:'login'})}
   style={styles.fontSize1}>پیام های جدید</Text>
   <Text 
 //  onpress={ navigation.navigate('guest',{screen:'login'})}
   style={styles.fontSize}>پیام های خوانده شده</Text>

</View>}
</View>
        ))}  */}


{/* <Text>`Coffee type ${ title} in a ${size} size.` </T */}
{/* 
{arrayOfObjects.map(
        ({  title, subtitle1,subtitle2,index}) => 
        <View key={index}>
        <TouchableOpacity 

onPress={() => setIsActive(!isActive)}
style={styles.touchable}>

 <Text  style={styles.touchText}>{title}</Text>

</TouchableOpacity>
{isActive && <View  style={{justifyContent:"space-between",backgroundColor:"#fff",padding:20}}>

<Text   
// onpress={ navigation.navigate('guest',{screen:'login'})}
style={styles.fontSize1}>{subtitle1}</Text>
<Text 
//  onpress={ navigation.navigate('guest',{screen:'login'})}
style={styles.fontSize}>{subtitle2}
</Text>

</View>}
        
        </View>
      

        
      )} */}


{/* {
arrayOfObjects.map(({title,id}) => {
<View key={id}>
    <Text>{`aaaaa ${title}`}</Text>
  
  </View>

})} */}

  






<TouchableOpacity style={styles.option} onPress={() => {

AsyncStorage.removeItem('auth').then(() => {

    setauth('')

    navigation.navigate('guest',{screen:'login'})

})

}}>
    <Text style={styles.texoption}>خروج از حساب</Text>
    <Icon name={'exit-to-app'} size={RFValue(24)} color={"#000"} style={{margin:'6%',alignSelf:'flex-end'}}/>
</TouchableOpacity>










        </View>
    )
}

export {Drawerpage}




const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F5F5'
    },
    head:{
        backgroundColor: '#5220BD',

    },
profile:{
color:'white',
fontSize:RFValue(18),
margin:'4%'


},
option:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
alignSelf:'flex-end'
}
,texoption:{
    fontSize:RFValue(15)
},
line: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: "#662d5c",
    alignSelf: 'center',
    height: 0,
},
touchText:{
 //fontWeight:"bold",
 fontSize:RFValue(15)
   // color:"#000"
},
touchable:{
    flexDirection:"row-reverse",
    justifyContent:"space-between",
    paddingHorizontal:20,
    
    paddingVertical:20,
},
fontSize:{
    fontSize:RFValue(14)
},

fontSize1:{
    fontSize:RFValue(14),
    marginBottom:25
},
})


// const AppRoot = () => {
//   const [breakfastExpanded, setBreakfastExpanded] = useState(false);
//   const [showAccordion, setShowAccordion] = useState([]);

//   const toggleAccordion = (id) => {
//     if (showAccordion.includes(id)) {
//       let UpdateIds = [...showAccordion]
//       UpdateIds = UpdateIds.filter((ID) => ID != id)
//       setShowAccordion(UpdateIds)
//     } else {
//       let UpdateIds = [...showAccordion]
//       UpdateIds.push(id)
//       setShowAccordion(UpdateIds)
//     }
//   };


//   return (<CategoryList
//     data={categoryList}
//     renderItem={({ item }) => {
//       return (
//         <>
//           <TouchableOpacity
//             onPress={() => navigation.navigate("groepen", { subcategories: item.id })
//             }>
//             <Spacer position="top" size="large" >
//               <CategoryInfoCard category={item} />
//             </Spacer>
//           </TouchableOpacity>
//           <View >
//             <ButtonDetail onPress={() => toggleAccordion(item.id)}>
//               <AntDesign name="twitter" size={24} color="green" />
//             </ButtonDetail>
//           </View>
//           {
//             showAccordion.includes(item.id) && (
//               <List.Accordion
//                 title="Description"
//                 left={(props) => <List.Icon {...props} icon="bird" />}
//                 expanded={breakfastExpanded}
//                 onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
//                 <List.Item title={item.description} />
//               </List.Accordion>
//             )}

//         </>
//       );
//     }}
//     keyExtractor={(item) => item.id}
//   />)


// };