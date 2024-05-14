import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${s => css`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :focus {
      outline: none;
      box-shadow: 0 0 0 2px ${s.theme['green-500']};
    }

    body {
      background: ${s.theme['gray-800']};
      color: ${s.theme['gray-100']};
      -webkit-font-smoothing: antialized;
    }
    
    body, input, textarea, button {
      font: 400 1rem Roboto, sans-serif;
    }

  `}
`