let resumeData = {
  sections: ["Home", "About", "Resume", "portfolio", "Testimonials", "Contact"],
  imagebaseurl: "https://behzadkk.github.io/",
  name: "Behzad Kakavand",
  role: "Frontend Developer",
  linkedinId: "behzad-kakavand-71181b137",
  skypeid: "Your skypeid",
  roleDescription:
    "I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/behzad-kakavand-71181b137/",
      className: "fa fa-linkedin"
    },
    {
      name: "github",
      url: "https://github.com/Behzadkk",
      className: "fa fa-github"
    },
    {
      name: "skype",
      url: "https://join.skype.com/invite/hdqddYNimSQy",
      className: "fa fa-skype"
    }
  ],
  aboutme:
    "I am a hard-working web developer with a rational approach to problem-solving combined with a passion for innovative and fresh ideas. Good experience in JavaScript (ES6), React.js, HTML5, CSS3, Bootstrap4, node.js, RESTful APIs, SQL database, TDD and keen to learn new skills. Exceptional collaborative and interpersonal skills; dynamic team player with well-developed written and verbal communication abilities. I have permission to work and live in the UK.",
  address: "London",
  email: "behzad.kakavand@hotmail.com",
  phone: "07393554008",
  education: [
    {
      UniversityName: "CODE YOUR FUTURE",
      specialization: "Full Stack Web Developing",
      MonthOfPassing: "Apr",
      YearOfPassing: "2019",
      Achievements:
        "During the course, I learned a technology stack that helped me build apps from a simple website to a powerful database-driven web application. The course contains core JavaScript, TDD, backend development using node.js and express, and modern frontend development with React.js."
    },
    {
      UniversityName: "TEESSIDE UNIVERSITY",
      specialization: "MSc International Management ",
      MonthOfPassing: "May",
      YearOfPassing: "2018",
      Achievements:
        "Graduated with Distinction. Evaluated the role of companies’ websites in their attractiveness for people of talent. Participated as a good team player in various projects, especially in the “Developing Self and Others” module which focused on being a team. Conducted a research on companies’ talent acquisition process (case study: ARM). Final thesis of “The role of business in unmanaged migration crisis”."
    },
    {
      UniversityName: "udemy.com",
      specialization:
        "The Web Developer Bootcamp, React (Hooks, React Router, Redux) ",
      MonthOfPassing: "Mar",
      YearOfPassing: "2019",
      Achievements:
        "Building powerful, user-friendly and reactive web apps. Manipulating the DOM with vanilla JS and translating to jQuery. Using Node.JS to write server-side JavaScript.	Creating full-stack web applications from scratch"
    }
  ],
  work: [
    {
      CompanyName: "Personal Project",
      specialization: "React Developer",
      since: "Mar 2019",
      to: "present",
      Achievements:
        "I developed a job market app for “Iranian Community North East” as a personal project. It is a full stack project using node.js and express to design a RESTful API at the backend where data are saved in an SQLite database. The frontend is running in React. In this app, users can register to the app and define projects. ICNE’s clients can view these projects and apply for these opportunities. This app is reactive to the user’s status."
    },
    {
      CompanyName: "CODE YOUR FUTURE",
      specialization: "Trainee Web Developer",
      since: "Sep 2018",
      to: "Feb 2019",
      Achievements:
        "Responsible for working on a range of projects, designing appealing websites and making new web applications. Developing and maintaining the frontend functionality of websites using HTML, CSS, and JavaScript, and React.js. Designing prototypes for apps and websites. Keeping track of apps by GIT version control. Creating server-side of applications using node.js and working with RESTful APIs"
    },
    {
      CompanyName: "FARZIN HOLDING",
      specialization: "UI Designer",
      since: "Feb 2016",
      to: "Mar 2017",
      Achievements:
        "I managed and guided contractors to ensure timely product launches and meet deadlines. My responsibilities included producing marketing assets for consumer and industry events and promotions, designing mockups for website layout and created final web assets, translation of the UI/UX design wireframes to the actual code to produce visual elements of the application."
    }
  ],
  skillsDescription:
    " I have been working on different projects as a UI designer, trainee, and React developer. During my career, I have gained valuable experience in HTML, CSS, JS and related frameworks such as Bootstrap or libraries such as React.js. I am confident in using Git version control. I am a confident, organised and professional individual with a limitless drive to be successful and learn new skills.",
  skills: [
    {
      skillname: "HTML5",
      knowledge: "90"
    },
    {
      skillname: "CSS",
      knowledge: "85"
    },
    {
      skillname: "JavaScript[ES6]",
      knowledge: "80"
    },
    {
      skillname: "Reactjs",
      knowledge: "75"
    },

    {
      skillname: "Adobe Photoshop",
      knowledge: "90"
    },
    {
      skillname: "Node.js",
      knowledge: "70"
    },
    {
      skillname: "TDD",
      knowledge: "70"
    }
  ],
  portfolio: [
    {
      name: "jobMarket",
      title: "Job Market",
      description: "Web App",
      imgurl: "images/portfolio/jobMarket.png",
      details:
        "I developed a job market app for “Iranian Community North East”, a charity organisation working to help refugees and marginalised people to integrate to the community. Users can register in this app and define some opportunities and projects. This will give the chance for refugees to apply for these projects. If you are interested, press 'Details' button",
      category: ["React.js", "Node.js", "Express", "mySQL"],
      links: "https://github.com/Behzadkk/myJobMarket"
    },
    {
      name: "portfolio",
      title: "Online Portfolio",
      description: "React project",
      imgurl: "images/portfolio/portfolio.png",
      details:
        "This online portfolio is created based on a free resume template of www.styleshout.com. First, I downloaded this template and then seperated it into different React components. I created a JavaScript file, 'resumeData.js', which is imported into the app and passed as 'props'. To update this resume, a user needs only make change at'resumeData.js'. ",
      category: ["react", "jsx", "html", "css"],
      links: "https://github.com/Behzadkk/ReactPortfolio"
    },
    {
      name: "spc",
      title: "Church's Volunteering App",
      description: "Web App",
      imgurl: "images/portfolio/SPC.png",
      details:
        "Currently, I am working on a project for 'Stockton Parish Church' to manage its volunteering system. There are different categories of jobs to be done by volunteers. This is a full-stack app using Express server at backend and React for frontend. I used to volunteer there as a translator and kids worker and now I'm a web developer :)",
      category: ["React.js", "RESTful API", "Express"],
      links: "https://www.stocktonparishchurch.org.uk"
    },
    {
      name: "carSales",
      title: "Vertu Motors",
      description: "Single Page Task",
      imgurl: "images/portfolio/carSales.png",
      details:
        "Creating this page was part of recruitment process of Vertu Motors. The task was create a pixel perfect web page by using pure HTML, CSS, and Vanilla JavaScript. It was asked to use BEM method to define classes in CSS.",
      category: ["HTML5", "CSS3", "BEM", "JavaScript"],
      links: "https://behzadkk.github.io/VertuMotors-Task"
    },
    {
      name: "starwars",
      title: "Starwars Game",
      description: "React App",
      imgurl: "images/portfolio/starwars.png",
      details:
        "Using SWAPI: https://swapi.co/documentation, I built an application to select random people or starships and render their details to see who would win based on a common attribute. i.e. people have mass and starships have crew. A person with greater mass wins, a starship with more crew wins. The app should render the attributes from the resource in a simple web page that allows you to ‘play’ the game. Once two cards are displayed the app should declare one of the cards a winner based on the higher common attribute.",
      category: ["React", "API", "SWAPI", "Fun"],
      links: "https://github.com/Behzadkk/Starwars"
    },
    {
      name: "toys",
      title: "Nanokala Toys",
      description: "UI Designer",
      imgurl: "images/portfolio/toys.png",
      details:
        "My responsibilities included producing marketing assets for consumer and industry events and promotions, designing mockups for website layout and created final web assets, translation of the UI/UX design wireframes to the actual code to produce visual elements of the application.",
      category: ["HTML", "CSS", "JavaScript", "Design"],
      links: "http://nanokala.com/"
    },
    {
      name: "ICNE",
      title: "Iranian Community NE",
      description: "Volunteer Instructor",
      imgurl: "images/portfolio/teaching.png",
      details:
        "We started this community to help Iranians and all Farsi speakers in the North East. The aim is to accelerate the integration process of people to the new circumstances. We started various classes and drop-ins. I, myself, run a driving theory test class.",
      category: ["Community", "Volunteer", "Teaching", "Translating"],
      links: "https://www.linkedin.com/in/behzad-kakavand-71181b137/"
    }
  ],
  testimonials: [
    {
      description: "This is a sample testimonial",
      name: "Some technical guy"
    },
    {
      description: "This is a sample testimonial",
      name: "Some technical guy"
    }
  ]
};

export default resumeData;
