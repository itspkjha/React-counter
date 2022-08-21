import { useState } from "react";
import Output from "./Output";

const Buttons = ({label,variant,call}) => {

    const logic = ()=>{
        console.log('I am the Logic Fn');
        call();
    }
    const cssClass = `btn btn-${variant}`;
    return (
       <button onClick={logic} className={cssClass}>{label}</button>
    )
}
const CounterPage = ()=>{
    const [count,setCount]=useState(0);
    const Add=()=>{
        setCount(count+1);
        console.log('Plus call ', count);
    }
    const Minus=()=>{
        setCount(count-1);
    }
    return(
        <div>
            <h1>Counter App</h1>
            <Buttons call={Add} label='Plus' variant='primary' /> &nbsp;
            <Buttons call={Minus}label='Minus' variant='danger' />
            <Output result={count}/>
        </div>
    )

}
export default CounterPage;