
import CohortHeader from '../CohortHeader/CohortHeader.js';
import CohortBody from '../CohortBody/CohortBody.js'


export default function Cohort (props) {

    const cohortRunners = props.cohortData.runners;
    
    return (
    <table className="cohort">
        <CohortHeader>Header</CohortHeader> 
        <CohortBody cohortRunners = {cohortRunners}></CohortBody>
    </table>
       
    );
}