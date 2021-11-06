const AllProjects = [
    {
    name: "Imitarus",
    image: 'imitarus',
    imgDes: "A status.",
    type: "app",
    category: "Web Application",
    projDate: "7 October 2021",
    githubUrl: "https://imitarus.web.app/",
    shortDes: "An artificial-intelligence driven social media web app built using React.",
    description: "Imitarus is an art gallery and photo-sharing app for creators. This app was built using create-react-app, and utilizes technologies such as React, Redux, Node, Google Firebase, Authentication/Authorization, Firebase Storage Buckets, and more. Only users that have gone throught the account-creation process can make submissions to the database. Users can interact with other people's submissions via the real-time 'like' and 'unlike' features, as well as update their email, and recover forgotten passwords using token-based JSON authentication.",
    description2: "Imitarus uses an artificial intelligence API seeded with hundreds of thousands of poems, song lyrics, haikus, and stories to generate dynamic weekly prompts available to all users. The weekly generated text prompts serve as a template for the users to make photo submissions that they feel connect with the prompt. Each text prompt is only available for users to view and submit for a 14-day period, releasing the community to a fresh start bimonthly. All prompts are then removed from the database after this period to help create an environment focused on self-improvement instead of comparison. Imitarus' minimalistic take on social media stems from the desire to encourage its' users to spend their time outside of the app, and capturing all that the world has to offer.",
    id: 15
  },
  {
    name: "Satoshi's Crypto",
    image: 'rocket',
    imgDes: "An image of a rocket.",
    type: "card",
    category: "Web Application",
    projDate: "27 July, 2021",
    githubUrl: "https://github.com/kdrendel99/Satoshis-Crypto",
    shortDes: "A web app built using C#/.NET framework. Uses ASP.NET Core MVC pattern, and scrapes reddit for the most mentioned cryptocurrencies within the last 24 hours.",
    description: "Satoshi's Crypto was built during a team-week section in my time at Epicodus. The goal was to create a C# web application that used an API to deliver information back to its' user. The development process for this app was an especially unique, and offered some welcomed challenges for me and my small dev team. Having most of us only previously written async code using vanilla JavaScript, we had to break down the implementation and tediousness of scraping a subreddit that updated every day -- in fact, nearly every second. Reddit's API doesn't allow for scraping to occur seamlessly, and the initial implementation of Reddit's own API was cumbersome at best. We eventually landed on an API called Pushshift, where we found a way to better access posts in an orderly fashion (though not without a frustratingly small allotted daily call amount). Using this API in combination with Postman and chained calls, we began the monumental task of parsing large datasets of JSON into MySQL, and finally returning it to the user for their own use. These are the results.",
    description2:"",
    id: 25
  },
  {
    name: "National Parks API",
    image: 'park',
    imgDes: "Yosemite clip art",
    type: "card",
    category: "Web API",
    projDate: "10 July, 2021",
    githubUrl: "https://github.com/kdrendel99/National-Parks-API",
    shortDes: "An fully functional CRUD API built using C#, ASP.NET Core, Entity, and MySQL. Utilizes token-based JSON authentication for POST, PUT, PATCH, and DELETE updates to the database.",
    description: "This project was brought to life from my love of the outdoors, and curiosity to learn about the back-end of APIs. This API contains information about all 63 United States National Parks, and provides queryable functionality so the user can filter through popular activities/sight-seeing opportunities by searching for things like 'camping', 'rock climbing', or even popular landmarks like 'Old Faithful'. The user is required to have their login information in a List stored in the application (for the time being) if they desire to modify the database. I anticipate moving the credentials into a hosted and encrypted SQL database. JSON Web Token Authentication (JWT) is required for any update methods that may be called. I decided that JWT-based authentication was a great way implement this based on it being a self-contained and compact standard to securely transfer claims. All GET requests are available for public access. To further secure this API, all tokens are created using a hash algorithm.",
    description2:"",
    id: 35
  },
  {
    name: "High School Jukebox",
    image: 'jukebox',
    imgDes: "A jukebox.",
    type: "app",
    category: "Web Application",
    projDate: "11 April 2021",
    githubUrl: "https://github.com/kdrendel99/High-School-Jukebox",
    shortDes: "Feeling nostalgic? This JavaScript web app uses OATH2 token-based authentication to retrieve you a personalized, genre-specific list of songs from your teenage years.",
    description: "This application was created with the nostalgic music-enthusiast in mind. High School Jukebox was brought to life during a collaborative team week project through Epicodus. Our project was heavily centered around building an immersive, polished UI with seamless Spotify integration. From the moment the application is launched, the user is greeted with a flickering neon-inspired loading screen. This application was built using vanilla JavaScript backed by OAUTH2, NPM, Webpack, and -most importantly- the 'Spotify for Developers' API. The user inputs their name, date of birth, and desired music genre. Then, said user's high school age range is calculated, and (using token-based authentication) is fetched a list of the most popular singles filtered by the their 'genre' input. My team incorporated embedded Spotify playback URL's allowing the user to listen to the greatest hits of their golden years instantly.",
    description2:"",
    id: 45
  },
  {
    name: "Factory Manager",
    image: 'factory',
    imgDes: "A factory.",
    type: "card",
    category: "Web Application",
    projDate: "13 June, 2021",
    githubUrl: "https://github.com/kdrendel99/Factory-Solution",
    shortDes: "An MVC app built in C# that allows the user full CRUD functionality to the SQL database. Utilizes many-to-many database relationships, and RESTful routing.",
    description: "This application was built for a personal code review submission during my time at Epicodus. I created this project to practice database manipulation through an ASP.NET Core MVC front-end. Factory Manager collects the hypothetical 'factory manager's input, and updates the back-end SQL relationships accordingly. The factory manager has full CRUD access to a list of both engineers and their licensed machines through RESTful routing, and a many-to-many database. If a new engineer or machine is brought into our factory, the factory manager will be able to update the app accordingly. During the build of this project, I worked mainly with MySQL workbench to create custom schemas and migrations for lightweight database manipulation.",
    description2:"",
    id: 55
  },
  {
    name: "Taproom Manager",
    image: 'taproom',
    imgDes: "Beer glasses.",
    type: "app",
    category: "Web Application",
    projDate: "29 August, 2021",
    githubUrl: "https://github.com/kdrendel99/Tap-Room-Manager---React-App",
    shortDes: "This app was built using create-react-app. Built to practice manipulating local state in React and passing props from different components.",
    description: "This project is a simple implementation of state created when I first began learning React. It features component-based rendering, full CRUD functionality, component mapping, and allows the user (the hypothetical taproom manager) to update the availability of kegs in their store right from their home page. During the build of this project, I got some great practice creating component diagrams, deciding on state storage locations, and the fundamentals of functional React programming. Through this project, I got to work with both class and state components, passing props, using PropTypes, and the importance of being extremely intentional with state changes from a functional approach. Since then, I've worked with many different state-management tools in React such as React Redux, Firestore, React hooks, component lifecycle methods, and the rendering process. Taproom Manager was a great starting point for me, and is where my love for React began.",
    description2:"",
    id: 65
  }
];

export default AllProjects;