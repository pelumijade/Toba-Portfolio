function shirtText(){
  document.getElementById('innerText').innerHTML = document.getElementById('theInput').value;
}

function blackShirt(){
  document.getElementById('tshirt').style.backgroundImage = 'url(images/finalblack2.png)';
  document.getElementById('innerText').style.color = '#E6E6FA';
}
function whiteShirt(){
  document.getElementById('tshirt').style.backgroundImage = 'url(images/finalwhite1.png)';
  document.getElementById('innerText').style.color = '#1B1E23';
}
//For carousel
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
/*
function banner(){
  document.getElementById('banner').focus();
  var num = Math.ceil(Math.random() * 3);
  if(num == 1){
    document.getElementById('banner').src = "images/Banner.jpg";
  }else
  if(num == 2){
    document.getElementById('banner').src = "images/Banner3.jpg";
  }else{
    document.getElementById('banner').src = "images/Banner6.jpg";
  }
  
}
*/