import React from 'react';
import { useFormik } from 'formik';
import { registerSchema } from '../schemas';

const Form = () => {
    const initialValues = {
        name: "",
        age: "",
        email: "",
        cs: "",
    };
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: registerSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    console.log(errors);
  return (
      <form className="bg-white rounded-lg px-5 py-10 flex flex-col gap-y-5" onSubmit={handleSubmit}>
          <h1 className="text-center text-2xl">Student Registration Form</h1>
          <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className=" outline-none"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
              />
              {errors.name && touched.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>
          <div className="flex flex-col">
              <label htmlFor="age">Age</label>
              <input
                  type="text"
                  id="age"
                  name="age"
                  placeholder="Enter your name"
                  className=" outline-none"
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
              />
              {errors.age && touched.age && <p className="text-red-500 text-xs">{errors.age}</p>}
          </div>
          <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className=" outline-none"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
              />
              {errors.email && touched.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
          <div className="flex flex-col">
              <label htmlFor="cs">Course selection</label>
              <select
                  name="cs"
                  id="cs"
                  className="outline-none text-sm"
                  value={values.cs}
                  onChange={handleChange}
                  onBlur={handleBlur}
              >
                  <option value="cs0">Select</option>
                  <option value="cs1">Computer Science and Engineering</option>
                  <option value="cs2">
                      Electronics and Communication Engineering
                  </option>
                  <option value="cs3">Information Technology</option>
                  <option value="cs4">Electrical Engineering</option>
                  <option value="cs5">
                      Applied elctronics and instrumentation Engineering
                  </option>
                  <option value="cs6">Civil Engineering</option>
              </select>
              {errors.cs && touched.cs && <p className="text-red-500 text-xs">{errors.cs}</p>}
          </div>
          <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg text-center w-full hover:bg-white hover:text-blue-500 border border-white hover:border-blue-500 transition-transform"
          >
              Submit
          </button>
      </form>
  )
}

export default Form