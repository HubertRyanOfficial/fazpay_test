import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginForm, { schema } from "@/routes/Main/components/LoginForm";

describe("Login form", () => {
  it("should log in with correct credentials", async () => {
    render(<LoginForm />);

    const user = {
      email: "test@gmail.com",
      password: "123456",
    };

    fireEvent.change(screen.getByPlaceholderText("E-mail"), {
      target: { value: user.email },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: user.password },
    });

    await waitFor(() => fireEvent.click(screen.getByText("Sign in")));

    expect(() => schema.parse(user)).not.toThrow();
  });

  it("should log in with incorrect credentials", async () => {
    render(<LoginForm />);

    const user = {
      email: "test.com",
      password: "1236",
    };

    fireEvent.change(screen.getByPlaceholderText("E-mail"), {
      target: { value: user.email },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: user.password },
    });

    await waitFor(() => fireEvent.click(screen.getByText("Sign in")));

    expect(() => schema.parse(user)).toThrow();
  });
});
