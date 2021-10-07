function init(){
    labels = countryResults.map(row=>row.Region);
    const data = {
    labels: labels,
    datasets: [{
        label: 'Country Medal Count',
        data: countryResults.map(row=>row.Wins),
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
        'rgb(77, 166, 255)',
        'rgb(136, 77, 255)',
        'rgb(255, 51, 255)',
        'rgb(255, 255, 0)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        },
};
let ctx=document.getElementById("plot").getContext("2d");
let chart=new Chart(ctx,config)
}

init()