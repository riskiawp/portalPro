if (document.body.contains(document.getElementById('chartDashboardPraktikan'))){
    var cty = document.getElementById('chartDashboardPraktikan');
    var chart = new Chart(cty, {
        type: 'line',
        data: {
            labels: ['Modul 1', 'Modul 2', 'Modul 3', 'Modul 4', 'Modul 5', 'Modul 6'],
            datasets: [{
                label: 'Nilai Akhir',
                data: [90, 76, 99, 78, 90, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });
}
if (document.body.contains(document.getElementById('chartStrukdat'))){
    var ctx = document.getElementById('chartStrukdat');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Modul 1', 'Modul 2', 'Modul 3', 'Modul 4', 'Modul 5', 'Modul 6'],
            datasets: [{
                label: 'Nilai Akhir',
                data: [90, 76, 99, 78, 90, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });
}
if (document.body.contains(document.getElementById('chartAlpro'))){
    var ctz = document.getElementById('chartAlpro');
    var chart = new Chart(ctz, {
        type: 'line',
        data: {
            labels: ['Modul 1', 'Modul 2', 'Modul 3', 'Modul 4', 'Modul 5', 'Modul 6'],
            datasets: [{
                label: 'Nilai Akhir',
                data: [90, 76, 99, 78, 90, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });
}
if (document.body.contains(document.getElementById('chartBasdat'))){
    var ctx = document.getElementById('chartBasdat');
}