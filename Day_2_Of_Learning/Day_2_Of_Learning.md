
# React Component

Components are independent and reusable bits of code for UI Element.They are the reusable code blocks containing `logics` and and `UI elements`. They serve the same purpose as JavaScript functions, but work in isolation and return HTML(basically JSX).

- Every react application has atleast one-component, we basically called it as Root Component(`App.js`) and all the other component are child to it.

- A UI is broken down into many multiple individual pieces called components. We can work on each component independently and merge them to make a large view for UI.

- Components promote efficiency and scalability in web development by allowing developers to compose, combine, and customize them as needed.

`Note -- In older React code bases, you may find Class components primarily used. It is now suggested to use Function components along with Hooks, which were added in React 16.8`.

```bash
Component are named on the camelCase convention.
```

## Types of Component
In React, we mainly have two types of components:
- Functional Components
- Class based Components

### Functional Component in React :

Functional components are just like JavaScript functions that accept properties and return a React element.

We can create a functional component in React by writing a JavaScript function. These functions may or may not receive data as parameters. For example: 

```bash
function demoComponent() {
    return (<h1>
                Welcome Message!
            </h1>);
}
```

#### We can call the functional component in javaScript in other ways as follows:

1. Call the function by using the name of the function followed by the Parentheses like ` root.render(Func())`

2. Call the function by using the functional component method like ` root.render(<Comp />);`


#### Some Keys Features of Functional Component are:
- Simple functions.
- Use Function Component as much as possible( recommended after React 16.8 ).
- Ideal for presenting static UI elements
- Absence of `this` keyword in functional component.
- Solution without using state(as in Class Component before React 16.8), after 16.8 uses Hooks { useState() } for maintaining state.
- Mainly responsible for the UI.
- Functional Component are also called Stateless/Dumb/ Presentational Component.


### Class Component in React :

A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

- The component also requires a render() method, this method returns HTML.

- Class Component also have some reserved keyword like state, timerID ,etc. which can be used to maintain internal operation and state. They can be accessed by using `this` keyword.

```bash
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```

#### Some Keys Features of Functional Component are:
- Class Component are more Features rich in comparsion to function component.
- Maintain their own private data - state.
- Mainly used for Complex UI logic.
- Provide lifecycle methods.
- Functional Component are also called Stateful/Smart/ Container Component.

# Rendering React Components

Now your React application has a component called Car, which returns an `<h2>` element.

To use this component in your application, use similar syntax as normal HTML: <Car />

```bash
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```
#### Let us see step-wise what is happening in the above example: 

- We call the ReactDOM.render() as the first parameter.
- React then calls the component Welcome, which returns `<h2>Hi, I am a Car!</h2>` as the result.
- Then the ReactDOM efficiently updates the DOM to match with the returned element and renders that element to the DOM element with id as “root”.

# Components in Components

```bash
import React from "react";
import ReactDOM from "react-dom";

const Greet = () => {
   return <h1>Hello Geek</h1>
}

// This is a functional component
const Welcome = () => {
    return <Greet />;
};

ReactDOM.render(
    <Welcome />,
    document.getElementById("root")
);
```
# Pure Component 
ReactJS has provided us with a Pure Component. If we extend a class with Pure Component, there is no need for the `shouldComponentUpdate()` lifecycle method. 
- Pure Components are Class Components that extend React.PureComponent. 
- ReactJS Pure Component Class compares the current state and props with new props and states to decide whether the React component should re-render itself or not.

- In simple words, If the previous value of the state or props and the new value of the state or props are the same, the component will not re-render itself.
- Pure Components restricts the re-rendering when there is no use for re-rendering of the component. 

```bash
export default class Test extends React.PureComponent {
    render() {
        return <h1>Welcome to GeeksforGeeks</h1>;
    }
}
```

# Props

`Props stands for Properties`. They are basically used to pass data from one component to another (or more precise from parent to child).

