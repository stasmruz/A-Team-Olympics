console.log("searchResults: ", searchResults);
default_filtered=searchResults.filter(result=>(result.Sport==="Gymnastics"));
console.log(Object.entries(searchResults));
const labels = default_filtered.map(result=>result.Year);

const data = {
    labels: labels,
    datasets: [{
      label: 'Male',
      data: default_filtered.map(result=>{
          if (result.Sex==="M"){
              return result.Wins;
          } else {
              return 0
          }
      }),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },
    {
        label: 'Female',
        data: default_filtered.map(result=>{
            if (result.Sex==="F"){
                return result.Wins;
            } else {
                return 0
            }
        }),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
]
  };

const config = {
    type: 'line',
    data: data,
  };

let ctx=document.getElementById("plot").getContext("2d");
let chart=new Chart(ctx,config)

d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  let default_filtered=searchResults.filter(result=>(result.Sport===`${dataset}`));
}

// function updateChart(){
//     chart.destroy()
// console.log("searchResults: ", searchResults);
// default_filtered=searchResults.filter(result=>(result.Sport==="Aeronautics"));
// console.log(Object.entries(searchResults));
// const labels = default_filtered.map(result=>result.Year);

// const data = {
//     labels: labels,
//     datasets: [{
//       label: 'Male',
//       data: default_filtered.map(result=>{
//           if (result.Sex==="M"){
//               return result.Wins;
//           } else {
//               return 0
//           }
//       }),
//       fill: false,
//       borderColor: 'rgb(75, 192, 192)',
//       tension: 0.1
//     },
//     {
//         label: 'Female',
//         data: default_filtered.map(result=>{
//             if (result.Sex==="F"){
//                 return result.Wins;
//             } else {
//                 return 0
//             }
//         }),
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1
//       }
// ]
//   };

// const config = {
//     type: 'line',
//     data: data,
//   };

// let ctx=document.getElementById("plot").getContext("2d");
// let chart=new Chart(ctx,config)
// 



