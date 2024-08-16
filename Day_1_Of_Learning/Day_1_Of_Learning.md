
# Introduction

1) React is a free and open-source front-end JavaScript library for building UI.
2) Remember React is a JavaScript library and not a framework like Angular. Hence we need to include 3rd party library for having some functionality like routing, http requests,etc.
3) React is `declarative,efficient and flexible` JS library, which is used to build a SPA(Single Page Application) and is mostly used for Client Side Application.
4) React was developed by Facebook Inc. in 2011 for it's `Newsfeed Feature` and make publicly available in 2013 for developing frontend UI. Now Meta Team is responsible for maintaining and introducing new feature in React.
5) It is a Component based UI library, which allow us to create a reactive and dynamic reusable UI Component
6) Because of Component, it is easy to maintain and test the `React Application`.
7) Developent in React is more faster and more productive then traditional JavaScript for implementing the same functionality, as it has many utility code which can be re-used.


# How Does React Work ?

Whenever the React Application is compiled it create a `Virtual DOM` in memory. So instead of manipulating the browser DOM directly, React create a virtual DOM in memory which is just the exact copy of actaul browser DOM, where it does all the necessary manipulating before making changes in actaul browser DOM. This will help in preventing reloading of browser again and again.

Virtual DOM help in managing the changes and `changes what needs to be changed`. Instead of changing the whole browser DOM evertime a change is made in the application.







# Some starting command
In order to get more inside of react application. Let's first see some of the most used command in react app and then create a react application using node.js command to see the folder structure which get created.

#### There are mainly 2 ways to create the react application one using `npx command` and other by installing the `create-react-app globally`. 

### Using npx 

This is most prefered and used command to create the react application. As it's always install the latest version of react and we don't need to run the unnecessary command again and again to get the latest version of react.

  - Open the command prompt in the folder where you want to have your react app. Run the given command.

```bash
  npx create-react-app <project-name>
```

- Remember if you have previously installing the create-react-app globally. Run the given command to uninstall it and then run the above command to always have the latest version. The create-react-app is the package from npm which include build tools like `Webpack,Babel and ESLint` which help in deploying,running and many managing many other tasks.

```bash
  npm uninstall -g create-react-app
```

- Once the react app is create. Run the command to start the application on the default port (locahost:3000).

```bash
  npm start.
```

- If you have include any new dependency.Run the command to install it or to update any dependency to latest version.

```bash
  npm install 
```

### Using globally create-react-app 

This is usuallly not prefered command to create the react application. As it's not always insure the latest version of react. 

  - Open the command prompt in the folder where you want to have your react app. Run the given command.

```bash
  npm install create-react-app
```
After this run the gven command to create the react application.
```bash
 create-react-app <project-name>
```



 



# Folder Structure

Once the react application is create and is upon running on `localhost:3000` successfully. Open the create project in VS Code Editor or Editor of your choose. Let's deep-in-dive into the folder structure of react application.

- node_modules : It's the folder which contain all the 3rd party library need for our react application. This folder will never goes into production.

- public : Contain all the files which are publically accessible. The most important one is the `index.html`. It is the only HTML file in the whole react application which is basically displayed on the browser.

- src : It is the most important folder for developer, it's where all the developement work in done.
    - The App.css, App.js(Component) and App.test.js are all the file belong to App Component.
    - index.css : Globall CSS file.
    - index.js : Entry point of the React Application.
- serviceWorker.js : For progessive Web application (Can be ignore by beginner developer).
- reportWebVital.js : May be removed in New Version. It's the built-in tool for measuring the real-life performance of your react application.It measure a set of metrics that aims to capture the user experience for a web page.
- package.json : It is also the most important file which contain information about our react application. It is the Standard Configuration File which contain all the dependencies and script used in react app.






## ES6

ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

As React uses ES6 (ECMAScript 6) therefore you should be familiar with some of the new features like:

- Classes
- Arrow Functions
- Variables (let, const, var)
- Array Methods like .map()
- Destructuring
- Modules
- Spread Operator
- Default parameter
- Template literals
- Object literals

### Classes
It is the same as one used in programming language like Java,C++,etc.

```bash
class Car {
  constructor(name) {
    this.brand = name;
  }
  
  present() {
    return 'I have a ' + this.brand;
  }
}

const mycar = new Car("Ford");
mycar.present(); 
```
We can use the extends for get the property of other class too.

```bash
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}
const mycar = new Model("Ford", "Mustang");
mycar.show();
```

### Arrow Functions
Arrow functions allow us to write shorter function syntax:

```bash
Before:

hello = function() {
  return "Hello World!";
}
```

```bash
With Arrow Functions:


hello = () => "Hello World!";
```

#### What About this?
The handling of `this` is also different in arrow functions compared to regular functions.

