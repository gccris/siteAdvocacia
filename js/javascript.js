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
	var itens = document.getElementsByClassName("item");
	var title = document.getElementById("title");

	for(i = 0; i < itens.length; i++){
		itens[i].className = itens[i].className.replace(" active", "");
	}
	itens[n-1].className += " active";
	
	if(n == 1){
		title.textContent = "HOME";
	}
	if(n == 2){
		$('#container').load('http://localhost/site/escritorio.html');
		title.textContent = "O ESCRITÓRIO";
	}
	if(n == 3){
		$('#container').load('http://localhost/site/atuacao.html');
		title.textContent = "ÁREAS DE ATUAÇÃO";
	}
	if(n == 4){
		title.textContent = "ADVOGADOS";
	}
	if(n == 5){ // contato
		$('#container').load('http://localhost/site/contato.html');
		title.textContent = "CONTATO";
	}
	if(n == 6){ // maps
		$('#container').load('http://localhost/site/maps.html');
		title.textContent = "LOCALIZAÇÃO";
	}
}