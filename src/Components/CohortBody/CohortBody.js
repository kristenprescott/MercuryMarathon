export default function CohortBody (props) {

    const tableRows = props.cohortData.runners.map((runner, i) => {
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