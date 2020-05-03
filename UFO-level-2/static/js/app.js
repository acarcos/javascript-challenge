// Getting the UFO reports
var tableData = data;

// First, ddd data to the table
// use select to access the body table
var tbody = d3.select("tbody");

// A function to add the values is made.
// Append rows (tr) and then add values on cells.
function displayUfos(){
    data.forEach((ufoData) => {
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// Call function to display table when access to browser.
displayUfos();

// If AllData button is pressed, then display the table with all values.
var totalData = d3.select("#data-btn");

totalData.on("click", function() {
    tbody = d3.select("tbody");
    var row = tbody.selectAll("tr").remove();
    displayUfos();
});

// Select all input elements on forms
var date = d3.select("#datetime");
var citi = d3.select("#city");
var state = d3.select("#state");
var shape = d3.select("#shape");

// Select filter button
var searchData = d3.select("#filter-btn");

// When filter button is pressed
searchData.on("click", function() {
    // Get values written on form
    var inputDate = date.property("value");
    var inputCity = citi.property("value");
    var inputState = state.property("value");
    var inputShape = shape.property("value");

    // Some combinations for getting the values...
    // Values can be filtered if only ONE form has a value
    var featuresDate = [inputCity, inputState, inputShape];
    var featuresCity = [inputDate, inputState, inputShape];
    var featuresState = [inputDate, inputCity, inputShape];
    var featuresShape = [inputDate, inputCity, inputState];
    var featuresTot = [inputDate, inputCity, inputState, inputShape];

    tbodyRefresh = d3.select("tbody");
    var row = tbodyRefresh.selectAll("tr").remove(); 
    
    // If Date has value
    if (featuresDate.indexOf(inputShape) == '') {
        var dataFiltered = tableData.filter(fecha => fecha.datetime == inputDate);
        //console.log(dataFiltered);
        displayTable(dataFiltered);
    } 
    
    // If City has a value
    if (featuresCity.indexOf(inputShape) == '') {
        var dataFiltered = tableData.filter(citi => citi.city == inputCity);
        //console.log(dataFiltered);
        displayTable(dataFiltered);
    }
    
    // If State has a value
    if (featuresState.indexOf(inputShape) == '') {
        console.log('yessss')
        var dataFiltered = tableData.filter(steit => steit.state == inputState);
        //console.log(dataFiltered);
        displayTable(dataFiltered);
    } 

    // If Shape has value
    if (featuresShape.indexOf(inputState) == '') {
        var dataFiltered = tableData.filter(sheip => sheip.shape == inputShape);
        //console.log(dataFiltered);
        displayTable(dataFiltered);
    }  
    
    // If ALL forms have input, then...
    if (featuresTot.indexOf(inputShape) != '') {
        var dataFiltered = tableData
            .filter(fecha => fecha.datetime == inputDate)
            .filter(ciud => ciud.city == inputCity)
            .filter(steit => steit.state == inputState)
            .filter(sheip => sheip.shape == inputShape);
        //console.log(dataFiltered);
        displayTable(dataFiltered);
    }
});

// This function is called to display the filtered data
function displayTable(ufoInfo) {
    ufoInfo.forEach((values) => {
        row = tbody.append("tr");
            
        Object.entries(values).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });     
}

