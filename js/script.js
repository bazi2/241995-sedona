
var search = document.querySelector(".search-button");
var popup = document.querySelector(".search-wrapper");
var dateArrival = popup.querySelector("[name=date-arrival]");
var form = popup.querySelector("form");
var dateDeparture = popup.querySelector("[name=date-departure]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

var isStorageSupport = true;
var storage = "";


try {
	storage = localStorage.getItem("dateArrival");
} catch (err) {
	isStorageSupport = false;
}


search.addEventListener("click", function (evt) {
	evt.preventDefault();
	console.log("Клик по кнопке поиска");
	popup.classList.toggle("search-wrapper-show");
	popup.classList.remove("search-wrapper-error");
	
	if (storage) {
		dateArrival.value = storage;
		dateDeparture.focus();
	} else {
		dateArrival.focus();
	}
});


form.addEventListener("submit", function (evt) {
	if (!dateArrival.value || !dateDeparture.value || !adults.value || !children.value) {
	evt.preventDefault();
	console.log("Нужно заполнить все поля: даты въезда и выезда, количество взрослых и детей");
	popup.classList.add("search-wrapper-error");
} else {
	if (isStorageSupport) {
	localStorage.setItem("dateArrival", dateArrival.value);
}
}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("search-wrapper-show")) {
			evt.preventDefault();
			popup.classList.remove("search-wrapper-show");
			popup.classList.remove("search-wrapper-error");
		}
	}
});

