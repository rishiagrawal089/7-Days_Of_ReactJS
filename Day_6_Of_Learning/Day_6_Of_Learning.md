
# React Router

Create React App doesn't include page routing. React Router is the most popular solution for it.

React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

## Features of React Router

- `Declarative Routing` : React Router v6 uses the Routes and Route components to define routes declaratively, making the routing configuration simple and easy to read.
- `Nested Routes` : It supports nested routes, allowing for complex and hierarchical routing structures, which helps in organizing the application better.
- `Programmatic Navigation` : The useNavigate hook enables programmatic navigation, allowing developers to navigate between routes based on certain conditions or user actions.
- `Route Parameters` : It provides dynamic routing with route parameters, enabling the creation of routes that can match multiple URL patterns.


### `We're going to go over many of the essential features you need to know if you're using React Router in your projects today, specifically for the web using the package react-router-dom`.


## 1. Add React Router
The very first step to using React Router is to install the appropriate package.

They are technically three different packages: `React Router`, `React Router DOM`, and `React Router Native`.

The primary difference between them lies in their usage. React Router DOM is for web applications and React Router Native is for mobile applications made with React Native. React Router components lies between react-router-dom and react-router-native.

The first thing that you'll need to do is install React Router DOM using npm
```bash
npm install react-router-dom
```

## 2. Basic Router step
Router are used to provide the cleanest URLs for web browser. One of the most common and used router in react web app are the `BrowserRouter`, but there are some other types of routers provided with this package

On the basis of the part of the URL that the router will use to track the content that the user is trying to view, React Router provides 3 different kinds of routers: 

- Memory Router
- Browser Router
- Hash Router

#### **These video and content is taken from [GFG](https://www.geeksforgeeks.org/reactjs-types-of-routers/?ref=lbp).

### MemoryRouter

