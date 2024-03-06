// setup 
const data = {
    labels: ['sell', 'hold', 'buy'],
    datasets: [{
      label: 'sell' ,
      data: [10, 10, 10, 10, 10, 10],
      backgroundColor: [
          'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 165, 0, 1)',
          'rgba(255, 165, 0, 1)',
          'rgba(0, 0, 139, 1)',
          'rgba(0, 0, 255, 1)',
      //   'rgba(255, 26, 104, 0.2)',
      //   'rgba(54, 162, 235, 0.2)',
      //   'rgba(255, 206, 86, 0.2)',
      //   'rgba(75, 192, 192, 0.2)',
      //   'rgba(153, 102, 255, 0.2)',
      //   'rgba(255, 159, 64, 0.2)',
      //   'rgba(0, 0, 0, 0.2)'
      ],
      borderColor: [
      'rgba(255, 0, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(255, 165, 0, 1)',
          'rgba(255, 165, 0, 1)',
          'rgba(0, 0, 139, 1)',
          'rgba(0, 0, 255, 1)',
      ],
      borderWidth: 1,
      circumference: 180,
      rotation: 270,
      cutout: '95%',
      borderRadius: 10,
      
    }]
  };

  // config 
  const config = {
    type: 'doughnut',
    data,
    options: {
      Plugins:{
          legend : {
              display: false
          }
      }
    }
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  // Instantly assign Chart.js version
  const chartVersion = document.getElementById('chartVersion');
  chartVersion.innerText = Chart.version;