import { useState } from 'react';
import { Button, SafeAreaView, Switch, Text, View, ScrollView } from 'react-native';
import { Styles, SpecialStyles } from './styles/Styles';
import { RadioButton } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';

export default function App() {

  //Needed useStates
  const [on, setOn] = useState(false);
  const [weight,setWeight] = useState(0);
  const [bottles,setBottles] = useState(0);
  const [time,setTime] = useState(0);
  const [gender,setGender] = useState('');
  const [result,setResult] = useState(0);

  //Dark/Lightmode
  const darkmode = on ? SpecialStyles : Styles;

  //Function for calculating alcohol in blood
  function alcometer(e){
    e.preventDefault();
    let alcohol = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burn = weight / 10;
    let gramsLeft = grams - (burn * time);

    if (gender === "male"){
      alcohol = gramsLeft / (weight * 0.7)
    }
    if (gender === "female"){
      alcohol = gramsLeft / (weight * 0.6)
    }
    if (gramsLeft <= 0){
      alcohol = 0
    }
    setResult(alcohol);
  };

  //Function for radioButtons
  function RadioSelection({label, value}){
    return(
      <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
         <RadioButton value={value}/>
         <Text style={darkmode.text}>{label}</Text>
      </View>
    );
  }

  return (
      <SafeAreaView style={darkmode.container}>
        <Switch
          value={on}
          onValueChange={() => setOn(!on) }
          thumbColor={Styles.mySwitchButtonColor}
          trackColor={Styles.myTrackColors}
          style={{transform: [{scale: 1.2}], paddingLeft: 200}}
        />
        <Text style={[darkmode.text, {marginBottom:20}, {marginTop:20}, {fontSize:25}]}>Alcometer</Text>
        <Text style={darkmode.text}>Weight in kg</Text>
        <NumericInput
          inputStyle={darkmode.text}
          value={weight}
          onChange={w => setWeight(w)}
          rounded
          rightButtonBackgroundColor='#c6d6dc' 
          leftButtonBackgroundColor='#c6d6dc' 
        />
        <Text style={[darkmode.text,{marginTop:20}]}>Bottles 0.331</Text>
        <NumericInput
          inputStyle={darkmode.text}
          value={bottles}
          onChange={b => setBottles(b)}
          rounded
          rightButtonBackgroundColor='#c6d6dc' 
          leftButtonBackgroundColor='#c6d6dc' 
        />
        <Text style={[darkmode.text,{marginTop:20}]}>Time in hours</Text>
        <NumericInput
          inputStyle={darkmode.text}
          value={time}
          onChange={t => setTime(t)}
          rounded 
          rightButtonBackgroundColor='#c6d6dc' 
          leftButtonBackgroundColor='#c6d6dc' 
        />
        <Text style={[darkmode.text,{marginTop:20},{fontSize:20}]}>Gender</Text>
        <RadioButton.Group  
          onValueChange={g => setGender(g)}
          value={gender}
        >
          <RadioSelection label={'Male'}   value={'male'}   onChange={g => setGender(g)}/>
          <RadioSelection label={'Female'} value={'female'} onChange={g => setGender(g)}/>
        </RadioButton.Group>
        <Button
          title='Calculate'
          onPress={alcometer}
        />
        <Text style={[darkmode.text,{marginTop:30},{fontSize:20}]}>Alcohol left {result.toFixed(2)} grams</Text>
      </SafeAreaView>
  );
}