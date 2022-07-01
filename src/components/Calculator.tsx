import React,{ useState } from "react";
import Button from "./Button"
import './Calculator.css'
import Display from "./Display"

export default function Calculator() {
    const [operationValues,setOperationValues] = useState(['0','0']);
    const [currentIndex,setCurrentIndex] = useState(0);
    const [cleanDisplay,setCleanDisplay] = useState(false);
    const [currentOperation,setCurrentOperation] = useState('');

    const setDigit = (value:string) => {
        if (value === '0' && operationValues[currentIndex] == '0') {
            return;
        }
        
        updateOperationValues(value);
    }

    const updateOperationValues = (newValue:string) => {
        const actualoperationValues = [...operationValues];
        if (operationValues[currentIndex] === '0' || cleanDisplay) {
            actualoperationValues[currentIndex] = '';
            setCleanDisplay(false);
        }
        actualoperationValues[currentIndex] = actualoperationValues[currentIndex] + newValue;
        setOperationValues(actualoperationValues);
    }

    const setOperation = (value:string) => {

        if (value == 'CE') {
            setOperationValues(['0','0']);
            setCurrentIndex(0);
            setCurrentOperation('');
            setCleanDisplay(false);
            return;
        }

        if (currentIndex == 1) {
            executeOperation();
            return;
        } 

        setCurrentOperation(value);
        setCurrentIndex(1);
        setCleanDisplay(true);
    }

    const executeOperation = () => {
        const firstValue = parseFloat(operationValues[0]);
        const secondValue = parseFloat(operationValues[1]);
        let resultOperation = 0;
        switch(currentOperation) {
            case '+':
                resultOperation = firstValue + secondValue;
                break;
            case '-':
                resultOperation = firstValue - secondValue;
                break;
            case '*':
                resultOperation = firstValue * secondValue;
                break;
            case '%':
                resultOperation = firstValue / secondValue;
                break;
        }
        
        setCurrentIndex(0);
        setOperationValues([resultOperation.toString(),'0']);
    }

    const setComma = (value:string) => {
        if(operationValues[currentIndex].includes(value)) {
            return;
        }
        updateOperationValues(value);
    }

    return (
        <div className="Calculator">
            <Display label={operationValues[currentIndex]}></Display>
            <Button label="CE" columnSize={3} onClick={setOperation}></Button>
            <Button label="%" onClick={setOperation} backgroundColor="#E67E22"></Button>
            <Button label="7" onClick={setDigit}></Button>
            <Button label="8" onClick={setDigit}></Button>
            <Button label="9" onClick={setDigit}></Button>
            <Button label="*" onClick={setOperation}  backgroundColor="#E67E22"></Button>
            <Button label="4" onClick={setDigit}></Button>
            <Button label="5" onClick={setDigit}></Button>
            <Button label="6" onClick={setDigit}></Button>
            <Button label="-" onClick={setOperation}  backgroundColor="#E67E22"></Button>
            <Button label="1" onClick={setDigit}></Button>
            <Button label="2" onClick={setDigit}></Button>
            <Button label="3" onClick={setDigit}></Button>
            <Button label="+" onClick={setOperation}  backgroundColor="#E67E22"></Button>
            <Button label="0" columnSize={2} onClick={setDigit}></Button>
            <Button label="." onClick={setComma}></Button>
            <Button label="=" onClick={setOperation}  backgroundColor="#E67E22"></Button>

        </div>
    )
}