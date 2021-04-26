
import CohortHeader from '/Users/caseymccullough/Desktop/SEIR_Erica/mercury-marathon/mercury-marathon-react/src/Components/CohortHeader/CohortHeader.js';
import CohortBody from '/Users/caseymccullough/Desktop/SEIR_Erica/mercury-marathon/mercury-marathon-react/src/Components/CohortBody/CohortBody.js'


export default function Cohort (props) {

    const cohortRunners = props.cohortData.runners;
    cohortRunners.sort((a, b) => (a.time < b.time) ? 1 : -1)
    return (
    <table className="cohort">
        <CohortHeader>Header</CohortHeader> 
        <CohortBody cohortRunners = {cohortRunners}></CohortBody>
    </table>
       
      


    );
}