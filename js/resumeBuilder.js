/*
This is empty on purpose! Your code to build the resume will go here.
 */
var	bio = {
    name: "Jordi de Pablos",
    role: "AP",
    contacts:{
		mobile: "612345678",
		email: "jordi.depablos@gmail.com",
		github: "jordidepablos",
		twitter: "@vicerio",
		location: "Reus",
	},
    welcomeMessage: "Hi! Let's have some fun!",
    skills: [
    	"Business analyst",
    	"Web developer",
    	"Desktop appliactions developer",
    	"Siebel",
    	"Progress/MFG"
    ],
    biopic: "http://images.amcnetworks.com/bbcamerica.com/wp-content/uploads/2011/05/290x200_davegahan.jpg",
    display: function () {
    }
};

var education = {
	schools: [
		{
			name: "Col·legi Public Sant Pere i Sant Pau",
			location: "Tarragona",
			degree: "primary school",
			majors: [
				"array of strings"
			],
			dates: "1988",
			url: "www.google.com"
		},
		{
			name: "Institut de batxillerat Pons d'Icart",
			location: "Tarragona",
			degree: "High School",
			majors: [
				"array of strings"
			],
			dates: "1992",
			url: "www.google.com"
		},
	],
	onlineCourses: [
		{
			title: " Desarrollo de servicios en la nube con HTML5, Javascript y node.js",
			school: "Miriadax",
			date: "2015",
			url: "https://miriadax.net/web/javascript-node-js"
		},
		{
			title: "Introducción al Business Intelligence y al Big Data",
			school: "Miriadax",
			date: "2016",
			url: "https://miriadax.net/web/introduccion-al-business-intelligence-2-edicion-"
		}
	],
	display: function() {

	}
 };

 var work = {
	jobs: [
 		{
 			employer: "BIC Graphic Europe SA",
 			title: "Analyst Programer",
 			location: "Tarragona",
 			dates: "2001-11-01 - ",
 			description: "Lorem ipsum Officia dolore ut cupidatat tempor laborum qui nulla aliquip sed amet ea ut aute occaecat incididunt in ullamco ullamco."
 		},
 		{
 			employer: "Latinred SA",
 			title: "Analyst Programmer",
 			location: "Barcelona",
 			dates: "2001-07-01 - 2001-10-31",
 			description: "Lorem ipsum Anim nostrud dolor ut Duis."
 		}
	],
	display: function() {

	}
};

var projects = {
	projects: [
		{
			title: "Sample project 1",
			dates: "12-12-2016 - 19-12-2015",
			description: "Lorem ipsum Aute dolore nisi magna anim dolor aliqua fugiat ea tempor sint occaecat eiusmod tempor adipisicing nulla ex quis incididunt irure ex irure anim deserunt deserunt pariatur Ut adipisicing et reprehenderit qui irure dolore sed mollit officia ut Excepteur proident do ut non incididunt ut nisi tempor ex tempor pariatur sunt et qui est anim tempor nisi ad consectetur sint dolore tempor non id dolore aliqua mollit qui anim aute in occaecat nulla quis tempor incididunt eu cillum ea Duis in et Excepteur commodo ea pariatur in commodo et quis Excepteur dolore sint Excepteur ex nisi fugiat non magna commodo tempor dolor sit laboris officia esse veniam cupidatat quis sit non dolor consequat proident do dolore in commodo nostrud magna culpa in do enim consectetur cillum aliqua amet anim dolore fugiat commodo culpa sint enim fugiat magna sed aliquip minim voluptate nulla mollit aute non irure laborum fugiat pariatur elit quis esse qui irure minim velit fugiat do sunt esse nulla commodo dolore do non sunt in elit sed dolor sunt sed id ex.",
			images: [
				"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLJCWcAsLSRyd6u6iV0QBBckk2xjxMnXZxqJnC4TR8HxegrImM",
				"https://upload.wikimedia.org/wikipedia/en/8/88/101_-_Depeche_Mode.jpg",
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpOmsu4ZSLVddyde7_4AR4ve7pNTKBCxnI-l-k392mg1FDCwsNQ"
			]
		}
	],
	display: function () {

	}
};

var points = [
	"http://maps.google.com/maps?q=loc:41.1595222,1.1028544&z=16",
	"http://maps.google.com/maps?q=loc:41.1403328,1.2512331&z=18"
];

var model = {
	bio: bio,
	education: education,
	work: work,
	projects: projects
};

