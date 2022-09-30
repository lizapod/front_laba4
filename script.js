const ex1ById = document.getElementById('element1');
const ex1querySelector = document.querySelector('.element1');

function getInt() {
return Math.floor(Math.random() * 255);
}
function getColorStyle() {
return 'rgb(' + getInt() + ',' + getInt() + ',' +
getInt() + ')';
}
const changeColorsById = () => {
	ex1ById.style.background = getColorStyle();
	ex1ById.style.color = getColorStyle();
};
const changeColorsQuerySelector = () => {
	ex1querySelector.style.background = getColorStyle();
	ex1querySelector.style.color = getColorStyle();
};

let size = 600

function add() {
	document.getElementById("picture").src =
"https://www.farmersalmanac.com/wp-content/uploads/2021/04/forget-me-not-flower-as309740666.jpeg"
	document.getElementById("picture").style.display = ""
}

function increase() {
	size += 25
	document.getElementById("picture").style.width = size + "px"
}

function decrease() {
	size -= 25
	document.getElementById("picture").style.width = size + "px"
}

function remove() {
	document.getElementById("picture").style.display = "none"
}


	