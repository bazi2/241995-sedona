function closeForm() {
  var close = document.querySelector(".search-wrapper");
  close.classList.add("search-wrapper-close");
}
window.onload = closeForm;


var show = document.querySelector(".search-button");
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


show.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (popup.classList.contains("search-wrapper-close")) {
		popup.classList.toggle("search-wrapper-close");
		popup.classList.add("search-wrapper-show")
	} else {
		popup.classList.toggle("search-wrapper-show");
		popup.classList.add("search-wrapper-close");
	}
	
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

