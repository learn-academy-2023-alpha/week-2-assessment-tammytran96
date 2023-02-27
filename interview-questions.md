# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: the difference between a parameter and an argument is that a parameter is used in a function as a placeholder so that the function is dynamic and can be reused with any variable or value. An argument is the actual value that is placed inside the function when running the function to get real results; it is not a placeholder since it represents actual data. 

Researched answer: A parameter is used in a function as a placeholder variable in order to make the function dynamic and reusable, rather than using an actual variable that consists of data or information. The parameters are defined in the parentheses () part of the function. Since it is defined in the parentheses, we can use the parameters anywhere in the function. An argument is used when the parameter is assigned a value. It is the actual information passed into the function inside the paratheses to invoke the function and it must be a data type that Javascript recognizes. Once the function is invoked, the argument takes the place of the parameters in the function, and action is done on the actual value to return an output. Whenever we input a new argument into the function, the output should be different based on the input. Functions can have multiple parameters and arguments, they just need to have the same amount of each. 


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The Javascript built-in method .map() takes the predefined parameters of value, index, and array. The parameter value is required; index and array are optional. 

Researched answer: The Javascript biult-in method .map() takes in the predefined parameters of the current value of the array (value), the index of the array are the current iteration, and the array that the higher-order function is called on (array). The names of the parameters can technically be any name, but the order matters and will always be the same. It must take in at least one value which is required, but the index and array parameters are optional. 


3. What is the difference between map and filter?

Your answer: the difference between map and filter is that map performs an iteration over an array and returns an array of the same amount of data, performing an action on each of the data included. Filter can be used when you want to return an array with only certain specifications, such as an array with only odd numbers. 

Researched answer: The .map() method performs an iteration through an array and returns an array of the same length, or same amount of data. Depending on what we want to do with each of the data, .map() iterates through a certain array and returns a new array with new updated values. .map() does something to each value in the array. 
The .filter() method performs an iteration through an array and returns a new array with only the values that satisfies a certain condition or specifications, therefore, filter needs an evaluation to in order to perform (ex. filtering through an array and returning an array with only odd numbers). The evaluation can be anything that returns a Boolean value or a truthy/falsey value. .filter() makes a decision about each item in the array and returns an array based on whatever condition is given. 


4. What is iteration?

Your answer: Iteration is going through something (usually an array) and performing a function on it. It is doing something over and over again until it satisfies a condition. 

Researched answer: Iteration is performing a block of code a certain amount of times or over and over again until it satifies a condition. Data types with length properties, such as strings and arrays, is what iterations can be performed on. Examples of iterations are for loops and higher-order functions. These functions performs an action on each item until a condition is met. A for loop in particular, must define a starting location, a condition to satisfy that will end the loop, and what action will take place during the iteration. 


5. What is the difference between a function and a method?

Your answer: A function is a block of code that takes in an argument and performs the an action to the argument and returns the output depending on what the action is. In a function, the action performed can be anything as long as the code makes sense. A method is a predetermined action (built-in method) that performs that specific action and returns the output of that action. A method in regards to objects are a function that takes the place of a value in the object's key:value pair. 

Researched answer: A function is a block of resuable code that takes in an argument and performs and action to the argument to return an output. A function has an input and an output and uses the arrow function => to describe the function. Functions will not do anything until we invoke it. It is made up of parameters that acts as a placeholder for the actual argument. 
A method is similar to a function but it's a function that belongs to an object. It takes the place of a new key:value pair in an object. Similar to a function, it must be invoked in order to take action, but it doesn't use the arrow function syntax. In a method, if you are referencing a value in an object, you will need to use "this" to pull it since you are referencing the object name while inside of the object.




6. STRETCH: What is hoisting in JavaScript?

Your answer:

Researched answer: Hoisting allows us to use functions and variables before they're declared. Because this can get confusing, it is probably best to avoid using variables before they are declared. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Classes: a type of function that contains data and behavior, and they are the blueprints of objects. Class names are always capitalized and are PascalCased, similar to camelCase but the first word is also capitalized. Class instances (objects) are lowercased and they can store any type of data. 

2. Spread operator: the spread operator is a syntax that allows a string or array to be expanded in places where arguments or elements are expected. It allows a dynamic number of arguments to be passed through a function. 

3. React state: React state is a variable that stores data which determines how the component renders and behaves since everything in React is a component. Components are broken down into components that hold state (a logic component) and components that do not (a display component); and it is important to make the distinction. useState is method to change the value of a state variable.

4. React props: React props (short for properties) are React objects that are used to pass information from one component to another nested component through component invocation, similar to how a function gets passed information through an argument. Props are a read only value and cannot be changed unlike state values. 

5. DOM events: DOM (Document Object Model) events are interactions with a user using web applications like React. React is meant to handle how the web interacts with a user, such as clicking something with their mouse, hovering over something, or using the keyboard to type - interactions like these are called DOM events. It is always on the lookout for any changes that needs to happen. Ex. if a user moves their mouse across the screen, the DOM reacts by executing the next step of what the user is expecting to see (which is the cursor moving to it's current position).
