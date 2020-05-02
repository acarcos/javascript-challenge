var tableData = data;

// YOUR CODE HERE!

// Add data to the table
// use select to access the body table
var tbody = d3.select("tbody");

// To add the values, we add cells on the table
// prove them on inspect elements
data.forEach((ufoData) => {
    var row = tbody.append("tr");
    // Para agregar los valores a cada celda
    Object.entries(ufoData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var date = d3.select("#datetime");

date.on("input", runSearch);


function runSearch() {
    // prevent the page from refreshing
    //d3.event.preventDefault();

    // select the input element and get the raw thml node
    var inputValue = d3.event.target.value;
    var tbodyRefresh = d3.select("tbody");
    var row = tbodyRefresh.selectAll("tr").remove(); 

    if (inputValue.length < 1) {
        data.forEach((ufoData) => {
            var row = tbody.append("tr");
            Object.entries(ufoData).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }

    var dateFiltered = tableData
        .filter(fecha => fecha.datetime == inputValue)
     
    dateFiltered.forEach((values) => {
        row = tbodyRefresh.append("tr");
        
        Object.entries(values).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });     
}