#### IMP -- Since we know that in React we can use components as HTML Element we can pass data through them as attributes and all these attributes are grouped together into one Object(props) by React at compile time and passed to component as arguments. Props are like function arguments, and we send them into the component as attributes.
```bash
const myElement = <Car brand="Ford" />;

// component
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
```
- It is not necessary to use name as func(props) we can give custom name as well like func(dummy), but props are standard way of using.

- Props are immutable means it's value cannot be changed if we try to change it in child component like :
```bash
function Car(props) {
props.brand ='XYZ';          // Error 
  return <h2>I am a { props.brand }!</h2>;
}
```
#### Hence we can say React Props are read-only! You will get an error if you try to change their value.

- We can pass anything through props by using jsx like string, object, method ,etc.

```bash 
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  const carName = "Ford";
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carName } />
      <Car brand={ carInfo } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

#### Method as Props

```bash
// App Component
function App() {
    return (
        <div className="App">
            <h1>-----------METHODS AS PROPS-------------</h1>
            <ParentComponent />
 
        </div>
    );
}

// Parent Component
class ParentComponent extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            parentName:'Parent'
        }
  
        this.greetParent = this.greetParent.bind(this)
    }
      
    greetParent() {
        alert(`Hello ${this.state.parentName}`)
    }
  
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

//Child Component
function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler()}>
                Greet Parent
            </button>
        </div>
    )
}
 
```

### Props.children
 Props has a special property called children {props.children} which can be used to get the content between the opening and closing tag of component.

 ```bash
    <div>
        <ChildComponent greet="Good Morning" >
        <h1>Hi from inside</h1>
        </ChildComponent>
    </div>

    ChildComponent=(props)=>{
    return(
    <>// Fragment
        <p> {props.greet}</p>
        {props.children}
    </>
    )
    }
    

    // What if we pass children as attribute?
    --> Then also it will ref to content between tag. It will only ref to that only if their is nothing in between tags.
 ```
 Note :- 
- `props` -- Functional Component
- `this.props` -- Class Component

## PropType

 Used to validate the data type being passed through props.It's mainly important in large application for debugging and testing purpose.

 1. First we can to import propType to use it.

 ```bash
npm i prop-types
 ```
 2.  Just import it in component and use in the following way
 ```bash
 ComponentClassName.propTypes{
    
    propName1 : PropTypes.string,
    propName2 : PropTypes.bool,
    propName3 : PropTypes.array,
    .
    .
    propNamen : PropTypes.anyOtherType
}
```
#### For more information just refer to artile on [gfg](https://www.geeksforgeeks.org/reactjs-proptypes/?ref=lbp).

## defaultProps

The defaultProps is a method that we can use to store as much information as we want for a particular class. And this information can be accessed from anywhere inside that particular class.

```bash 

// Component
class ExampleClass extends React.Component {
    render() {
        return (
            <div>
                {/* using default prop - title */}
                <h1>This is {this.props.title}'s Website!</h1>
            </div>
        );
    }
}
 
