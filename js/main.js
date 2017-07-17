var tab = ["img/52.jpg","img/125.jpg","img/bart.jpg","img/burns.jpg","img/homer.jpg","img/lisa-simpson-profile.jpg","img/margepost1.jpg","img/52.jpg","img/125.jpg","img/bart.jpg","img/burns.jpg","img/homer.jpg","img/lisa-simpson-profile.jpg","img/margepost1.jpg"];
var precedImg = "";
var precedAttr = "";
var click = 0;

var partieEnCours = true;
var ready = true;

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
shuffle(tab);

function retourne(id, name){

	if(ready){
		name = document.getElementById(name);
		for(i = 1; i <= tab.length; i++){
			switch(id){
				case i:
					name.src =tab[i-1];
					var attr = "retourne("+(i)+", '"+(i)+"')";
					name.removeAttribute("onclick");
					if(click == 0){
						precedImg = name;
						precedAttr = attr;
						click = 1;
					}
					else{
						click = 2;
					}
				break;
			}
		}
	 	if(name.src != precedImg.src && click == 2){
	 		ready = false;
			setTimeout(function(){
				name.src = "img/jeu_de_carte_katag_mystere-220x300.png";
				name.setAttribute("onclick", attr);
				precedImg.src = "img/jeu_de_carte_katag_mystere-220x300.png";
				precedImg.setAttribute("onclick", precedAttr);
				precedImg = "";
				click = 0;
				ready = true;
			}, 1000);
		}
		else if(name.src == precedImg.src && click == 2){
			click = 0;

		}
	}

}
