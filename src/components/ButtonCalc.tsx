import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    text:String,
    color?:String,
    zeroButton?:boolean,
    onPress:(numeroTexto:String)=>void;
}
export const ButtonCalc = ({text,color = '#2D2D2D', zeroButton=false,onPress}: Props) => {
  return (
    <TouchableOpacity onPress={()=>onPress(text)}>
        <View>
            <View 
            style={{
                ...styles.button, 
                backgroundColor:color.toString(),
                width:(zeroButton? 180: 80),
            }}
            >
                <Text style={{
                    ...styles.textButton,
                    textAlign:(zeroButton)?'left':'center',
                    left:(zeroButton)?20:0,
                    color:(color==='#9B9B9B'?'black':'white')}}>
                    {text}
                </Text>
            </View>
    </View>
    </TouchableOpacity>
  )
}
