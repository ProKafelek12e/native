"use client"
import { useGlobalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Page() {
  const params = useGlobalSearchParams()
  console.log(params)
  const[data,setData] = useState()
useEffect(()=>{

  const getData = async ()=>{
    const request = await fetch(`https://restcountries.com/v3.1/alpha/${params.data}`)
    const formatted = await request.json()
    console.log("pobrane")
    setData(formatted)
  }
  getData()
},[])

  return (
    <View>
        <Text>{data&& data[0]?.name.common}</Text>
        <Text>{data&& data[0]?.name.capital}</Text>
        <Text>{data&& data[0]?.name.population}</Text>
    </View>
  )
}
