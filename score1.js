var team1,team2,overs,toss1,toss2,tossvalue,toss,count=0,tosswon,tossloss,run=0,score=0,wickets=0;
var balls=0,ballscore=0,totalballs=0,matchtied=false,extra=0,target=0,overdots=0,limit,temp=0,key=3,innings=1;
var bowlername,batsmanname,batsman1name,batsman2name,batting,bowling=4,strike=1,unstrike=2,j=0,k=0,l=0;
var batinfield,bowlinfield;
  var aplayername=new Array();  
  var bplayername=new Array(); 
  var abowlername=new Array();  
  var bbowlername=new Array();
  var bballs=new Array();
  var b1balls=new Array();
  var bovers=new Array();
  var b1overs=new Array();
  var bwickets=new Array();
  var b1wickets=new Array();
  var bmaiden=new Array();
  var b1maiden=new Array();
  var beconomy=new Array();
  var b1economy=new Array();
  var bruns=new Array();
  var b1runs=new Array();
  var pruns=new Array();
  var p1runs=new Array();
  var pballs=new Array();
  var p1balls=new Array();
  var psrate=new Array();
  var p1srate=new Array();
  var bowl=new Array();
  var bowl1=new Array();
  var bat=new Array();
  var bat1=new Array();
  var op=new Array();
  var i=0;
  for(var it=1;it<=11;it++){
  bballs[it]=0,bovers[it]=0,bwickets[it]=0,bmaiden[it]=0;
  beconomy[it]=0,bruns[it]=0,pruns[it]=0,pballs[it]=0,
  psrate[it]=0,bowl[it]=false,bat[it]=false;
  b1balls[it]=0,b1overs[it]=0,b1wickets[it]=0,b1maiden[it]=0;
  b1economy[it]=0,b1runs[it]=0,p1runs[it]=0,p1balls[it]=0,
  p1srate[it]=0,bowl1[it]=false,bat1[it]=false;
  }
