import Cohort from "/Users/caseymccullough/Desktop/SEIR_Erica/mercury-marathon/mercury-marathon-react/src/Components/Cohort/Cohort.js";

const cohortGroups = ["Men 18-39", "Women 18-39","Men 40-49", "Women 40-49","Men 50-59", "Women 50-59",
"Men 60-69", "Women 60-69", "Men 70+", "Women 70+","Men Wheelchair", "Women Wheelchair"];

export default function Race(props) {
	return (
		<div className='Race'>
			<h1>Live Event Info</h1>
			<div id="cohorts">

			{
				props.cohortData.map((cohort, i) => {
					return (
						<div className="labeled-cohort">
							<h3>{cohortGroups[i]}</h3>	
							<Cohort cohortData = {cohort}> </Cohort>
						</div>
          
					)
				})
			}		
			</div>
		</div>
	)
}