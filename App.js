import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, Text,  View } from 'react-native';
import { ScrollView } from 'react-native-web';
import {NumericInput} from 'react-native-numeric-input';
import {RadioButton} from 'react-native-paper';
import { TextInput } from 'react-native';
import { Styles } from './styles/Styles';
import { useState } from 'react';

export default function App() {
 
  
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);
  
  const [radioval, setRadioval] = useState('male');
  const radios = [
    {val: 'male', label: 'male'},
    {val: 'female', label: 'female'},
    
  ]
  

  


  function calculateBAL(e) {
    e.preventDefault();
    const calcLitres = 0.33 * bottles;
    const calcGrams = calcLitres * 8 * 4.5;
    const calcBurning = weight / 10;
    const calfGramsleft = calcGrams - calcBurning * time;

    var male = document.getElementById("male");
    var female = document.getElementById("female");

    if (male.checked==true){
      setResult(calfGramsleft / (weight * 0.7));
    } else if(female.checked==true){
      setResult(calfGramsleft / (weight * 0.6));
    }

    if (weight==null){
      print("You have to enter your weight.")
    }

    
  }
  
  
  
  

  
  return (
    
    
    
    <ScrollView> 
      <Form onSubmit={calculateBAL}>
      
       <View style={Styles.container}>
      
         <Text style={Styles.title}>Alcometer</Text>
      
      
         <Text style={Styles.text}>Person's Weight</Text>
         <TextInput 
              style={Styles.textInput}
              keyboardType='numeric'
              mode='outlined'
              value={weight}
              onSubmit={e => setWeight(e.target.value)}
              maxLength={10}  
               >

              

          </TextInput>

         <Text style={Styles.text}>Bottles</Text>
          <View style={Styles.container} >
          <NumericInput onChange={e => setBottles(e.target.value)} value={bottles}/>
        </View>

        <Text style={Styles.text}>Hours</Text>
         <View style={Styles.container}>
          <NumericInput onChange={e => setTime(e.target.value)} value={time}/>
        </View>
      
  

          <RadioButton.Group onValueChange={e => setRadioval(e.target.value)} value={radioval}>
            {radios.map(radio =>
           <View style={radioStyle} key={radio.val.male}>
              <RadioButton id={male} value={radio.val.male}/>
            <Text style={Styles.text}>{radio.label}</Text> 
           </View>
            )}

            {radios.map(radio =>
           <View style={radioStyle} key={radio.val.female}>
              <RadioButton id={female} value={radio.val.female}/>
            <Text style={Styles.text}>{radio.label}</Text> 
           </View>
           
            )}
          </RadioButton.Group> 

      
          <Text style={Styles.result}>{result.toFixed(2)}</Text>

          

      <TouchableOpacity onPress={calculateBAL}>
        <Text style={Styles.buttonText} mode='outlined'>Calculate</Text> 
        
      </TouchableOpacity> 

      
           
       
      
      
      <StatusBar style="auto"/>
     </View>
    </Form>
    </ScrollView>
  );
}

