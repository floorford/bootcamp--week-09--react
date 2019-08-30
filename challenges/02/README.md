# Challenges

**Use Git to make a commit every time you get an answer working. Use sensible commit messages.**

For some of these challenges you may want to create more than one component type. Try not to let your JSX get too unwieldy. Create new directories if you're using multiple component types.

Make sure you keep React DevTools + JS console open at all times and correct anything that it flags up.

---

- Update the `<Header>` and `<Paragraph>` components from yesterday to be class based components. They don't need state.

- Update the `<Stuff>` component so that when you click on it "Hello, world" gets logged in the JS console. You won't need state.

- Create a `<Clicked>` component. It should initially display "Not clicked" in a `<p>`. Once it's been clicked it should change to "Clicked".

- Update your `<Square colour="hotpink">` component so that the background starts black, but when it is clicked it changes to the passed in colour. It should alternate every time you click.

- Create `<ToggleText initial="Hello" alternate="World">` component. It should consist of a `<p>` and a `<button>Toggle</button>`. When the `<button>` is clicked the text of the `<p>` tag should alternate between `initial` and `alternate`.

- Create a `<Counter initial={ 50 } max={ 100 } />` component. It should consist of a `<p>` containing a number (which starts at the initial value) and two buttons, `+` and `-`. When the user clicks the `+` button, the number should go up. When the user clicks the `-` button the number should go down. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.

- Create a `<StepCounter max={ 100 } step={ 5 } />` component. It should consist of a `<p>` containing a number (start at 0) and two buttons, `+` and `-`. When the user clicks the `+` button, the number should go up by `step`. When the user clicks the `-` button the number should go down by `step`. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.

- Create a `<CatchMeIfYouCan jump={ 100 }>` component. It should have a `<button>` that when clicked moves `jump` pixels down the screen.

- Create a `<RollCall names={ names }>` component. It should have a button "Next". When the component first loads it should show the first name in the array. Every time you click "Next" it should show the next name in the array. It should loop back to the beginning.


## Tricksy Challenges

- Create a `<Colours colours={ colours }>` component. It should display a `<div>` that's 200×200px.  When you click on it, it should cycle background colour through the `colours` array that you pass in. Here are some nice colours:

    ```js
    let colours = [
        "#C14412",
        "#EBB31A",
        "#8F5318",
        "#009EAD",
        "#395967",
    ];
    ```

- Create a `<Die sides={ 6 }>` component that shows a random number between 1 and `sides` whenever you click on it

    **Hint**: `Math.random()` generates a random number between 0 and 1. If you multiply the result by, say 100, and then use `Math.floor()`, you will get a number between 0 and 99.

    ```javascript
    let random = Math.random(); // a number between 0 and 1
    let number = Math.floor(random * 100); // a number between 0 and 99
    ```

- Create a `<LameGame aim={ x }>` component. When a "Start" button is pressed it displays "{ aim } seconds" and shows a "Now" button. The idea is to click the "Now" button as close to `aim` seconds after you pressed "Start". Once you click on "Now" it should tell you how close you were in 1/10ths of a second. The "Start" and "Now" buttons should only show when relevant.
