$(function() {
	var tri = $('div#svg svg').svgTriangles({
		size: {w: 100, h: 100},
		speed: 10,
	});
	
	tri.switchRandomOn(1);
	
	setTimeout(function() {
		$('div#svg img').show();
		tri.switchRandomOff();
	}, 2000);
	
	setTimeout(function() {
		tri.switchRandomOn();
	}, 8000);
	
});