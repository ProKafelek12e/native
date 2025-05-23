import { useState } from "react";
import { Pressable, Text, View, TextInput } from "react-native";
import { Plus } from "lucide-react-native"
export default function Index() {
  const [todo,setTodo] = useState<{title:string}[]>([])
  const [input, setInput] = useState("")

  
  return (
    <View style={{display:'flex',flexDirection:'column',height:"100%",gap:20}}>
      <View style={{display:'flex', flexDirection:'row',alignItems:"center",justifyContent:"space-between"}}>
        <TextInput
          onChangeText={setInput}
          value={input}
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width:"70%"
          }}
          />
          <View style={{width:"20%",height:40}}>
        <Pressable onPress={()=>{setTodo([...todo,{title:input}]);setInput("")}} style={{backgroundColor:"skyblue"}}>
          <Text style={{display:"flex", flexDirection:"row"}}>Add</Text> <Plus color="red" size={23}/>
        </Pressable>
          </View>
      </View>
      <View style={{paddingHorizontal:20}}>

        {todo.map((item, idx) => (
          <Text key={idx}>{item.title}</Text>
        ))}
        </View>
    </View>
  );
}