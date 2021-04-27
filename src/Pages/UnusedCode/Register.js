// const [goalTime, setGoalTime] = useState({
//   hours: "00",
//   minutes: "00",
//   seconds: "00",
// });

// id: "",

// cohort: "",
// real_time: "",
// goal_time: "",

//
// (async () => {
//   try {
//     const res = await fetch(
//       "https://mercury-marathon-api.herokuapp.com/runner/"
//     );
//     const data = await res.json();
//     console.log(data);
//     setNewRunner([...runners, data]);
//   } catch (error) {
//     console.error(error);
//   }
// })();

// cohort: "",
// real_time: "",
// goal_time: "",


// const handleGoalTimeChange = (e) => {
//   // debugger;
//   let value = e.target.value;
//   if (parseInt(value) < 10) {
//     value = "0" + value;
//   }
//   let time;
//   if (e.target.name === "hours") {
//     time = `${value}:${goalTime.minutes}:${goalTime.seconds}`;
//   } else if (e.target.name === "minutes") {
//     time = `${goalTime.hours}:${value}:${goalTime.seconds}`;
//   } else if (e.target.value === "seconds") {
//     time = `${goalTime.hours}:${goalTime.minutes}:${value}`;
//   }
//   setGoalTime({ ...goalTime, [e.target.name]: value });
//   setNewRunner({ ...newRunner, goal_time: time });
// };

// const formatTime = (timeUnit) => {
//   //  "goal_time": "00:04:30",
//   if (timeUnit === "hours") {
//   }
// }

{/* COHORT SELECT */ }
/* <div className="container">
          <label htmlFor="cohort">Cohort:</label>
          <div className="select">
            <select required id="cohort" name="cohort" onChange={handleChange}>
              <option value="">--Select cohort--</option>
              <optgroup label="Male">
                <option value="M18-39">Male 18-39</option>
                <option value="M40-49">Male 40-49</option>
                <option value="M50-59">Male 50-59</option>
                <option value="M60-69">Male 60-69</option>
                <option value="M70+">Male 70+</option>
              </optgroup>
              <optgroup label="Female">
                <option value="F18-39">Female 18-39</option>
                <option value="F40-49">Female 40-49</option>
                <option value="F50-59">Female 50-59</option>
                <option value="F60-69">Female 60-69</option>
                <option value="F70+">Female 70+</option>
              </optgroup>
              <optgroup label="Wheelchair">
                <option value="Mwheelchair">Male</option>
                <option value="Mwheelchair">Female</option>
              </optgroup>
            </select>
          </div>
        </div> */}

{/* <hr></hr> */ }

{/* GOAL TIME NUM INPUT */ }
{/* <div className="container time">
          <span>Goal Time: </span>

          <div className="wrapper">
            <label htmlFor="hours">Hours:</label>
            <input
              // id="hours"
              type="number"
              placeholder="00"
              min="0"
              max="99"
              step="1"
              name="hours"
              // data-type="goal_time"
              value={goalTime.hours}
              onChange={handleGoalTimeChange}
            ></input>
          </div>

          <div className="wrapper">
            <label htmlFor="minutes">Minutes:</label>
            <input
              // id="minutes"
              type="number"
              placeholder="00"
              min="0"
              max="59"
              step="1"
              name="minutes"
              // data-type="goal_time"
              value={goalTime.minutes}
              onChange={handleGoalTimeChange}
            ></input>
          </div>

          <div className="wrapper">
            <label htmlFor="seconds">Seconds:</label>
            <input
              // id="seconds"
              type="number"
              placeholder="00"
              min="0"
              max="59"
              step="1"
              name="seconds"
              // data-type="goal_time"
              value={goalTime.seconds}
              onChange={handleGoalTimeChange}
            ></input>
          </div>
        </div> */}

{/* <button type="submit">Submit</button> */ }
