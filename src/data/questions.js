export const initialQuestions = [
  {
    "id": 1,
    "question": "What is React?",
    "options": [
      "A relational database",
      "A JavaScript library for building user interfaces",
      "A CSS framework",
      "A backend server"
    ],
    "correctAnswer": "A JavaScript library for building user interfaces",
    "explanation": "React is a JS library used to build UIs.",
    "topic": "React Introduction",
    "difficulty": "Easy"
  },
  {
    "id": 2,
    "question": "Who maintains React?",
    "options": [
      "Google",
      "Facebook (Meta)",
      "Microsoft",
      "Twitter"
    ],
    "correctAnswer": "Facebook (Meta)",
    "explanation": "React was created and is maintained by Facebook/Meta.",
    "topic": "React Introduction",
    "difficulty": "Easy"
  },
  {
    "id": 3,
    "question": "What command is used to create a React application using create-react-app?",
    "options": [
      "npx create-react-app my-app",
      "npm install react-app",
      "npm build react-app",
      "npx new-react my-app"
    ],
    "correctAnswer": "npx create-react-app my-app",
    "explanation": "The standard tool is create-react-app.",
    "topic": "React Get Started",
    "difficulty": "Easy"
  },
  {
    "id": 4,
    "question": "Which method is used to render a React element into the DOM in React 18?",
    "options": [
      "ReactDOM.render()",
      "React.mount()",
      "ReactDOM.createRoot().render()",
      "document.render()"
    ],
    "correctAnswer": "ReactDOM.createRoot().render()",
    "explanation": "In React 18, createRoot is used.",
    "topic": "React Render HTML",
    "difficulty": "Easy"
  },
  {
    "id": 5,
    "question": "What is JSX?",
    "options": [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON XML",
      "JavaScript X-Mode"
    ],
    "correctAnswer": "JavaScript XML",
    "explanation": "JSX stands for JavaScript XML.",
    "topic": "JSX Intro",
    "difficulty": "Easy"
  },
  {
    "id": 6,
    "question": "How do you write a comment in JSX?",
    "options": [
      "// comment",
      "<!-- comment -->",
      "{/* comment */}",
      "/* comment */"
    ],
    "correctAnswer": "{/* comment */}",
    "explanation": "JSX comments must be wrapped in braces.",
    "topic": "JSX Intro",
    "difficulty": "Easy"
  },
  {
    "id": 7,
    "question": "Which HTML attribute is written as 'className' in JSX?",
    "options": [
      "class",
      "id",
      "style",
      "name"
    ],
    "correctAnswer": "class",
    "explanation": "Because class is a reserved word in JS.",
    "topic": "JSX Attributes",
    "difficulty": "Easy"
  },
  {
    "id": 8,
    "question": "What is the correct way to specify an inline style in React?",
    "options": [
      "style=\"color: red\"",
      "style={{color: 'red'}}",
      "style={color: 'red'}",
      "class=\"color-red\""
    ],
    "correctAnswer": "style={{color: 'red'}}",
    "explanation": "Inline styles are passed as objects in React.",
    "topic": "React CSS Styling",
    "difficulty": "Easy"
  },
  {
    "id": 9,
    "question": "A functional component must return how many root DOM nodes?",
    "options": [
      "One",
      "Two",
      "Three",
      "Any number"
    ],
    "correctAnswer": "One",
    "explanation": "React components must return a single root element.",
    "topic": "Function Components",
    "difficulty": "Easy"
  },
  {
    "id": 10,
    "question": "What are Props in React?",
    "options": [
      "Functions",
      "Methods",
      "Arguments passed into React components",
      "State variables"
    ],
    "correctAnswer": "Arguments passed into React components",
    "explanation": "Props are like function arguments.",
    "topic": "React Props",
    "difficulty": "Easy"
  },
  {
    "id": 11,
    "question": "Props are passed to components via...",
    "options": [
      "HTML attributes",
      "State",
      "Context",
      "Variables"
    ],
    "correctAnswer": "HTML attributes",
    "explanation": "Props are passed like HTML attributes.",
    "topic": "React Props",
    "difficulty": "Easy"
  },
  {
    "id": 12,
    "question": "Can props be modified by the receiving component?",
    "options": [
      "Yes",
      "No",
      "Only if it's a class component",
      "Only if it's a function component"
    ],
    "correctAnswer": "No",
    "explanation": "Props are read-only.",
    "topic": "React Props",
    "difficulty": "Easy"
  },
  {
    "id": 13,
    "question": "What is a Class Component in React?",
    "options": [
      "A simple JS function",
      "A class extending React.Component",
      "A variable",
      "A Hook"
    ],
    "correctAnswer": "A class extending React.Component",
    "explanation": "Class components must extend React.Component.",
    "topic": "Class Components",
    "difficulty": "Easy"
  },
  {
    "id": 14,
    "question": "How do you handle events in React?",
    "options": [
      "onclick",
      "onClick",
      "on-click",
      "clickEvent"
    ],
    "correctAnswer": "onClick",
    "explanation": "React events use camelCase.",
    "topic": "React Events",
    "difficulty": "Easy"
  },
  {
    "id": 15,
    "question": "Which method is commonly used to loop over arrays in React JSX?",
    "options": [
      "forEach()",
      "map()",
      "filter()",
      "reduce()"
    ],
    "correctAnswer": "map()",
    "explanation": "map() is used to render lists.",
    "topic": "ES6 Array map()",
    "difficulty": "Easy"
  },
  {
    "id": 16,
    "question": "What must each element in a React list have?",
    "options": [
      "An id",
      "A ref",
      "A unique 'key' prop",
      "A class"
    ],
    "correctAnswer": "A unique 'key' prop",
    "explanation": "Keys help React identify changed items.",
    "topic": "Keys",
    "difficulty": "Easy"
  },
  {
    "id": 17,
    "question": "What is React State?",
    "options": [
      "An object storing component data",
      "A global variable",
      "A CSS file",
      "A DOM element"
    ],
    "correctAnswer": "An object storing component data",
    "explanation": "State is an object holding data that can change over time.",
    "topic": "Components",
    "difficulty": "Easy"
  },
  {
    "id": 18,
    "question": "Which Hook is used to add state to a function component?",
    "options": [
      "useState",
      "useEffect",
      "useContext",
      "useRef"
    ],
    "correctAnswer": "useState",
    "explanation": "useState is the Hook for state.",
    "topic": "useState",
    "difficulty": "Easy"
  },
  {
    "id": 19,
    "question": "What does useState return?",
    "options": [
      "A value and a function",
      "An array with two elements",
      "An object",
      "A single value"
    ],
    "correctAnswer": "An array with two elements",
    "explanation": "It returns the state variable and a setter function.",
    "topic": "useState",
    "difficulty": "Easy"
  },
  {
    "id": 20,
    "question": "What Hook is used for side effects in React?",
    "options": [
      "useState",
      "useEffect",
      "useContext",
      "useRef"
    ],
    "correctAnswer": "useEffect",
    "explanation": "useEffect runs side effects.",
    "topic": "useEffect",
    "difficulty": "Easy"
  },
  {
    "id": 21,
    "question": "What does the 'let' keyword do in ES6?",
    "options": [
      "Declares a global variable",
      "Declares a block-scoped variable",
      "Defines a constant",
      "Creates a class"
    ],
    "correctAnswer": "Declares a block-scoped variable",
    "explanation": "let allows block-scoped variable declaration.",
    "topic": "ES6 Variables",
    "difficulty": "Easy"
  },
  {
    "id": 22,
    "question": "Which ES6 feature is used to extract values from arrays or objects into distinct variables?",
    "options": [
      "Spread operator",
      "Destructuring",
      "Arrow functions",
      "Modules"
    ],
    "correctAnswer": "Destructuring",
    "explanation": "Destructuring unpacks values.",
    "topic": "ES6 Destructuring",
    "difficulty": "Easy"
  },
  {
    "id": 23,
    "question": "What symbol is used for the spread operator in ES6?",
    "options": [
      "...",
      "&&",
      "||",
      "=>"
    ],
    "correctAnswer": "...",
    "explanation": "Three dots are used for spread.",
    "topic": "ES6 Spread Operator",
    "difficulty": "Easy"
  },
  {
    "id": 24,
    "question": "How do you write a ternary operator?",
    "options": [
      "condition ? true : false",
      "condition ! true : false",
      "condition & true : false",
      "condition || true : false"
    ],
    "correctAnswer": "condition ? true : false",
    "explanation": "Ternary uses the ? and : syntax.",
    "topic": "ES6 Ternary Operator",
    "difficulty": "Easy"
  },
  {
    "id": 25,
    "question": "Which syntax imports a module in ES6?",
    "options": [
      "require('module')",
      "include 'module'",
      "import module from 'module'",
      "fetch('module')"
    ],
    "correctAnswer": "import module from 'module'",
    "explanation": "ES6 uses the import statement.",
    "topic": "ES6 Modules",
    "difficulty": "Easy"
  },
  {
    "id": 26,
    "question": "React is mainly used to build:",
    "options": [
      "Single-page applications (SPAs)",
      "Databases",
      "Operating Systems",
      "Hardware"
    ],
    "correctAnswer": "Single-page applications (SPAs)",
    "explanation": "React builds fast SPAs.",
    "topic": "React Introduction",
    "difficulty": "Easy"
  },
  {
    "id": 27,
    "question": "How do you embed JavaScript expressions in JSX?",
    "options": [
      "Using quotes \" \"",
      "Using curly braces { }",
      "Using brackets [ ]",
      "Using parentheses ( )"
    ],
    "correctAnswer": "Using curly braces { }",
    "explanation": "Braces wrap JS expressions in JSX.",
    "topic": "JSX Expressions",
    "difficulty": "Easy"
  },
  {
    "id": 28,
    "question": "What is the correct way to write an arrow function?",
    "options": [
      "function = () => {}",
      "() => {}",
      "=> {}",
      "function() => {}"
    ],
    "correctAnswer": "() => {}",
    "explanation": "Arrow functions use the () => syntax.",
    "topic": "ES6 Arrow Functions",
    "difficulty": "Easy"
  },
  {
    "id": 29,
    "question": "Which attribute is used to group multiple HTML tags in JSX without adding an extra node to the DOM?",
    "options": [
      "<div>",
      "<group>",
      "<React.Fragment>",
      "<section>"
    ],
    "correctAnswer": "<React.Fragment>",
    "explanation": "Fragments group elements without adding a DOM node.",
    "topic": "JSX Intro",
    "difficulty": "Easy"
  },
  {
    "id": 30,
    "question": "How do you create a React component named 'Hello'?",
    "options": [
      "function Hello() {}",
      "const Hello = () => {}",
      "Both function and arrow function",
      "class Hello() {}"
    ],
    "correctAnswer": "Both function and arrow function",
    "explanation": "Both syntax are valid for function components.",
    "topic": "Function Components",
    "difficulty": "Easy"
  },
  {
    "id": 31,
    "question": "How do you pass a prop named 'color' with value 'blue' to a component?",
    "options": [
      "<Car color=\"blue\" />",
      "<Car {color: 'blue'} />",
      "<Car>color='blue'</Car>",
      "<Car props={color: 'blue'} />"
    ],
    "correctAnswer": "<Car color=\"blue\" />",
    "explanation": "Props are passed like HTML attributes.",
    "topic": "React Props",
    "difficulty": "Easy"
  },
  {
    "id": 32,
    "question": "To use a React Hook, you must import it from:",
    "options": [
      "react-dom",
      "react",
      "react-hooks",
      "react-router"
    ],
    "correctAnswer": "react",
    "explanation": "Hooks are imported from the 'react' package.",
    "topic": "What is Hooks?",
    "difficulty": "Easy"
  },
  {
    "id": 33,
    "question": "Which Hook is used to reference a DOM element?",
    "options": [
      "useRef",
      "useEffect",
      "useMemo",
      "useContext"
    ],
    "correctAnswer": "useRef",
    "explanation": "useRef provides a direct reference to a DOM element.",
    "topic": "useRef",
    "difficulty": "Easy"
  },
  {
    "id": 34,
    "question": "What is the primary purpose of Context in React?",
    "options": [
      "To manage state locally",
      "To avoid passing props through intermediate components",
      "To fetch API data",
      "To route between pages"
    ],
    "correctAnswer": "To avoid passing props through intermediate components",
    "explanation": "Context provides a way to pass data without prop drilling.",
    "topic": "useContext",
    "difficulty": "Easy"
  },
  {
    "id": 35,
    "question": "What is React Router used for?",
    "options": [
      "Styling components",
      "Routing requests in SPAs",
      "State management",
      "Server-side rendering"
    ],
    "correctAnswer": "Routing requests in SPAs",
    "explanation": "React Router enables navigation in a React app.",
    "topic": "React Router",
    "difficulty": "Easy"
  },
  {
    "id": 36,
    "question": "Which component from React Router wraps the entire application?",
    "options": [
      "<Route>",
      "<Link>",
      "<BrowserRouter>",
      "<Switch>"
    ],
    "correctAnswer": "<BrowserRouter>",
    "explanation": "BrowserRouter is the parent component for routing.",
    "topic": "React Router",
    "difficulty": "Easy"
  },
  {
    "id": 37,
    "question": "How do you create a link using React Router?",
    "options": [
      "<a href='/home'>",
      "<Link to='/home'>",
      "<Router href='/home'>",
      "<Nav to='/home'>"
    ],
    "correctAnswer": "<Link to='/home'>",
    "explanation": "React Router uses the Link component.",
    "topic": "React Router",
    "difficulty": "Easy"
  },
  {
    "id": 38,
    "question": "In React Forms, a form element whose value is controlled by React is called a:",
    "options": [
      "Controlled component",
      "Uncontrolled component",
      "Stateful form",
      "Reactive form"
    ],
    "correctAnswer": "Controlled component",
    "explanation": "Controlled components have their state managed by React.",
    "topic": "React Forms",
    "difficulty": "Easy"
  },
  {
    "id": 39,
    "question": "To handle multiple inputs in a React form, you usually use:",
    "options": [
      "Multiple state variables",
      "A single state object and event.target.name",
      "Refs for every input",
      "Context"
    ],
    "correctAnswer": "A single state object and event.target.name",
    "explanation": "Using event.target.name simplifies handling multiple inputs.",
    "topic": "Multiple Inputs",
    "difficulty": "Easy"
  },
  {
    "id": 40,
    "question": "Which Hook is used to manage complex state logic?",
    "options": [
      "useState",
      "useEffect",
      "useReducer",
      "useRef"
    ],
    "correctAnswer": "useReducer",
    "explanation": "useReducer is preferred for complex state logic.",
    "topic": "useReducer",
    "difficulty": "Easy"
  },
  {
    "id": 41,
    "question": "What is the output of the map function in a list component?",
    "options": [
      "A single HTML string",
      "An array of React elements",
      "A modified array",
      "A boolean"
    ],
    "correctAnswer": "An array of React elements",
    "explanation": "map() transforms data into an array of JSX elements.",
    "topic": "React Lists",
    "difficulty": "Intermediate"
  },
  {
    "id": 42,
    "question": "What happens if you don't provide a key to a list item?",
    "options": [
      "The app crashes",
      "React throws a warning in the console",
      "The items don't render",
      "It automatically adds random keys"
    ],
    "correctAnswer": "React throws a warning in the console",
    "explanation": "Missing keys cause warnings and potential rendering bugs.",
    "topic": "Keys",
    "difficulty": "Intermediate"
  },
  {
    "id": 43,
    "question": "When updating an array in state, what is the best practice?",
    "options": [
      "Modify the array directly",
      "Use array.push()",
      "Create a new copy of the array using spread operator",
      "Use delete keyword"
    ],
    "correctAnswer": "Create a new copy of the array using spread operator",
    "explanation": "State must be treated as immutable.",
    "topic": "useState",
    "difficulty": "Intermediate"
  },
  {
    "id": 44,
    "question": "How do you run useEffect only once after the initial render?",
    "options": [
      "Pass no dependency array",
      "Pass an empty array []",
      "Return false",
      "Pass [true]"
    ],
    "correctAnswer": "Pass an empty array []",
    "explanation": "An empty dependency array means it runs only on mount.",
    "topic": "useEffect",
    "difficulty": "Intermediate"
  },
  {
    "id": 45,
    "question": "What is the purpose of the cleanup function in useEffect?",
    "options": [
      "To clear the screen",
      "To unsubscribe from events or timers",
      "To reset state to zero",
      "To delete the component"
    ],
    "correctAnswer": "To unsubscribe from events or timers",
    "explanation": "Cleanup functions prevent memory leaks.",
    "topic": "useEffect",
    "difficulty": "Intermediate"
  },
  {
    "id": 46,
    "question": "Which Hook caches a function definition between renders?",
    "options": [
      "useMemo",
      "useCallback",
      "useRef",
      "useEffect"
    ],
    "correctAnswer": "useCallback",
    "explanation": "useCallback returns a memoized callback.",
    "topic": "useCallback",
    "difficulty": "Intermediate"
  },
  {
    "id": 47,
    "question": "Which Hook caches a calculated value between renders?",
    "options": [
      "useMemo",
      "useCallback",
      "useRef",
      "useEffect"
    ],
    "correctAnswer": "useMemo",
    "explanation": "useMemo returns a memoized value.",
    "topic": "useMemo",
    "difficulty": "Intermediate"
  },
  {
    "id": 48,
    "question": "What happens when state changes in a React component?",
    "options": [
      "The page reloads",
      "Only that component and its children re-render",
      "The whole app re-renders",
      "Nothing happens"
    ],
    "correctAnswer": "Only that component and its children re-render",
    "explanation": "React optimally re-renders the affected component tree.",
    "topic": "Components",
    "difficulty": "Intermediate"
  },
  {
    "id": 49,
    "question": "In an event handler, how do you prevent the default form submission behavior?",
    "options": [
      "event.stop()",
      "event.preventDefault()",
      "return false",
      "event.cancel()"
    ],
    "correctAnswer": "event.preventDefault()",
    "explanation": "preventDefault() stops default browser actions.",
    "topic": "Form Submit",
    "difficulty": "Intermediate"
  },
  {
    "id": 50,
    "question": "If a <textarea> has value={text} and no onChange handler, what happens?",
    "options": [
      "It behaves normally",
      "It is read-only",
      "It throws an error",
      "It updates automatically"
    ],
    "correctAnswer": "It is read-only",
    "explanation": "Without an onChange handler, a controlled input is read-only.",
    "topic": "Textarea",
    "difficulty": "Intermediate"
  },
  {
    "id": 51,
    "question": "How does React handle select elements?",
    "options": [
      "The selected attribute is placed on the <option>",
      "The value attribute is placed on the root <select> tag",
      "It uses standard HTML",
      "It uses a special <ReactSelect> tag"
    ],
    "correctAnswer": "The value attribute is placed on the root <select> tag",
    "explanation": "React simplifies select tags by placing value on the parent.",
    "topic": "Select",
    "difficulty": "Intermediate"
  },
  {
    "id": 52,
    "question": "How can you pass a function from a parent component to a child component?",
    "options": [
      "Through state",
      "Through props",
      "Using context only",
      "It is not possible"
    ],
    "correctAnswer": "Through props",
    "explanation": "Functions can be passed via props just like data.",
    "topic": "React Props",
    "difficulty": "Intermediate"
  },
  {
    "id": 53,
    "question": "What is 'prop drilling'?",
    "options": [
      "Passing props directly to the child",
      "Passing props down multiple levels of components",
      "Extracting props from a child",
      "Deleting props"
    ],
    "correctAnswer": "Passing props down multiple levels of components",
    "explanation": "Prop drilling happens when props are passed through many layers.",
    "topic": "useContext",
    "difficulty": "Intermediate"
  },
  {
    "id": 54,
    "question": "How does useContext solve prop drilling?",
    "options": [
      "It deletes props",
      "It provides data globally to all components in the tree",
      "It converts props to state",
      "It uses Redux"
    ],
    "correctAnswer": "It provides data globally to all components in the tree",
    "explanation": "Context makes data available anywhere in the tree.",
    "topic": "useContext",
    "difficulty": "Intermediate"
  },
  {
    "id": 55,
    "question": "When should you use useRef instead of useState?",
    "options": [
      "When you want the component to re-render",
      "When you want to store a value that doesn't cause re-renders",
      "When you need to fetch data",
      "When you are handling forms"
    ],
    "correctAnswer": "When you want to store a value that doesn't cause re-renders",
    "explanation": "useRef does not trigger a re-render when its value changes.",
    "topic": "useRef",
    "difficulty": "Intermediate"
  },
  {
    "id": 56,
    "question": "What is a Custom Hook?",
    "options": [
      "A built-in React feature",
      "A JavaScript function whose name starts with 'use' and calls other Hooks",
      "A component that returns JSX",
      "A Redux term"
    ],
    "correctAnswer": "A JavaScript function whose name starts with 'use' and calls other Hooks",
    "explanation": "Custom hooks extract logic for reuse.",
    "topic": "Custom Hooks",
    "difficulty": "Intermediate"
  },
  {
    "id": 57,
    "question": "In React Router v6, how do you define a route?",
    "options": [
      "<Route path='/' element={<Home />} />",
      "<Route path='/'><Home /></Route>",
      "<Route path='/' component={Home} />",
      "<Router path='/home' />"
    ],
    "correctAnswer": "<Route path='/' element={<Home />} />",
    "explanation": "React Router v6 uses the element prop.",
    "topic": "React Router",
    "difficulty": "Intermediate"
  },
  {
    "id": 58,
    "question": "What does React.Suspense do?",
    "options": [
      "Suspends the user session",
      "Displays a fallback UI while a component is loading asynchronously",
      "Stops errors from crashing the app",
      "Pauses the rendering indefinitely"
    ],
    "correctAnswer": "Displays a fallback UI while a component is loading asynchronously",
    "explanation": "Suspense is used for lazy loading components.",
    "topic": "React Suspense",
    "difficulty": "Intermediate"
  },
  {
    "id": 59,
    "question": "How do you implement CSS Modules in React?",
    "options": [
      "Import style from './style.css'",
      "Import styles from './style.module.css'",
      "Use inline styles",
      "Use styled-components"
    ],
    "correctAnswer": "Import styles from './style.module.css'",
    "explanation": "CSS Modules require the .module.css extension.",
    "topic": "React CSS Modules",
    "difficulty": "Intermediate"
  },
  {
    "id": 60,
    "question": "Which array method is commonly used with the spread operator to add a new item?",
    "options": [
      "arr.push(item)",
      "[item, ...arr]",
      "arr.concat(item)",
      "arr.unshift(item)"
    ],
    "correctAnswer": "[item, ...arr]",
    "explanation": "Spread creates a new array without mutating the original.",
    "topic": "ES6 Spread Operator",
    "difficulty": "Intermediate"
  },
  {
    "id": 61,
    "question": "What is Destructuring in function parameters?",
    "options": [
      "function App({ name, age })",
      "function App(props.name)",
      "function App(...props)",
      "function App(props[0])"
    ],
    "correctAnswer": "function App({ name, age })",
    "explanation": "You can destructure props directly in the signature.",
    "topic": "Props Destructuring",
    "difficulty": "Intermediate"
  },
  {
    "id": 62,
    "question": "If a component receives props.children, what does it represent?",
    "options": [
      "The child components defined inside the component's opening and closing tags",
      "An array of sibling components",
      "The parent's state",
      "A function"
    ],
    "correctAnswer": "The child components defined inside the component's opening and closing tags",
    "explanation": "children represents nested elements.",
    "topic": "Props Children",
    "difficulty": "Intermediate"
  },
  {
    "id": 63,
    "question": "How do you conditionally render a component using the logical && operator?",
    "options": [
      "condition && <Component />",
      "condition ? <Component />",
      "if (condition) <Component />",
      "<Component if={condition} />"
    ],
    "correctAnswer": "condition && <Component />",
    "explanation": "The && operator is used for short-circuit rendering.",
    "topic": "React Conditionals",
    "difficulty": "Intermediate"
  },
  {
    "id": 64,
    "question": "If condition is false, what does `condition && <Component />` render?",
    "options": [
      "null",
      "false",
      "<Component />",
      "An error"
    ],
    "correctAnswer": "false",
    "explanation": "React ignores false and renders nothing.",
    "topic": "React Conditionals",
    "difficulty": "Intermediate"
  },
  {
    "id": 65,
    "question": "What is the main difference between functional and class components?",
    "options": [
      "Classes can use Hooks",
      "Functions don't have lifecycle methods (but use Hooks instead)",
      "Functions are faster",
      "Functions can't receive props"
    ],
    "correctAnswer": "Functions don't have lifecycle methods (but use Hooks instead)",
    "explanation": "Functions use Hooks for state and lifecycles.",
    "topic": "Function Components",
    "difficulty": "Intermediate"
  },
  {
    "id": 66,
    "question": "Can a component's state be accessed by its parent?",
    "options": [
      "Yes, directly",
      "No, state is local to the component unless lifted up",
      "Yes, using refs",
      "Yes, using props"
    ],
    "correctAnswer": "No, state is local to the component unless lifted up",
    "explanation": "State is isolated inside its component.",
    "topic": "Components",
    "difficulty": "Intermediate"
  },
  {
    "id": 67,
    "question": "What does the 'dispatch' function do in useReducer?",
    "options": [
      "Updates state directly",
      "Triggers an action to be handled by the reducer",
      "Fetches data from an API",
      "Clears the state"
    ],
    "correctAnswer": "Triggers an action to be handled by the reducer",
    "explanation": "dispatch sends an action to the reducer.",
    "topic": "useReducer",
    "difficulty": "Intermediate"
  },
  {
    "id": 68,
    "question": "In useReducer, what does the reducer function return?",
    "options": [
      "The previous state",
      "The new state",
      "A JSX element",
      "An action object"
    ],
    "correctAnswer": "The new state",
    "explanation": "The reducer calculates and returns the updated state.",
    "topic": "useReducer",
    "difficulty": "Intermediate"
  },
  {
    "id": 69,
    "question": "What does React.memo do?",
    "options": [
      "Memoizes a function",
      "Memoizes a component to prevent unnecessary re-renders",
      "Creates a Ref",
      "Acts as Context"
    ],
    "correctAnswer": "Memoizes a component to prevent unnecessary re-renders",
    "explanation": "React.memo skips re-rendering if props don't change.",
    "topic": "React.memo",
    "difficulty": "Intermediate"
  },
  {
    "id": 70,
    "question": "If you pass an inline object as a prop to a React.memo component, what happens?",
    "options": [
      "It breaks the component",
      "It always re-renders because a new object is created every render",
      "It improves performance",
      "It behaves normally"
    ],
    "correctAnswer": "It always re-renders because a new object is created every render",
    "explanation": "Inline objects fail shallow equality checks.",
    "topic": "React.memo",
    "difficulty": "Intermediate"
  },
  {
    "id": 71,
    "question": "What does the dependency array in useCallback do?",
    "options": [
      "Recreates the function when dependencies change",
      "Recreates the function on every render",
      "Stops the component from rendering",
      "Updates the state"
    ],
    "correctAnswer": "Recreates the function when dependencies change",
    "explanation": "The function is only recreated if a dependency changes.",
    "topic": "useCallback",
    "difficulty": "Intermediate"
  },
  {
    "id": 72,
    "question": "What happens if you mutate state directly like `this.state.name = 'John'`?",
    "options": [
      "React updates the DOM",
      "React does not re-render the component",
      "React throws an error",
      "The app crashes"
    ],
    "correctAnswer": "React does not re-render the component",
    "explanation": "Direct mutation doesn't trigger a re-render.",
    "topic": "Components",
    "difficulty": "Intermediate"
  },
  {
    "id": 73,
    "question": "How does React Portals work?",
    "options": [
      "They move state globally",
      "They render children into a DOM node outside the parent hierarchy",
      "They fetch data",
      "They handle routing"
    ],
    "correctAnswer": "They render children into a DOM node outside the parent hierarchy",
    "explanation": "Portals are used for modals and tooltips.",
    "topic": "React Portals",
    "difficulty": "Intermediate"
  },
  {
    "id": 74,
    "question": "What is the use of forwardRef?",
    "options": [
      "To pass a ref to a child component",
      "To move backward in routing",
      "To update state",
      "To define a global variable"
    ],
    "correctAnswer": "To pass a ref to a child component",
    "explanation": "forwardRef allows parent components to access child DOM nodes.",
    "topic": "React Forward Ref",
    "difficulty": "Intermediate"
  },
  {
    "id": 75,
    "question": "What is the purpose of the Sass preprocessor in React?",
    "options": [
      "To write HTML",
      "To manage state",
      "To use variables and nested rules in CSS",
      "To perform HTTP requests"
    ],
    "correctAnswer": "To use variables and nested rules in CSS",
    "explanation": "Sass allows advanced CSS authoring.",
    "topic": "React Sass",
    "difficulty": "Intermediate"
  },
  {
    "id": 76,
    "question": "What is wrong with this code? `const [count, setCount] = useState(0); setCount(count++);`",
    "options": [
      "You cannot use const with useState",
      "count++ mutates the state directly",
      "setCount requires an object",
      "useState should be imported as default"
    ],
    "correctAnswer": "count++ mutates the state directly",
    "explanation": "count++ modifies the variable before passing it.",
    "topic": "useState",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 77,
    "question": "What is wrong with this code? `useEffect(() => { setInterval(() => console.log('Hi'), 1000) })`",
    "options": [
      "setInterval cannot be used in React",
      "It runs on every render and creates multiple intervals",
      "The arrow function syntax is wrong",
      "useEffect must return a string"
    ],
    "correctAnswer": "It runs on every render and creates multiple intervals",
    "explanation": "Missing dependency array causes repeated interval creation.",
    "topic": "useEffect",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 78,
    "question": "Why will this cause an infinite loop? `useEffect(() => { setCount(count + 1); }, [count]);`",
    "options": [
      "useEffect cannot update state",
      "Updating count triggers useEffect, which updates count again",
      "The dependency array syntax is wrong",
      "count must be a string"
    ],
    "correctAnswer": "Updating count triggers useEffect, which updates count again",
    "explanation": "The dependency triggers a re-render which triggers the effect continuously.",
    "topic": "useEffect",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 79,
    "question": "What is wrong with this list? `<ul>{items.map(item => <li>{item.name}</li>)}</ul>`",
    "options": [
      "Missing map keyword",
      "Missing return keyword",
      "Missing a unique key prop on the <li>",
      "Should use a for loop"
    ],
    "correctAnswer": "Missing a unique key prop on the <li>",
    "explanation": "Lists require a key prop for each element.",
    "topic": "Keys",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 80,
    "question": "What happens here? `const value = useRef(0); value.current = value.current + 1;`",
    "options": [
      "The component re-renders",
      "The value updates but the component does NOT re-render",
      "React throws an error",
      "The value remains 0"
    ],
    "correctAnswer": "The value updates but the component does NOT re-render",
    "explanation": "Updating a ref does not trigger a re-render.",
    "topic": "useRef",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 81,
    "question": "What is wrong with this code? `if(condition) { const [val, setVal] = useState(0); }`",
    "options": [
      "useState cannot take 0",
      "Hooks cannot be called conditionally",
      "setVal is misspelled",
      "condition must be boolean"
    ],
    "correctAnswer": "Hooks cannot be called conditionally",
    "explanation": "Hooks must be called at the top level.",
    "topic": "What is Hooks?",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 82,
    "question": "What is the output of `console.log(count)` right after `setCount(count + 1)` in a function?",
    "options": [
      "The updated count",
      "The old count",
      "undefined",
      "null"
    ],
    "correctAnswer": "The old count",
    "explanation": "State updates are asynchronous.",
    "topic": "useState",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 83,
    "question": "How do you fix this form? `<input type=\"text\" value={name} />` (It is read-only)",
    "options": [
      "Add an id",
      "Add an onChange handler to update state",
      "Change type to string",
      "Use defaultValue instead"
    ],
    "correctAnswer": "Add an onChange handler to update state",
    "explanation": "Controlled components need an onChange handler.",
    "topic": "React Forms",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 84,
    "question": "What is wrong with this import? `import React, { useState } from 'React';`",
    "options": [
      "useState is not exported from React",
      "The package name 'React' should be lowercase 'react'",
      "React must be destructured",
      "Nothing is wrong"
    ],
    "correctAnswer": "The package name 'React' should be lowercase 'react'",
    "explanation": "Package names are case-sensitive.",
    "topic": "React Introduction",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 85,
    "question": "What is wrong with this component? `function myComponent() { return <div>Hi</div>; }`",
    "options": [
      "Component names must start with a capital letter",
      "div must be closed",
      "function must be capitalized",
      "Nothing"
    ],
    "correctAnswer": "Component names must start with a capital letter",
    "explanation": "React treats lowercase names as standard HTML tags.",
    "topic": "Function Components",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 86,
    "question": "What is wrong here? `return ( <h1>Hello</h1> <h2>World</h2> )`",
    "options": [
      "Missing parentheses",
      "Multiple root elements without a parent",
      "Missing return keyword",
      "Variables cannot be returned"
    ],
    "correctAnswer": "Multiple root elements without a parent",
    "explanation": "JSX must have a single root element.",
    "topic": "JSX Intro",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 87,
    "question": "Identify the problem: `<button onclick={handleClick}>Click</button>`",
    "options": [
      "onclick should be onClick",
      "handleClick must be invoked",
      "button is not valid in React",
      "Cannot use braces"
    ],
    "correctAnswer": "onclick should be onClick",
    "explanation": "React uses camelCase for events.",
    "topic": "React Events",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 88,
    "question": "Identify the problem: `<img src='image.png'>`",
    "options": [
      "img is not supported",
      "Missing alt text",
      "Missing self-closing slash `/>`",
      "src must be a URL"
    ],
    "correctAnswer": "Missing self-closing slash `/>`",
    "explanation": "JSX tags must always be closed.",
    "topic": "JSX Intro",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 89,
    "question": "What happens if you use `class` instead of `className` in JSX?",
    "options": [
      "The app crashes immediately",
      "It works but logs a warning in the console",
      "The class is ignored",
      "React converts it automatically without warnings"
    ],
    "correctAnswer": "It works but logs a warning in the console",
    "explanation": "className is the proper syntax in React.",
    "topic": "JSX Attributes",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 90,
    "question": "What is wrong with `style={color: red}`?",
    "options": [
      "Missing double curly braces `{{ }}`",
      "color must be uppercase",
      "red must be a number",
      "style cannot be used"
    ],
    "correctAnswer": "Missing double curly braces `{{ }}`",
    "explanation": "Inline styles require an object inside the JSX expression.",
    "topic": "React CSS Styling",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 91,
    "question": "Identify the error: `const App = () => { return <div> {if(true){'Yes'}} </div>; }`",
    "options": [
      "Cannot use `if` statements inside JSX expressions",
      "Missing else statement",
      "Cannot return strings",
      "Div must be a span"
    ],
    "correctAnswer": "Cannot use `if` statements inside JSX expressions",
    "explanation": "Use ternary operators instead of `if` inside JSX.",
    "topic": "JSX If Statements",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 92,
    "question": "Why is `useContext(MyContext)` returning undefined?",
    "options": [
      "The component is not wrapped in a Context Provider",
      "useContext is misspelled",
      "Context only works in classes",
      "MyContext must be a string"
    ],
    "correctAnswer": "The component is not wrapped in a Context Provider",
    "explanation": "Context requires a Provider higher in the tree.",
    "topic": "useContext",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 93,
    "question": "What is wrong with `const obj = { name: 'A' }; return <div>{obj}</div>`?",
    "options": [
      "Objects are not valid as a React child",
      "Missing return statement",
      "obj is constant",
      "Div must have a class"
    ],
    "correctAnswer": "Objects are not valid as a React child",
    "explanation": "React cannot render JS objects directly.",
    "topic": "JSX Expressions",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 94,
    "question": "What does this code do? `const copy = [...items];`",
    "options": [
      "Modifies the items array",
      "Creates a shallow copy of the items array",
      "Sorts the array",
      "Converts array to string"
    ],
    "correctAnswer": "Creates a shallow copy of the items array",
    "explanation": "Spread creates a shallow clone.",
    "topic": "ES6 Spread Operator",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 95,
    "question": "Why might `useCallback` be causing performance issues?",
    "options": [
      "It cannot be used with React.memo",
      "The dependency array is missing, causing it to recreate on every render",
      "It fetches data repeatedly",
      "It clears state"
    ],
    "correctAnswer": "The dependency array is missing, causing it to recreate on every render",
    "explanation": "Without dependencies, it does not memoize properly.",
    "topic": "useCallback",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 96,
    "question": "Identify the problem: `props.name = 'John';` inside a child component.",
    "options": [
      "Props are read-only and cannot be mutated",
      "name must be an object",
      "props must be destructured",
      "You need to use `this.props`"
    ],
    "correctAnswer": "Props are read-only and cannot be mutated",
    "explanation": "Props must not be modified by the receiving component.",
    "topic": "React Props",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 97,
    "question": "What is wrong with `const { name, age } = user[0];` if user is `{name: 'A', age: 1}`?",
    "options": [
      "user is an object, not an array",
      "Variables cannot be destructured",
      "Syntax error",
      "It is correct"
    ],
    "correctAnswer": "user is an object, not an array",
    "explanation": "You cannot use array index `[0]` on an object.",
    "topic": "ES6 Destructuring",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 98,
    "question": "Identify the issue: `<Route path='/' element={Home} />` in React Router v6.",
    "options": [
      "element prop requires JSX, like `<Home />`",
      "path is missing",
      "Route must be lowercase",
      "element should be component"
    ],
    "correctAnswer": "element prop requires JSX, like `<Home />`",
    "explanation": "React Router v6 needs an element, not a reference.",
    "topic": "React Router",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 99,
    "question": "Why might a controlled checkbox not toggle?",
    "options": [
      "It lacks a checked prop or onChange handler",
      "Checkboxes aren't supported",
      "Value must be a string",
      "It must be wrapped in a form"
    ],
    "correctAnswer": "It lacks a checked prop or onChange handler",
    "explanation": "Controlled checkboxes need a checked prop and onChange.",
    "topic": "Checkbox",
    "difficulty": "Slightly Difficult"
  },
  {
    "id": 100,
    "question": "What is the correct way to handle multiple input fields with one state object?",
    "options": [
      "Update all fields individually",
      "Use `[event.target.name]: event.target.value`",
      "Use refs for each",
      "Use Redux"
    ],
    "correctAnswer": "Use `[event.target.name]: event.target.value`",
    "explanation": "Dynamic keys allow handling multiple fields efficiently.",
    "topic": "Multiple Inputs",
    "difficulty": "Slightly Difficult"
  }
];
