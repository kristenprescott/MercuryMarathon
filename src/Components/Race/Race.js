import Cohort from "../Cohort/Cohort.js";

const cohortLabels = ["Men 18-39", "Women 18-39","Men 40-49", "Women 40-49","Men 50-59", "Women 50-59",
"Men 60-69", "Women 60-69", "Men 70+", "Women 70+","Men Wheelchair", "Women Wheelchair"];

export default function Race(props) {

	const allRunners = props.allRunners;
	console.log ("all runners: ", allRunners);

	let cohortArray = Array(cohortLabels.length);

	// create array of empty arrays. 
	// each inner array stores a cohort of Runner objects. 
	for (let i = 0; i < cohortArray.length; i++)
	{
		cohortArray[i] = [];
	}
	

	// sort all runners into cohorts
	// based on their interal cohort #
	for (let i = 0; i < allRunners.length; i++)
	{
		const currentRunner = allRunners[i];
		const currentRunnerCohort = currentRunner.cohort_id;
		cohortArray[currentRunnerCohort].push(allRunners[i]);
	}

	return (
		<div className='Race'>
			<h1>Live Event Info</h1>
			<div id="cohorts">
			{
				cohortArray.map((cohort, i) => {
					return (
						<div className="labeled-cohort" key={i}>
							<div className = "inline-group">
								<h3>{cohortLabels[i]}</h3>	
							</div>
							<Cohort cohort = {cohort}> </Cohort>
						</div>
					)
				})
			}		
			</div>
		</div>
	)
}