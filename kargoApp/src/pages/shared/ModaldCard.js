import React from 'react'
import {View,Text, TouchableHighlight, Alert, Button} from 'react-native';


export default class ModalCard extends React.Component{
    render(){
        return(
            <View style={{
                paddingHorizontal:32,
                alignSelf:"center",
                marginTop:290,
                backgroundColor:"#FFF",
                height:386,
                elevation:1,
                width:270,
                borderRadius:15
            }}>
                <View style={{
                    flexDirection:"row",
                    paddingTop:20,
                    alignItems:"center"
                }}>
                    <Text style={{
                        fontFamily:"RobotoBold",
                        color:"#4b3ca7",
                        fontSize:20
                    }}>
                        {global.ddata.veri[global.justdModal].startShortLocation}
                    </Text>

                    <Text style={{
                        fontSize:20,
                        color:"#a2a2db",
                        paddingHorizontal:12
                    }}>
                        - - - - - - - - - - -
                    </Text>
                    <Text style={{
                        fontFamily:"RobotoBold",
                        color:"#4b3ca7",
                        fontSize:20
                    }}>
                        {global.ddata.veri[global.justdModal].shortLocation}
                    </Text>
                </View>
               

               <View style={{
                   flexDirection:"row",
                   marginTop:-5,
                   alignItems:"center"
               }}>
                   <Text style={{
                       fontFamily:"RobotoRegular",
                       color:"#a2a2db",
                       fontSize:11
                   }}>
                       {global.ddata.veri[global.justdModal].productStartLocation}
                   </Text>
                   <Text style={{
                       fontFamily:"RobotoRegular",
                       color:"#a2a2db",
                       paddingLeft:108,
                       fontSize:12
                   }}>
                       {global.ddata.veri[global.justdModal].productLocation}
                   </Text>
               </View>

               <View style={{
                   flexDirection:"row",
                   marginTop:10,
                   alignItems:"center"
               }}>
                   <Text style={{
                       fontFamily:"RobotoRegular",
                       fontSize:16,
                       color:"#522289"
                   }}>
                       Kalan Adres:
                   </Text>
                   <Text style={{
                       fontFamily:"RobotoRegular",
                       color:"#522289",
                       paddingLeft:70,
                       fontSize:16
                   }}>
                       {global.justdModal}-Adres
                   </Text>

               </View>
               <Text style={{
                   fontFamily:"RobotoRegular",
                   color:"#a2a2db",
                   fontSize:12
               }}>
                   
               </Text>


               <View style={{
                   flexDirection:"row",
                   marginTop:15,
                   alignItems:"center"
               }}>
                   <Text style={{
                       fontFamily:"RobotoRegular",
                       color:"#a2a2db",
                       fontSize:12
                   }}>
                       Name
                   </Text>
                   <Text style={{
                       fontFamily:"RobotoRegular",
                       color:"#a2a2db",
                       fontSize:12,
                       paddingLeft:120
                   }}>
                       ??r??nKod
                   </Text>
               </View>

               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
               }}>
                   <Text 
                     style={{
                       fontFamily:"RobotoRegular",
                        color:"#522289",
                        fontSize:16}}>
                       Test
                   </Text>

                   <Text 
                     style={{
                       fontFamily:"RobotoRegular",
                        color:"#522289",
                        paddingLeft:116,
                        fontSize:16}}>
                       {global.ddata.veri[global.justdModal].productCode}
                   </Text>
               </View>

               <Text style={{
                   fontSize:17,
                   marginTop:-5,marginVertical:16,
                   color:"#a2a2db"
               }}>
                - - - - - - - - -  - - - -  - - - - - - -  -  
               </Text>
               <View style={{
                   flexDirection:"row",
                   marginTop:-20,
                   alignItems:"center"
               }}>
                   <Text style={{
                       fontFamily:"RobotoRegular",
                       color:"#a2a2db",
                       fontSize:12
                   }}>
                       ??r??n
                   </Text>
                   <Text style={{
                       fontFamily:"RobotoRegular",
                       color:"#a2a2db",
                       fontSize:12,
                       paddingLeft:144
                   }}>
                       Fiyat
                   </Text>
               </View>

               <View style={{
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <Text style={{
                       fontSize:16,
                       fontFamily:"RobotoRegular",
                       color:"#522289"
                   }}>
                       {global.ddata.veri[global.justdModal].productName}
                   </Text>
                   <Text style={{
                       fontSize:16,
                       fontFamily:"RobotoBold",
                       color:"#4b3ca7",
                       paddingLeft:72,
                   }}>
                      {"     "} {global.ddata.veri[global.justdModal].productPrice}???
                   </Text>
               </View>

               <TouchableHighlight
                underlayColor="#6600bb"
                style={{
                    width:200,
                    marginLeft:5,
                    elevation:2,
                    marginTop:25,
                    backgroundColor:"#44FEA1",
                    paddingVertical:13,
                    borderRadius:25,
                    alignSelf:"center"
                }}
                onPress={this.props.onPress}
               >
                   <Text style={{
                       fontFamily:"RobotoBold",
                       color:"#FFF",
                       textAlign:"center",
                       fontSize:18
                   }}>
                       Kapat
                   </Text>
               </TouchableHighlight>

               <Text style={{
                   color:"#a2a2db",
                   alignSelf:"center",
                   paddingLeft:32,
                   fontSize:12,
                   marginVertical:16,
                   fontFamily:"RobotoRegular"
               }}>
                   Kargocu taraf??ndan bir a????klama yaz??lmad??.
               </Text>
            </View>
        )
    }
}