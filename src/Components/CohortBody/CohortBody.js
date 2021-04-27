export default function CohortBody(props) {

	let cohort = props.cohort;
	let showFullCohort = false;

	if (cohort.length > 0) {
		cohort.sort(function (a, b) {

			const aStr = "" + a.real_time;
			const bStr = "" + b.real_time;
			return aStr.localeCompare(bStr);

		})
	}

	const topFive = cohort.slice(0, 5);

	const runnersToDisplay = showFullCohort ? cohort : topFive;
	const tableRows = runnersToDisplay.map((runner, i) => {
		return (

			<tr key={i}>
				<td>{i + 1} </td>
				<td>{runner.id} </td>
				<td>{runner.last_name}, {runner.first_name}</td>
				<td>{runner.real_time} </td>
				<td>{runner.city}  </td>
				<td>{runner.state}</td>

			</tr>
		)
	});

	return (
		<tbody>
			{tableRows}
		</tbody>
	);
}