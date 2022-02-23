import { View, Text,StyleSheet, Image,ScrollView } from 'react-native'
import React from 'react'
import Menu from "./images/menu.png";
import Flipkart from "./images/flipkart.png";
import One from "./images/one.png";
import Two from "./images/two.png";
import Three from "./images/three.png";
import Search from "./images/search.png";
import Onee from "./images/1.png";
import Twoo from "./images/2.png";
import Threee from "./images/3.png";
import Fourr from "./images/4.png";
import Fivee from "./images/5.png";
import Sixx from "./images/6.png";
import Baner1 from "./images/baner1.png";
import Sec1 from "./images/sec1.png";
import Sec2 from "./images/sec2.png";
import Sec3 from "./images/sec3.png";
import Prodsec1 from "./images/prodsec1.png";
import Prodsec2 from "./images/prodsec2.png";
import Prodsec3 from "./images/prodsec3.png";
import Rahul from "./images/rahul.png";


import { Searchbar } from 'react-native-paper';

export default function header() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
  return (
      <ScrollView>
    <View style={{backgroundColor:'white'}}>
      <View style={styles.topbarparent}>
          <View style={styles.topbar}>
                <View style={styles.leftbartop}>
                <Image source={Menu} style={styles.menulogo}/>
                <Image source={Flipkart} style={styles.brandlogo}/>
                </View>
                <View style={styles.rightbartop}>
                    <Image source={One} style={styles.baglogo}/>
                    <Image source={Two} style={styles.cartlogo}/>
                    <Image source={Three} style={styles.userlogo}/>
                </View>
            </View>
            <View style={styles.topbar}>
            <Searchbar
                icon ={Search}
                placeholder="Search For Products and More"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.searchbar}
                />
            </View>
        
        </View>
    
       
        <ScrollView horizontal={true} style={styles.shoponmallcontent} >
              
              <View style={styles.shopitemview}>
              <Image source={Onee} style={styles.shoplogo}/>
              </View>
           
              <View style={styles.shopitemview}>
              <Image source={Twoo} style={styles.shoplogo}/>
              </View>

              <View style={styles.shopitemview}>
              <Image source={Threee} style={styles.shoplogo}/>
              </View>

              <View style={styles.shopitemview}>
              <Image source={Fourr} style={styles.shoplogo}/>
              </View>

              <View style={styles.shopitemview}>
              <Image source={Fivee} style={styles.shoplogo}/>
              </View>

              <View style={styles.shopitemview}>
              <Image source={Sixx} style={styles.shoplogo}/>
              </View>
        </ScrollView>

        <View>
          <Image source={Baner1} style={styles.baner1}/>
        </View>

        <View style={{flexDirection:'row', width:"100%", marginBottom:5}}>
            <Image source={Sec1} style={styles.section}/>
            <Image source={Sec2} style={styles.section}/>
            <Image source={Sec3} style={styles.section}/>
        </View>

        <View style={{width:'100%'}}>
            <Image source={Rahul} style={{width:"100%", height:170, padding:10, marginBottom:5}}/>  
        </View>
        

        <View style={{flexDirection:'row', width:"100%"}}>
            <Image source={Prodsec1} style={styles.prodsection}/>
            <Image source={Prodsec2} style={styles.prodsection}/>
            <Image source={Prodsec3} style={styles.prodsection}/>
        </View>
          
        

    </View>
        </ScrollView>
    
  )
}
const styles = StyleSheet.create({
    topbar:{
        backgroundColor:"#2874f0", 
        flexDirection:"row",
        padding:13,
        height:'auto',
        justifyContent: "space-between"
    },
    topbarparent:{
        backgroundColor:"#2874f0", 
    },
    searchbar:{
        width:"100%",
        height:45,

    },
    leftbartop:{
        flexDirection:"row",
    },
    menulogo: {
        height: 22,
        width: 22,
    },
    brandlogo:{
        height:30,
        width:70,
        marginLeft: 25,
    },
    rightbartop:{
        flexDirection:"row",        
    },
    baglogo:{
        height: 20,
        width: 20, 
        marginRight: 21,
        marginTop:5
    },
    cartlogo:{
        height: 20,
        width: 20, 
        marginRight: 21,
        marginTop:5
    },
    userlogo:{
        height: 20,
        width: 20, 
        marginRight: 13,
        marginTop:5
    },
    recommsection:{
        margin: 25,
        backgroundColor:'black'
    },
    shopitemview:{
        width: 80, 
        alignItems:'center'
    },
    shoplogo: {
        height: 70,
        width: 70,
    },
    shoponmallcontent:{
        marginTop: 10,
        marginLeft:12
    },
    baner1:{
        width:"100%",
        height:100,
        marginTop:10
    },
    section:{
        width:"33.33%",
        height:180,
    },
    prodsection:{
        width:"32.33%",
        height:150,
        alignItems:'center',
        alignSelf:'center',
        flex:1
    },
    procss:{
        height:"50%",
        width:"50%",
        alignSelf:'center'
    }
   
  });