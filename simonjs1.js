$(document).ready(function(){
$(function(){

var start=false;
var on=false;
var strict=false;
var order=[];
var chorder=[];
var c,j,v,d;
var id=["tl","tr","br","bl"];
$("#check").click(function(){
	//sound("tl");
	if(on)
		on=false;
	else
		on=true;

$(".ff").click(function(){
	if(on){
		if(start)
			start=false;
		else
			start=true;
	console.log(start+' '+on);}

$("#strict").click(function(){
	if(start){
		if(strict) strict=false;
		else strict=true;
	}
})


if(start&&on){
	j=undefined;
	c=undefined;
	d=undefined;
	/*console.log('on='+on);
	console.log('strt='+start);
	console.log('order='+order);
	console.log('chorder='+chorder);
	console.log('c='+c);
	console.log('v='+v);
	console.log('j='+j);
*/
	document.getElementById("bulb1").style.background="red";
	v=0;
   makeOrder();
   $(".it").unbind().click(function(){
   	clearInterval(c);
   	clearInterval(d);
    	var de=0;
   	 sound(this.id);
   	// console.log("chala");
     chorder.push(this.id);
     console.log('order='+order);
     console.log('chorder='+chorder);
     for(v=0;v<chorder.length;v++){
     	if(order[v]!=chorder[v]){
     		de=1;
     		break;
     	}
     }

if(de==1){
	chorder=[];

d =setInterval(function(){
    repeat(); console.log('de=1');
	},3000);
}
if(v==order.length){ makeOrder();
chorder=[];}

   });
}
else{
	order=[];
	chorder=[];
	v=undefined;j=undefined;
	clearInterval(c);
	clearInterval(d);
	document.getElementById("bulb1").style.background="lightgrey";
}
});
});
//hello==makeorder
function makeOrder(){

	clearInterval(c);
  var d=Math.floor((Math.random() * 4));
  order.push(id[d]);
 setTimeout(function(){
            	j=0;
                    c=setInterval(function(){
                        repeat(); 
                        console.log('makeOrder');
                    },3000);
                }
                ,2000);}
 //repeat=repeat
  function repeat(){
    if(!j){j=0;
           sound(order[0]);
                j++;}
            else if(j==order.length){
                j=0;
            }
            else {
                sound(order[j]);
                j++;} }

                //pl==sound

function sound(a){
switch(a){
	case "tl":document.getElementById(id[0]).style.background="pink";
                var reds = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
                reds.play();
                break;
    case "tr": document.getElementById(id[1]).style.background="springgreen";
                var reds = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
                reds.play();
                 break;           
    case "br":document.getElementById(id[2]).style.background="orange";
                var reds = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
                reds.play();
                break;
    case "bl":document.getElementById(id[3]).style.background="aqua";
                var reds = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
                reds.play();
                break;    
   	default:  break;
}
            setTimeout(function(){
                document.getElementById(id[0]).style.background="red";
                document.getElementById(id[1]).style.background="green";
                document.getElementById(id[2]).style.background="yellow";
                document.getElementById(id[3]).style.background="blue";
            },1000);
}


});

})