- The memory router keeps the URL changes in memory not in the user browsers. 
- It keeps the history of the URL in memory and it does not read or write to the address bar so the user can not use the browser’s back button as well as the forward button. It doesn’t change the URL in your browser. 
- It is very useful for testing and non-browser environments like React Native.
![Demo of MemoryRouter](https://media.geeksforgeeks.org/wp-content/uploads/20200312173332/20200312-170311.gif)

### BrowserRouter

- It uses HTML 5 history API (i.e. pushState, replaceState, and popState API) to keep your UI in sync with the URL. 
- It routes as a normal URL in the browser and assumes that the server is handling all the request URL (eg., /, /about) and points to root index.html. 
- It accepts forceRefresh props to support legacy browsers that don’t support HTML 5 pushState API.

![Demo of BrowserRouter](https://media.geeksforgeeks.org/wp-content/uploads/20200312173210/20200312-165701.gif)

### HashRouter
- Hash router uses client-side hash routing. It uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.
- The hash portion of the URL won’t be handled by the server, the server will always send the index.html for every request and ignore the hash value. 
- It doesn’t need any configuration in the server to handle routes.
- It is used to support legacy browsers which usually don’t support HTML pushState API. It is very useful for legacy browsers or you don’t have a server logic to handle the client-side.
- This route isn’t recommended to be used by the react-router-dom team.

![Demo of HashRouter](https://media.geeksforgeeks.org/wp-content/uploads/20200312174018/20200312-170513.gif)

- It's a common practice to alias (rename) BrowserRoute as simply 'Router' when it is imported.
```
import { BrowserRouter as Router } from 'react-router-dom';
```
- If we want to provide routes within our entire application it needs to be wrapped around our entire component tree. That's why we usually see it wrapped around or within the main `App` component:

```bash
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      {/* routes go here, as children */}
    </Router>
  );
}
```
- #### Important :- Note that any router-specific data cannot be accessed outside of the Router(BrowserRouter) component. For example, we cannot access Home Component data outside of the router (if it contains routing data like <Link to=""/> ) and we cannot create a Route outside of a Router component.

## 3. Routes/Switch :-

After version-6 of react-router `Switch` are replaced by `Routes`, which over come many problem assiocated with Switch like matching the first occurences of url route ratherthan matching specific url route and many more.

`Routes` -- A container for a nested tree of <Route> element that render the branch that best matches the current location. We can have many <Routes> in one <BrowserRouter>, each defining many <Route> according to web application requirement.

```bash
import { BrowserRouter,Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            {/* route go here, as children */}
        </Routes>
    </BrowserRouter>
  );
}
```
## 4. Route Component :-

Defines a single route with a path and the component to render. It render the Component for the Path that best match a certain URL.

- We need to provide at least two props to each route, path and element.
```bash
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/about" component={About} />
        </Routes>
    </BrowserRouter>
  );
}
```
`path` :- The path prop specifies on what path of our app a given route is located.

`element` :-This props are used to display a specific component for our path.

- Finally, if want a component (such as a navbar) to be visible on every page, put it still within the browser router, but above (or below) the declared routes:

```bash
export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/about" component={About} />
        </Routes>
    </BrowserRouter>
  );
}
```
- We will also use 2 most common attributes i.e index and exact in <Route >

`exact` : As the name suggest it will be used to display Component only if the `path` matches exactly. It is to prevent multiple routes from matching the same path. When a Route component is defined without the 'exact' attribute, it will match any path that contains the specified path as a prefix.

`index` : A child route with no path that renders in the parent's outlet at the parent's URL.Example :-
```bash
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is `/`.
```

## 5. 404 Route
If we attempt to go to a path that doesn't exist in our application, what are we going to see? We're not going to see anything if we don't have a route corresponding to that. How do we make a catch-all route?

If a user attempts to go to a page for which we don't have a defined route, we can create a route and then set the path to an asterisk `*` :-
```bash
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```
## 6. Navigate/Redirect ( like in case of 404) 

For the same functionality of 404 if we don’t want to have a page called as 404 Page or Not Found Page and we want to navigate all such url to home page then we can use of something called Navigate from react-router-dom. Previously we use Redirect element for this functionality, but after v6 Redirect is replaced by Navigate.


```bash
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```
## 7. Link

Link is the most basic component that React Router gives us to create links. When we use Link, we can think of it as the React version of the <a> tag in HTML, which allows us to create links to other pages.

```bash 
<Link to="/path/to/link">Link text</Link>
```
#### Parameters:
- `link` : A `<Link>` is a Component in React Router used for “client-side routing”. When the `<Link>` Component renders in the DOM, it returns the normal `<a>` tag.
- `to` : The to prop is the path to the page that you want to link to.

#### NOTE :- Style is not preferred using <Link>.Although we can do so forcefully, but it will give warning on console for the same.

## 8. NavLink
NavLink is another component that allows us to create links, but with additional capabilities(i.e it is preferred for adding style to link). For example, with NavLink, we have the ability to know whether our link is in an “active” or “pending” state. 

```bash
<NavLink to="/" activeStyle={{ fontWeight: "bold",color: "red"}}> Home </NavLink>
<NavLink activeClassName="active" to="/about"> About </NavLink>
```
## 9. Nested Route and Outlet
- Nested routes in React JS are implemented using the Outlet in react-router-dom. 
- Routing in React not only provides routing for the pages but also for switching the content inside that page. 
- Nested routes implement this by defining Routes for Child components inside parent route components.

#### Outlet -- Placed in parent component and it renders the child routes element of there is one matching the url

Let's understand better with example :-

```bash
// App.js
function App() {
    return (
        <div className="App">
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="courses">Courses</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} >
                      <Route path="search" element={<Search />} />
                      <Route path="list" element={<List />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}
```
```bash
// Home.js
const Home = () => {
    return (
        <div className="Page">
            <h1>You are in the Home page!</h1>
            <h3>URL: localhost:3000/</h3>
        </div>
    );
};
```
```bash
// Search.js
const Search = () => {
    return (
        <div className="Search">
            <h2>You are inside the Search Component</h2>
            <h4>URL: localhost:3000/courses/search</h4>
        </div>
    );
};
```

```bash
// List.js
const List = () => {
    return (
        <div className="List">
            <h2>You are inside the List Component</h2>
            <h4>URL: localhost:3000/courses/list</h4>
        </div>
    );
};
```
```bash
// Courses.js
const Courses = () => {
    return (
        <div className="Page">
            <h1>You are in the Courses page!</h1>
            <h3>URL: localhost:3000/courses</h3>
            <div className="courses-nav">
                <Link to="/courses/search">Search</Link>
                <Link to="/courses/list">List</Link>
            </div>
            <Outlet />
        </div>
    );
};
```

![Demo](https://media.geeksforgeeks.org/wp-content/uploads/20220213023212/ezgifcomgifmaker17.gif)




## Hooks of Router

There are many hooks provided by React Router DOM. But some of the most used hooks are :-

- useNavigate()
- useParam()
- useSearchParam()
- useRoutes()
- useLocation()
- useMatchRoute()
- useHistory()

### useNavigate() 
- The useNavigate() hook is introduced in the React Router v6 to replace the useHistory() hook. In the earlier version, the useHistory() hook accesses the React Router history object and navigates to the other routers using the push or replace methods. It helps to go to the specific URL, forward or backward pages. 
- In the updated version, the React Router’s new navigation API provides a useNavigate() hook which is an imperative version to perform the navigation actions with better compatibility

```bash
const Home = () => {
    const navigate = useNavigate();
 
    return (
        <>
          <h1 style={{ color: "green" }}> GeeksForGeeks  </h1>
          <button onClick={() => navigate("/about")}> About </button>
        </>
    );
};
```

### useParams() Hook + Dynamic Routes
Dynamic Routing and useParam() hook go hand in hand. Consider a scenario where we want to display a blog post with a unique slug. How do we make sure that we display the appropriate data and appropriate components, given that our blog post slug can be completely different?

To declare a route parameter on a given route, it must be prefixed with a colon :. If I wanted to create a dynamic route,` "/blog/:postSlug" ` , for a blog post component

Now we can access any route params of a declared route with its associated component using the useParams hook.Lets have a example to understand better.

```bash

//App.js

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog/:postSlug" component={BlogPost} />
      </Switch>
    </Router>
  );
}

// Home.js
function Home() {
  return <>home</>;
}


//BlogPost.js

function BlogPost() {
  const [post, setPost] = React.useState(null);
  const { postSlug } = useParams();

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postSlug}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postSlug]);

  if (!post) return null;

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </>
  );
}
```

### useSearchParam()
- The useSearchParams hook is used to read and modify the query string in the URL for the current location. 
- Like React's own useState hook, useSearchParams returns an array of two values: the current location's search params and a function that may be used to update them

```bash
export default function SearchBar() {
  const searchParams = useSearchParams()
 
  const search = searchParams.get('search')
 
  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return <>Search: {search}</>


  // We can also use it to set query param using setSearchParams() function
  let [searchParams, setSearchParams] = useSearchParams();
```

### useRoutes()
- useRoutes() hook allows you to define routes in a declarative manner.
- It is used to define and configure routes in a React application. 
- It provides a flexible approach to defining routing configurations programmatically. 
- It is a functional equivalent of <Routes>. You can define a route configuration JavaScript object that maps specific paths to React components.

```bash
const routeConfig = [
    { path: '/', element: <Home /> },
    { element: <Navigation />,
        children: [
            { path: "/", element: <Home /> },
            { path: "about", element: <About /> }
         ]
    }
];

const Router = () => {
    const routeResult = useRoutes(routeConfig);
    return routeResult;
};


export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <h1 style={{ color: "green" }}> GeeksForGeeks | useRoutes Example</h1>
                <Router />
            </div>
        </BrowserRouter>
    );
}
```
### useLocation()
The `useLocation` hook in React Router is used to return the current location of a React component. The `useLocation` returns the current location as an object and comes with props such as

- pathname
- state
- search
- key
- hash
These props can be used with useEffect hook to perform side effects such as clicks onScroll or return state parsed to a Link component.

#### NOTE :- ** Refer to this medium article for deeper knowledge on each one [useLocation() Hook](https://medium.com/@alexanie_/https-ocxigin-hashnode-dev-uselocation-hook-in-react-router-758a0a711308)

```bash
const location = useLocation();
    
console.log(location.pathname); // '/about' from 'localhost:3000/about'
```

### useMatchRoute()
- If we want to know whether the given component is on a certain page, we can use the useRouteMatch hook.

For example, within our blog post, to see if the page that we're on matches the route "/blog/:postSlug", we can get back a boolean value that will tell us if the route that we're on matches the pattern that we specified:

```bash
function BlogPost() {
  const isBlogPostRoute = useRouteMatch("/blog/:postSlug");
 
  // Using this we can display, hide content, or do something else
}
```

### useHistory()
Its the old version of useNavigate and useLocation Hook. It use browser history API for the same purpose.

```bash

const history= useHistory();

console.log(history.location.pathname);
history.push('/about');
```

## Sample Code of Routing

```bash
// src/App.js

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Home Page</h2>
            <button onClick={() =>
                 navigate("/contact")}>Go to Contact</button>
        </div>
    );
};

const About = () => (
    <div>
        <h2>About Page</h2>
        <nav>
            <ul>
                <li>
                    <Link to="team">Our Team</Link>
                </li>
                <li>
                    <Link to="company">Our Company</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
);

const Contact = () => <h2>Contact Page</h2>;
const Team = () => <h2>Team Page</h2>;
const Company = () => <h2>Company Page</h2>;

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="team" element={<Team />} />
                    <Route path="company" element={<Company />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;

```# Practice Code Section

By now we have a good understanding of React Router,Router Types and its various hooks. So let's create some small projects to get the better understanding of it.

### Routing to Trainer Details
```bash
//App.js

function App() {
  return (
    <div style={{marginLeft:20}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>}/>
          <Route exact path="/home" element={<Home/>} />
          <Route path="/trainers" element={<TrainersList trainers={trainersMock} />}/>
          <Route path="/trainers/:Id" element={<TrainersDetail/>} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}
```
```bash
// Header.js

function Header() {
  return (
    <div>
      <h1> My Trainers App</h1>
      <br></br>
     <Link to="/">Home</Link> <span>  |  </span>
     <Link to="/trainers">Show Trainers</Link>
    </div>
  );
}
```

```bash
// Home.js

function Home(){
    return(
        <div>
        <h2>Welcome to My trainers page</h2>
        </div>
    )
}
```
```bash
// TrainerList.js

function TrainersList(props)
{
  const trainer=props.trainers;
  return(
    <div>
      <h2>Trainers List</h2>
      <ul>
        {trainer.map((e)=>{
          return(
          <li key={e.trainerId}>
            <Link to={`/trainers/${e.trainerId}`}>{e.name}</Link>
          </li>);
        })}
      </ul>
    </div>
  );
}
```
```bash
// Trainer.js

class Trainer{
    constructor(trainerId,name,email,phone,technology,skills){
        this.trainerId=trainerId;
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.technology=technology;
        this.skills=skills;
    }
}
```
```bash
// TrainersDetail.js

function TrainersDetail() {
  const { Id } = useParams();
  console.log(Id);
  let trainer;
  for (let x of trainersMock) {
    if (x.trainerId === Id) trainer = x;
  }
  console.log(trainer);
  return (
    <>
      <h2>Trainers Details</h2>
      <h3>
        {trainer.name} ({trainer.technology})
      </h3>
      <p>{trainer.email}</p>
      <p>{trainer.phone}</p>
      <ul>
        {trainer.skills.map((e) => {
          return <li key={e}>{e}</li>;
        })}
      </ul>
    </>
  );
}
```

```bash
// Trainermock.js

import Trainer from "./trainer";

 const trainersMock = [
  new Trainer(
    "shi-malviya",
    "Shivam Malviya",
    "shivm@cognizant.com",
    "97676516962",
    ".NET",
    ["C#", "SQL Server", "React", ".NET Core"]
  ),

  new Trainer(
    "r-rishi",
    "Rishi Agrawal",
    "rishi@cognizant.com",
    "9897199231",
    "Spring Boot",
    ["Java", "JSP", "Angular", "Spring"]
  ),

  new Trainer(
    "hush-harsh",
    "Harsh Mishra",
    "mishra@cognizant.com",
    "9871212235",
    "JAVA",
    ["Python", "Java", "Angular"]
  ),
]
export default trainersMock;

```

####  **Refer to attached folder for more information.