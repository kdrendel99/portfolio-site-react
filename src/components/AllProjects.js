const AllProjects = [
  {
    name: "Realtime.io",
    image: 'realtime',
    imgDes: "An image of an emoji.",
    type: "app",
    category: "Web Application",
    projDate: "7 January 2022",
    hostedUrl: "https://realtime-js.herokuapp.com/",
    githubUrl: "https://github.com/kdrendel99/Peer-to-Peer",
    shortDes: "A JavaScript web app that uses WebRTC/Sockets and facial recognition to generate audio chat rooms for peers to talk in.",
    description: "Realtime.io is a project I undertook to learn more about server-side development, web sockets, and facial tracking. This app was built to create a live chat room where users could meet new people without worrying about their video feed being accessible under the hood. To do this, the application captures the user's video input, and passes it to a facial detection library. This determines and returns the user's facial expression which is then drawn onto a canvas on their DOM. A new stream is then created from this canvas and once their audio input is added, that stream is then sent to all the other sockets in the room. This ensures the user's live video feed is never accessible or streamed beyond their own device, fulfilling the project's MVP. Feel free to check out the deployed version in the Project Info, and send a pal your url (room code) to test it out.",
    description2: "This project was a fun way to put my full-stack abilities to the test. A huge factor in this project's functionality comes from a JavaScript library called PeerJS. PeerJS allowed the application to establish a peer-to-peer connection API via the browser's WebRTC implementation. Because the hosted server (separate from this client application) acts only as a connection broker, Realtime was built without the need to pass stream data through the server -- in other words, 'Look ma, no server!'.",
    id: 15
  },
    {
    name: "Imitarus",
    image: 'imitarus',
    imgDes: "A statue.",
    type: "app",
    category: "Web Application",
    projDate: "7 October 2021",
    hostedUrl: "https://imitarus.web.app/",
    githubUrl: "https://github.com/kdrendel99/imitarus",
    shortDes: "An artificial-intelligence driven social media web app built using React.",
    description: "Imitarus is an art gallery and photo-sharing app for creators. This app was built using create-react-app, and utilizes technologies such as React, Redux, Node, Google Firebase, Authentication/Authorization, Firebase Storage Buckets, and more. Only users that have gone throught the account-creation process can make submissions to the database. Users can interact with other people's submissions via the real-time 'like' and 'unlike' features, as well as update their email, and recover forgotten passwords using token-based JSON authentication.",
    description2: "Imitarus uses an artificial intelligence API seeded with hundreds of thousands of poems, song lyrics, haikus, and stories to generate dynamic weekly prompts available to all users. The weekly generated text prompts serve as a template for the users to make photo submissions that they feel connect with the prompt. Each text prompt is only available for users to view and submit for a 14-day period, releasing the community to a fresh start bimonthly. All prompts are then removed from the database after this period to help create an environment focused on self-improvement instead of comparison. Imitarus' minimalistic take on social media stems from the desire to encourage its' users to spend their time outside of the app, and capturing all that the world has to offer.",
    id: 25
  },
  {
    name: "National Parks API",
    image: 'park',
    imgDes: "Yosemite clip art",
    type: "card",
    category: "Web API",
    projDate: "10 July, 2021",
    hostedUrl: null,
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
    hostedUrl: "https://high-school-jukebox.web.app/",
    githubUrl: "https://github.com/kdrendel99/High-School-Jukebox",
    shortDes: "Feeling nostalgic? This JavaScript web app uses OATH2 token-based authentication to retrieve you a personalized, genre-specific list of songs from your teenage years.",
    description: "This application was created with the nostalgic music-enthusiast in mind. High School Jukebox was brought to life during a collaborative team week project through Epicodus. Our project was heavily centered around building an immersive, polished UI with seamless Spotify integration. From the moment the application is launched, the user is greeted with a flickering neon-inspired loading screen. This application was built using vanilla JavaScript backed by OAUTH2, NPM, Webpack, and -most importantly- the 'Spotify for Developers' API.",
    description2:"The user inputs their name, date of birth, and desired music genre. Then, said user's high school age range is calculated, and (using token-based authentication) is fetched a list of the most popular singles filtered by the their 'genre' input. My team incorporated embedded Spotify playback URL's allowing the user to listen to the greatest hits of their golden years instantly.",
    id: 45
  },
  {
    name: "Rocket Insurance",
    image: 'rocket',
    imgDes: "A rocket.",
    type: "app",
    category: "Web Application",
    projDate: "18 January, 2022",
    hostedUrl: "https://rocket-insurance-demo.web.app/",
    githubUrl: "https://github.com/kdrendel99/Rocket-Insurance",
    shortDes: "A mock-insurance web app, built in React. Created to handle user form submission, sending POST/PUT requests via Axios and Redux Thunk to an API.",
    description: "Rocket Insurance is a web app built using React. This project incorporates the use of Redux/Redux Thunk middleware to manage the POST/PUT requests asynchronously. On successful HTTP requests, the website automatically routes the user to a page displaying their generated quote from the API. Users can then update their quote, and see the changes reflected in real-time with the use of PUT requests and React's 'onChange' input attribute.",
    description2:"This project is heavily front-end focused, and was designed to resemble the UI of an insurance website. I had a fun time creating the custom graphics/logo, as well as utilizing bootstrap's powerful flexbox grid to make it both mobile-friendly and responsive. If you're a Star Wars fan, or a space-enthusiast like me, you're sure to get a kick out of a few little easter-eggs.",
    id: 55
  },
  {
    name: "Stock Market Ticker",
    image: 'stocks',
    imgDes: "An image of a stock trend.",
    type: "app",
    category: "Web Application",
    projDate: "22 January 2022",
    hostedUrl: "https://stock-market-ticker.web.app/",
    githubUrl: "https://github.com/kdrendel99/Stock-Market-Ticker",
    shortDes: "A React web app that tracks stock market tickers and allows the user to search for a stock, and see the previous two-week trends as well as real-time updates when available.",
    description: "Stock Market Ticker is a web application built using React, Redux/Redux Thunk, Finnhub's financial API, and Bootstrap. This project was built to help better understand React's component lifecycle methods, and prevent redundant re-renders with pre-existing data. Stock Market Ticker utilizes web sockets and middleware to listen for live updates for the user's queried ticker. It additionally validates the user's query, and finds the closest ticker available based on their input. It then retrieves the two-week stock history using Axios to create an initial GET request.",
    description2:"This project was built using the Lightweight Charting Library, utilizing the the built-in chart-update functionality. This prevents the chart from needing to redraw the data it already has, which minimizes latency and creates a lightweight user experience.",
    id: 65
  },
];

export default AllProjects;