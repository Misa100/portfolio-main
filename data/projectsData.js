import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
	{
		id: 1,
		title: 'Online Book Store',
		url: 'online-book-store',
		category: 'Web Application',
		img: '/images/web-project-20.png',
		ProjectHeader: {
			title: 'Bookly',
			publishDate: '2021',
			tags: 'FullStack / Web app',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Bookly',
				img: '/images/book-1.png',
			},
			{
				id: uuidv4(),
				title: 'Bookly',
				img: '/images/book-2.png',
			},
			{
				id: uuidv4(),
				title: 'Bookly',
				img: '/images/book-3.png',
			},
			{
				id: uuidv4(),
				title: 'Bookly',
				img: '/images/book-4.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Bookly',
				},
				{
					id: uuidv4(),
					title: 'Link',
					details: 'https://github.com/Misa100/', //github
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '+261 38 53 967 57',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Developping a complete e-commerce website for book sales, integrating advanced user, product, order and message management functionalities.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'PHP',
						'Mysql',
						'XAMPP'
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details: [
						'Skills highlighted:',
						'Robust back-end development with PHP and MySQL',
						'MVC architecture for clear organization and maintenance',
						'Responsive and intuitive user interfaces with HTML and CSS',
						'Configuration and management of local servers with XAMPP Highlights'
					]
				},
				{
					id: uuidv4(),
					details: [
						'General Highlights:',
						'Comprehensive user and product management system',
						'Secure and efficient ordering process',
						'Intuitive, responsive user interface',
						'SEO optimization for improved visibility',
						'Respect for MVC development principles'
					  ],
				},
			],
			SocialSharingHeading: 'Links to Project',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'Github',
					url: 'https://github.com/Misa100/book-store.git',
				},
			],
		},
	},
	{
		id: 2,
		title: 'Blog Experience',
		url: 'blog-experience',
		category: 'UI/UX Design',
		img: '/images/web-project-37.png',
		ProjectHeader: {
			title: 'Blog Experience',
			publishDate: '2023',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Blog Experience',
				img: '/images/blog-1.png',
			},
			{
				id: uuidv4(),
				title: 'Blog Experience',
				img: '/images/blog-2.png',
			},
			{
				id: uuidv4(),
				title: 'Blog Experience',
				img: '/images/blog-3.png',
			},
			{
				id: uuidv4(),
				title: 'Blog Experience',
				img: '/images/blog-4.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Welcome to Tailwind',
				},
				{
					id: uuidv4(),
					title: 'Link',
					details: 'https://github.com/Misa100/',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '+261 38 53 967 57',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Developped a responsive, high-performance blog website to promote an SEO optimization service, showcasing my front-end development skills with Next.js and Tailwind CSS',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Next.js',
						'TailwindCSS',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details: [
						'Skills highlighted:',
						'Mastering Next.js and Tailwind CSS: Learning and effectively using these modern JavaScript frameworks to create high-performance, responsive user interfaces.',
						'Implementing responsive design: Creating an optimal user experience on all devices, from desktops to smartphones.',
						'Routing implementation: Smooth and efficient management of navigation between different website pages (blog posts, service pages, etc.).',
						"SEO optimization: Application of SEO techniques to improve the website's ranking and visibility in search engines.",
					]
				},
				{
					id: uuidv4(),
					details: [
						'Project highlights:',
						'High-performance, responsive blog website: Demonstration of your skills in modern front-end development and your ability to create compelling user experiences.',
						'Use of cutting-edge technologies: Demonstrate your ability to learn and use new technologies quickly.',
						'Respect for accessibility principles: Creation of an inclusive website accessible to all users.',
					]
				},
			],
			SocialSharingHeading: 'Links to Project',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'Github',
					url: 'https://github.com/Misa100/nextjs-blog.git',
				},
				{
					id: uuidv4(),
					name: 'Vercel',
					url: 'https://nextjs-blog-seven-woad-64.vercel.app/',
				},
			],
		},
	},
	{
		id: 3,
		title: 'Google OAuth & Material UI',
		url: 'project-management-ui',
		category: 'Web Application',
		img: '/images/web-project-27.png',
		ProjectHeader: {
			title: 'Google OAuth & Material UI',
			publishDate: '2024',
			tags: 'FullStack / Web App',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Google OAuth & Material UI',
				img: '/images/login-1.png',
			},
			{
				id: uuidv4(),
				title: 'Google OAuth & Material UI',
				img: '/images/login-2.png',
			},
			{
				id: uuidv4(),
				title: 'Google OAuth & Material UI',
				img: '/images/login-3.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Google OAuth & Material UI',
				},
				{
					id: uuidv4(),
					title: 'Link',
					details: 'https://github.com/Misa100/',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '+261 38 53 967 57',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'To develop a secure and intuitive user login interface with Angular Material UI, integrating Google authentication and a responsive sidenav.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'Angular',
						'Bootstrap',
						'Nodejs',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details: [
						'Skills highlighted:',
						'Secure user authentication: Implementation of a reliable user login using Google OAuth 2.0 authentication.',
						"Intuitive user interface with Angular Material UI: Creation of an attractive, user-friendly interface using Angular Material UI's Material Design components.",
						"Sidenav responsive with Bootstrap: Design of a side menu adaptable to all screen sizes, using Bootstrap's responsive grids and classes.",
						"Organized software architecture: Structuring code with Angular components and services, favoring maintainability and reusability.",
					]
				},
				{
					id: uuidv4(),
					details: [
						'Project highlights:',
						'Convenient, secure authentication: Simple, secure user login via Google, reducing the risk of fraud and hacking.',
						'Elegant and functional user interface: Intuitive and attractive design, enhancing user experience and site navigation.',
						'Flexible and accessible Sidenav: Side menu adaptable to all devices, facilitating access to the different sections of the site.',
						'Organized, structured code: Clear, organized code structure, facilitating collaboration and future maintenance.',
					]
				},
			],
			SocialSharingHeading: 'Links',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'Github',
					url: 'https://github.com/Misa100/login-dashboard.git',
				},
				{
					id: uuidv4(),
					name: 'Vercel',
					url: 'https://login-dashboard-gamma.vercel.app/login',
				},
			],
		},
	},
	{
		id: 4,
		title: 'Career Managing',
		url: 'career-managing',
		category: 'Web Application',
		img: '/images/gestion carriere-2.png',
		ProjectHeader: {
			title: 'Career Managing',
			publishDate: 'January 2024',
			tags: 'FullStack / Web App',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Career Managing',
				img: '/images/carriere-1.png',
			},
			{
				id: uuidv4(),
				title: 'Career Managing',
				img: '/images/carriere-2.png',
			},
			{
				id: uuidv4(),
				title: 'Career Managing',
				img: '/images/carriere-3.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Luminess',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'FullStack Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://www.luminess.eu/',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '+33 1 44 76 54 40',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'To develop a complete web application for managing HR activities, integrating advanced functionalities for tracking and evaluating employees.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Angular',
						'API Rest',
						'Bootstrap',
						'Nodejs',
						'TypeScript',
						'PostgreSQL'
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details: [
						'Skills highlighted:',
						'JavaScript fullstack development: Mastery of front-end and back-end JavaScript technologies to create a high-performance, scalable web application.',
						'Angular and Bootstrap frameworks: Effective use of Angular to build the user interface and Bootstrap for responsive design.',
						'PostgreSQL database: Efficient management of HR data using complex SQL queries, views and functions, and a well-organized database structure.',
						'Deployment on local and private servers: Mastery of deployment tools such as WinSCP to put the application into production.',
						'Windows and Linux system administration: Ability to manage Windows and Linux servers for application monitoring and maintenance.',
						"Node.js package management: Efficient use of NPM to install and manage the project's JavaScript dependencies.",
						'Node.js back-end development: Creation of a RESTful API with Node.js to interact with the database and supply data to the Angular user interface.',
						'Designing user-friendly interfaces: Using Bootstrap and Angular to create intuitive and attractive user interfaces for HR.',
						'HR data management: Implementation of functionalities for employee tracking, skills assessment and performance management.',
						'Organized code structure: Adherence to the principles of good development practice for clear, maintainable and extensible code.',
					]
				},
				{
					id: uuidv4(),
					details: [
						'Project highlights:',
						'Complete HR application: All-in-one software solution for managing HR activities, simplifying employee monitoring and evaluation.',
						'Intuitive user interfaces: User-friendly and accessible design, enhancing the HR user experience.',
						'Efficient data management: well-organized database structure and RESTful API for reliable and secure HR data management.',
						'Flexible deployment: Ability to deploy the application on local and private servers for flexible use.',
						'Comprehensive technical skills: Demonstrated mastery of front-end and back-end JavaScript technologies, databases and operating systems.',
					]
				},
			],
			SocialSharingHeading: 'Links',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'Github',
					url: 'https://github.com/Misa100/gestion_carriere.git',
				},
			],
		},
	}, 
	{
		id: 5,
		title: 'Monitoring quality control',
		url: 'monitoring-quality-control',
		category: 'Web Application',
		img: '/images/web-project-45.png',
		ProjectHeader: {
			title: 'Monitoring quality control',
			publishDate: 'May 2024',
			tags: 'FullStack / Web App',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Monitoring quality control',
				img: '/images/suivi-1.png',
			},
			{
				id: uuidv4(),
				title: 'Monitoring quality control',
				img: '/images/suivi-2.png',
			},
			{
				id: uuidv4(),
				title: 'Monitoring quality control',
				img: '/images/suivi-3.png',
			},
			{
				id: uuidv4(),
				title: 'Monitoring quality control',
				img: '/images/suivi-4.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Luminess',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'FullStack Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://www.luminess.eu/',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '+33 1 44 76 54 40',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Convert a C# desktop application into a modern JavaScript fullstack web application,',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'Angular',
						'Bootstrap',
						'Typescript',
						'API REST',
						'Nodejs',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details: [
						'Skills highlighted:',
						'Desktop to Web Migration: Transforming legacy applications into modern web experiences.',
						'Fullstack JavaScript Development: Building high-performance, scalable applications.',
						'Angular & Bootstrap: Crafting dynamic UIs and responsive designs.',
						'PostgreSQL Management: Managing data with complex SQL queries.',
						'Deployment: Using tools like WinSCP for production deployment.',
						'Excel Manipulation: Creating and modifying Excel files with JavaScript such as ExcelJS.',
						'Data Integration: Converting and integrating legacy data into new systems.',
						'Responsive Design: Implementing user-friendly, responsive tables with Bootstrap.',
						'Modern JavaScript: Utilizing advanced JavaScript techniques.',
					]
				},
				{
					id: uuidv4(),
					details: [
						'Project highlights:',
						'Modern, high-performance web application: Successful conversion of a desktop application into an accessible, scalable web application.',
						'Advanced quality monitoring and reporting: Comprehensive functionality for monitoring and analyzing quality control data.',
						'Seamless Excel data integration: Generate and download Excel files from the web application.',
						'Responsive, intuitive design: User-friendly interface adapts to all devices.',
						'Comprehensive technical skills: Demonstrated expertise in JavaScript fullstack development, data manipulation and systems integration.',
					]
				},
			],
			SocialSharingHeading: 'Links',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'Github',
					url: 'https://github.com/Misa100/suivi_cq.git',
				},
			],
		},
	},
	// {
	// 	id: 6,
	// 	title: 'HelloWorld App',
	// 	url: 'hello-world-app',
	// 	category: 'Application Mobile',
	// 	img: '/images/web-project-30.png',
	// 	ProjectHeader: {
	// 		title: 'HelloWorld App (In progress)',
	// 		publishDate: 'May 2024',
	// 		tags: 'FullStack / Web App',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: uuidv4(),
	// 			title: 'HelloWorld App',
	// 			img: '/images/web-project-60.png',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'HelloWorld App',
	// 			img: '/images/web-project-61.png',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'HelloWorld App',
	// 			img: '/images/web-project-65.png',
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'About Project',
	// 		CompanyInfo: [
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Name',
	// 				details: 'HelloWorldApp',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Link',
	// 				details: 'https://github.com/Misa100/', //github
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Phone',
	// 				details: '+261 38 53 967 57',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objective',
	// 		ObjectivesDetails:
	// 			'Create a simple mobile application with Ionic and Angular 16, displaying "Hello World" on a mobile device.',
	// 		Technologies: [
	// 			{
	// 				title: 'Tools & Technologies',
	// 				techs: [
	// 					'Ionic',
	// 					'Typescript',
	// 					'Angular',
	// 					'Bootstrap',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Challenge',
	// 		ProjectDetails: [
	// 			{
	// 				id: uuidv4(),
	// 				details: [
	// 					'Skills highlighted:',
	// 					'Discovering Ionic and Angular 16: Learning Ionic and Angular 16 technologies for hybrid mobile application development.',
	// 					'Angular-like data structure: Use of existing Angular skills to facilitate learning the Ionic data structure.',
	// 					'Ionic-specific syntax: Master Ionic-specific syntax and concepts to create mobile user interfaces.',
	// 					'Creating an Android application with Ionic Capacitor: Use Ionic Capacitor to generate a native Android application from Ionic code.',
	// 					'Mobile development with Android Studio: Familiarity with Android Studio and Android development tools.',
	// 					'TypeScript and code reduction: Appreciation of the conciseness and efficiency of TypeScript code in mobile application development.',
	// 				]
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details: [
	// 					'Project highlights:',
	// 					'First Ionic mobile application: Production of a functional mobile application, demonstrating basic skills in Ionic and Angular 16.',
	// 					'Continuous Ionic learning: Commitment to deepen Ionic knowledge to create more complex mobile applications.',
	// 					'Simple and intuitive user interface: Clear and concise display of the "Hello World" message on the mobile screen.',
	// 					'Solid foundation in mobile development: Previous experience in Java and Android Studio, making it easy to learn Ionic.',
	// 					'Efficient TypeScript code: Appreciation of the advantages of the TypeScript language for mobile development.',
	// 				]
	// 			},
	// 		],
	// 		SocialSharingHeading: 'Links',
	// 		SocialSharing: [
	// 			{
	// 				id: uuidv4(),
	// 				name: 'Github',
	// 				url: 'https://github.com/Misa100/ionic_app_h_w'
	// 			},
	// 		],
	// 	},
	// },
	{
		id: 7,
		title: 'Todo App',
		url: 'todo-app',
		category: 'Web Application',
		img: '/images/web-project-51.png',
		ProjectHeader: {
			title: 'Todo App (In progress)',
			publishDate: 'July 2024',
			tags: 'FullStack / Web App',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Todo App',
				img: '/images/todo-4.png',
			},
			{
				id: uuidv4(),
				title: 'Todo App',
				img: '/images/todo-5.png',
			},
			{
				id: uuidv4(),
				title: 'Todo App',
				img: '/images/todo-6.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Todo App',
				},
				{
					id: uuidv4(),
					title: 'Link',
					details: 'https://github.com/Misa100/', //github
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '+261 38 53 967 57',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Discover a sleek and responsive web application to manage your tasks effortlessly, anytime, on any device.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React',
						'Django',
						'CSS',
						'Bootstrap',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details: [
						'Skills highlighted:',
						'React & Django Integration: Developed a Todo app using React for the front end and Django REST framework for the back end.',
						'Deployment Mastery: Deployed the Django backend using Gunicorn on Render, ensuring a seamless integration with the React front end.',
						'First React Project: Gained foundational skills in React, exploring React hooks and further advancing with clean architecture practices.',
						'SOLID & Clean Code Principles: Implemented best practices, including the Singleton pattern, SOLID principles (SRP, OCP, LSP, DIP), and CI/CD deployment.',
						'Database Management: Utilized SQLite for managing Todo data efficiently within the app.',
					]
				},
				{
					id: uuidv4(),
					details: [
						'Project highlights:',
						'Comprehensive Todo Management: Created a fully functional Todo application allowing users to display todos, modify titles, toggle completion status, add new todos, and delete existing ones.',
						'Continuous React Learning: Leveraged this project as a stepping stone to deepen React knowledge and apply advanced coding principles.',
						'Intuitive User Experience: Ensured a user-friendly interface for managing tasks, emphasizing clear and responsive design.',
					]
				},
			],
			SocialSharingHeading: 'Links',
			SocialSharing: [
				{
					id: uuidv4(),
					name: 'Github',
					url: 'https://github.com/Misa100/todo_app_react_django.git'
				},
				{
					id: uuidv4(),
					name: 'Vercel',
					url: 'https://todo-app-react-django.vercel.app/'
				},
				{
					id: uuidv4(),
					name: 'Render',
					url: 'https://todo-app-react-django.onrender.com/api/todos'
				},
			],
		},
	},
];
