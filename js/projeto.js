function manipulateData(data, length){

	for (i = 0; i < length; i++){

		var divContorno = document.createElement("div");
		var divElementos = document.createElement("div");
		var divTexts = document.createElement("div");
		var divPreco = document.createElement("div");

		var divTextsNome = document.createElement("div");
		var divTextsIntensidade = document.createElement("div");
		var divTextsDescricao = document.createElement("div");

		var img = document.createElement("img");
		var txtNome = document.createElement("p");
		var txtIntensidade = document.createElement("p");
		var txtDescricao = document.createElement("p");
		var txtPreco = document.createElement("p");
		
		var titleNome = document.createElement("p");
		var titleIntensidade = document.createElement("p");
		var titleDescricao = document.createElement("p");

		var theElement = document.getElementsByClassName("content")[0];
		console.log(theElement);

		theElement.appendChild(divContorno);
		divContorno.appendChild(divPreco);
		divPreco.appendChild(divElementos);
		divElementos.appendChild(img);
		divElementos.appendChild(divTexts);

		divPreco.className = "layoutPreco";
		divContorno.className = 'contorno';
		divElementos.className = 'elementos';
		divTexts.className = 'divTexts';
		img.className = 'cafe';

		divTextsNome.className = "texto";
		divTextsIntensidade.className = "texto";
		divTextsDescricao.className = "texto";

		titleNome.className = "strong";
		titleIntensidade.className = "strong";
		titleDescricao.className = "strong";

		for (j = 0; j < 3; j++){

			if (j == 0){
				
				divTexts.appendChild(divTextsNome);

				titleNome.innerHTML = "Nome: ";
				txtNome.innerHTML = data[i].nome;

			} else if (j == 1){

				divTexts.appendChild(divTextsIntensidade);

				titleIntensidade.innerHTML = "Intensidade: ";
				txtIntensidade.innerHTML = data[i].intensidade;

			} else {
				
				divTexts.appendChild(divTextsDescricao);

				titleDescricao.innerHTML = "Descrição: ";
				txtDescricao.innerHTML = data[i].descricao;
			}

			divTextsNome.appendChild(titleNome);
			divTextsNome.appendChild(txtNome);
			
			divTextsIntensidade.appendChild(titleIntensidade);
			divTextsIntensidade.appendChild(txtIntensidade);

			divTextsDescricao.appendChild(titleDescricao);
			divTextsDescricao.appendChild(txtDescricao);
		} 

		divPreco.appendChild(txtPreco); //texto do preço
		txtPreco.innerHTML = "R$" + data[i].preco;
		txtPreco.className = "preco";

		img.alt = data[i].descricao;
		img.title = data[i].nome;
		img.src = data[i].foto;

	}
}

const getData = (link) => {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', link);

	xhr.responseType = 'json';

	xhr.onload = () => {
		const data = xhr.response;
		console.log(data);
		manipulateData(data, data.length);
	}
	
	xhr.send();
}

getData('https://api.polijunior.com.br/produtos');

document.getElementById("cabeçalho").title = "Flor de Café";