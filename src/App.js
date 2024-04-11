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
    oilChange += 7500;
  }
const mazda6 = {
  oil: "0w20",
  Headlights: "9005",
  Lowbeams: "H11",
  Wipers: "24-driver/18-passenger",
  SparkPlugs:"NGK LKAR7AHX-S AA-# 92274",
  OilFilter: {Mobile1: "M1-108A", Fram: "FS6607", KN :"HP-1008",},
  FramAirFilter: "FSA11259",
  Lights: {BackUp: "7440", Trunk: "194", CourtesyLicense: "2825",}


}


  return (
    <div className="App">
      <h1 className="text-4xl font-semibold text-blue-900 mb-3 mt-5">Lets See How Much Randy Has Saved so far!</h1>
      <div className="flex items-center justify-center flex-col">

      <input
                    type="Integer"
                    value={miles}
                    onChange={(e) => setMiles(e.target.value)}
                    placeholder="Miles"
                    className="rounded-xl mt-5h-fit w-[80%] shadow-md shadow-blue-900 border-2 border-slate-700 p-1   justify-center items-center flex bg-gray-100  lg:text-3xl  text-xl"
                    ></input>
                   
                     <div className="mt-2 font-semibold text-2xl ">total is = ${saved}
                     </div>
                     <div>

                    Maintenance Info:
                  <div className="border-2 bg-slate-700 shadow-md shadow-blue-700 border-black p-2 flex font-semibold flex-row">
                    <div>

                    <div className="border-2 p-3 bg-gray-200 border-black h-5 mt-2 text-center items-center flex justify-center">Oil</div>
                    <div className="border-2 p-3 bg-gray-200  border-black h-5 mt-2 text-center items-center flex justify-center">Oil-Filters</div>
                    <div className="border-2 p-3 bg-gray-200 border-black h-5 mt-2 text-center items-center flex justify-center">Headlights</div>
                    <div className="border-2 p-3 bg-gray-200 border-black h-5 mt-2 text-center items-center flex justify-center">Low-beams</div>
                    <div className="border-2 p-3 bg-gray-200 border-black h-5 mt-2 text-center items-center flex justify-center">Spark Plugs</div>
                    <div className="border-2 p-3 bg-gray-200 border-black h-5 mt-2 text-center items-center flex justify-center">Wipers</div>
                    <div className="border-2 p-3 bg-gray-200 border-black h-5 mt-2 text-center items-center flex justify-center">Lights</div>
                    <div className="border-2 p-3 bg-gray-200 border-black h-5 mt-2 text-center items-center flex justify-center">Air-filter</div>
                    </div>
                    <div className="flex flex-col">

                    <div className=" ml-5 p-3 border-2 bg-gray-200 border-black h-5 mt-2 text-center items-center flex justify-center">{mazda6.oil}</div>
                    <div className=" ml-5 p-3 border-2 bg-gray-200 border-black h-5 mt-2 text-center items-center flex justify-center">Mobile1: {mazda6.OilFilter.Mobile1} <p className=" ml-5">Fram: {mazda6.OilFilter.Fram}</p> <p className=" ml-5">K&N: {mazda6.OilFilter.KN}</p></div>
                    <div className=" ml-5 p-3 border-2 bg-gray-200 border-black h-5 mt-2 text-center items-center flex justify-center">{mazda6.Headlights}</div>
                    <div className=" ml-5 p-3 border-2 bg-gray-200 border-black h-5 mt-2 text-center items-center flex justify-center">{mazda6.Lowbeams}</div>
                    <div className=" ml-5 p-3 border-2 bg-gray-200 border-black h-5 mt-2 text-center items-center flex justify-center">{mazda6.SparkPlugs}</div>
                    <div className=" ml-5 p-3 border-2 bg-gray-200 border-black h-5 mt-2 text-center items-center flex justify-center">{mazda6.Wipers}</div>
                    <div className=" ml-5 p-3 border-2 bg-gray-200  border-black h-5 mt-2 text-center items-center flex justify-center">Back up: {mazda6.Lights.BackUp} <p className="ml-5">Trunk: {mazda6.Lights.Trunk}</p><p className="ml-5">Courtesy/License: {mazda6.Lights.CourtesyLicense}</p></div>
                    <div className=" ml-5 p-3 border-2 bg-gray-200 border-black h-5 mt-2 text-center items-center flex justify-center">Fram: {mazda6.FramAirFilter}</div>
                    </div>
                     
                  </div>
                  </div>
                    </div>
                   <div className="font-semibold text-2xl" >
                     next oil change is at <p className="font-semibold text-3xl text-blue-900">{oilChange}</p>
                    </div>
    </div>
  );
}

export default App;
