// ==UserScript==
// @name         login
// @namespace    https://muj.i-on.in/
// @version      0.1
// @description  try to take over the world!
// @author       aesher9o1
// @match        https://muj.i-on.in/
// @grant        none
// ==/UserScript==

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementsByTagName("p")[0].innerHTML = '<b>Current Time : </b>'+h + ':' + m + ':' + s ;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  } // add zero in front of numbers < 10

  return i;
}


(function() {
    'use strict';

    //FO media nav
    
    var media_nav_icon = document.getElementsByClassName("media_nav")[1];
    media_nav_icon.style.display= "none";

    //main
    var main = document.getElementsByTagName("main")[0];
    main.style.background= "none";

    //body
    var body = document.getElementsByTagName("body")[0];
    body.style.background= "rgb(25, 25, 25)";


    //name
    document.getElementsByTagName("h3")[0].innerHTML= "aesher9o1";

    //ion logo manipal logo
    document.getElementsByTagName("img")[0].style.display="none";
    document.getElementsByTagName("img")[5].style.display="none";
    document.getElementsByTagName("img")[4].style.display="none";
    document.getElementsByTagName("img")[3].style.display="none";

  //buttons defined here
    var media_nav_logins = document.getElementsByClassName("media_nav")[0];
    media_nav_logins.innerHTML= "<b>It's cold eh?</b><ul>"+
                	"<li id = \"button1\"style = \"margin-right:1em\"><a class=\"fa fa-wifi\"  style = \" background:#CC6600;border-radius:60%;\></a></li>"+
                    "<li id = \"button2\" style = \"margin-right:1em\"><a class=\"fa fa-wifi\"  style = \" background:#CC6600;border-radius:60%;\"></a></li>"+
                    "<li id = \"button3\" ><a class=\"fa fa-wifi\"  style = \" background:#CC6600;border-radius:60%;\"></a></li>"

startTime();
    // Your code here...



    //user ID passwords
    document.getElementById("button1").addEventListener("click", function(){
        document.getElementsByName("username")[0].value="j_169109002";
        document.getElementsByName("password")[0].value="heyheyheyheyheyheyhey";
        document.getElementById("btnLogin").click();
    });

    document.getElementById("button2").addEventListener("click", function(){
        document.getElementsByName("username")[0].value="j_169109002";
        document.getElementsByName("password")[0].value="heyheyheyheyheyheyhey";
        document.getElementById("btnLogin").click();
    });

     document.getElementById("button3").addEventListener("click", function(){
        document.getElementsByName("username")[0].value="j_169109002";
        document.getElementsByName("password")[0].value="heyheyheyheyheyheyhey";
        document.getElementById("btnLogin").click();
    });


})();

