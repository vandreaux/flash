// https://youtu.be/LFa9fnQGb3g
function revealMessage() {
	document.getElementById("hiddenMessage").style.display = 'block';
}

// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function toggleMessage() {
	var x = document.getElementById("hiddenMessage");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function homeWork() {
	var l = document.getElementById("homeMsg");
	if (l.style.display === "none") {
		l.style.display = "block";
	} else {
		l.style.display = "none";
	}
}

function workHome() {
	var i = document.getElementById("workMsg");
	if (l.style.display === "block") {
		i.style.display = "none";
	} else {
		i.style.display = "block";
	}
}

//display current time & date
function time() {
	var d = new Date();
	document.getElementById("demo").innerHTML = d;
}

// display current day's hours of sleep