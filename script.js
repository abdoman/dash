var gridster;
var main = function(){
	$('#add-button').click(function(){
			alert("hey");
	});
	
	 gridster = $('.gridster ul').gridster({
		widget_margins: [30,30],
		widget_base_dimentions: [140,140],
		min_cols: 3	,
		resize: {enabled:true}
		}).data(gridster);

	 	var canvas = document.getElementById("mycanvas-line");
  		//canvas.width = $("#parent-to-can").width();
  		//canvas.height = $("#parent-to-can").height();

}

$(document).ready(main);

// charting function -- data --type of chart--canvas to render to--
var createChart = function(data, type, canvasId){
	var ctx = document.getElementById(canvasId).getContext('2d');
	var chart = new Chart(ctx, {type:type,data:data}); 

};