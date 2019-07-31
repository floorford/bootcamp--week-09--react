# Challenges

**Use Git to make a commit every time you get an answer working. Use sensible commit messages.**

Make sure you keep React DevTools + JS console open at all times and correct anything that it flags up.

---

- Create a `<Length>` component. It should contain an `<input>` and tell you how many characters have been typed into the `<input>`.

- Create a `<List>` component that consists of a `<ul>`, an `<input>`, and a `<button>Add</button>`. When you click the "Add" button, whatever is in the `<input>` should get added to the `<ul>`.

- Create an `<Adder>` component. It should have a number `<input>` field and an "Add" `<button>`. When the "Add" button is pressed the number should be added to a list of numbers on screen and the total of all the numbers in the list should be displayed below. **Make sure you test the total is correct: try 1, 2, and 3 and check you get 6**

- Create a `<TempConverter>` component. It should have a `°F` and `°C` `<input>`. When you type a number into one `<input>` it should update the value in the other.

- Create a `<Transform transform={ /* ...your function here... */ }>` component. It should accept a function that takes a number and returns a number (e.g. a squaring function `x => x * x` or an increment function `x => x + 1`). The component should have an `<input type="number">` and a `<p>`. When the user types into the `<input>` the `<p>` should output the result of running the number through the `transform` function. Try adding a few `<Transform>` components to your app with a different function for each one.
