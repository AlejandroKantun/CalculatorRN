import { useRef, useState } from "react";

enum Operators{
    add,diff,mult, div,NotAnOp
}

export const useCalculadora = (initialNumber:String) => {
    const [number,setNumber]=useState(initialNumber.toString());
    const [previousNumber, setPreviousNumber] = useState('0')
    const lastOperation = useRef<Operators>() //que solo acepta este tipos de datos


    const setZero =()=>{
        setNumber('0');
        setPreviousNumber('0');
    }
    
    const buildNumber = (textNumber:string)=>{
        //doublezero validation
        if(number==='0' && textNumber==='0'){
            return;
        }
        
        //double dot validation
        if(number.includes('.')  &&  (textNumber === '.')) {
            return;
        }
        
        if(number.startsWith('0') || number.startsWith('-0')){
                
            //first decimal
            if(textNumber ==='.'){
                setNumber(number+textNumber);
            }
            else if (textNumber ==='0' && textNumber.includes('0'))//build an large decimal number
            {
                setNumber(number+textNumber);
            }
            else if (textNumber !== '0' && number ===('0')){setNumber(textNumber)}
            else if (textNumber !== '0' && !number.includes('0')) //to replace the first zero
            {
                setNumber(textNumber)

            }
            else if (textNumber==='0' && !number.includes('0')){
                setNumber(number)
            }
            else if (textNumber!=='0' && number.startsWith('-0') && !number.includes('.')){
                setNumber('-'+textNumber)
            }
            else{
                setNumber(number+textNumber)
            }
        }else{
            setNumber( number + textNumber);
        }

    }

    const positiveNegative=()=>{
        if (number[0]==='-')
        { 
            //Alert.alert(number.substring(1,number.length))
            const positiveNumber=number.substring(1,number.length)
            setNumber(positiveNumber);
        }
        else{
            setNumber('-'+number)
        }
    }

    const btnDelete=()=>{
        if((number.startsWith('-') && number.length===2)||number.length===1){setNumber('0')}
        else{
            setNumber(number.substring(0,number.length-1))
        }
    }

    const moveNumToPrevious= ()=>{
        if(number.endsWith('.')){ 
            setPreviousNumber(number.slice(0,-1))
        }
        else{
            setPreviousNumber(number)
        }
        setNumber('0');

    }
    //funciones de operaciones
    const btnDiv=()=>{
        moveNumToPrevious();
        lastOperation.current=Operators.div;
    }
    const btnMult=()=>{
        moveNumToPrevious();
        lastOperation.current=Operators.mult;
    }
    const btnDiff=()=>{
        moveNumToPrevious();
        lastOperation.current=Operators.diff;
    }
    const btnAdd=()=>{
        moveNumToPrevious();
        lastOperation.current=Operators.add;
    }
    const  computeOperation =()=>{
        const num1=Number(previousNumber);
        const num2=Number(number);
        let result=0;

        switch (lastOperation.current) {
            case Operators.add:
                result= num1 + num2;
                setNumber(result.toString());
                lastOperation.current=Operators.NotAnOp;
                break;
            case Operators.diff:
                result= num1 - num2;
                setNumber(result.toString());
                lastOperation.current=Operators.NotAnOp;
                break;
            case Operators.mult:
                result= num1 * num2;
                setNumber(result.toString());
                lastOperation.current=Operators.NotAnOp;
                break;
            case Operators.div:
                if (num2 === 0){
                    setNumber('Error')
                }
                else{
                    result= num1 / num2;
                    setNumber(result.toString());
                }
                lastOperation.current=Operators.NotAnOp;
                break;
            default:
                break;
        }       
        setPreviousNumber('0');

    }



    return{
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
    }   
}