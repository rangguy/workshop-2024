const REGISTRATION_INPUT = [
  {
    id: "name",
    className: "form-control",
    label: "Name",
    required: true,
    type: "text",
    errorDiv: "",
    errorMessage: "",
  },
  {
    id: "email",
    className: "form-control mt-4",
    label: "Email",
    required: true,
    type: "email",
    errorDiv: "",
    errorMessage: "",
  },
  {
    id: "password",
    className: "form-control mt-4",
    label: "Password",
    required: true,
    type: "password",
    errorDiv: "",
    errorMessage: "",
  },
  {
    id: "confirmation-password",
    className: "form-control mt-4",
    label: "Confirmation Password",
    required: true,
    type: "password",
    placeholder: "Confirm your password",
    errorDiv: "",
    errorMessage: "",
  },
];

const LOGIN_INPUT = [
  {
    id: "email",
    className: "form-control",
    label: "Email",
    required: true,
    type: "email",
    errorDiv: "",
    errorMessage: "",
  },
  {
    id: "password",
    className: "form-control mt-4",
    label: "Password",
    required: true,
    type: "password",
    errorDiv: "",
    errorMessage: "",
  },
];

export { REGISTRATION_INPUT, LOGIN_INPUT };
