
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './action';
function App() {
  const myState = useSelector((state)=>state.updateCount)
  const dispatch=useDispatch();
  return (
    <div >
     <h2>Redux Learning By Sonali</h2>
     <h3>Increament and decreamet</h3>
     <button onClick={()=>dispatch(decNumber)}>Decreament</button>
     <input type='text' value={myState}></input>
     <button onClick={()=>dispatch(incNumber)}>Increament</button>
     
    </div>
  );
}

export default App;
