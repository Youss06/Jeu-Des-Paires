var tab = ["img/52.jpg","img/125.jpg","img/bart.jpg","img/burns.jpg","img/homer.jpg","img/lisa-simpson-profile.jpg","img/margepost1.jpg"];
var precedImg = ""; var precedAttr = "";										//Variables de "sauvegardes"
var click = 0;											//Varible gerant les click
// var great = 0; var lose = 0;							// Variable victoire et défaite
// var chron;												//Contiendra le chronometre
// var temps = 1; var secondes = 60;
// var chrono = document.getElementById("chrono");
var partieEnCours = true;								//Gere le lancement du chronometre
var ready = true;										//Gere l'accès au clicks

function shuffle(a) {										//Fonction shuffle: melange le tableau tab
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
shuffle(tab);

function retourne(id, name){						//FONCTION RETOURNE
	// if(partieEnCours){									//Au premier click, lancement du chrono
		// chron = setInterval("chronometre()", 1000);		//Appelle la fonction chronometre toute les secondes
		// partieEnCours = false							//Rend la condition fausse pour éviter les multiple lancement de setInterval
	// }
	if(ready){											//Si ready = true, alors on peu cliquer
		name = document.getElementById(name);			//Recupération de l'image qui appelle la fonction
		for(i = 1; i <= tab.length; i++){
			switch(id){
				case i:
					name.src =tab[i-1];					//Attribution des sources du tableau à chaque images cliquées
					var attr = "retourne("+(i)+", '"+(i)+"')";
					name.removeAttribute("onclick");
					if(click == 0){						//Au premier click et seulement à celui-ci
						precedImg = name;				//Attribution d'une valeur "sauvegarde" pour comparaison
						precedAttr = attr;
						click = 1;						//Empeche de réécrire la sauvegarde au second click
					}
					else{
						click = 2;
					}
				break;
			}
		}
	 	if(name.src != precedImg.src && click == 2){
	 		ready = false;								//On empeche les click durant la phase de comparaison
			setTimeout(function(){						//Permet de lancer la fonction avec un retard choisit(ici 2secondes)
				name.src = "img/jeu_de_carte_katag_mystere-220x300.png";			//Retourne les cartes pour les mettre à l'envers
				name.setAttribute("onclick", attr);
				precedImg.src = "img/jeu_de_carte_katag_mystere-220x300.png";
				precedImg.setAttribute("onclick", precedAttr);
				precedImg = "";							//Effacement de la "sauvegarde" pour la prochaine phase de click
				click = 0;
				ready = true;							//Réautorisation des clicks
			}, 2000);
		}
		else if(name.src == precedImg.src && click == 2){		//Si 2 images sont identiques
			click = 0;
			// great++;											//Ajoute un point
		}
	}
	// victoire();
}

// function chronometre(){
// 	if(temps >= 0){
// 		secondes--;
// 		if(secondes >= 10)
// 			document.getElementById("chrono").innerHTML = temps+":"+secondes;
// 		else if(secondes < 10){
// 			document.getElementById("chrono").innerHTML = temps+":0"+secondes;
// 			if(secondes == 0){
// 				secondes = 60;
// 				temps--;
// 			}
// 		}
// 	}
// 	else{
// 			lose = 1;
// 			victoire();
// 			clearInterval(chron);
// 		}
// }
//
// function victoire(){
// 	if(great == 6){
// 		clearInterval(chron);
// 		recommencer("gagné");
//
// 	}
// 	else if(lose == 1){
// 		ready = false;
// 		clearInterval(chron);
// 		recommencer("perdu");
// 	}
// }

// function recommencer(victoire){
// 	clearInterval(chron);
// 	var retry = true;
// 	if(victoire)
// 		retry = confirm("Vous avez "+victoire+" !\n Recommencer ?");
// 	if(retry){
// 		var ZJeu = document.getElementsByClassName("carte");
// 		for(i = 0; i < ZJeu.length; i++){
// 			ZJeu[i].src = "img/jeu_de_carte_katag_mystere-220x300.png";
// 			ZJeu[i].setAttribute("onclick", "retourne("+(i+1)+", '"+(i+1)+"')");
// 		}
// 		great = 0; lose = 0;
// 		ready = true;
// 		partieEnCours = true;
// 		temps = 1; secondes = 60;
// 		document.getElementById("chrono").innerHTML = "2:00";
// 		shuffle(tab);
// 	}
// 	else{
// 		ready = false;
// 		great = 0; lose = 0;
// 	}
// }
