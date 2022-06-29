
const button = (props) => {
    const incrementCounter = ()=>{
        props.setCounter(props.counter+1);
    }
    const decrementCounter = ()=>{
       if(props.counter)
       {
        props.setCounter(props.counter-1);
       }
       else{
        props.setCounter(0);
       }
    }
  return (
    <div className="text-center">
        <h2>Counter : {props.counter}</h2>
        <button className="btn mx-3 btn-primary" onClick={incrementCounter}>{props.incr}</button>
        <button className="btn btn-danger" onClick={decrementCounter}>{props.decr}</button>
    </div>
  )
}

export default button