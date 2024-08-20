
# Lifecycle of React

- React Component lifecycle starts from its initialization and ends when it is unmounted from the DOM. 

- It is defined as the series of methods that are invoked in different stages of the component’s existence. `The definition is pretty straightforward but what do we mean by different stages ?` A React Component can go through four stages of its life as follows. 

## Lifecycle of React Components:

Each React Component go though the given Phases Initialization Phase, Mounting Phase, Updating Phase and Unmounting Phase.

### Initialization phase
This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.

### Mounting Phase
Mounting is the stage of rendering the JSX returned by the render method itself.

### Updating
Updating is the stage when the state of a component is updated and the application is re-render.

### Unmounting
As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.

- React provides the developers with a set of predefined functions.

- Developers are supposed to override the functions with the desired logic to execute accordingly.


** Image is taken from medium article by Tahereh Gholami.
![Lifecycle Phase Image](https://miro.medium.com/v2/resize:fit:720/format:webp/1*6fpdTXUVt1sQuLA9KthEQQ.png)

#### React use a naming convention for functions, functions that contain  “Will” represents before some specific phase and “Did” represents after the completion of that phase

## Initialization 
In this phase, the developer has to define the props and initial state of the component this is generally done in the constructor of the component.

```bash
class Clock extends React.Component { 
    constructor(props) 
    { 
        // Calling the constructor of 
        // Parent Class React.Component 
        super(props); 
        
        // Setting the initial state 
        this.state = { date : new Date() }; 
    } 
} 
```

## Mounting
Mounting means putting elements into the DOM. React has four built-in methods that gets called, in this order, when mounting a component:

- constructor()
- getDerivedStateFromProps()
- render()
- componentDidMount()

#### The render() method is required and will always be called, the others are optional and will be called if you define them.

1. `constructor()` : Method to initialize state and bind methods. Executed before the component is mounted.

```bash

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hello: "World!" };
    }
 
    render() {
        return (
            <h1>
                GeeksForGeeks.org, Hello {this.state.hello}
            </h1>
        );
    }
}
```

2. `static getDerivedStateFromProps()` : It is called right before rendering the element(s) in the DOM. Used for updating the state based on props.

```bash
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}
```

3. `render() method` : It is the method that actually outputs the HTML to the DOM.

```bash
class Header extends React.Component {
  render() {
    return (
      <h1>This is the content of the Header component</h1>
    );
  }
}
```

4. `componentDidMount()`: It is the method which get called after the component is rendered. This is where you run statements that requires to be run after the component is already placed in the DOM.

```bash

// At first my favorite color is red, but give me a second, and it is yellow instead: 

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}
```

## Updating

A component is updated whenever there is a change in the component's state or props. React has five built-in methods that gets called, in this order, when a component is updated:

- getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

1. `getDerivedStateFromProps(props, state)`:It is a static method that is called just before render() method in both mounting and updating phase in React. It takes updated props and the current state as arguments

**For code refer to mounting 

2. `shouldComponentUpdate()`: In the shouldComponentUpdate() method we can return a Boolean value that specifies whether React should continue with the rendering or not. The default value is true.
It returns true or false, if false then render(), componentWillUpdate() and componentDidUpdate() method does not gets invoked.

```bash
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
    return false;
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}
```

3. `render()` : Same as Mounting Phase

4. `getSnapshotBeforeUpdate()` : In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.

If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.

```bash
/*
When the component is mounting it is rendered with the favorite color "red".

When the component has been mounted, a timer changes the state, and after one second, the favorite color becomes "yellow".

This action triggers the update phase, and since this component has a getSnapshotBeforeUpdate() method, this method is executed, and writes a message to the empty DIV1 element.
*/


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}
```
5. `componentDidUpdate` : The componentDidUpdate method is called after the component is updated in the DOM.

```bash
 For code see getSnapshotBeforeUpdate() .
```

## Unmounting

It is the phase of unmounting the component from the DOM or we can say removing the component from the DOM. React has only one built-in method that gets called when a component is unmounted: componentWillUnmount()
- `componentWillUnmount()` : The componentWillUnmount method is called when the component is about to be removed from the DOM.

```bash
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}
````
# Styling React Component

There are many ways to style React Component with CSS, the three common ways :

- Inline styling
- CSS stylesheets
- CSS Modules

### Inline Styling
To style an element with the inline style attribute, the value must be a JavaScript object:

```bash
 return (
    <>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
```

Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like background-color, must be written with camel case syntax. Like use backgroundColor instead of background-color:

```bash
const Header = () => {
  return (
    <>
      <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

// To make it more understable we can also write the code in given manner.

const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}
```

### CSS Stylesheets
We can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.
```bash
// Create a new file called "App.css" and insert some CSS code in it:

body {
  background-color: #282c34;
  color: white;
  padding: 40px;
  font-family: Sans-Serif;
  text-align: center;
}

// App Component

import './App.css';

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}
```

### CSS Modules
Another way of adding styles to our application is to use CSS Modules. CSS Modules are convenient for components that are placed in separate files.

The CSS inside a module is available only for the component that imported it, and we do not have to worry about name conflicts.

Create the CSS module with the .module.css extension, example: my-style.module.css.

```bash
my-style.module.css :-
.bigblue {
  color: DodgerBlue;
  padding: 40px;
  font-family: Sans-Serif;
  text-align: center;
}

Car.js :-

import styles from './my-style.module.css'; 

const Car = () => {
  return <h1 className={styles.bigblue}>Hello Car!</h1>;
}
```

### Bootstrap

Apart from this we can also install bootstrap dependency and import the path in `index.js` to use it's classes accordingly.

1. Run the given npm command to install bootstrap dependency
```bash
npm -i bootstrap
```

2. Import the path in index.js
```bash
import 'bootstrap/dist/css/bootstrap.min.css';
```
3. Start using it classes
```bash
<div className="container">
  <div className="row">
    <p> This is what it is...</p>
  </div>
</div>
```

#### **In similar way we can also install other dependency like bootstrap-icon, sweetalert, etc. to make your application look more good.
# Conditional Rendering

React allows us to conditionally render components which means that the developer can decide which component to render on the screen on the basis of some predefined conditions. This is known as conditional rendering.

Conditional rendering in React can be implemented in three ways :-
- if and else statement.
- Logical `&&` operator
- Ternary Operator

### If and else statement
We can create two components and create a boolean variable which decides the element to be rendered on the screen.

```bash 
function MainComponent(props) {
    const myBool = props.myBool;
    if (myBool) {
        return <Component1/>;
    } else{
        return <Component2/>;
    }
}
```

### Logical && Operator
We can use the logical && operator along with some condition to decide what will appear in output based on whether the condition evaluates to true or false.
```bash
{
    condition &&
    
    // This section will contain
    // elements you want to return
    // that will be a part of output
}
```
#### If the condition provided in the above syntax evaluates to `True` then the elements right after the && operator will be a part of the output and if the condition evaluates to false then the code within the curly braces will not appear in the output.

```
function Example(){
    const counter = 5;
    return(<div>
            {
                (counter==5) &&
                <h1>Hello World!</h1>
            }
           </div>
        );
}
```
### Ternary Operator
In JavaScript we have a short syntax for writing the if-else conditions due to which the code becomes shorter and easy to read. 
```bash
function MainComponent(props) {
    const myBool = props.myBool;
    return(
        <>
            {myBool? <Component 1/>: <Component 2/>}
        </> 
    )
}
```

### Preventing Component from Rendering
It might happen sometimes that we may not want some components to render. To prevent a component from rendering we will have to return `null` as its rendering output. 

```
function Example(props)
{
    if(!props.toDisplay)
        return null;
    else
        return <h1>Component is rendered</h1>;
}
```
## List and Keys

Lists are very useful when it comes to developing the UI of any website. React Lists are mainly used for displaying menus on a website, for example, the navbar menu. In regular JavaScript, we can use arrays for creating lists.

In React, we will render lists with some type of loop. The JavaScript `map()` array method is generally the preferred method.

```
function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}
```
#### The above code will give a warning in the console of the browser like:

![ERROR IMAGE](https://media.geeksforgeeks.org/wp-content/uploads/20230728092945/gfg.png)

#### The above warning message says that each of the list items in our unordered list should have a unique key. 

### Keys
Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.

Keys need to be unique to each sibling. But they can be duplicated globally. Generally, the key should be a unique ID assigned to each item.
```bash
function Navmenu(props)
{
    const list = props.menuitems;

    const updatedList = list.map((listItems)=>{
        return(
                <li key={listItems.toString()}>
                    {listItems}
                </li>
            ); 
    });

    return(
        <ul>{updatedList}</ul>
    );
}
```
## Practice Code Section

By now we have a good understanding of lifecycle of react component,its methods,styling react component,conditional rendering and list and keys. So let's create some small projects to get the better understanding of it.

### Lifecycle Methods with List & Keys
```bash
// Post Class
class Post{
    constructor(id,title,body)
    {
        this.id=id;
        this.title=title;
        this.body=body;
    }
}
export default Post;

//Posts Component

class Posts extends Component{
    constructor(props){
        super(props);
        this.state={
            post:[],
            errorFound:false
        }; 
    }
    
    loadPosts(){
        fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((json)=>{
            this.setState({
                post:json
            });
        })
    }
    componentDidMount(){
        this.loadPosts();
    }
    render()
    {
        if(this.state.errorFound)
        {
            return null;
        }
        else{
        return(
            <div>
                {
                    this.state.post.map((res)=>(
                        <ul key={res.id}>
                            <h1>{res.title}</h1>
                            <p>{res.body}</p>
                        </ul>
                    ))
                }
            </div>
        );}
    }
    componentDidCatch(error,info)
    {
        this.setState({errorFound:true});
        alert("Error :- "+error+"     Info :- "+info);
    }
}
export default Posts;

```

### Conditional Rendering
```bash
//Home Component

const IndianTeam=['Sachin1','Dhoni2','Virat3','Rohit4','Yuvraj5','Raina6'];

export function Home(){
    var flag=false;
    if(flag===true)
    {
        return(
            <div>
            <h1>List of Players</h1>
            <ListofPlayers players={players}/>
            <hr/>
            <h1>List of Players having Scores Less than 70</h1>
            <Scorebelow70 players={players}/>
            </div>
        )
    }
    else{
        return(
            <div>
                <div>
                    <h1>Indian Team</h1>
                    <h1>Odd Players</h1>
                    {OddPlayers(IndianTeam)}
                    <hr/>
                    <h1>Even Players</h1>
                    {EvenPlayers(IndianTeam)}
                </div>
                <hr/>
                <div>
                    <h1> List of Indian Players Merged :</h1>
                    <ListofIndianPlayers IndianPlayer={IndianPlayers}/>
                </div>
            </div>
        )
    }
}

//IndianPlayers

const T20Players=['First Player','Second Player','Third Player'];
const RanjiTrophyPlayers=['Fourth Player','Fifth Player','Sixth Player'];
export const IndianPlayers=[...T20Players,...RanjiTrophyPlayers];

export function OddPlayers([first,,third,,fifth])
{
    return(
        <div>
            <li>First: {first}</li>
            <li>Third: {third}</li>
            <li>Fifth: {fifth}</li>
        </div>
    )
}
export function EvenPlayers([,second,,fourth,,sixth])
{
    return(
        <div>
            <li>Second: {second}</li>
            <li>Fourth: {fourth}</li>
            <li>Sixth: {sixth}</li>
        </div>
    )
}

export function ListofIndianPlayers()
{
    return(
        IndianPlayers.map((item)=>{
            return(
                <div>
                    <li>Mr. {item}</li>
                </div>
            )
        })
    )
}

//ListofPlayers

export const players=[
            {name:'Jack',score:50},
            {name:'Michael',score:70},
            {name:'John',score:40},
            {name:'Ann',score:61},
            {name:'Elisabeth',score:61},
            {name:'Sachin',score:95},
            {name:'Dhoni',score:100},
            {name:'Virat',score:84},
            {name:'Jadeja',score:64},
            {name:'Raina',score:75},
            {name:'Rohit',score:80}
];
 
export function ListofPlayers()
{
    return(
        players.map((item)=>
        {
            return(
                <div>
                    <li>Mr. {item.name} <span> {item.score} </span></li>
                </div>
            )
        }
    ))
}

export function Scorebelow70()
{
    return(
        players.map((item)=>
        {
            if(item.score<=70)
            {
                return(
                    <div>
                        <li>Mr. {item.name} <span> {item.score} </span></li>
                    </div>
                )
            }
            else{
                return null;
            }
        })
    )
}
````

####  **Refer to attached folder for more information.