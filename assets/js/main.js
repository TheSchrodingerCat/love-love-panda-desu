

function principal(){
	var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

	//se comienzan a crear los divs internos del div#fotos-chicas

	pictures.forEach(function(element){
		var idFotos = document.getElementById("fotos-chicas");

		var nuevaId = document.createElement("div");
		nuevaId.setAttribute("class","fotitos");
		nuevaId.setAttribute("id","pict" + pictures.indexOf(element));
		var nuevaPic = document.createElement("img");
		nuevaPic.setAttribute("src",element);

		nuevaId.appendChild(nuevaPic);
		idFotos.appendChild(nuevaId);

	});
}
principal();