var view = {
	init: function () {
		this.$main = $('#main');
		this.$header = this.$main.find('#header');
		this.$topContacts = this.$header.find('#topContacts');

		this.$workExperience = this.$main.find('#workExperience');

		this.$projects = this.$main.find('#projects');

		this.$education = this.$main.find('#education');

		this.$footerContacts = this.$main.find('#footerContacts');

		this.$map = this.$main.find('#mapDiv');
	},

	render: function () {
		this.bio();
		this.work();
		this.projects();
		this.education();
		this.map();
	},

	bio: function () {
		this.$header.prepend(octopus.getHTMLheaderName() + octopus.getHTMLheaderRole());
		this.$topContacts.append(octopus.getContactInfo());
		this.$header.append(octopus.getHTMLbioPic());
		this.$header.append(octopus.getHTMLwelcomeMsg());
		this.$header.append(octopus.getHTMLskillsStart());
		this.$header.find('#skills').append(octopus.getHTMLskills());

		this.$footerContacts.append(octopus.getContactInfo());
	},

	work: function () {
		this.$workExperience.append(octopus.getHTMLworkExperience());
	},

	projects: function () {
		this.$projects.append(octopus.getHTMLprojects());
	},

	education: function () {
		this.$education.append(octopus.getHTMLeducation());
	},

	map: function () {
		this.$map.append(octopus.getHTMLmapPoints);
	}
};

var octopus = {
	init: function () {
		view.init();
		view.render();
	},

	// BIO ------------------------------------------------------------------------------
	getHTMLheaderName: function() {
		return HTMLheaderName.replace(/%data%/ig, model.bio.name);
	},

	getHTMLheaderRole: function() {
		return HTMLheaderRole.replace(/%data%/ig, model.bio.role);	
	},

	getContactInfo: function() {
		var contactInfo;
		contactInfo = HTMLmobile.replace(/%data%/ig, model.bio.contacts.mobile);
		contactInfo += HTMLemail.replace(/%data%/ig, model.bio.contacts.email);
		contactInfo += HTMLgithub.replace(/%data%/ig, model.bio.contacts.github);
		contactInfo += HTMLtwitter.replace(/%data%/ig, model.bio.contacts.twitter);
		contactInfo += HTMLlocation.replace(/%data%/ig, model.bio.contacts.location);
		return contactInfo;
	},

	getHTMLbioPic: function() {
		return HTMLbioPic.replace(/%data%/ig, model.bio.biopic);
	},

	getHTMLwelcomeMsg: function() {
		return HTMLwelcomeMsg.replace(/%data%/ig, model.bio.welcomeMessage);
	},

	getHTMLskillsStart: function() {
		return HTMLskillsStart;
	},

	getHTMLskills: function() {
		var skills = "";
		model.bio.skills.forEach(function(skill) {
			skills += HTMLskills.replace(/%data%/ig, skill);
		});
		return skills;
	},

	// WORK EXPERIENCE ------------------------------------------------------------------
	getHTMLworkExperience: function() {
		var workExperience = "";
		model.work.jobs.forEach(function (job) {
			workExperience += HTMLworkStart;
			workExperience += HTMLworkEmployer.replace(/%data%/ig, job.employer);
			workExperience += HTMLworkTitle.replace(/%data%/ig, job.title);
			workExperience += HTMLworkDates.replace(/%data%/ig, job.dates);
			workExperience += HTMLworkLocation.replace(/%data%/ig, job.location);
			workExperience += HTMLworkDescription.replace(/%data%/ig, job.description);
		});
		return workExperience;
	},

	// PROJECTS -------------------------------------------------------------------------
	getHTMLprojects: function() {
		var projects = "";
		model.projects.projects.forEach(function (project) {
			projects += HTMLprojectStart;
			projects += HTMLprojectTitle.replace(/%data%/ig, project.title);
			projects += HTMLprojectDates.replace(/%data%/ig, project.dates);
			projects += HTMLprojectDescription.replace(/%data%/ig, project.location);
			project.images.forEach(function (image) {
				projects += HTMLprojectImage.replace(/%data%/ig, image);				
			});
		});
		return projects;
	},

	// EDUCATION ------------------------------------------------------------------------
	getHTMLeducation: function() {
		var education = "";
		model.education.schools.forEach(function (school) {
			education += HTMLschoolStart;
			education += HTMLschoolName.replace(/%data%/ig, school.name);
			education += HTMLschoolDegree.replace(/%data%/ig, school.degree);
			education += HTMLschoolDates.replace(/%data%/ig, school.dates);
			education += HTMLschoolLocation.replace(/%data%/ig, school.location);
			education += HTMLschoolMajor.replace(/%data%/ig, school.majors.join('<br/>'));				
		});

		education += HTMLonlineClasses;
		model.education.onlineCourses.forEach(function (course) {
			education += HTMLonlineTitle.replace(/%data%/ig, course.title);
			education += HTMLonlineSchool.replace(/%data%/ig, course.school);
			education += HTMLonlineDates.replace(/%data%/ig, course.date);
			education += HTMLonlineURL.replace(/%data%/ig, course.url);
		});

		return education;
	},

	// MAP ------------------------------------------------------------------------------
	getHTMLmapPoints: function () {
		return "<div id=\"map\"></div>";
	},
};

octopus.init();