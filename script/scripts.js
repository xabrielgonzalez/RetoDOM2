const frutas = [
	"Manzana",
	"Naranja",
	"Pera",
	"Plátano",
	"Fresa",
	"Mango",
	"Melón",
	"Piña",
	"Uva",
	"Cereza"
];

const frutasList = document.getElementById("frutas-list");
const theme1Btn = document.getElementById("theme1-btn");
const theme2Btn = document.getElementById("theme2-btn");

theme1Btn.addEventListener("click", () => {
	frutasList.classList.remove("theme2");
	frutasList.classList.add("theme1");
});

theme2Btn.addEventListener("click", () => {
	frutasList.classList.remove("theme1");
	frutasList.classList.add("theme2");
});

frutas.forEach((fruta, index) => {
	const listItem = document.createElement("li");
	listItem.innerText = fruta;
	frutasList.appendChild(listItem);

	if (index % 2 === 0) {
		listItem.classList.add("theme1");
	} else {
		listItem.classList.add("theme2");
	}
});
