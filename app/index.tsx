import { useState } from "react";
import { Pressable, Text, View } from "react-native"
export default function Index() {
  const [chosen,setChosen] = useState<number>()
  const [pressed,setPressed] = useState<boolean>(false)
    const question = {
      question:"How much is 2+2?",
      answers:[
        {content:"4", valid:true},
        {content:"1", valid:false},
        {content:"5", valid:false},
        {content:"2", valid:false}
      ]
    }

    const handleClick = ()=>{
      pressed===false?setPressed(true):setPressed(false)
    }

  return (
    <View style={{display:'flex',flexDirection:'column',height:"100%",gap:20}}>
      <View style={{display:'flex', flexDirection:'row',alignItems:"center",justifyContent:"space-between"}}>
        <Text style={{fontSize:24,textAlign:"center", width:"100%"}}>{question.question}</Text>
      </View>
      <View style={{paddingHorizontal:20, display:"flex",flexDirection:"column",gap:8}}>

        {question.answers.map((item, idx) => (
          <Pressable style={pressed==true&&chosen==idx?item.valid?{borderColor:'green',borderWidth:2,borderRadius:6, padding:8}:{borderColor:'red',borderWidth:2,borderRadius:6, padding:8}:{borderColor:'gray',borderWidth:2,borderRadius:6, padding:8}} key={idx} onPress={()=>{setChosen(idx)}}>
            <Text>{item.content}</Text>
          </Pressable>
        ))}
        </View>
        <Pressable onPress={()=>{handleClick()}} style={{backgroundColor:'#F207D8'}}><Text style={{fontSize:24,textAlign:"center", width:"100%"}}>{pressed==false?"Check":"Hide"}</Text></Pressable>
    </View>
  );
}