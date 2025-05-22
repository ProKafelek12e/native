import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {

  const [counter,setCounter] = useState(0)

  return (
    <View
      style={{
        flex: 1,
        display:'flex',
        justifyContent: "space-between",
        alignItems:"center"
      }}
    >
      <Text style={{fontSize:64}}>{counter}</Text>
      <View style={{display:"flex",justifyContent:'space-evenly',width:300,flexDirection:"row", marginBottom:30}}>
        <Button title="+" onPress={() => setCounter(counter + 1)} />
        <Button title="reset" disabled={counter<=5&&counter>=0?true:false} onPress={()=>{setCounter(0)}}></Button>
        <Button title="-" onPress={() => setCounter(counter - 1)} />
      </View>
    </View>
  );
}