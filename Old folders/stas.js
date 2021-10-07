console.log("searchResults: ", searchResults);
let selector = d3.select("#selDataset");
let options = []
default_filtered=searchResults.filter(result=>{
    if (!options.includes(result.Region)){
        options.push(result.Region)
        selector
        .append("option")
        .text(result.Region)
        .property("value", result.Region);
    }
    
    return result.Region==="USA"
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
let win_data=[]
console.log(default_filtered)
labels.forEach(year=>{
  let year_filter=default_filtered.filter(data=>data.Year=== year)
  let win=year_filter.filter(data=>data.Wins>0)
  if (win.length>0){
      win_data.push(win[0].Wins)
  } else {
      win_data.push(null)
  }
  
})

const data = {
    labels: labels,
    datasets: [{
      label: 'Medals Over Time',
      data: win_data,
      fill: false,
      borderColor: 'rgb(52, 64, 235)',
      tension: 0.1
    },
  
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



function updateChart(selection){
    console.log(chart, selection)
    chart.destroy()

default_filtered=searchResults.filter(result=>(result.Region===selection));
console.log(Object.entries(searchResults));
const years= default_filtered.map(result=>result.Year);
const labels=[]
years.forEach(year=> {
    if (!labels.includes(year)){
        labels.push(year)
    }
})

console.log(labels)
let win_data=[]
labels.forEach(year=>{
  let year_filter=default_filtered.filter(data=>data.Year=== year)
  let win=year_filter.filter(data=>data.Wins>0)
  if (win.length>0){
      win_data.push(win[0].Wins)
  } else {
      win_data.push(null)
  }
  
})
const data = {
    labels: labels,
    datasets: [{
      label: 'Medals Over Time',
      data: win_data,
      fill: false,
      borderColor: 'rgb(52, 64, 235)',
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