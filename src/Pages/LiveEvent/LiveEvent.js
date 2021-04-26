import Race from "../../Components/Race/Race.js";
import { useState, useEffect } from "react";


import dbData from "../../sample-runners1.json";

export default function LiveEvent() {

  const [runnerData, setRunnerData] = useState([]);

  const getRunnerData = async () => {
    try {
           const res = await fetch(
           `https://mercury-marathon-api.herokuapp.com/race/3/`
         );
        const data = await res.json();

        console.log ("number of runners 2021: ", data.runners.length);
        setRunnerData(data.runners);
      } catch (err) {
        console.log(err);
      }
    };


    useEffect(() => {
		//console.log ("use useEffect");
        getRunnerData();
    }, []);

    return (
        <div className="App">
            <Race allRunners = {runnerData}></Race>


        </div>
    )
}