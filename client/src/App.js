import styles from './styled/styles.css'
import styled from 'styled-components'
import MainPage from "./mainPage/MainPage";
import {io} from "socket.io-client";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-main);
`

// const socket = io.connect('http://localhost:4000')

function App() {
    return (
        <Wrapper>
            <MainPage/>
        </Wrapper>

    );
}

export default App;
