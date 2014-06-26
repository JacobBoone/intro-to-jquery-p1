$(document).on('ready', function() {
  


// listen for click events on button
  $('#badButton').on('click', function(){
  	$('body').append("<p>NOW THE <strong>ZOMBIES</strong> WILL GET US!!!</p>")
  	console.log('YOU JUST RELEASED THE ZOMBIES!!!');



	});

 $('#safeButton').on('click', function(){
  	$('body').append("<h1>THE <strong>NUKES</strong> have been initiated</h1>")
  	console.log('Lets nuke the b\*st\*rds');

	});


$('#listButton').on('click', function(){



	var lastArray = ["Get your weapons!", "Get your Food!", "Shoot everything that moves!!"];
	
	for (var i = 0; i < lastArray.length-2; i++) {
		$('body').append("<li>Get your weapons!</li>");
		$('body').append("<li>Get your Food!</li>");
		$('body').append("<li>Shoot everything that moves!!</li>");

			console.log('Kill them all');
		};
	});



});