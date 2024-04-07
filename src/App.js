import React, {useState} from 'react';
import './App.css';

function App() {
  const [miles, setMiles] = useState(null);
  const [gas, setGas] = useState(3.29);
  let oilChange = 74000

  let tmiles = miles - 74000
  let tigGas = 3.93
  let totalNow = (tmiles / 35) * gas
  let totalOld = (tmiles / 22) * tigGas
  let saved = (totalOld - totalNow).toFixed(2)
  if(saved < 0){ saved = 0.00 }
  while (oilChange <= miles) {
    oilChange += 10000;
  }

  return (
    <div className="App">
      <h1>Lets See How Much You've Saved so far!</h1>
      <input
                    type="Integer"
                    value={miles}
                    onChange={(e) => setMiles(e.target.value)}
                    placeholder="Miles"
                    className="rounded-xl mt-5 shadow-xl shadow-slate-800 h-fit w-full  border-2 border-slate-700 p-1   justify-center items-center flex bg-gray-100  lg:text-3xl  text-xl"
                ></input>
                   
                     <div>total is = ${saved}</div>
                     next oil change is at {oilChange}
                  
    </div>
  );
}

export default App;
