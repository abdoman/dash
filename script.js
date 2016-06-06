var main = function(){
	$('#add-button').click(function(){
			alert("hey");
	});
	
	var gridster = $('.gridster ul').gridster({
		widget_margins: [1,1],
		widget_base_dimentions: [140,140],
		max_cols: 4,
		resize: {enabled:true}
		}).data(gridster);

}

$(document).ready(main);

// charting function -- data --type of chart--canvas to render to--
var createChart = function(data, type, canvasId){
	var ctx = document.getElementById(canvasId).getContext('2d');
	var chart = new Chart(ctx, {type:type,data:data}); 

};