import { render, screen, fireEvent } from '@testing-library/react';
import Todos from "../Todos"
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import store from "../../../redux/store";
import { Provider } from "react-redux";

const mockedSetTodo = jest.fn();
const MockFollowersList = () => {
    return (
        <Provider store={store}>
          <Todos 
               todos={[]}
                setTodos={mockedSetTodo}
            />
        </Provider>
    )
}
describe("TodoApp", () => {
    it('should add elements', () => {
        render(
           <MockFollowersList  />
        );

        const inputElement = screen.getByPlaceholderText(/Enter text/i);
        expect(inputElement).toBeInTheDocument();
    });
})