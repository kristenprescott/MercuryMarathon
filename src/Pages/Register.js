import { useState, useEffect } from "react";
import running from "../images/running.jpeg"

export default function Register() {
	const [runners, setRunners] = useState([]);
	const [newRunner, setNewRunner] = useState({
		first_name: "",
		last_name: "",
		sex: "",
		email: "",
		dob: "",
		city: "",
		state: "",
		wheelchair: false,
		// fix this
		race_id: 3,
		cohort_id: 1,
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
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log(JSON.stringify(newRunner));
		try {
			const res = await fetch(
				"https://mercury-marathon-api.herokuapp.com/runner/",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(newRunner),
				}
			);
			const data = await res.json();
			setRunners([...runners, data]);
			// clear input after submission:
			setNewRunner({
				first_name: "",
				last_name: "",
				sex: "",
				email: "",
				dob: "",
				city: "",
				state: "",
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
		<div className="Register">
			<h1>Register for Mercury 2022</h1>
			<div className="page">
				<div className="form">
					<form onSubmit={handleSubmit}>
						{/* NAME INPUT */}
						{/* <div className="form-line"> */}
						{/* <div className="form-field"> */}
						<label className="row1 col1-2" htmlFor="first_name">First Name:</label>
						<input
							className="row 1 col2-4"
							type="text"
							name="first_name"
							value={newRunner.first_name}
							onChange={handleChange}
						/>
						{/* </div> */}
						{/* <div className="form-field"> */}
						<label className="row1 col4-5" htmlFor="last_name">Last Name:</label>
						<input
							className="row1 col5-7"
							type="text"
							name="last_name"
							value={newRunner.last_name}
							onChange={handleChange}
						/>
						{/* </div> */}
						{/* </div> */}

						{/* LOCATION */}
						{/* <div className="form-line"> */}
						{/* <div className="form-field"> */}
						<label className="row2 col1-2" htmlFor="city">City:</label>
						<input
							className="row2 col2-4"
							type="text"
							name="city"
							value={newRunner.city}
							onChange={handleChange}
						/>
						{/* </div> */}
						{/* <div className="form-field"> */}
						<label className="row2 col4-5" htmlFor="state">State:</label>
						<input
							className="row2 col5-7"
							type="text"
							name="state"
							value={newRunner.state}
							onChange={handleChange}
						/>
						{/* </div> */}
						{/* </div> */}

						{/* EMAIL INPUT */}
						{/* <div className="form-line"> */}
						{/* <div className="form-field"> */}
						<label className="row3 col1-2" htmlFor="email">Email:</label>
						<input
							// type="email"
							className="row3 col2-4"
							type="text"
							name="email"
							value={newRunner.email}
							onChange={handleChange}
						/>
						{/* </div> */}
						{/* </div> */}

						{/* DOB DATEPICKER */}
						{/* <div className="form-line"> */}
						{/* <div className="form-field"> */}
						<label className="row4 col1-2" htmlFor="dob">Date Of Birth:</label>
						<input
							className="row4 col2-4"
							type="date"
							name="dob"
							min="1900-01-01"
							max="2005-01-01"
							onChange={handleChange}
							value={newRunner.DOB}
						></input>
						{/* </div> */}
						{/* </div> */}

						{/* SEX SELECT */}

						{/* <div className="form-line"> */}
						{/* <div className="form-field"> */}
						<label className="row5 col1-2" htmlFor="sex">Sex:</label>
						<div className="row5 col2-4">
							<select required id="sex" name="sex" onChange={handleChange}>
								<option value="">--Select sex--</option>
								<option value="F">Female</option>
								<option value="M">Male</option>
							</select>
						</div>
						{/* </div> */}
						{/* </div> */}

						{/* WHEELCHAIR CHECKBOX INPUT */}
						{/* <div className="form-line"> */}
						{/* <div className="form-field"> */}
						<label className="row6 col1-2" htmlFor="wheelchair">Wheelchair?</label>
						<input
							className="row6 col2-4"
							type="checkbox"
							name="wheelchair"
							value={newRunner.wheelchair}
							onChange={handleChange}
						/>
						{/* </div> */}
						{/* </div> */}

						{/* SUBMIT BUTTON */}
						{/* <div className="flex-r"> */}
						<input className="submit-btn row7 col1-2" type="submit" />
						{/* </div> */}
					</form>
				</div>
				<div className="img">
					<img src={running} alt="" />
				</div>
			</div>
		</div>
	);
}
