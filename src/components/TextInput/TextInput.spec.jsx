import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from ".";

describe("<TextInput />", () => {
  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    const { debug } = render(
      <TextInput handleChange={fn} searchValue={"testando"} />
    );
   // debug();
    const input = screen.getByLabelText("Pesquisar");
    expect(input).toHaveAttribute("type", "search");
    expect(input.value).toBe("testando");
  });

  it("should call handleChange function on each keu pressed", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} />);
    const input = screen.getByLabelText("Pesquisar");
    const value = "valor digitado no input";
    userEvent.type(input, value);
    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should matsh snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange=
      {fn}/>);
    expect(container).toMatchSnapshot();  
  });
});
