var score=0;
var Life=3;
var directionEnnemy="droite";
var deplac=0;
var paddingbloc=0;
var timerInterval=1000;
var speedInterval=0;
var timer=null;
var moveMissilet=0;
var timerMiss=null;
var actionMissile=false;

function startGame(){
	score=0;
	Life=3;
	deplac=0;
	paddingbloc=0;
	speedInterval=timerInterval;
	timer=null;
	directionEnnemy="droite";
	genEnnemy();
	element = document.getElementById("player");
	container=document.getElementById("bigdiv");
	boutonPlay=document.getElementById("accueil");
	document.getElementById('DIV1').style.top=container.offsetHeight+"px";

	boutonPlay.style.display="none";
	document.getElementById("gameOver").style.display="none";
	document.getElementById("score").style.display="initial";
	document.getElementById("vie").style.display="initial";
	document.getElementById("player").style.display="block";

	taillecontainer=container.offsetWidth;
	taillecontainer=taillecontainer/2;
	element.style.marginLeft=((document.getElementById("player").offsetWidth/2))+"px";
	document.getElementById("DIV1").style.marginLeft=(taillecontainer-(document.getElementById("DIV1").offsetWidth/2))+"px";


	TimerGame();
	changScore()



}

function genEnnemy(){
	var iDiv=document.createElement("div");
	container=document.getElementById("blocmob");
	contain=""
	taillecontainer=container.offsetWidth;
	taillecontainer=taillecontainer/13;
	deplac=taillecontainer;
	taillemargin=taillecontainer/24;

	for (var i = 1; i <=60; i++) {
		var iDiv=document.createElement("div");
		if (i<=12){
			iDiv.id="bigmob"+i;
			iDiv.className="bigennemy";

			iDiv.style.backgroundImage = "url('img/bigmob1.png')";
			/*iDiv.style.backgroundImage = "url('img/bigmob2.png')";*/
			iDiv.style.backgroundSize = "110%";
		}

		else if (i<=36){
			iDiv.id="medmob"+i;
			iDiv.className="medennemy";

			iDiv.style.backgroundImage = "url('img/medmob1.png')";
			/*iDiv.style.backgroundImage = "url('img/medmob2.png')";*/
			iDiv.style.backgroundSize = "110%";
		}

		else{
			iDiv.id="minimob"+i;
			iDiv.className="miniennemy";
			iDiv.style.backgroundImage = "url('img/minimob1.png')";
			/*iDiv.style.backgroundImage = "url('img/minimob2.png')";*/
			iDiv.style.backgroundSize = "110%";


		}
		iDiv.style.width=taillecontainer+"px";
		/*iDiv.style.padding="1px";*/
		iDiv.style.margin=taillemargin+"px";
		iDiv.style.display="inline-block";
		/*iDiv.style.backgroundColor="red";*/

		iDiv.style.height=taillecontainer+"px";


		document.getElementById("blocmob").appendChild(iDiv);

	}
}


function moveEnnemy(){

	element = document.getElementById("blocmob");
	elementParent=document.getElementById("container");
	margeDroite=elementParent.offsetWidth-element.offsetWidth;
	elementDroite=element.offsetLeft;
	margeDroite-=deplac;
	if (directionEnnemy=="droite"){
		elementDroite+=deplac;
		element.style.marginLeft=elementDroite+"px";
	}
	else
	{
		elementDroite-=deplac;
		element.style.marginLeft=elementDroite+"px";
	}
	if (elementDroite<deplac){
		paddingbloc+=deplac;
		directionEnnemy="droite";
		element.style.paddingTop=paddingbloc+"px";
	}else if (elementDroite>margeDroite){
		paddingbloc+=deplac;
		directionEnnemy="gauche";
		element.style.paddingTop=paddingbloc+"px";
	}
	if (element.offsetHeight>=elementParent.offsetHeight){

		gameOver();
	}

}

function TimerGame(){
	timer=setInterval(moveEnnemy, timerInterval);

}

// function voirScore(target) {
// 	target.classList.toggle("seescore");
// }

