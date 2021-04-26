export default function CohortBody (props) {

  
    let runners = props.cohortRunners;

    //runners.sort((a, b) => (a.last_name < b.last_name) ? 1 : -1);
   
    /* help on sorting time strings from 
        https://stackoverflow.com/questions/17064603/sort-string-array-containing-time-in-format-0900-am/29013241
    */
    runners.sort(function (a, b) {
            if (parseInt(a.time.split(":")[0]) - parseInt(b.time.split(":")[0]) === 0) {
                return parseInt(a.time.split(":")[1]) - parseInt(b.time.split(":")[1]);
            } else {
                return parseInt(a.time.split(":")[0]) - parseInt(b.time.split(":")[0]);
            }
        })

    const topTen = runners.slice(0, 10);
    



    const tableRows = topTen.map((runner, i) => {
    return (
    
        <tr key={i}> 
             <td>{i + 1} </td>
             <td> Bib # {runner.id} </td>
             <td>{runner.last_name}, {runner.first_name}</td>
             <td>{runner.time} </td>
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