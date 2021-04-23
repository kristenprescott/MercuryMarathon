
import CohortHeader from '/Users/caseymccullough/Desktop/SEIR_Erica/mercury-marathon/mercury-marathon-react/src/Components/CohortHeader/CohortHeader.js';
import CohortBody from '/Users/caseymccullough/Desktop/SEIR_Erica/mercury-marathon/mercury-marathon-react/src/Components/CohortBody/CohortBody.js'


export default function Cohort (props) {

    return (
    <table className="cohort">
        <CohortHeader>Header</CohortHeader> 
        <CohortBody cohortData = {props.cohortData}></CohortBody>
    </table>
       
      


    );
}