In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions, the this keyword always represents the object that defined the arrow function.

The first example uses a regular function, and the second example uses an arrow function.
The result shows that the first example returns two different objects (window and button), and the second example returns the Header object twice.

With a regular function, this represents the object that called the function:
``` bash
class Header {
  constructor() {
    this.color = "Red";
  }

//Regular function:
  changeColor = function() {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
```


With an arrow function, this represents the Header object no matter who called the function:
``` bash
class Header {
  constructor() {
    this.color = "Red";
  }

//Arrow function:
  changeColor = () => {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();


//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
```

### ES6 Variables
With ES6, there are three ways of defining your variables: var, let, and const.

```bash
var x = 5.6;
var has a function scope, not a block scope.
```
If you use var outside of a function, it belongs to the global scope.

If you use var inside of a function, it belongs to that function.

If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.

```bash
let x = 5.6;

let is the block scoped version of var, and is limited to the block (or expression) where it is defined.

If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.

let has a block scope.
```

```bash
const x = 5.6;

const is a variable that once it has been created, its value can never change.

const has a block scope
```
It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object

### Array Methods like .map()

There are many JavaScript array methods. One of the most useful in React is the .map() array method. The .map() method allows you to run a function on each item in the array, returning a new array as the result.

```bash
const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)
```
### ES6 Destructuring

Destructuring allows you to easily access the values of
arrays or objects and assign them to variables.

```bash
Here's an example for an array:


const array = [1, 2, 3];
const [a, b] = array;
console.log(a); // prints 1
console.log(b); // prints 2
console.log(array); // prints [1, 2, 3]


And here for an object:
const myObj = {
name: 'Max',
age: 28
}
const {name} = myObj;
console.log(name); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}

```
Destructuring is very useful when working with function
arguments. 

```bash
const printName = ({name}) => {
console.log(name);  // prints 'Max'
}



function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
}
```

### Spread Operator

The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

```bash
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
```
### ES6 Modules

ES Modules help us in breaking the code into separate file. It rely on the import and export statements.

#### Export

```bash
In-line individually:   person.js

export const name = "Jesse"
export const age = 40

All at once at the bottom:   person.js

const name = "Jesse"
const age = 40

export { name, age }

Default export :    message.js

const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + 'years old.';
};

export default message;
```


#### Import

```bash
import { name, age } from "./person.js";

import message from "./message.js";
```

### Template Literals

Template Literals are indicated by the backtick (`) character. Template literals can be used to hold the placeholders, that are indicated by the ‘$’ sign and the {}  braces such as (${expression}).

Advantage :
-  Concatenating Strings.
- No need to use \n and \t escape sequences.
- Combination of expressions and strings becomes easy.
```bash
`Any string ${jsExpression} can appear here`
```


### Default Parameter

Function parameters with default values are initialized with default values if they contain no value or are undefined.

```bash
function name(parameter=value,...parameters) {

}
```



### Object Literals

Oject literal enhancement is used to group variables from the global scope and form them into javascript objects. It is the process of restructuring or putting back together.

```bash
 // Variable declaration 
    var name = "Lilly"; 
    var color = "White"; 
    var age = 3; 
  
    // function declaration  
    // using "this" keyword to access the object keys. 
    var barkWithName = function(){ 
        console.log('Woof Woof!!, I am '
        +this.name+' and I am a '
        +this.age+' years old, '
        +this.color+ ' coloured dog.Woof Woof!!'); 
    } 
  
    // Using Object Literal Enhancement 
    // combines all variables into a yetAnotherDog object 
    var yetAnotherDog = {name, color, age, barkWithName}; 
    yetAnotherDog.barkWithName();
```
## JSX

JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

As React is a JS library it is not possible to HTML in JavaScript code directly, this is where JSX help us in. It help in writing the HTML in JS file. The `Modern JS Compiler` will convert the JSX to Plain JavaScript, so that browser can run it. You are not required to use JSX, but JSX makes it easier to write React applications.

#### JSX:
```bash
const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
#### Without JSX:
```bash
const myElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

#### Multiple Line HTML code
To write HTML on multiple lines, put the HTML inside parentheses

```bash
const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
```


#### One Top level element
The HTML code must be wrapped in ONE top level element.

```bash
const myElement = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);
```

To avoid extra div we can use ` Fragment ` which is nothing the blank { <> </> } instead of { <div> </div> }

#### Attribute className instead of className

The class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX. Use attribute `className` instead. When JSX is rendered, it translates className attributes into class attributes

~ Also it is not possible to use if statement so instead use ternary operator.




## HELLO WORLD

By now we have a good understanding of react, so let's create our first react application which is used to display HELLO WORLD on browser.

```bash
return(
    <h1>Hello World from App Component</h1>
  );
```

Refer to attached Hello Word folder for more information.

