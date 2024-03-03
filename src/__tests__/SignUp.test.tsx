import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SignUpForm, { schema } from "@/routes/Main/components/SignUpForm";

describe("SignUp form", () => {
  it("Make user sign up form with form data correct", async () => {
    render(<SignUpForm />);

    const user = {
      email: "test@gmail.com",
      password: "123456",
      confirm_password: "123456",
    };

    fireEvent.change(screen.getByPlaceholderText("E-mail"), {
      target: { value: user.email },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: user.password },
    });
    fireEvent.change(screen.getByPlaceholderText("Confirm password"), {
      target: { value: user.confirm_password },
    });

    await waitFor(() => fireEvent.click(screen.getByText("Create account")));

    expect(() => schema.parse(user)).not.toThrow();
  });

  it("Make user sign up form with password without match", async () => {
    render(<SignUpForm />);

    const user = {
      email: "test@gmail.com",
      password: "123456",
      confirm_password: "1234567",
    };

    fireEvent.change(screen.getByPlaceholderText("E-mail"), {
      target: { value: user.email },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: user.password },
    });
    fireEvent.change(screen.getByPlaceholderText("Confirm password"), {
      target: { value: user.confirm_password },
    });

    await waitFor(() => fireEvent.click(screen.getByText("Create account")));

    expect(() => schema.parse(user)).toThrow();
  });
});
