import { useState, useEffect } from "react";
import { DataGrid, GridFilterToolbarButton } from '@material-ui/data-grid';

export default function PreviousRaces() {
	const [runners, setRunners] = useState([]);
	const [rows, setRows] = useState([]);
	const [rows0, setRows0] = useState([]);
	const [rows1, setRows1] = useState([]);
	const [rows2, setRows2] = useState([]);

	const getPrevRaceList = async () => {
		try {
			const response = await fetch('https://mercury-marathon-api.herokuapp.com/race/');
			const data = await response.json();
			console.log(JSON.stringify(data, null, 2))
			setRows(data)
			setRows0(data[0].runners)
			setRows1(data[1].runners)
			setRows2(data[2].runners)
		} catch (error) {
			console.log(error)
		}
	};

	function handleSubmit(e) {
		e.preventDefault()
		getPrevRaceList(e.target.value)
	}

	function handleChange(e) {
		if (e.target.value == 2019) {
			setRunners(rows0)
		}
		else if (e.target.value == 2020) {
			setRunners(rows1)
		}
		else if (e.target.value == 2021) {
			setRunners(rows2)
		}
		else {
			setRunners(rows)
		}
	}

	useEffect(() => {
		getPrevRaceList();

	}, []);
	// console.log(running)
	const columns = [
		{ field: 'id', headerName: 'ID', width: 0 },
		{ field: 'first_name', headerName: 'First Name', width: 130 },
		{ field: 'last_name', headerName: 'Last Name', width: 140 },
		{ field: 'real_time', headerName: 'Time', width: 130 },
		{ field: 'city', headerName: 'City', width: 130 },
		{ field: 'state', headerName: 'State', width: 180 },
		{ field: 'cohort_id', headerName: 'Cohort', width: 130 },
	];

	function CustomToolbar() {
		return <GridFilterToolbarButton />
	}
	return (
		<div className='PreviousRaces'>
			<h1>Previous Race Info</h1>
			<form onChange={handleChange} onSubmit={handleSubmit}>
				<label for="years">Year:</label>
				<select className="years">
					<option value="select a year" >Select a Year:</option>
					{rows.map((year) => {
						return (
							<option value={year.year}>{year.year}</option>
						)
					})}
				</select>
			</form>

			<div style={{ height: 600, width: '90%' }}>
				<DataGrid className="grid-style" rows={runners} columns={columns} pageSize={10} components={{
					Toolbar: CustomToolbar,
				}}>
				</DataGrid>
			</div>
		</div>
	)
}