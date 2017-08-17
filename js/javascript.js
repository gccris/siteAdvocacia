var request = new XMLHttpRequest();
this.request.open(this.method, this.url, true);
request.setRequestHeader( 'Access-Control-Allow-Origin', '*');
request.setRequestHeader( 'Content-Type', 'application/json' );


var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var slide = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("slider-page");
	if (slide.length != 0){
		if (n > slide.length) {slideIndex = 1}    
		if (n < 1) {slideIndex = slide.length}
		for (i = 0; i < slide.length; i++) {
			slide[i].style.display = "none";  
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slide[slideIndex-1].style.display = "block";  
		dots[slideIndex-1].className += " active";
		slideIndex++;
		if (slideIndex > slide.length) {
			slideIndex = 1
		} 
		setTimeout(showDivs, 5000); // Change image every 5 seconds
	}
}

function openPage(n){
	var i;
	var x = document.getElementsByClassName("item");

	for(i = 0; i < x.length; i++){
		x[i].className = x[i].className.replace(" active", "");
	}
	x[n-1].className += " active";
	if(n == 5) // contato
		$('#container').load('http://localhost/site/contato.html');
	if(n == 6) // maps
		$('#container').load('http://localhost/site/maps.html');
}