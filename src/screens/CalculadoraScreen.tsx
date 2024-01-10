import { View, Text, StatusBar } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
            number,
            previousNumber,
            setZero,
            positiveNegative,
            btnDelete,
            btnDiv,
            buildNumber,
            btnMult,
            btnDiff,
            btnAdd,
            computeOperation,                                                
        } =useCalculadora('0')
  return (
    
    <View style={styles.calculadoraContainer}>
        {   
            //This condition only show previous number when is different from zero
            (previousNumber!=='0')&&(
                <Text style={styles.smallResult}> 
                            {previousNumber}
                </Text> 
            )
        }
        
        <Text 
            style={styles.maninResult}
            numberOfLines={1}
            adjustsFontSizeToFit={true}
        > 
            {number}
        </Text> 
        <View style={styles.buttonRow}>
                {/*Boton*/}
                <ButtonCalc text='C'color='#9B9B9B' onPress={()=>setZero()}/>
                <ButtonCalc text='+/-' color='#9B9B9B' onPress={()=>positiveNegative()}/>
                <ButtonCalc text='Del' color='#9B9B9B' onPress={()=>btnDelete()}/>
                <ButtonCalc text='/' color='#FF9427' onPress={()=>btnDiv()}/>

        </View>
        <View style={styles.buttonRow}>
                {/*Boton*/}
                <ButtonCalc text='7' onPress={()=>buildNumber('7')}/>
                <ButtonCalc text='8' onPress={()=>buildNumber('8')} />
                <ButtonCalc text='9' onPress={()=>buildNumber('9')}/>
                <ButtonCalc text='x' color='#FF9427' onPress={()=>btnMult()} />
        </View>
        <View style={styles.buttonRow}>
                {/*Boton*/}
                <ButtonCalc text='4' onPress={()=>buildNumber('4')}/>
                <ButtonCalc text='5' onPress={()=>buildNumber('5')}/>
                <ButtonCalc text='6' onPress={()=>buildNumber('6')}/>
                <ButtonCalc text='-' color='#FF9427' onPress={()=>btnDiff()}/>
        </View>
        <View style={styles.buttonRow}>
                {/*Boton*/}
                <ButtonCalc text='1' onPress={()=>buildNumber('1')}/>
                <ButtonCalc text='2' onPress={()=>buildNumber('2')}/>
                <ButtonCalc text='3' onPress={()=>buildNumber('3')}/>
                <ButtonCalc text='+' color='#FF9427' onPress={()=>btnAdd()}/>
        </View> 
        <View style={styles.buttonRow}>
                {/*Boton*/}
                <ButtonCalc text='0' zeroButton={true} onPress={()=>buildNumber('0')} />
                <ButtonCalc text='.' onPress={()=>buildNumber('.')}/>
                <ButtonCalc text='=' color='#FF9427' onPress={()=>computeOperation()}/>
        </View>
   
    </View>
  )
}
