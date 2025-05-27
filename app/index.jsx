"use client"
import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native"
import { Link } from 'expo-router';
export default function Index() {
  const [data,setData] = useState();
  useEffect(()=>{
    const getData = async ()=>{
      const request = await fetch(`https://restcountries.com/v3.1/all`)
      const formatted = await request.json()
      console.log("pobrane")
      setData(formatted)
    }
    getData()
  },[])
  return(
    <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center",width:"100%"}}>
      <Text>test</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item?.ccn3}
        numColumns={4}
        contentContainerStyle={{gap:20,}}
        columnWrapperStyle={{gap:20,flex:1,justifyContent:"center"}}
      />      
    </View>
  );
}

function Item({item}){
  const kod = item.cca2
  return (
      <Link href={{
        pathname:`/country/${kod}`,
      }}>
        <Image
          style={{width:80,height:50,backgroundColor:'gray'}}
          source={{uri:item?.flags?.png}}       
        />
      </Link>
  )
}