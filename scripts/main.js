// -------------------------
//Déclaration des fonctions :
function etape1() { 
	document.getElementById('centre').style.display='block' ;
	document.getElementById('myButton').style.display='none' ;
}

function etape2() {
	let motsTape = document.querySelector('input').value;
	// from method 5 https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
	// document.getElementById('textbox_id').value
	
	motsTape = motsTape.replace(/\s/g,"+");


	window.location.replace("https://google.fr/#q="+motsTape);
	console.log(motsTape);
}

setTimeout(function(){
	alert("Regarde ce site si tu aimes les poulpes : http://lostrespuntosblog.blogspot.fr/2011/02/2-girls-1-octopus.html");
	},10000);
// -------------------------
//Déclaration des évènements :

myButton.onclick = function(){
	etape1() ;
}


goSearch.onclick = function(){
	etape2();
}

