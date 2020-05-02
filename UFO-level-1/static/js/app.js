// Getting the UFO reports
var tableData = data;

// Add data to the table
// use select to access the body table
var tbody = d3.select("tbody");

// To add the data values, rows are added on the table
// and then the values
// With inspect we can confirm rows were added and the info
// is displayed on browser
data.forEach((ufoData) => {
    var row = tbody.append("tr");
    // Para agregar los valores a cada celda
    Object.entries(ufoData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the input date box
var date = d3.select("#datetime");

// When an input event is detected, the function runSearch is called
date.on("input", runSearch);

// Search information based on date
function runSearch() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Getting the date event
    var inputValue = d3.event.target.value;
    // Select the table, later will be updated based on dates
    var tbodyRefresh = d3.select("tbody");
    // Remove all the values displayed on table
    var row = tbodyRefresh.selectAll("tr").remove(); 

    // Conditional, if form box is empty, all the data is displayed
    if (inputValue.length < 1) {
        data.forEach((ufoData) => {
            var row = tbody.append("tr");
            Object.entries(ufoData).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }

    // Filter data according to input date
    var dateFiltered = tableData
        .filter(fecha => fecha.datetime == inputValue)
    // Display the filtered data in the table
    dateFiltered.forEach((values) => {
        row = tbodyRefresh.append("tr");
        
        Object.entries(values).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });     
}
