export default function CohortHeader () {

    const tableHeadText = ["Place", "Name", "Bib #", "Official Time", "City", "State"]

    const tableHeaders = tableHeadText.map((text, i) => {
    return (<th key={i}> { text } </th> )
});


    return (
    <thead>
        <tr>
        {tableHeaders}
        </tr>
      </thead>


    );
}