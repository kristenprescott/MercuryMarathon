export default function CohortBody (props) {

    let cohort = props.cohort;
    let showFullCohort = false;

    /* help on sorting time strings from 
        https://stackoverflow.com/questions/17064603/sort-string-array-containing-time-in-format-0900-am/29013241
    */

   if (cohort.length > 0)
   {
    cohort.sort(function (a, b) {

            const aStr = "" + a.real_time;
            const bStr = "" + b.real_time;
            return aStr.localeCompare(bStr);

        })
   }

    const topTen = cohort.slice(0, 10);

    const runnersToDisplay =  showFullCohort ? cohort : topTen;
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