function swap(){
  temp=strike;
  strike=unstrike;
  unstrike=temp;
}
function game(){
  team1=document.getElementById("team1").value;
  team2=document.getElementById("team2").value;
  document.getElementById("label1").innerHTML=team1;
  document.getElementById("label2").innerHTML=team2;
  document.getElementById("label1").style.textTransform = "capitalize";
  document.getElementById("label2").style.textTransform = "capitalize";
}
function playername(){
  for(it=1;it<=11;it++){
    aplayername[it]=document.getElementById("player"+[it]+"team1").value;
    bplayername[it]=document.getElementById("player"+[it]+"team2").value;
    abowlername[it]=aplayername[it];
    bbowlername[it]=bplayername[it];
  }
}
function toss(){
  overs=document.getElementById("overs").value;
  toss1=document.getElementById("toss1").value;
  toss2=document.getElementById("toss2").value;
  tossvalue=Math.floor(Math.random() * 10);
  toss1=toss1.toLowerCase();
  toss2=toss2.toLowerCase();
  limit=overs*6
  if(tossvalue<5){
    toss="heads";
  }
  else{
    toss="tails";
  }
  if(toss1==toss){
    tosswon=team1;
    tossloss=team2;
    document.getElementById("tosswin").innerHTML=tosswon+" Won The Toss";
    document.getElementById("tosswin").style.textTransform = "capitalize";
  }
  else if(toss2==toss){
    tosswon=team2;
    tossloss=team1;
    document.getElementById("tosswin").innerHTML=tosswon+" Won The Toss";
    document.getElementById("tosswin").style.textTransform = "capitalize";
  }
  document.getElementById("choice").placeholder = tosswon+" can choose now to bat or ball";
  document.getElementById("choice").style.textTransform = "capitalize";
}
function match(){
  var tosswonchoice=document.getElementById("choice").value;
  if((tosswonchoice.toLowerCase())=="bat"){
    batinfield=tosswon.substring(0,3);
    bowlinfield=tossloss.substring(0,3);
  }
  else{
    bowlinfield=tosswon.substring(0,3);
    batinfield=tossloss.substring(0,3);
  }
}
function firstover(){
  bowlername=document.getElementById("1bowlername").value;
  var bow1=bowlername.toLowerCase();
for(var it=1;it<=11;it++){
if(abowlername[it]==bow1){
bowling=it;
bowl[it]=true;
}
if(bbowlername[it]==bow1){
  bowling=it;
  bowl1[it]=true;
}
}
}
function overup(){
  bowlername=document.getElementById("bowlername").value;
  $(".overup").removeClass("overupactive");
  $(".container").width("0px");
  $(".step-6").addClass("active");
swap();
var bow1=bowlername.toLowerCase();
for(var it=1;it<=11;it++){
  if(abowlername[it]==bow1){
  bowling=it;
  bowl[it]=true;
  }
  if(bbowlername[it]==bow1){
    bowling=it;
    bowl1[it]=true;
  }
  }
}
function wicket(){
  batsmanname=document.getElementById("batsmanname").value;
  var bat=batsmanname.toLowerCase();
  for(var it=1;it<=11;it++){
    if(aplayername[it]==bat){
    batting=it;
    bat[it]=true;
    }
    if(bplayername[it]==bat){
      batting=it;
      bat1[it]=true;
      }
    }
}
function play(){
  if(wickets<10){
  if(i<limit){
ballscore= document.getElementById("input1").value;
i++;
totalballs++;

if(i%6==0&&i!=limit){
  j++;
  b1overs[bowling]+=1;
  overdots=0;
  $(".step-6").removeClass("active");
  $(".container").width("60%");
  $(".overup").addClass("overupactive");
}
else{
  $(".step-6").addClass("active");
  $(".container").width("0px");
  $(".overup").removeClass("overupactive");
}
console.log(j);
if(innings==1){
score1();
document.getElementById("main").innerHTML=batinfield+" - "+run+"/"+wickets;
document.getElementById("overs1").innerHTML=Math.floor(i/6)+"."+i%6;
document.getElementById("bat1").innerHTML=aplayername[strike]+"-"+pruns[strike]+"("+pballs[strike]+")";
document.getElementById("bat2").innerHTML=aplayername[unstrike]+"-"+pruns[unstrike]+"("+pballs[unstrike]+")";
document.getElementById("bowler").innerHTML=bplayername[bowling]+"-"+b1runs[bowling]+"("+b1balls[bowling]+")";
console.log(ballscore+" "+run+" "+i);
  }
}
else if(i==limit){
     bat[1]=true;
       bat[2]=true;
       target=run+1;
        for(var it=1;it<=11;it++)
        {
            if(bat[it]==true&&pruns[it]>0)
            {
               psrate[it]=(pruns[it]*100/pballs[it]);
            }
            
        }
  innings++;
  document.getElementById("overs1").innerHTML=""
  document.getElementById("main").innerHTML="match over";
  document.getElementById("bat1").innerHTML="";
document.getElementById("bat2").innerHTML="";
document.getElementById("bowler").innerHTML="";
}
if(totalballs==limit-1){
  b1overs[bowling]+=1;
}
}
}
function score1(){
switch (ballscore)
    {
    case "1":
			                  run=run+1;
                        pruns[strike]+=1;
                        pballs[strike]+=1;
                        b1runs[bowling]+=1;
                        b1balls[bowling]+=1;
                        swap();
                        break;
		
    case "2":
			                  run=run+2;
                        pruns[strike]+=2;
                        pballs[strike]+=1;
                        b1runs[bowling]+=2;
                        b1balls[bowling]+=1;
			                  break;
		
    case "3":
                        run=run+3;
                        pruns[strike]+=3;
                        pballs[strike]+=1;
                        b1runs[bowling]+=3;
                        b1balls[bowling]+=1;
                        swap();
                        break;
		
    case "4":
                        run=run+4;
                        pruns[strike]+=4;
                        pballs[strike]+=1;
                        b1runs[bowling]+=4; 
                        b1balls[bowling]+=1;
			                  break;
		
    case "5":
			                  run=run+5;
                        pruns[strike]+=5;
                        pballs[strike]+=1;
                        b1runs[bowling]+=5;
                        b1balls[bowling]+=1;
			                  swap();		
                        break;
		
    case "6":
			                  run=run+6;
                        pruns[strike]+=6;
                        pballs[strike]+=1;
                        b1runs[bowling]+=6;
                        b1balls[bowling]+=1;
			                  break;
		
    case "wide":
			                  run=run+1;
                        extra+=1;
			                  i-=1;
                        //opc--;
                        totalballs--;
                        pruns[strike]+=0;
                        pballs[strike]+=0;
                        b1runs[bowling]+=1;
			                  break;
                        
    case "dead":
			                  run=run+0;
                        extra+=0;
			                  i-=1;
                        //opc--;
                        totalballs--;
                        pruns[strike]+=0;
                        pballs[strike]+=0;
                        b1runs[bowling]+=0;
			                  break;                    
		
    case "noball":
                        extra+=1;
                        i-=1;
                        //opc--;
                        run=run+1;
                        totalballs--;
                        pruns[strike]+=1;
                        pballs[strike]+=0;
			                  break;
                        
    case "noball1":
                        extra+=1;
                        i-=1;
                        run=run+2;
                        totalballs--;
                        //opc--;
                        b1runs[bowling]+=1;
                        pruns[strike]+=2;
                        pballs[strike]+=0;
			                  break;
                        
    case "noball2":
                        extra+=1;
                        i-=1;
                        run=run+3;
                        totalballs--;
                        //opc--;
                        b1runs[bowling]+=3;
                        pruns[strike]+=3;
                        pballs[strike]+=0;
			                  break;
                        
    case "noball4":
                        extra+=1;
                        i-=1;
                        run=run+5;
                        totalballs--;
                        //opc--;
                        b1runs[bowling]+=5;
                        pruns[strike]+=5;
                        pballs[strike]+=0;
			                  break;
                        
    case "noball6":
                        extra+=1;
                        i-=1;
                        run=run+7;
                        totalballs--;
                        //opc--;
                        b1runs[bowling]+=7;
                        pruns[strike]+=7;
                        pballs[strike]+=0;
			                  break;
		
    case "legby":
                        run=run+1;
                        extra+=1;
                        b1runs[bowling]+=1;
                        b1balls[bowling]+=1;
                        pruns[strike]+=0;
                        pballs[strike]+=0;
			                  break;
                            
    case "stump":
                        wickets++;
                        overdots++;
                        pballs[strike]+=1;
                        b1runs[bowling]+=0;
                        b1wickets[bowling]+=1;
                        b1balls[bowling]+=1;
                        temp=strike;
                        strike=key;
                        bat[key]=true;
                        key++;
                        break;
                        
    case "lbw":
                        wickets++;
                        overdots++;
                        pballs[strike]+=1;
                        b1runs[bowling]+=0;
                        b1wickets[bowling]+=1;
                        b1balls[bowling]+=1;
                        temp=strike;
                        strike=key;
                        bat[key]=true;
                        key++;
                        break;
                        
    case "bowled":
                        wickets++;
                        overdots++;
                        pballs[strike]+=1;
                        b1runs[bowling]+=0;
                        b1wickets[bowling]+=1;
                        b1balls[bowling]+=1;
                        temp=strike;
                        strike=key;
                        bat[key]=true;
                        key++;
                        break;
                        
    case "runout":
                        wickets++;
                        overdots++;
                        pballs[strike]+=1;
                        b1runs[bowling]+=0;
                        b1wickets[bowling]+=0;
                        b1balls[bowling]+=1;
                        window.alert("Who Failed to Reach Grease");
                        var ngrease;
                        ngrease=sc.next();
                        if(pname[strike].equalsIgnoreCase(ngrease)){
                        temp=strike;
                        strike=key;
                        }
                        else if(pname[unstrike].equalsIgnoreCase(ngrease)){
                        temp=unstrike;
                        unstrike=key;
                        }   
                        bat[key]=true;
                        key++;
                        
                        break;
                            
    case "."  :
                        pruns[strike]+=0;
                        pballs[strike]+=1;
                        b1runs[bowling]+=0;
                        b1balls[bowling]+=1;
                        overdots++;
                        break;
    
    case"wide4":        
                        pruns[strike]+=0;
                        pballs[strike]+=0;
                        run=run+5;
                        //opc--;
			                  extra+=1;
                        totalballs--;
                        b1runs[bowling]+=5;  
                        break;
 }                          
                            
}
score1();
