// setup 
const data = {
    labels: ['strong sell','sell', 'hold', 'hold', 'buy', 'strong buy'],
    datasets: [{
      label: 'sell' ,
      data: [10, 10, 10, 10, 10, 10],
      backgroundColor: [
          'rgba(150, 0, 0, 20)',
          'rgba(255, 0, 0, 10)',
          '#5C5C5C',
          '#5C5C5C',
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
      borderWidth: 0,
      circumference: 180,
      rotation: 270,
      cutout: '96%',
      borderRadius: 4,
      
    }]
  };

const gaugeNeedle = {
    id: 'gaugeNeedle',
    afterDatasetsDraw(chart, args, plugins){
      const {ctx, data} = chart;
      ctx.save();

      console.log(chart.getDatasetMeta(0).data[0].x);
      const xCenter = chart.getDatasetMeta(0).data[0].x;
      const yCenter = chart.getDatasetMeta(0).data[0].y;
      ctx.beginPath();
      ctx.moveTo(xCenter, yCenter)
      ctx.lineTo(xCenter, 100);
      ctx.stroke();
    }
}

const doughnutLabelsLine = {
  id: 'doughnutLabelsLine',
  afterDraw(chart, args, options){
    const {ctx, chartArea:{top, left, bottom, right, width, height}} = chart;

    console.log(chart)



  }
}

  // config 
  const config = {
    type: 'doughnut',
    data,
    options: {
      aspectRatio:1.8,
      // maintainAspectRatio: false,
      plugins:{
          legend : {
              display: false
          },
          tooltip:{
            enabled: false,
          }
      }
    },
    Plugins: [doughnutLabelsLine]
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  // Instantly assign Chart.js version
  const chartVersion = document.getElementById('chartVersion');
  // chartVersion.innerText = Chart.version;