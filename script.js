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
          'rgba(0, 0, 255, 1)'
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

const gaugeNeedle = {
    id: 'gaugeNeedle',
    afterDatasetsDraw(chart, args, plugins){
      const {ctx, data} = chart;
      ctx.save();

      console.log(chart.geetDatasetMeta(0).data[0].x);
      const xCenter = chart.geetDatasetMeta(0).data[0].x;
      const yCenter = chart.geetDatasetMeta(0).data[0].y;
      ctx.beginPath();
      ctx.moveTo(xCenter, yCenter)
      ctx.lineTo(xCenter, 100);
      ctx.stroke();
    }
}

  // config 
  const config = {
    type: 'doughnut',
    data,
    options: {
      aspectRatio:1.8,
      Plugins:{
          legend : {
              display: false
          }
      }
    },
    Plugins: [gaugeNeedle]
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  // Instantly assign Chart.js version
  const chartVersion = document.getElementById('chartVersion');
  // chartVersion.innerText = Chart.version;