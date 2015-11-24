

var bio = {
	"name" : "Andrew Cookro",
	"role" : "Software Engineer",
	"contacts" : {
		"mobile" : "555-555-5555",
		"email" : "andrew.cookro@gmail.com",
		"github" : "galaxode",
		"twitter" : "galaxode",
		"location" : "New York City"
	},
	"biopic" : "images/hedgehog.jpg",
	"welcomeMessage" : "Greetings. This is my interactive web-resume, which is a project for the Front-End Web Developer Nanodegree program at Udacity. Please take a look below at some of my work experiences, education, projects, and Google map of places I have worked. Cheers!",
	"skills" : ["HTML/CSS", "Bootstrap", "Javascript", "jQuery", "Java", "C#"]
};

var work = {
	"jobs" : [{
			"employer" : "Group Health Solutions Inc. and SDL Brokerage Inc.",
			"title" : "Director of Operations",
			"location" : "New York City, New York",
			"dates" : "May 2013 - Current",
			"description" : "Manage and direct all aspects of the backend, manage all office systems, accounts payable, accounts receivable, licensing and commissions, purchasing, manage human resources and benefits department, process payroll, maintain and update personnel manual of policies and procedures, manage office equipment, liaze with offsite IT department, bookkeeper and tax accountant, and supervise admin personnel."
		},
		{
			"employer" : "Group Health Solutions Inc. and SDL Brokerage Inc.",
			"title" : "Office Manager",
			"location" : "New York City, New York",
			"dates" : "Jan 2011 - May 2013",
			"description" : "Manage accounts payable, accounts receivable, purchasing, human resources/payroll, office equipment, IT, and supervise admin personnel"
		},
		{
			"employer" : "Group Health Solutions Inc. and SDL Brokerage Inc.",
			"title" : "Executive Assistant",
			"location" : "New York City, New York",
			"dates" : "Aug 2009 - Jan 2011",
			"description" : "Attend the front desk, route and screen calls, greet guests, coordiante conferences, assist executive staff with adhock projects, accounts payable, enter all direct bill P&C commissions, manage office equipment, and first contact for IT issues."
		},
		{
			"employer" : "Forrest Solutions",
			"title" : "Temp Worker",
			"location" : "New York City, New York",
			"dates" : "Jan 2009 - Aug 2009",
			"description" : "Temporary assignments at the jacob Javitz Center, various law firms doing paralegal work, and temp Executive Assistant at Group Health Solutions and SDL Brokerage."
		},
		{
			"employer" : "Kinokuniya Japanese Bookstore",
			"title" : "Part-time Buyer",
			"location" : "New York City, New York",
			"dates" : "June 2008 - Dec 2008",
			"description" : "Purchase books and merchandise for the Kinokuniya's fashion design section. Additionally, perform other sales associate duties such as attending the floor and tending the cash register, assist customers in Japanese and English."
		}
	]
};


var education = {
	"schools" : [{
			"name" : "Florida State University",
			"location" : "Tallahassee, Florida",
			"degree" : "B.S.",
			"major" : "Economics, Computer Science Minor",
			"dates" : "1999 - 2003",
			"url" : "www.fsu.edu"
		},
		{
			"name" : "Cornell University",
			"location" : "Ithaca, New York",
			"degree" : "Graduate Certificate",
			"major" : "Japanese Language",
			"dates" : "2006 - 2007",
			"url" : "www.cornell.edu"
		},
		{
			"name" : "Inter-University Center for Advanced Japanese Language Studies, Administered by Stanford",
			"location" : "Yokohama City, Kanagawa Prefecture, Japan",
			"degree" : "Graduate Certificate",
			"major" : "Japanese Language",
			"dates" : "2007 - 2008",
			"url" : "www.fiu.edu"
		},
		{
			"name" : "University of West Florida",
			"location" : "Pensacola, Florida (Distance Learning)",
			"degree" : "M.S.",
			"major" : "Computer Science, Software Engineering Focus",
			"dates" : "Fall 2013 - Current",
			"url" : "www.fiu.edu"
		}
	],
	"onlineCourses" : [{
		  "title" : "Intro To HTML and CSS",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud304-nd"
		},
		{
		  "title" : "Responsive Web Design Fundamentals",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud893-nd"
		},
		{
		  "title" : "Responsive Images",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud882-nd"
		},
		{
		  "title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud804-nd"
		},
		{
		  "title" : "Intro to jQuery",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud245-nd"
		},
	]
};

education.display = function() {
	$("#education").append(HTMLschoolStart);
	for (school in education.schools) {
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	$(".education-entry:last").append(HTMLonlineClasses);
	for (onlineCourse in education.onlineCourses) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

		$(".education-entry:last").append(formattedOnlineTitle);
		$(".education-entry:last").append(formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}



var projects = {
	"projects" : [{
			"title" : "Word Kitten: Intelligent Pathfinding and Finite State Machine",
			"description" : "Intro to Artificial Intelligence at University of W est Florida",
			"dates" : "2014",
			"images" : "images/Pathfinding_Game-1170x396.png"
		},
		{
			"title" : "Project P1: Build a Responsive Portfolio Site",
			"description" : "Project created upon completion of Intro to HTML and CSS, Responsive Web Design Fundementals, and Responsive Images for Udacity Front-end Web Developer Nanodegree",
			"dates" : "2015",
			"images" : "images/website_snip.png"
		}
	]
};

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	for (project in projects.projects) {
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formattedProjectImage);
	}
}


bio.display = function() {
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkills);
		formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkills);
		formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkills);
		formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkills);
		formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkills);
		formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);
		$("#skills").append(formattedSkills);
	}
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var formattedPicURL = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#topContacts").prepend(formattedLocation);
	$("#topContacts").prepend(formattedTwitter);
	$("#topContacts").prepend(formattedGithub);
	$("#topContacts").prepend(formattedEmail);
	$("#topContacts").prepend(formattedMobile);

	$("#topContacts").append(formattedWelcome);

	$("#footerContacts").prepend(formattedEmail);
	$("#footerContacts").prepend(formattedTwitter);
	$("#footerContacts").prepend(formattedGithub);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").prepend(formattedPicURL);
}


work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

education.display();
projects.display();
bio.display();
work.display();

function inName(name) {
  name = name.trim().split(" ");
  var first = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  var last = name[1].toUpperCase();
  return first + " " + last;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);