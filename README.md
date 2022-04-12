# Follow along

To get started run
`git clone git@github.com:SyntheticDesigner/styled-component-workshop.git`
Install the dependencies with `npm install`

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

## Useful Links

- [Styled Component Documentation](https://styled-components.com/docs/basics)
- [Tagged template literal](https://www.freecodecamp.org/news/a-quick-introduction-to-tagged-template-literals-2a07fd54bc1d/)
