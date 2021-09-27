const AllProjects = [
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
    id: 15
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
    id: 25
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
    id: 35
  },
  {
    name: "Factory Manager",
    image: 'factory',
    imgDes: "A factory.",
    type: "card",
    category: "Web Application",
    projDate: "13 June, 2021",
    githubUrl: "https://github.com/kdrendel99/Factory-Solution",
    shortDes: "An MVC app built in C# that allows offers the user full CRUD functionality to the SQL database. Utilizes many-to-many database relationships, and RESTful routing.",
    description: "This application was built for a personal code review submission during my time at Epicodus. I created this project to practice database manipulation through an ASP.NET Core MVC front-end. Factory Manager collects the hypothetical 'factory manager's input, and updates the back-end SQL relationships accordingly. The factory manager has full CRUD access to a list of both engineers and their licensed machines through RESTful routing, and a many-to-many database. If a new engineer or machine is brought into our factory, the factory manager will be able to update the app accordingly. During the build of this project, I worked mainly with MySQL workbench to create custom schemas and migrations for lightweight database manipulation.",
    id: 45
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
    id: 55
  },
  {
    name: "Exchange Rate Calculator",
    image: 'exchange',
    imgDes: "Coins.",
    type: "app",
    category: "Web Application",
    projDate: "7 April 2021",
    githubUrl: "https://github.com/kdrendel99/exchange-rate-calculator",
    shortDes: "What's the current dollar going rate for Chinese Yuan? Pound Sterling? Russian Rubles? If only there was an app for that...",
    description: "Exchange Rate Calculator is a lightweight JavaScript app supported with NPM, Webpack, and Exchange Rate api v6. I built this app after a late-night, curiosity-fueled Google search about how the U.S. Dollar holds up against foreign currencies. However, I was greeted by a wall of articles from businessinsider.com, investopedia.com, and various how-to-stockmarket sites. I saw a great opportunity to practice accessing APIs using regular JavaScript, and expanded my familarity with asynchronus programming. Through this app, I worked with small amounts of client side error handling, parsing JSON data to JavaScript, Postman, catch blocks, NPM plug-ins, and admittedly more than I will probably ever need to know about Canadian Dollars.",
    id: 65
  },
];

export default AllProjects;