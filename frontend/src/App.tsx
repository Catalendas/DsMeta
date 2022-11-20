import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./style/theme/default"
import { GlobalStyle } from "./style/global"
import { Header } from "./Components/Header"
import { Sales } from "./Components/Sales"
import {ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <ToastContainer />
      <Header />
      <Sales/>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