function gameOver(){
	document.getElementById("accueil").style.display="block";
	document.getElementById("gameOver").style.display="block";
	document.getElementById("bigdiv").style.display="hidden";
	document.getElementById("blocmob").style.paddingTop="0px";
	document.getElementById("blocmob").style.marginLeft="20px";
	document.getElementById("vie").style.display="none";
	document.getElementById("player").style.display="none";


	clearInterval(timer);
	suppDiv();
}

function victoire(){
	document.getElementById("accueil").style.display="block";
	document.getElementById("victoire").style.display="block";
	document.getElementById("bigdiv").style.display="hidden";
	document.getElementById("blocmob").style.paddingTop="0px";
	document.getElementById("blocmob").style.marginLeft="20px";
	document.getElementById("vie").style.display="none";
	document.getElementById("player").style.display="none";


	clearInterval(timer);
	suppDiv();
}

function suppDiv(){

	for (var i = 1; i <=60; i++) {
		var obj = document.getElementById("blocmob");
		if (i<=12){
			var old = document.getElementById("bigmob"+i);
		}else if (i<=36){
			var old = document.getElementById("medmob"+i);
		}else{
			var old = document.getElementById("minimob"+i);

		}
		obj.removeChild(old);
	}
}




document.addEventListener('keydown',
function(e)
{ console.log(e);
 var div = document.getElementById('player');
 var monMiss=document.getElementById('DIV1');
 var elementParent=document.getElementById("blocplayer");
    var marge =elementParent.offsetWidth-div.offsetLeft;

 if(e.keyCode == 37)
    {      
        var i = div.offsetLeft;
  			if (i>=0){
        i-=10;
        div.style.marginLeft = i + "px";

    }
  }

    else if(e.keyCode == 39)

    {
        var i = div.offsetLeft;
  			if (i <= elementParent.offsetWidth) {
        i+=10;
        div.style.marginLeft = i + "px";

    }


 }else if (e.keyCode==32 && actionMissile==false){

	monMiss.style.display="block";

		document.getElementById('DIV1').style.top=document.getElementById("bigdiv").offsetHeight+"px";
	 	if (timerMiss ==null)
			{
				TimerMoveMiss();
	 		}


		}


		if (actionMissile==false){

			  			if (i>=0){
			        i-=10;
			        monMiss.style.marginLeft = i + "px";}

			  			if (i <= elementParent.offsetWidth) {
			        i+=10;
			        monMiss.style.marginLeft = i + "px"; }



		}
   
}, false);

function TimerMoveMiss(){
console.log(timerMiss);
	timerMiss=setInterval(MoveMissi, 50);

}
function colliMissi(){
	var monMiss=document.getElementById('DIV1');
	if (parseInt(monMiss.style.top)<=0){
		monMiss.style.display="none";
		actionMissile=false;
		clearInterval(timerMiss);
		timerMiss=null;

	}

}
function MoveMissi(){

	moveMissilet=parseInt(document.getElementById('DIV1').style.top);
	moveMissilet-=20;
	actionMissile=true;
	document.getElementById('DIV1').style.top =moveMissilet+"px";
	colliMissi();
}

function crashMiss(nameChamp){
	var obj = document.getElementById("blocmob");
	var old=document.getElementById(nameChamp);
	if (nameChamp.startsWith("bigmob")){
		score+=150;

	} else if (nameChamp.startsWith("medmob")){
		score+=100;

	}else if (nameChamp.startsWith("minimob")){
		score+=50;

	}
	obj.removeChild(old);



	changScore();



}

function changScore(){
	document.getElementById("score").innerHTML="Ton score est de : "+score;
	if (score<2000) {
		document.getElementById("score").style.color="red";
	}
	if (score>2000) {
		document.getElementById("score").style.color="yellow";
	}
	if (score>4000) {
		document.getElementById("score").style.color="green";
	}
}

function changVie(){
	document.getElementById("vie").innerHTML="Vie : "+Life;
}

/*function move(e)
{
	if(window.event) // IE
	{
		ek = window.event.keyCode;

	}
}*/
