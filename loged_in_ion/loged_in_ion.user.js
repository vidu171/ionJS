// ==UserScript==
// @name        loged in ion
// @namespace   Vidu
// @include     https://muj.dvois.com/24online/servlet/E24onlineHTTPClient
// @version     1
// @resource im bg-1.jpg
// @resource grid grid.gif
// @grant    GM_getResourceURL
// ==/UserScript==




function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML = h + ':' + m + ':' + s + '<br><div id = "elcome">WELCOME VIDU</div></div>';
  var elcome = document.getElementsByTagName('div') [2];
  elcome.style.fontSize = '7em';
  elcome.style.marginTop = '10px';
  var d = document.getElementById('elcome');
  d.style.fontSize = '0.45em';
  d.style.marginTop = '40px';
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  } // add zero in front of numbers < 10

  return i;
}(function () {
  'use strict';
  
  
  // set is visible to true and display yo block for the grid visibility
  var isVisible = false;
  
  
  var imgs = document.getElementsByTagName('tr');
  var img = imgs[1];
   console.log(GM_getResourceURL("im"));

  img.replaceWith(document.createElement('div'));
    var div = document.getElementsByTagName('div') [1];
  div.id = 'txt';

    div.style.marginTop = '30px';
  div.style.textAlign = 'center';
  div.style.fontSize = '8em';
  div.style.letterSpacing = '4px';
  div.style.color = 'rgba(255, 255, 255, 0.55)';

  document.getElementsByTagName('body') [0].style.color = 'rgba(255, 255, 255, 0.70)';
 // document.getElementsByTagName('body') [0].style.background = 'url(https://wallpaperscraft.com/image/space_planet_light_night_sky_94442_3840x2160.jpg)';
   document.getElementsByTagName('body') [0].style.background = 'url("'+GM_getResourceURL("im")+'")';
  document.getElementsByTagName('body') [0].style.backgroundSize = 'cover';
  document.getElementsByTagName('body') [0].style.fontFamily = 'Tahoma,Verdana,Segoe,sans-serif';
  
  var headerfonts = document.getElementsByClassName('newheaderfont');
  for(var i=0;i<headerfonts.length;i++){
  headerfonts[i].style.fontFamily = 'Tahoma,Verdana,Segoe,sans-serif';
  headerfonts[i].style.color = 'rgba(255, 255, 255, 0.70)';
  headerfonts[i].style.fontWeight = 'normal';
  headerfonts[i].style.fontSize = '1.4em';
    
  }
  
  
  

  var r = GM_getResourceURL("grid");
  
  var node = '<div id = special><img id = "grid" src = "" height = "32px" ></div>';
  var str = document.body.innerHTML;
  document.body.innerHTML = node + str;
  var grid = document.getElementById('grid');
  grid.setAttribute('src',r);
  grid.style.position = "absolute";
  grid.style.right = "27px";
  grid.style.margin = '20px';
  grid.style.opacity = '0.5';
  
  // There is a hidden grid in here
  
  
  var node = '<div id = "block">'+
                '<div style="height : 0px; width: 0px ;  float : right; border-left: 5px solid transparent; border-right: 5px solid transparent; border-bottom: 9px solid white;margin-right:40% ;margin-top: 0.5px"></div>'+
                    '<div id="box" style="height : 140px; width: 100px ; ">'+
                    '<div><button id = "user1" style="height : 33.33%; width: 100% ; background: none; background-color:  transparent; border : none;">VIDU</button></div>'+
                    //'<hr style = "width:80%; opacity:0.3; ">'+
                    '<div ><button id = "user2" style="height : 33.33%; width: 100% ; background: none; background-color: transparent; border : none; ">USER 2</button></div>'+
                    //'<hr style = "width:80%; opacity:0.3; ">'+
                    '<div><button id = "user3" style="height : 33.33%; width: 100%; background: none; background-color: transparent; border : none;" >USER 3</button></div>'+
                '</div>'+
            '</div>';
  var str = document.body.innerHTML;
  document.body.innerHTML = node + str;
  
  var block = document.getElementById('block');
  var box = document.getElementById('box');
  
  
  var button1 = document.getElementById('user1');
  button1.style.fontFamily = 'Tahoma,Verdana,Segoe,sans-serif';
  button1.style.fontWeight = 'normal';
  button1.style.fontSize = '0.2em';
  button1.style.padding = '14px 0px 12px 0px';
  button1.addEventListener("mouseover", function(){
    this.style.background = "#00ffff"; 
    
  }); 
  button1.addEventListener("mouseout", function(){
    this.style.background = "transparent";
    
  }); 
  
  button1.addEventListener("click", function(){
    document.getElementsByName("username")[0].value="j_169105214";         //<<<-----------------------------------  USER 1 CREDENTIALS
    document.getElementsByName("password")[0].value="strawhat12";
    document.getElementsByName("login")[0].click();
  }); 
  
  
  
  var button2 = document.getElementById('user2'); 
  button2.style.fontFamily = 'Tahoma,Verdana,Segoe,sans-serif';
  button2.style.fontWeight = 'normal';
  button2.style.fontSize = '0.2em';
  button2.style.padding = '14px 0px 12px 0px';
  
  button2.addEventListener("mouseover", function(){
    this.style.background = "#00ffff"; 
  }); 
  button2.addEventListener("mouseout", function(){
    this.style.background = "transparent";
  }); 
  
  button2.addEventListener("click", function(){
    document.getElementsByName("username")[0].value="username";                 //<<<-----------------------------------  USER 2 CREDENTIALS
    document.getElementsByName("password")[0].value="password";
    document.getElementsByName("login")[0].click();
  }); 
  
  
  
  var button3 = document.getElementById('user3');
  button3.style.fontFamily = 'Tahoma,Verdana,Segoe,sans-serif';
  button3.style.fontWeight = 'normal';
  button3.style.fontSize = '0.2em';
  button3.style.padding = '14px 0px 12px 0px';
  button3.addEventListener("mouseover", function(){
    this.style.background = "#00ffff"; 
  }); 
  button3.addEventListener("mouseout", function(){
    this.style.background = "transparent";
  }); 
  
  button3.addEventListener("click", function(){
    document.getElementsByName("username")[0].value="username";       //<<<-----------------------------------  USER 2 CREDENTIALS
    document.getElementsByName("password")[0].value="password";
    document.getElementsByName("login")[0].click();
  }); 
  
  document.getElementById('block').style.cssFloat = 'right';
  box.style.background = 'white';
  box.style.boxShadow = 'black'
  box.style.color = 'black';
 
  box.style.opacity = '0.8';
  block.style.position = 'absolute';
  block.style.marginTop = '52px';
  box.style.marginTop = '0px';
  block.style.right = '17px';
  box.style.borderRadius = '1px';
  block.style.transition = "all 0.3s";
  block.style.opacity = '0';
  
  
  block.addEventListener('mouseout', function () {
    if (isVisible) {
      isVisible = false;
      block.style.opacity = '0';
    }
  });
  
  block.addEventListener('mouseover', function () {
    if (!isVisible) {
      isVisible = true;
      block.style.opacity = '0.4';
    }
  });
  
  document.getElementById('grid').addEventListener('mouseover', function () {
    if (isVisible) {
      isVisible = false;
      block.style.opacity = '0';
    } 
    else {
      isVisible = true;
      block.style.opacity = '0.4';
    }
  });
  
  
var button = document.getElementsByClassName("buttonstyle")[0];
  button.style.background = "rgba(8, 137, 170, 0.45)";
  button.style.border = "none";
  button.style.marginTop = "10px";
  button.style.fontSize = "16px";
  button.style.fontStyle = "bold";
  button.style.padding = "3px 16px 8px 16px";
  
  
  if(document.getElementsByTagName("p")[1].textContent === "You have successfully logged in"){
    document.getElementsByTagName("p")[0].remove();
    document.getElementsByTagName("p")[0].remove();
    document.getElementsByTagName("tr")[2].style.display="none";
    document.getElementsByTagName("tr")[3].style.display="none";
    document.getElementsByTagName("tr")[4].style.display="none";
    document.getElementsByTagName("p")[5].remove();
    document.getElementsByTagName("p")[5].remove();
    document.getElementById('txt').style.display = "block";
    document.getElementById('grid').style.display = "none";

  }
  else{
    console.log(grid);
    document.getElementById('grid').style.display = "block";
    isVisible = false
  }
  startTime();
  // Your code here...
}) ();
