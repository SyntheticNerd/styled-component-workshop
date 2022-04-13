# Follow along

To get started run
`git clone git@github.com:SyntheticDesigner/styled-component-workshop.git`
Install the dependencies with `npm install`

- [Basics](#basics)
  - [Getting Started](#getting-started)
  - [Working with Props](#working-with-props)
- [Advanced](#advanced)
  - [Selectors](#selectors)
  - [Theming](#theming)
- [Links](#links)
- [Author](#author)

## Basics

### Getting Started

1. Install Styled Components
   - `npm install --save styled-components`
2. Make a javascript file where you can keep your components.
   - You can have as many of these files as you want and they can be named whatever you would like but ==the first letter must be capital==.
   - A common naming convention is the naming the file that houses most of your styled components `StyledComponents.js`
3. In the file you created for your styled components you will need to import styled from styled components.

   ```javascript
   import styled from "styled-components";
   ```

4. Styled components uses a [Tagged template literal](https://www.freecodecamp.org/news/a-quick-introduction-to-tagged-template-literals-2a07fd54bc1d/).

   ```javascript
   export const Container = styled.div`
     background-color: blue;
   `;
   ```

   - Notice how we use back ticks(``). This is what makes it a template literal. In the back ticks we can define css the same way we do in actual css.
   - You can turn any html element into a styled component. Sections, Articles, div, img, button, etc.

5. Use your new Styled ==react== component in your project.

   ```jsx
   import { Container } from "./StyledComponents";

   export default function App() {
       return (
           <Container>
               <p>Some text inside here<p>
           </Container>
       )
   }
   ```

### Working with props

Since a Styled Component is just a React Component we can pass props into our components just like we would any other React component.

```jsx
import { useState } from "react";
import { Container } from "./StyledComponents";

export default function App() {
    const [color, setColor] = useState("blue");
    return (
        <Container bgColor={color}>
            <p>Some text inside here<p>
        </Container>
    )
}
```

Now that the prop is being passed to our Styled Component we can access it with `${}` because we are using a template literal.

1. Access the props with an arrow function.
2. Check if the prop exists.
3. Add appropriate css based on the props info.

```javascript
export const Container = styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "blue")};
`;
```

## Advanced

### Selectors

Much like Sass you can select the children of an element via the styled component.

```javascript
export const Container = styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "blue")};
  & p {
    color: blue;
  }
`;
```

There are four different ways to select children: `child{}`, `& child{}`, `& > child{}`, `& ${ComponentName}{}`.

- The first two `child{}`, `& child{}` seem to be synonymous however the documentation recommends using the & symbol. This will select ==all== children that match the specified selector
- Using `& > child{}`, adds a higher level of specificity. this will only select the ==immediate children== that match the selector and will not select any children nested in a child.
- If a child is a Styled Component you can select it via its styled component name using `${Component-Name}{}`

```javascript
export const Container = styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "blue")};
  & p {
    color: blue;
  }
`;
```

Using the `&` symbol you also have access to all pseudo selectors like `::before` or `:hover`

```javascript
export const Container = styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "blue")};
  & p{
      color: blue;
  }
  &:hover {
      background-color: green;
  }
  &::before{
      content: "I show up before Some Text"
      background-color: pink;
  }
`;
```

### Theming

Theming will allow you to dynamically set and apply groups of variable to your components. It requires a little extra set up but is worth it especially for large projects.

Styled Components gives us access to a component called `<ThemeProvider>`. Which we will wrap around any components that we want to have access to the theme.

```jsx
import { Container } from "./StyledComponents";
import { ThemeProvider } from "styled-components";

export default function App() {
    return (
        <Container bgColor={color}>
            <ThemeProvider>
                <p>Some text inside here<p>
            </ThemeProvider>
        </Container>
    )
}
```

We create an object of variables, and pass it as a prop that any children nested inside the `<ThemeProvider>` will have access to.

```jsx
import { Container } from "./StyledComponents";
import { ThemeProvider } from "styled-components";

const theme = {
    background: "pink",
    light : {
        textColor: "black",
        background: "white"
    },
    dark : {
        textColor: "white",
        background: "black"
    }
}

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container bgColor={color}>
                <p>Some text inside here<p>
                <ThemeProvider theme={theme.light}>
                    <p>Some text light theme<p>
                </ThemeProvider>
                <ThemeProvider theme={theme.dark}>
                    <p>Some text dark theme<p>
                </ThemeProvider>
            </Container>
        </ThemeProvider>
    )
}
```

In the actual styles we now have access to the theme prop in everything nested in a theme provider.

```javascript
export const Container = styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "blue")};
  & p{
      color: ${(props)=>props.theme.textColor}
      background: ${(props)=>props.theme.background}
  }
`;
```

You can use as many Theme Providers nested within your project to allow for scoping specific themes to certain objects throughout the project.

## Links

- [Styled Component Documentation](https://styled-components.com/docs/basics)
- [Tagged template literal](https://www.freecodecamp.org/news/a-quick-introduction-to-tagged-template-literals-2a07fd54bc1d/)

## Author

- Website - [Andrew Schroepfer](https://syntheticdesigner.github.io/)
- Social - [Linkedin](https://www.linkedin.com/in/andrew-schroepfer/)
- Github - [Github](https://github.com/SyntheticDesigner)