
import CohortHeader from '../CohortHeader/CohortHeader.js';
import CohortBody from '../CohortBody/CohortBody.js'


export default function Cohort(props) {

	const cohort = props.cohort;

	return (
		<table className="cohort">
			<CohortHeader>Header</CohortHeader>
			<CohortBody cohort={cohort}></CohortBody>
		</table>

	);
}