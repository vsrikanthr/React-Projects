import './Counter.css';
import { useState } from 'react';
import {PropTypes} from 'prop-types'
import CounterButton from './CounterButton';

export default function Counter() {
    const [count,setCount] = useState(0);

    function incrementCounterParentFunction(by) {
        setCount(count+ by)
    }
    function decrementCounterParentFunction(by) {
        setCount(count- by)
    }
    function resetToZero() {
        setCount(0)
    }

    return(<div>
        <span className = "count">{count}</span>
        <CounterButton by={1} incrementMethod={incrementCounterParentFunction} decrementMethod = {decrementCounterParentFunction}/>
        <CounterButton by={2} incrementMethod={incrementCounterParentFunction} decrementMethod = {decrementCounterParentFunction}/>
        <CounterButton by={3} incrementMethod={incrementCounterParentFunction} decrementMethod = {decrementCounterParentFunction}/>

        <div>
            <button className="reset" onClick={resetToZero}>Reset</button>
        </div>
    </div>)
}


