import * as yup from "yup";

export const registerSchema = yup.object({
    name: yup.string().required("Name is required"),
    age: yup.string().matches(/^[1-9]*$/,"Age must be a number & greater than 0").required("Age is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    cs: yup.string().required("Course selection is required"),
})