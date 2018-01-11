// ----------------------------------------------
// 1 - Déclaration des fonctions :

// 1e fonction (déclanchée par le click sur myButton) :
function etape1() {
	// Rajout d'un id="centre" et d'un style="display:none" à la section voulue, (cf. index.html)
	// Selection de cette élément par son Id, et remplacement de "none" en "block" (afficher)
	document.getElementById('centre').style.display='block' ;

	// Rajout d'un id="myButton" au bouton de départ (cf. index.html)
	// Selection par l'Id, et remplacement de block en "none" (cacher)
	document.getElementById('myButton').style.display='none' ;
} // <-- Fin de étape 1

// 2e fonction (déclanchée par le click sur goSearch) :
function etape2() {
	// Déclaration de la variable qui va récupérer ce qu'il y a dans l'input :
	let motsTape = document.querySelector('input').value;
	// from method 5 --> https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
	// document.getElementById('textbox_id').value <-- Ne marche pas (Method 1) ou peut-être, mais pas le temps

	// Remplaçons tous les espaces de cette variable par des "+" (sans devoir faire de tableau!)
	motsTape = motsTape.replace(/\s/g,"+");

	// Optionnel, mais pratique pour vérifier que la ligne suivante va marcher
	console.log(motsTape);

	// Remplacement de l'adresse de la page actuelle par le résultat d'une page Google avec la variable
	window.location.replace("https://google.fr/#q="+motsTape);
}

// 3e fonction (déclanchement d'une alerte au bout de 10" passée sur la page) :
setTimeout(function(){
	alert("Regarde ce site si tu aimes les poulpes japonais : http://lostrespuntosblog.blogspot.fr/2011/02/2-girls-1-octopus.html");
	},10000);

//Fin de déclaration des fonctions !
// ----------------------------------------------

// ----------------------------------------------
//2 - Déclaration des évènements :

// déclenche la fonction etape 1 (ci-dessus) si click sur le premier bouton 
myButton.onclick = function(){
	etape1() ;
}

// déclenche la fonction etape 2 (ci-dessus) si click sur le bouton "Recherche gogole"
goSearch.onclick = function(){
	etape2();
}
//Fin des évènements possibles !
// ----------------------------------------------