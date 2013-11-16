xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","test.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 
subject=xmlDoc.getElementsByTagName("subject");

function getSubject(i){
	code=(subject[i].getElementsByTagName("code")[0].childNodes[0].nodeValue);
	course=subject[i].getElementsByTagName("class");
}

function getCourse(i){
	number=(course[i].getElementsByTagName("number")[0].childNodes[0].nodeValue);
	teacher=course[i].getElementsByTagName("teacher");
}

function getTeacher(i){
	firstName=(teacher[i].getElementsByTagName("firstName")[0].childNodes[0].nodeValue);
	lastName=(teacher[i].getElementsByTagName("lastName")[0].childNodes[0].nodeValue);
}

function writeSubjects(){
	document.getElementById("courses").style.visibility="hidden";
	var options = "";
	for(var i=0; i<subject.length; i++){
		getSubject(i);
		options = options+"<option>";
		options = options+code;
		options = options+"</option>";
	}
	document.getElementById("subjects").innerHTML=options;
	document.getElementById("courses").style.visibility="visible";
	
}

function writeCourses(){
	var options = "";
	var subject = document.getElementById("subjects").selectedIndex;
	getSubject(subject);
	for(var i=0; i<course.length; i++){
		getCourse(i);
		options+="<option>";
		options+=number;
		options+="</option>";
	}
	document.getElementById("courses").innerHTML=options;
}

function writeTeachers(){
	var teachers = "";
	var subject = document.getElementById("subjects").selectedIndex;
	var course = document.getElementById("courses").selectedIndex;
	getSubject(subject);
	getCourse(course);
	var lastNames = new Array();
	var alreadyExists=false;
	for(var i=0; i<teacher.length; i++){
		alreadyExists=false;
		getTeacher(i);
		if(firstName != "To" && lastName != "Arranged"){
			for(var j=0; j<lastNames.length; j++){
				if(lastNames[j]==lastName){
					alreadyExists=true;
				}
			}
			if(!alreadyExists){
				lastNames[lastNames.length]=lastName;
				teachers+="<tr><td onclick='writeReviews("+i+")'>";
				teachers+=firstName + " " + lastName;
				teachers+="</td></tr>";	
			}
		}
	}
	document.getElementById("teachers").innerHTML=teachers;
}

function writeReviews(i){
	lastName=(teacher[i].getElementsByTagName("lastName")[0].childNodes[0].nodeValue);
	document.getElementById("reviewsIframe").style.visibility="visible";
	document.getElementById("reviews").style.visibility="visible";
	document.getElementById("reviews").src="http://www.ratemyprofessors.com/SelectTeacher.jsp?searchName="+lastName+"&search_submit1=Search&sid=1604";
}

