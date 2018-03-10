function bg(element_id) {
document.getElementById('svg8').style.background = "url('background/room.jpeg') 0 50% no-repeat";
document.getElementById('svg8').style.backgroundSize = "100%";
}

function roombg(element_id) {
document.getElementById('svg115').style.background = "url('background/room.jpeg') 0 50% no-repeat";
document.getElementById('svg115').style.backgroundSize = "cover";
}

function changebackground() {
setTimeout(bg,4050);
// clearInterval();
setTimeout(changesvg,4050);
roombg();

}

changebackground();

function changesvg(argument) {
	document.getElementById('svg8').style.display = "none";
	document.getElementById('svg115').style.display = "block";

}

