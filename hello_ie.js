var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();

var goIE = window.location.replace()

if (userAgent.indexOf("msie") > -1) {
	if (appVersion.indexOf("msie 6.0") > -1) {
		alert("IE6");
	}
	else if (appVersion.indexOf("msie 7.0") > -1) {
		alert("IE7");
	}
	else if (appVersion.indexOf("msie 8.0") > -1) {
		alert("IE8");
	}
	else {
		alert("Unknown");
	}
}
else if (userAgent.indexOf("firefox") > -1) {
	alert("Firefox");
}
else if (userAgent.indexOf("opera") > -1) {
	alert("Opera");
}
else if (userAgent.indexOf("chrome") > -1) {
	alert("Google Chrome");
}
else if (userAgent.indexOf("safari") > -1) {
	alert("Safari");
}
else {
	alert("Unknown");
}
