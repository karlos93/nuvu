function grafico(){

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);
  
  }
  
  function drawChart(){
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['', 20],
    ['', 80]
  ]);
  
  // Set chart options
  var options = {'title':'',
                 'width':80,
                 'height':80,
                 colors: ['#54D1ED', '#FFFFFF'],};
  
  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
  
    
  }
  