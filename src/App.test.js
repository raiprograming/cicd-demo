import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom'

test('test app', () => { 
  render(<App />);

  const increment1 = screen.getByTestId("increment1");

  const result = screen.getByTestId("result");

  fireEvent.click(increment1);

  expect(result).toHaveTextContent("1");
})

