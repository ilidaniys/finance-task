import styles from './styled/styles.css'
import styled from 'styled-components'
import MainPage from "./mainPage/MainPage";
import {store} from "./store/store";
import {Provider} from "react-redux";

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-main);
  overflow-x: hidden;
`

function App() {
    return (
        <Provider store={store}>
            <Wrapper>
                <MainPage/>
            </Wrapper>
        </Provider>
    );
}

export default App;
