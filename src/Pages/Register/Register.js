import { useState, useEffect } from "react";
import "../Register/register.scss";

export default function Register() {
  const [goalTime, setGoalTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [runners, setRunners] = useState([]);
  const [newRunner, setNewRunner] = useState({
    // id: "",
    first_name: "",
    last_name: "",
    sex: "",
    email: "",
    dob: "",
    city: "",
    state: "",
    // cohort: "",
    // real_time: "",
    goal_time: "",
    wheelchair: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://mercury-marathon-api.herokuapp.com/runner/"
        );
        const data = await res.json();
        console.log(data);
        setRunners([...data]);
      } catch (error) {
        console.error(error);
      }
    })();
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
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(JSON.stringify(newRunner));
    // try {
    //   const res = await fetch(
    //     "https://mercury-marathon-api.herokuapp.com/runner/",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(newRunner),
    //     }
    //   );
    //   const data = await res.json();
    //   setRunners([...runners, data]);
    //   // clear input after submission
    //   setNewRunner({
    //     first_name: "",
    //     last_name: "",
    //     sex: "",
    //     email: "",
    //     dob: "",
    //     city: "",
    //     state: "",
    //     // cohort: "",
    //     real_time: "",
    //     goal_time: "",
    //     wheelchair: false,
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleChange = (e) => {
    console.log(e.target.dataset);

    // if (e.target.dataset.type === "goal_time") {
    //   console.log("goal_time");
    // }

    setNewRunner({ ...newRunner, [e.target.name]: e.target.value });
  };

  const handleGoalTimeChange = (e) => {
    // debugger;
    let value = e.target.value;
    if (parseInt(value) < 10) {
      value = "0" + value;
    }
    let time;
    if (e.target.name === "hours") {
      time = `${value}:${goalTime.minutes}:${goalTime.seconds}`;
    } else if (e.target.name === "minutes") {
      time = `${goalTime.hours}:${value}:${goalTime.seconds}`;
    } else if (e.target.value === "seconds") {
      time = `${goalTime.hours}:${goalTime.minutes}:${value}`;
    }
    setGoalTime({ ...goalTime, [e.target.name]: value });
    setNewRunner({ ...newRunner, goal_time: time });
  };

  // const formatTime = (timeUnit) => {
  //   //  "goal_time": "00:04:30",
  //   if (timeUnit === "hours") {
  //   }
  // }

  return (
    <div className="Register container">
      <h1>Register for Mercury 2022</h1>
      {/* 
      <div>
        {runners.map((runner, idx) => (
          <h1 key={runner.id}>
            <span>{runner.first_name}</span> <span>{runner.last_name}</span>{" "}
            <br />
            <span>{}</span>
            <button
              onClick={(e) => {
                handleDelete(e, runner.id, idx);
              }}
            >
              DELETE ME
            </button>
          </h1>
        ))}
      </div> */}

      <form onSubmit={handleSubmit}>
        {/* NAME INPUT */}
        <div className="container">
          <label htmlFor="first_name">First Name:</label>
          <input
            // required
            // id="first_name"
            type="text"
            name="first_name"
            value={newRunner.first_name}
            onChange={handleChange}
          />
          <label htmlFor="last_name">Last Name:</label>
          <input
            // required
            // id="last_name"
            type="text"
            name="last_name"
            value={newRunner.last_name}
            onChange={handleChange}
          />
        </div>

        <hr></hr>

        {/* DOB DATEPICKER */}
        <div className="container">
          <label htmlFor="dob">Date Of Birth:</label>

          <input
            required
            id="dob"
            type="date"
            name="dob"
            min="1900-01-01"
            max="2005-01-01"
            // id={newRunner.id}
            onChange={handleChange}
            value={newRunner.DOB}
          ></input>
        </div>

        <hr></hr>

        {/* SEX SELECT */}
        <div className="container">
          <label htmlFor="sex">Sex:</label>
          <div className="select">
            <select required id="sex" name="sex" onChange={handleChange}>
              <option value="">--Select sex--</option>
              {/* <option value={newRunner.sex}>Female</option>
              <option value={newRunner.sex}>Male</option> */}
              <option value="F">Female</option>
              <option value="M">Male</option>
            </select>
          </div>
        </div>

        <hr></hr>

        {/* EMAIL INPUT */}
        <div className="container">
          <label htmlFor="email">Email:</label>
          <input
            required
            id="email"
            // type="email"
            type="text"
            name="email"
            value={newRunner.email}
            onChange={handleChange}
          />
        </div>

        <hr></hr>

        {/* LOCATION */}
        <div className="container">
          <div className="wrapper">
            <label htmlFor="city">City:</label>
            <input
              // required
              // id="city"
              type="text"
              name="city"
              value={newRunner.city}
              onChange={handleChange}
            />
          </div>

          <div className="wrapper">
            <label htmlFor="state">State:</label>
            <input
              // required
              // id="state"
              type="text"
              name="state"
              value={newRunner.state}
              onChange={handleChange}
            />
          </div>
        </div>

        <hr></hr>

        {/* COHORT SELECT */}
        {/* <div className="container">
          <label htmlFor="cohort">Cohort:</label>
          <div className="select">
            <select required id="cohort" name="cohort" onChange={handleChange}>
              <option value="">--Select cohort--</option>
              <optgroup label="Male">
                <option value="M18-39">18-39</option>
                <option value="M40-49">40-49</option>
                <option value="M50-59">50-59</option>
                <option value="M60-69">60-69</option>
                <option value="M70+">70+</option>
              </optgroup>
              <optgroup label="Female">
                <option value="F18-39">18-39</option>
                <option value="F40-49">40-49</option>
                <option value="F50-59">50-59</option>
                <option value="F60-69">60-69</option>
                <option value="F70+">70+</option>
              </optgroup>
              <opgroup label="Wheelchair">
                <option value={newRunner.cohort}>Male</option>
                <option value={newRunner.cohort}>Female</option>
              </opgroup>
              <optgroup label="Wheelchair">
                <option value={newRunner.cohort}>18-39</option>
                <option value={newRunner.cohort}>40-49</option>
                <option value={newRunner.cohort}>50-59</option>
                <option value={newRunner.cohort}>60-69</option>
                <option value={newRunner.cohort}>70+</option>
              </optgroup>
              <optgroup label="Wheelchair Female">
                <option value={newRunner.cohort}>18-39</option>
                <option value={newRunner.cohort}>40-49</option>
                <option value={newRunner.cohort}>50-59</option>
                <option value={newRunner.cohort}>60-69</option>
                <option value={newRunner.cohort}>70+</option>
              </optgroup>
            </select>
          </div>
        </div> */}

        <hr></hr>

        {/* GOAL TIME NUM INPUT */}
        <div className="container time">
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
        </div>

        <hr></hr>

        {/* WHEELCHAIR CHECKBOX INPUT */}
        <div className="container">
          <label htmlFor="wheelchair">Wheelchair</label>
          <input
            id="wheelchair"
            type="checkbox"
            name="wheelchair"
            value={newRunner.wheelchair}
            onChange={handleChange}
          />
        </div>

        {/* SUBMIT BUTTON */}
        <div className="container">
          {/* <button type="submit">Submit</button> */}
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
