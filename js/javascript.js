var request = new XMLHttpRequest();
this.request.open(this.method, this.url, true);
request.setRequestHeader( 'Access-Control-Allow-Origin', '*');
request.setRequestHeader( 'Content-Type', 'application/json' );

var slideIndex = 1;
divTime();

function divTime(){
	var slide = document.getElementsByClassName("slide");
	showDivs(slideIndex);
	slideIndex++;
	if (slideIndex > slide.length) {
		slideIndex = 1
	}
	setTimeout(divTime, 5000); // Change image every 5 seconds
}

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
		$('#container').load('escritorio.html');
		title.textContent = "O ESCRITÓRIO";
	}
	if(n == 3){
		$('#container').load('atuacao.html');
		title.textContent = "ÁREAS DE ATUAÇÃO";
	}
	if(n == 4){ // contato
		$('#container').load('contato.html');
		title.textContent = "CONTATO";
	}
	if(n == 5){ // maps
		$('#container').load('maps.html');
		title.textContent = "LOCALIZAÇÃO";
	}
}

function atualizaTexto(identificacao) {
	if(identificacao == "Trabalhista") {
		$("#aTrab").attr("class","active");
		$("#aCivil").attr("class","");
		$("#imgAtuacao").attr("src","img/area_trabalhista.jpg");
		$('#atuacaoTitulo').html("Trabalhista");
		$('#pTexto').html("Oferecemos o direcionamento à prevenção e solução aos empregados e empregadores através de consultoria, defesa administrativa e judicial.");
	}
	else if(identificacao == "Civil") {
		$("#aCivil").attr("class","active");
		$("#aTrab").attr("class","");
		$("#imgAtuacao").attr("src","img/area_civil.png");
		$('#atuacaoTitulo').html("Civil");
		$('#pTexto').html("Com o Direito Civil, temos o intuito de tratar o conjunto de normas jurídicas que regem os vínculos pessoais ou patrimoniais entre entidades/pessoas privadas, sejam elas físicas ou jurídicas, de caráter privado ou público. Nosso objetivo consiste em proteger e defender os interesses da pessoa na ordem moral e patrimonial.");
	}
		
}