import {render, screen} from "@testing-library/react";
import App from "../App";

describe('App Test', () => {
    test('render app', () => {
        render(<App/>)
        expect(screen.getByRole('main')).toBeInTheDocument()
        // expect(screen.getByTestId('mainTittle')).toBeInTheDocument()
        // expect(screen.getByTestId('InputHolder')).toBeInTheDocument()
    })
})