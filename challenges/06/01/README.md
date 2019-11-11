# Challenges

**Use Git to make a commit every time you get an answer working. Use sensible commit messages.**

For some of these challenges you may want to create more than one component type. Try not to let your JSX get too unwieldy. Create new directories if you're using multiple component types.

Make sure you keep React DevTools ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)/[Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)) + JS console open at all times and correct anything that it flags up.

You'll need to read the appropriate documentation to answer some of these questions.

## Pre-Built Components

### React Bootstrap

Remember to install React Bootstrap (`npm install react-bootstrap`) before starting these challenges.

[React Bootstrap Documentation](https://react-bootstrap.github.io/components/alerts/)

1) **Using only React Bootstrap components** (there shouldn't be *any* HTML elements), create a `<Progress>` component. It should have a [progress bar](https://react-bootstrap.github.io/components/progress/) and a "More!" button. The progress bar should start at 0. Each time the button is pressed it should move 10% further along until it reaches 100%. Once it reaches 100% the button should become disabled.

2) **Using only React Bootstrap components** (there shouldn't be *any* HTML elements), create a `<CatchMeIfYouCan jump={ 100 }>` component. It should have a button that when clicked moves `jump` pixels down the screen.

3) **Using only React Bootstrap components** (there shouldn't be *any* HTML elements), create a `<PasswordStrength>` component. It should contain an input with the type `password`. The background styling should change depending on the length of the password:

    - If it's empty the background shouldn't have styling.
    - If it's less than 9 it should be red.
    - If it's less than 16 it should be orange.
    - If it's 16 or more then it should be green.

4) **Using only React Bootstrap components** (there shouldn't be *any* HTML elements), create a `<List>` component that consists of a list group, an input, and an "Add" button. When you click the button, whatever is in the input should get added to the list group.

5) **Using only React Bootstrap components** (there shouldn't be *any* HTML elements), create a `<TempConverter>` component. It should have a `°F` and `°C` input. When you type a number into one input it should update the value in the other.


## Über-Tricksy

[React Native](https://facebook.github.io/react-native/docs/getting-started.html) can be used to make native phone apps using React.

*You'll need to create a new React Native app* in a new directory by following the guide in the documentation.

Create a `<List>` component that consists of a list, an input, and an "Add" button. When you click the button, whatever is in the input should get added to the list group.

You'll need the following components:

- [TextInput](https://facebook.github.io/react-native/docs/textinput)
- [Buttons](https://facebook.github.io/react-native/docs/button)
- [FlatList](https://facebook.github.io/react-native/docs/flatlist)