// Creating default props for 
// ExampleClass Component
ExampleClass.defaultProps = {
    title: "GeeksforGeeks"
}
```

#### For more information just refer to artile on [gfg](https://www.geeksforgeeks.org/reactjs-props-set-2/?ref=lbp).
## State
- The state in React is an instance of the React Component Class that can be defined as an object that holds some information that may change over the lifetime of the component.
- State is privately managed within the component.
- state can we changed using the setState() method never change it directly.
- We must first have some initial state, to do so we should define the State in the `constructor` of the component’s class.
- React provides its own method setState(). setState() method takes a single parameter and expects an object which should contain the set of values to be updated. Once the update is done the method implicitly calls the render() method to repaint the page.

#### Note -

`useState Hook` - Functional Component.(Learn more about this in Hooks)

`this.state` - Class Component.

## Updating the state:

Remember these 3 point while updating the state in react.

1. Never update the state directly because it will not re-render the component and the view remain same even the state is updated.Always use setState() method.

```bash
this.state={msg:"this"} // Wrong Way
this.setState({msg:"this}); // correct way
```

2. Code that has to be executed after the state has been updated ? Place that code in the callback function which is the second argument to the setState() method.

```bash
this.setState({msg:"this}, ()=>{console.log(this.state.msg)});

```

3. When you have to update state based on the previous state value,pass it in a function as an argument instead of the regular object.


```bash
this.state={
    count:0;
}

 this.setState((prevState) => ({
            count: prevState.count + 1,
        })
    );
```
## Practice Code Section

By now we have a good understanding of component,its types,props and state. So let's create some small projects to get the better understanding of it.

### Component in Component
```bash
//App Component
function App() {
  return (
    <div className="container">
      <Home/>
      <About/>
      <Contact/>
    </div >
  );
}

export default App;


//Home Component
return(
        <div>
        <h3>Welcome to the Home Page of Student Management Portal</h3>
        </div>
    )

// About Component
   return(
        <div>
        <h3>Welcome to the About Page of Student Management Portal</h3>
        </div>
    )

// Contact Component
 return(
        <div >
        <h3>Welcome to the Contact Page of Student Management Portal</h3>
        </div>
    )
```

### Class Component and state
```bash
export class CountPeople extends Component{
    constructor(props){
        super(props);

        this.state={
            entrycount:0,
            exitcount:0
        };
    }

    UpdateEntry=()=>
    {
        this.setState((prevState,props)=>{
            return {entrycount:prevState.entrycount+1}
        });
    }
    UpdateExit=()=>
    {
        this.setState((prevState,props)=>{
            return {exitcount:prevState.exitcount+1}
        });
    }

    render()
    {
        return(
            <div>
                <button type="button" onClick={this.UpdateEntry}>Login</button> <span>{this.state.entrycount} People Entered!!!!                </span>
                <button type="button" onClick={this.UpdateExit}>Exit</button> <span>{this.state.exitcount}People Left!!!!</span>
            </div>
        );
    }
}

````

### Functional Component and props
```bash
// Functional Component with props

function CohortDetails(props) {
    return (
        <div className={style.box}>
            <h3 style={{color:props.cohort.currentStatus === 'Ongoing'?'green':'blue'}}>
                {props.cohort.cohortCode} -
                <span>{props.cohort.technology}</span>
            </h3>
            <dl>
                <dt>Started On</dt>
                <dd>{props.cohort.startDate}</dd>
                <dt>Current Status</dt>
                <dd>{props.cohort.currentStatus}</dd>
                <dt>Coach</dt>
                <dd>{props.cohort.coachName}</dd>
                <dt>Trainer</dt>
                <dd>{props.cohort.trainerName}</dd>
            </dl>
        </div>

        
    );
}
export default CohortDetails;


// Class and Data

class Cohort {
    constructor(cohortCode,startDate,technology,trainerName,coachName,currentStatus) {
        this.cohortCode = cohortCode;
        this.coachName = coachName;
        this.trainerName = trainerName;
        this.technology = technology;
        this.startDate = startDate;
        this.currentStatus = currentStatus;
    }
}
const CohortsData =[
    new Cohort('INTADMDF10','22-Feb-2022', '.NET FSD', 'Jojo Jose','Aathma', 'Scheduled'),
    new Cohort('ADM21JF014','10-Sep-2021', 'Java FSD', 'Elisa Smith','Apoorv', 'Ongoing'),
    new Cohort('CDBJF21025','24-Dec-2021', 'Java FSD', 'John Doe','Aathma', 'Ongoing'),
    new Cohort('INTADMJF12','22-Feb-2022', 'Java FSD', 'To Be Assigned','Ibrahim', 'Scheduled'),
    new Cohort('CDE22JF011','24-Dec-2021', 'Java FSD', 'Emma Swan','Apoorv', 'Ongoing'),
    new Cohort('INTADMDF09','22-Feb-2022', 'Dataware Housing', 'Babjee Rao','Aathma', 'Scheduled'),
    new Cohort('ADM22DF001','10-Sep-2021', '.NET FSD', 'Marie Curie','Ibrahim', 'Ongoing'),
];
export {Cohort, CohortsData};
```

####  **Refer to attached folder for more information.
