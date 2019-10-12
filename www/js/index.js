 
var choice;

 function random(){
 
var mp3Array = new Array;
 
mp3Array[0] = "cat.mp3";
 
mp3Array[1] = "Angry-dog.mp3";
 
mp3Array[2] = "cow.mp3";
 
mp3Array[3] = "bata.mp3";
 
mp3Array[4] = "mank.mp3";

mp3Array[5] = "Rooster-noise.mp3";


var person = prompt("Please enter your name", "hey you!!");
  if (person != null) {
        document.getElementById("demo").innerHTML =
        person + "! choose the right animal...";
    }
 
 choice = Math.floor(Math.random() * mp3Array.length);
 
document.getElementById("sound").innerHTML =("<audio    id='son' src='js/sound/"+mp3Array[choice]+"' autoplay='autoplay' class='playSound'></audio>");

}
function f1(r)
	{
		if(r==choice)
		{
			var yes=document.getElementById("yes");
			yes.play();
			if(confirm("Good..play again!!")== true)
			{AutoRefresh();}
		else{AutoRefresh();ExitApp();}
		}
		if(r!=choice)
		{
			var no=document.getElementById("no");
			no.play();
		if(confirm("wrong!!..play again!!")== true)
			{AutoRefresh();}
		else{AutoRefresh();ExitApp();}
		}
		
	}
	  function AutoRefresh() {
            location.reload(true);
            }
function ExitApp()
{
navigator.app.exitApp();
}





 