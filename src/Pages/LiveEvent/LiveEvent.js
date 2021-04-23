import Race from "/Users/caseymccullough/Desktop/SEIR_Erica/mercury-marathon/mercury-marathon-react/src/Components/Race/Race.js";
import { useState, useEffect } from "react";


import dbData from "../../sample-runners1.json";

export default function LiveEvent() {

  const [runnerData, setRunnerData] = useState([]);

  const getRunnerData = async () => {
    try {
        // const res = await fetch(
        //   `https://cors-anywhere.herokuapp.com/https://my.api.mockaroo.com/results/123?key=d6efe6b0`
        // );
        //const data = dbData.json(); //await res.json();
        setRunnerData(dbData);
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
            <Race cohortData = {runnerData}></Race>
            



        </div>
    )
}