
//         									      			 +---------------------------+
                     //                	      	        	|   made by subrat sahu     |
                     //          +---------------------------+	

$(document).ready(function(){
    $(function(){

        var on=false;
        var start=false;
        var strict=false;
        var order=[];
        var chorder=[];
        var x;
        var c;
        var i,j,k=0;
        var fuk=true;
        var strict=false;

        var id=["tl","tr","br","bl"];
        

        $("#check").click(function(){
            if(!on)
                on=true;
            else
                on=false;

           // console.log(on);
        });


        $(".ff").click(function(){
            if(on){
                if(!start)
                    start=true;
                else
                    start=false;}
            if(start&&on){
      
$("#strict").click(function(){
          if(strict){strict=false;}
          else{strict=true;}
           
    	if(strict){
document.getElementById("bulb2").style.background="blue";
            	}
            	else{
document.getElementById("bulb2").style.background="lightgrey";
            	}
        });
console.log(strict);
            	

                i=0;
                document.getElementById("bulb1").style.background="red";
                hello();

                 
                $(".it").click(function(){
                	clearInterval(c);
                	var v=0;
                    var de=0;
                    pl(this.id);
                    chorder.push(this.id);
                   
                        for( v=0;v < chorder.length;v++){
                        	
                        	console.log();
                        	
                        	console.log(chorder[v]+' == '+order[v]);
                        	if(chorder[v]!=order[v]){
                        		console.log("br0]{e");
                        		de=1;
                        		break;
                        		
                        	}
                        }
                        if(on==false||start==false){
                chorder=[];
                order=[];
            }
                /// console.log(de);
                        if(de==1){
                          eren();
                          chorder=[]
                        }
                        console.log(v);
                        if(v==order.length){
                        	hello();
                        	chorder=[];
                        }
                        if(strict&&de==1){
                        	clearInterval(c);
                        	order=[];
                        	chorder=[];
                        	hello();
                        	console.log('order+');
                        }
});   
            }
            else{
            	chorder=[];
                clearInterval(c);
                order=[]; document.getElementById("bulb1").style.background="lightgrey" ;
                document.getElementById(id[0]).style.background="red";
                document.getElementById(id[1]).style.background="green";
                document.getElementById(id[2]).style.background="yellow";
                document.getElementById(id[3]).style.background="blue";
            }
        });

        function follow(){
            if(on==false||start==false){
                clearInterval(x);
            }
            document.getElementById(id[0]).style.background="red";
            document.getElementById(id[1]).style.background="green";
            document.getElementById(id[2]).style.background="yellow";
            document.getElementById(id[3]).style.background="blue";
            var d=Math.floor((Math.random() * 4));
          //  console.log(id[d]);

            order.push(id[d]);

            //reds.play();

        }


        /*https://s3.amazonaws.com/freecodecamp/simonSound2.mp3, https://s3.amazonaws.com/freecodecamp/simonSound3.mp3, https://s3.amazonaws.com/freecodecamp/simonSound4.mp3*/

        function pl(d){
            if(d=="tl"){document.getElementById(id[0]).style.background="pink";
                var reds = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
                reds.play();}
            else if(d=="tr"){document.getElementById(id[1]).style.background="springgreen";
                var reds = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
                reds.play();}
            else if(d=="br"){document.getElementById(id[2]).style.background="orange";
                var reds = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
                reds.play();}
            else if(d=="bl"){document.getElementById(id[3]).style.background="aqua";
                var reds = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
                reds.play();}

            setTimeout(function(){
                document.getElementById(id[0]).style.background="red";
                document.getElementById(id[1]).style.background="green";
                document.getElementById(id[2]).style.background="yellow";
                document.getElementById(id[3]).style.background="blue";
            },1000);


        }

        function repeat(){
            if(!j){
                j=0;
                pl(order[0]);
                j++;
                }

            else if(j==order.length){
                j=0;
               // console.log(j);
            }
            else {
                pl(order[j]);
                j++;
            //    console.log(j);
            }
          //  console.log(order[j]);
        }
        function hello(){
            var d=Math.floor((Math.random() * 4));
            order.push(id[d]);
            //console.log(order);
            setTimeout(function(){
            	j=0;
                    c=setInterval(function(){
                        repeat();
                    },2000);
                }
                ,2000);
            // alert('h');
        }
        function eren(){
           
            console.log("erenT");
            setTimeout(function(){
                    c=setInterval(function(){
                        repeat();
                    },2000);
                }
                ,2000);
            // alert('h');
        }

    })
})
;