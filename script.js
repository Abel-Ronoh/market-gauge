// setup 
const data = {
    labels: ['strong sell','sell', 'hold', 'buy', 'strong buy'],
    datasets: [{
      label: 'sell' ,
      data: [10, 10,20, 10, 10],
      backgroundColor: [
          'rgba(150, 0, 0, 20)',
          'rgba(255, 0, 0, 10)',
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
      cutout: '96.5%',
      borderRadius: 2,
      
    }]
  };

// const gaugeNeedle = {
//     id: 'gaugeNeedle',
//     afterDatasetsDraw(chart, args, plugins){
//       const {ctx, data} = chart;
//       ctx.save();

//       console.log(chart.getDatasetMeta(0).data[0].x);
//       const xCenter = chart.getDatasetMeta(0).data[0].x;
//       const yCenter = chart.getDatasetMeta(0).data[0].y;
//       ctx.beginPath();
//       ctx.moveTo(xCenter, yCenter)
//       ctx.lineTo(xCenter, 100);
//       ctx.stroke();
//     }
// }
// console.log(  data.datasets)
const doughnutLabelsLine = {
  id: 'doughnutLabelsLine',
  afterDatasetsDraw(chart, args, options) {
    const { ctx, chartArea: { width, height } } = chart;

    // Calculate the maximum label width
    let maxWidth = 0;
    chart.data.labels.forEach(label => {
      const textWidth = ctx.measureText(label).width;
      maxWidth = Math.max(maxWidth, textWidth);
    });

    // Add padding to the maximum width
    const padding = 20;
    maxWidth += padding;

    // Update canvas width if needed
    if (maxWidth > width) {
      chart.width = maxWidth;
      chart.canvas.width = maxWidth;
      chart.options.layout.padding.left = Math.floor(maxWidth / 2);
      chart.options.layout.padding.right = Math.floor(maxWidth / 2);
      chart.options.layout.padding.top = Math.floor(height / 2);
      chart.options.layout.padding.bottom = Math.floor(height / 2);
      chart.update(); // Update the chart with the new dimensions
    }

    // Render labels
    ctx.fillStyle = 'white';
    chart.data.datasets.forEach((dataset, i) => {
      chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
        const { x, y } = datapoint.tooltipPosition();
        const xLine = x >= width / 2 ? x + 15 : x - 75;
        const yLine = y >= height / 2 ? y + 15 : y - 15;
        ctx.font = '12px Arial '; // Adjust font size as needed
        ctx.fillText(chart.data.labels[index], xLine, yLine);
      });
    });
  }
};


  // config 
  const config = {
    type: 'doughnut',
    data,
    options: {
      aspectRatio: 1.8, // Maintain aspect ratio
      cutoutPercentage: 40, // 60% of the canvas width
      plugins: {
        labels:{
          render:data,
          precision:1,
        arc:true,
        },
        
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      },
      layout: {
        padding: {
          left: 60, // Adjust padding according to your design
          right: 60,
          top: 40,
          bottom: 0
        }
      }
    },
    plugins: [doughnutLabelsLine]
  };
  

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  // Instantly assign Chart.js version
  const chartVersion = document.getElementById('chartVersion');
  // chartVersion.innerText = Chart.version;