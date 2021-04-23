import { useState, useEffect } from "react";
import "../Register/register.scss";

export default function Register() {
  const [runners, setRunners] = useState([]);
  const [newRunner, setNewRunner] = useState({
    id: "",
    firstName: "",
    lastName: "",
    sex: "",
    email: "",
    dob: "",
    city: "",
    state: "",
    country: "",
    goalTime: "",
    time: "",
    wheelchair: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://next.json-generator.com/api/json/get/NJNIgRqLc"
        );
        const data = await res.json();
        console.log(data);
        setRunners([data]);
      } catch (error) {
        console.error(error);
      }
    })();
    //
    (async () => {
      try {
        const res = await fetch(
          "https://next.json-generator.com/api/json/get/EkNmLRiLq"
        );
        const data = await res.json();
        console.log(data);
        setNewRunner([...runners, data]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://next.json-generator.com/api/json/get/EkNmLRiLq",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newRunner),
        }
      );
      const data = await response.json();
      setRunners([...runners, data]);
      // clear input after submission
      setNewRunner({
        first_name: "",
        last_name: "",
        sex: "",
        email: "",
        dob: "",
        city: "",
        state: "",
        country: "",
        goalTime: "",
        wheelchair: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setNewRunner({ ...newRunner, [e.target.name]: e.target.value });
  };

  return (
    <div className="Register container">
      <h1>Register for Mercury 2022</h1>

      <form onSubmit={handleSubmit}>
        {/* NAME INPUT */}
        <div className="container">
          <label htmlFor="firstname">First Name:</label>

          <input
            required
            id="firstname"
            type="text"
            name="first_name"
            value={newRunner.first_name}
            onChange={handleChange}
          />
          <label htmlFor="lastname">Last Name:</label>
          <input
            required
            id="lastname"
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
            id={newRunner.id}
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
              <option value={newRunner.sex}>Female</option>
              <option value={newRunner.sex}>Male</option>
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
            type="email"
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
              required
              id="city"
              type="text"
              name="city"
              value={newRunner.city}
              onChange={handleChange}
            />
          </div>

          <div className="wrapper">
            <label htmlFor="state">State:</label>
            <input
              required
              id="state"
              type="text"
              name="state"
              value={newRunner.state}
              onChange={handleChange}
            />
          </div>

          <div className="wrapper">
            <label htmlFor="country">Country:</label>
            <input
              required
              id="country"
              type="text"
              name="country"
              value={newRunner.country}
              onChange={handleChange}
            />
          </div>
        </div>

        <hr></hr>

        {/* COHORT SELECT */}
        <div className="container">
          <label htmlFor="cohort">Cohort:</label>
          <div className="select">
            <select required id="cohort" name="cohort" onChange={handleChange}>
              <option value="">--Select cohort--</option>
              <optgroup label="Male">
                <option value={newRunner.cohort}>14 and under</option>
                <option value={newRunner.cohort}>15-19</option>
                <option value={newRunner.cohort}>20-24</option>
                <option value={newRunner.cohort}>25-29</option>
                <option value={newRunner.cohort}>30-34</option>
                <option value={newRunner.cohort}>35-39</option>
                <option value={newRunner.cohort}>40-44</option>
                <option value={newRunner.cohort}>45-49</option>
                <option value={newRunner.cohort}>50-54</option>
                <option value={newRunner.cohort}>55-59</option>
                <option value={newRunner.cohort}>60-64</option>
                <option value={newRunner.cohort}>70-74</option>
                <option value={newRunner.cohort}>75-79</option>
                <option value={newRunner.cohort}>80-84</option>
                <option value={newRunner.cohort}>85-89</option>
                <option value={newRunner.cohort}>90+</option>
              </optgroup>
              <optgroup label="Female">
                <option>14 and under</option>
                <option value={newRunner.cohort}>14 and under</option>
                <option value={newRunner.cohort}>15-19</option>
                <option value={newRunner.cohort}>20-24</option>
                <option value={newRunner.cohort}>25-29</option>
                <option value={newRunner.cohort}>30-34</option>
                <option value={newRunner.cohort}>35-39</option>
                <option value={newRunner.cohort}>40-44</option>
                <option value={newRunner.cohort}>45-49</option>
                <option value={newRunner.cohort}>50-54</option>
                <option value={newRunner.cohort}>55-59</option>
                <option value={newRunner.cohort}>60-64</option>
                <option value={newRunner.cohort}>70-74</option>
                <option value={newRunner.cohort}>75-79</option>
                <option value={newRunner.cohort}>80-84</option>
                <option value={newRunner.cohort}>85-89</option>
                <option value={newRunner.cohort}>90+</option>
              </optgroup>
            </select>
          </div>
        </div>

        <hr></hr>

        {/* GOAL TIME NUM INPUT */}
        <div className="container time">
          <span>Goal Time: </span>
          <div className="wrapper">
            <label htmlFor="hours">Hours:</label>
            <input
              id="hours"
              type="number"
              min="0"
              max="10"
              step="1"
              name="hour"
              value={newRunner.goal_time}
              onChange={handleChange}
            ></input>
          </div>

          <div className="wrapper">
            <label htmlFor="minutes">Minutes:</label>
            <input
              id="minutes"
              type="number"
              min="0"
              max="59"
              step="1"
              name="minute"
              value={newRunner.goal_time}
              onChange={handleChange}
            ></input>
          </div>

          <div className="wrapper">
            <label htmlFor="seconds">Seconds:</label>
            <input
              id="seconds"
              type="number"
              min="0"
              max="59"
              step="1"
              name="seconds"
              value={newRunner.goal_time}
              onChange={handleChange}
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
