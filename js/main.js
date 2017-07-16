var  choix1= "";
var choix2= "";
var images= ["img/52.jpg","img/125.jpg","img/bart.jpg","img/burns.jpg","img/homer.jpg","img/lisa-simpson-profile.jpg","img/margepost1.jpg"]

function choix(x) {
document.getElementsByName('img').innerHTML = choix1;
document.getElementsByName('img').innerHTML = choix2;
game();
}

function game(choix){
var choix1 = Math.floor((Math.random() * 7) + 1);

if(choix1==1){
  choix1="img/52.jpg";
} else if (choix1==2){
   choix1="img/125.jpg";
} else if (choix1==3){
   choix1="img/bart.jpg";
}
else if (choix1=4){
   choix1="img/burns.jpg";
}
else if (choix1==5){
   choix1="img/homer.jpg";
}
else if (choix1==6){
   choix1="img/lisa-simpson-profile.jpg";
}
else {
 choix1="img/margepost1.jpg";
}
document.getElementsByTagName('img').innerHTML = choix1;
}
