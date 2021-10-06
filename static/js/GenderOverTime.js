// Store our API endpoint as queryUrl.
var queryUrl = "http://127.0.0.1:5000/api/1/GenderOverTime";
let searchResults = [];
// Perform a GET request to the query URL/
d3.json(queryUrl).then(function (chart_data) {
  searchResults = chart_data;
  console.log(searchResults);

console.log(searchResults)
console.log("searchResults: ", searchResults);
let selector = d3.select("#selDataset");
let options = [];
var default_filtered=searchResults.filter(result=>{
    if (!options.includes(result.Sport)){
        options.push(result.Sport)
        selector
        .append("option")
        .text(result.Sport)
        .property("value", result.Sport);
    }
    
    return result.Sport==="Gymnastics"
});
console.log(Object.entries(searchResults));
const years= default_filtered.map(result=>result.Year);
const labels=[]
years.forEach(year=> {
    if (!labels.includes(year)){
        labels.push(year)
    }
})
console.log(labels)
let male_data=[]
let female_data=[]
console.log(default_filtered)
labels.forEach(year=>{
    let year_filter=default_filtered.filter(data=>data.Year=== year)
    let males=year_filter.filter(data=>data.Sex==="M")
    let females=year_filter.filter(data=>data.Sex==="F")
    if (males.length>0){
        male_data.push(males[0].Attempts)
    } else {
        male_data.push(null)
    }
    if (females.length>0){
        female_data.push(females[0].Attempts)
    } else {
        female_data.push(null)
    }
    
})
console.log(male_data, female_data)

const data = {
    labels: labels,
    datasets: [{
      label: 'Male',
      data: male_data,
      fill: false,
      borderColor: 'rgb(52, 64, 235)',
      tension: 0.1
    },
    {
        label: 'Female',
        data: female_data,
        fill: false,
        borderColor: 'rgb(235, 52, 159)',
        tension: 0.1
      }
]
  };

const config = {
    type: 'line',
    data: data,
    options: {
        spanGaps: true 
    }
  };

let ctx=document.getElementById("plot").getContext("2d");
let chart=new Chart(ctx,config)
});


function updateChart(selection){
    console.log(chart, selection)
    chart.destroy()

default_filtered=searchResults.filter(result=>(result.Sport===selection));
console.log(Object.entries(searchResults));
const years= default_filtered.map(result=>result.Year);
const labels=[]
years.forEach(year=> {
    if (!labels.includes(year)){
        labels.push(year)
    }
})
console.log(labels)
let male_data=[]
let female_data=[]
console.log(default_filtered)
labels.forEach(year=>{
    let year_filter=default_filtered.filter(data=>data.Year=== year)
    let males=year_filter.filter(data=>data.Sex==="M")
    let females=year_filter.filter(data=>data.Sex==="F")
    if (males.length>0){
        male_data.push(males[0].Attempts)
    } else {
        male_data.push(null)
    }
    if (females.length>0){
        female_data.push(females[0].Attempts)
    } else {
        female_data.push(null)
    }
    
})
const data = {
    labels: labels,
    datasets: [{
      label: 'Male',
      data: male_data,
      fill: false,
      borderColor: 'rgb(52, 64, 235)',
      tension: 0.1
    },
    {
        label: 'Female',
        data: female_data,
        fill: false,
        borderColor: 'rgb(7235, 52, 159)',
        tension: 0.1
      }
]
  };

const config = {
    type: 'line',
    data: data,
    options: {
        spanGaps: true 
    }
  };

let ctx=document.getElementById("plot").getContext("2d");
chart=new Chart(ctx,config)
}



// // chart.destroy()