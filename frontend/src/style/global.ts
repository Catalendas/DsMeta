import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
  --white: #ffffff;

  --blue: rgb(4, 0, 255);

  
  --yellow: #eba417;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}


@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background-color: ${props => props.theme['black']};
  color: var(--gary-900);
}

body, input, textarea, select, button {
  font: 400 1rem "Roboto", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`