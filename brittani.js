console.log("searchResults: ", searchResults);
default_filtered=searchResults.filter(result=>(result.Sport==="Athletics"));
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
              return null
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
                return null
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

// chart.destroy()


// console.log("searchResults: ", searchResults);
// default_filtered=searchResults.filter(result=>(result.Sport==="Gymnastics"&&result.Sex==="M"));
// console.log(Object.entries(searchResults));
// const labels = default_filtered.map(result=>result.Year);

// const data = {
//     labels: labels,
//     datasets: [{
//       label: 'Gender Over Time',
//       data: default_filtered.map(result=>result.Wins),
//       fill: false,
//       borderColor: 'rgb(75, 192, 192)',
//       tension: 0.1
//     }]
//   };

// const config = {
//     type: 'line',
//     data: data,
//   };

// let ctx=document.getElementById("plot").getContext("2d");
// let chart=new Chart(ctx,config)

// // chart.destroy()