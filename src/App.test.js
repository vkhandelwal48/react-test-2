import { render, screen, within, act } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import User from './User';

// test("Assertions",()=>{
//   render(<App />);
//   const input = screen.getByRole("textbox");
//   expect(input).toBeInTheDocument();
//   expect(input).toHaveValue("Vidit");
//   expect(input).toHaveValue();
//   expect(input).toBeEnabled();
//   expect(input).toHaveAttribute("id");
//   expect(input).toHaveClass("test-style");
// })

// test("test negative cases",()=>{
//   render(<App />);
//   const btn = screen.getByRole("button");
//   expect(btn).not.toBeInTheDocument();
//   expect(btn).not.toHaveClass("btn");
//   expect(btn).not.toHaveAttribute("id");
// })

// test("text match with string",()=>{
//   render(<App />);
//   const div = screen.getByText("Hello World",{exact:false});
//   expect(div).toBeInTheDocument();
// })

// test("text match with regex",()=>{
//   render(<App />);
//   const div = screen.getByText(/Hello World/);
//   const div1 = screen.getByText(/Hello W?orld/);
//   expect(div).toBeInTheDocument();
//   expect(div1).toBeInTheDocument();
// })

// test("test match with function",()=>{
//   render(<App />);
//   const div = screen.getByText((content,element)=>content.startsWith("Hello"));
//   expect(div).toBeInTheDocument();
// })

// test("queryby test",()=>{
//   render(<App />);
//   // const div = screen.getByText("Login");
//   const dv = screen.queryByText("Logout");// checks within the code, test hidden element.
//   expect(dv).not.toBeInTheDocument();
// })

// test("findByText test",async()=>{
//   render(<App />);
//   // const ele = screen.getByText("data found");
//   const el = await screen.findByText("data found",{},{timeout:4000});
//   expect(el).toBeInTheDocument();
// })

// test("test case with custom query",()=>{
//   render(<App />);
//   const element = document.querySelector("#testId");
//   expect(element).toBeInTheDocument();
//   expect(element).toHaveTextContent("Hello World");
// })

// test("test with within function",()=>{
//   render(<App />);
//   let el = screen.getByText("Hello");
//   let subEl= within(el).getByText("Hi");
//   expect(el).toBeInTheDocument();
//   expect(subEl).toBeInTheDocument();
// })

// test("Click event with user event library",async()=>{
//   userEvent.setup();
//   render(<App />);
//   const btn = screen.getByText("Click Me");
//   await userEvent.click(btn);
//   expect(screen.getByText("hello")).toBeInTheDocument();
// })

// test("On Change event testing",async()=>{
//   render(<App />);
//   const el = screen.getByRole("textbox");
//   await userEvent.type(el,"Vidit");
//   expect(screen.getByText()).toBeInTheDocument();
// })

// test("Act function",async()=>{
//   render(<App />);
//   const input = screen.getByRole("textbox");
//   await act(async()=>{
//     await userEvent.type(input,"Vidit");
//   })
//   expect(screen.getByText("Vidit")).toBeInTheDocument();
// })

test("Props Testing",()=>{
  const data = "Vidit";
  render(<User name={data} />);
  const user = screen.getByText(`Username : Vidit`);
  expect(user).toBeInTheDocument();
})