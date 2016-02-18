"use strict";

(function () {

	if (document.getElementById("about") != null) {

		console.log("About Page");
		var fh1;
		fh1 = document.getElementById("fh1");
		fh1.innerHTML = "Hey, I am Tarun."

		var firstpara;
		firstpara = document.getElementById("fpara");
		firstpara.innerHTML = "I am a Web Developer and I love building Web Applications."

		var secondpara;
		secondpara = document.getElementById("secpara");
		secondpara.innerHTML = "I am efficient at employing industry-standard technologies and principles to create dynamic web sites, applications, and interfaces based on a set of specifications and constraints, with a clear focus on the end user. I also have the skill-set of basic server-side components of modern web applications including databases and scripts. Additionally, I also apply entrepreneurial principles to the design and development of web-based projects."

		var thisDate = new Date();
		var thisYear = thisDate.getFullYear();
		document.getElementById('footer').innerHTML = "&copy; " + thisYear;

	}
	else if (document.getElementById("projects") != null) {
		console.log("Projects Page");
		
	}
	else if (document.getElementById("contact") != null) {
		console.log("Contact Page");
		
	}
})();