import Cohort from "/Users/caseymccullough/Desktop/SEIR_Erica/mercury-marathon/mercury-marathon-react/src/Components/Cohort/Cohort.js";



export default function Race(props) {
	return (
		<div className='Race'>
			<h1>Live Event Info</h1>
			<div id="cohorts">
				<h2>Men</h2>

				<div id="sample-cohort">
			{
				props.cohortData.map(cohort => {
					return (
					<Cohort cohortData = {cohort}> </Cohort>
          
					)
				})
			} 
			</div>


				
			</div>
		</div>
	)
}