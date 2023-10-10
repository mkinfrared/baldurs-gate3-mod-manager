import { ref, string } from "yup";

import { password } from "./rules";

const passwordSchema = string()
  .required()
  .min(10, "Password must be at least 10 characters")
  .matches(
    password.upperCase,
    "password must contain at least one upper case letter",
  )
  .matches(
    password.lowerCase,
    "password must contain at least one lower case letter",
  )
  .matches(password.number, "password must contain at least one number")
  .matches(
    password.special,
    "password must contain at least one special character",
  );

const passwordConfirmationSchema = string()
  .oneOf([ref("password"), undefined], "Passwords don't match")
  .required("Confirm the password");

export { passwordSchema, passwordConfirmationSchema };
