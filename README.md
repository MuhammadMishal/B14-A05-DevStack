Dev Stack — Technology Stack Builder

A Technology Stack Builder built with React and TypeScript.
Users can explore different tech

_Technologies Used_
1.React
2.TypeScript
3.Tailwind CSS
4.daisyUI
5.React Icons
6.React Toastify
7.JSON Data

_Features_

1. Explore Technologies

Browse different technologies through clean and responsive technology cards.

2. Build Your Own Stack

Add technologies to your personal stack and prevent duplicate selections automatically.

3. Manage Your Stack

Remove individual technologies or clear the entire stack. Toast notifications provide feedback for user actions.

1. What is JSX, and why is it used in React?

=> JSX allows us to write HTML-like code inside JavaScript. We use JSX in React because it makes our UI code easier to write and understand.

2. What is the difference between props and state?

=> Props are used to send data from a parent component to a child component. State is used to store data inside a component that can change. 3. What does the useState hook do, and where did you use it in this project?

3. What does the useState hook do, and where did you use it in this project?

=> useState is used to store and update data in a React component. I used useState in my Navbar to control the mobile menu. It keeps track of whether the menu is open or closed and updates the menu when the user clicks the button.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

=>useEffect is used to run some code when something happens in a component.Because loading JSON data is usually an external/side operation that we want React to do after the component renders.

5. Why does every item in a .map() list need a unique key prop?

=>React needs a unique key to identify each item in a list. It helps React know which item has been changed, added, or removed.

6.What is conditional rendering? Show one place you used it.

=>Conditional rendering means showing different content based on a condition. In my project, I used it to show "Your stack is empty" when no technology is selected. When technologies are selected, it shows the selected technology list instead.
_example_ : {count === 0 ? (

  <div>
    Your stack is empty.
  </div>
) : (
  <div>
    {selectedTechnologies.map(...)}
  </div>
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

=> A parent component sends data to a child using props.I pass data from a parent component to a child component using props. In my project, App passes technologies and functions to the Technologies component. The child can send something back by calling a function passed from the parent, such as onAdd, onRemove, or onClear.
_example_:
<Technologies
              technologies={technologies}
              selectedTechnologies={selectedTechnologies}
              onAdd={addTechnology}
              onRemove={removeTechnology}
              onClear={clearStack}
            />
