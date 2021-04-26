import Cohort from "../Cohort/Cohort.js";

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
						<div className="labeled-cohort" key={i}>
							<div className = "inline-group">
								<h3>{cohortGroups[i]}</h3>	<button>See full cohort</button>
							</div>
							<Cohort cohortData = {cohort}> </Cohort>
						</div>
          
					)
				})
			}		
			</div>
		</div>
	)
}