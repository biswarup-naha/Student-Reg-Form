import React from 'react';
import { useFormik } from 'formik';
import { registerSchema } from '../schemas';
import { ToastContainer, toast } from 'react-toastify';

const Form = () => {
    const initialValues = {
        name: "",
        age: "",
        email: "",
        cs: "",
    };
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues,
        validationSchema: registerSchema,
        onSubmit: (values, action) => {
            console.log(JSON.stringify(values));
            toast.success("Form submitted successfully");
            action.resetForm();
        },
    });

    return (
        <>
            <ToastContainer />
            <form className="bg-white rounded-lg px-10 py-10 flex flex-col gap-y-5 shadow-lg" onSubmit={handleSubmit}>
                <h1 className="text-center text-2xl font-bold mb-5">Student Registration Form</h1>
                <div className="relative flex flex-col input-group">  
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder=""
                        className="outline-none h-15 bg-transparent border-2 border-gray-300 rounded-md"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    /><label htmlFor="name" className='absolute top-1/2 left-1 px-1 -translate-y-1/2 text-slate-500 text-lg pointer-events-none bg-white transition-all-0.2s-ease '>{errors.name && touched.name ? <span className='text-red-500'>{errors.name}</span> : "Name"}</label>
                </div>
                <div className="flex flex-col relative input-group">
                    
                    <input
                        type="text"
                        id="age"
                        name="age"
                        placeholder=""
                        className="outline-none h-15 bg-transparent border-2 border-gray-300 rounded-md"
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    /><label htmlFor="age" className='absolute top-1/2 left-1 px-1 -translate-y-1/2 text-slate-500 text-lg pointer-events-none bg-white transition-all-0.2s-ease '>{errors.age && touched.age ? <span className='text-red-500'>{errors.age}</span> : "Age"}</label>
                </div>
                <div className="flex flex-col relative input-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=""
                        className="outline-none h-15 bg-transparent border-2 border-gray-300 rounded-md"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    /><label htmlFor="email" className='absolute top-1/2 left-1 px-1 -translate-y-1/2 text-slate-500 text-lg pointer-events-none bg-white transition-all-0.2s-ease '>{errors.email && touched.email ? <span className='text-red-500'>{errors.email}</span> : "Email"}</label>
                </div>
                <div className="flex flex-col relative input-group">
                    <select
                        name="cs"
                        id="cs"
                        className="outline-none h-15 bg-transparent border-2 border-gray-300 rounded-md"
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
                    </select><label htmlFor="cs" className='absolute top-1/2 left-1 px-1 -translate-y-1/2 text-slate-500 text-lg pointer-events-none bg-white transition-all-0.2s-ease '>{errors.cs && touched.cs ? <span className='text-red-500'>{errors.cs}</span> : "Course selection"}</label>
                </div>
                <button
                    type="submit"
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg text-center w-full hover:bg-white hover:text-blue-500 border border-white hover:border-blue-500 transition-transform"
                >
                    Submit
                </button>
            </form>
        </>
    )
}

export default Form