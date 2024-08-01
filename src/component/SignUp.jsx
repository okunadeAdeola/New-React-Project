import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import './SignUp.css';  // Make sure to import your CSS file

const SignUp = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Required')
        }),
        onSubmit: async (values) => {
            let backendurl = "http://localhost:3002/users/registers";
            try {
                const response = await axios.post(backendurl, values);
                console.log(response.data);
                if (response.data.status === 200) {
                    swal.fire({
                        title: 'Success',
                        text: 'User saved successfully',
                        icon: 'success'
                    }).then(() => {
                        navigate('/login');  // Navigate to login page
                    });
                }
            } catch (error) {
                console.log(error);
                if (error.response && error.response.data && error.response.data.status === 401) {
                    swal.fire({
                        title: 'Error',
                        text: error.response.data.message,
                        icon: 'error'
                    });
                } else {
                    swal.fire({
                        title: 'Error',
                        text: 'An error occurred. Please try again.',
                        icon: 'error'
                    });
                }
            }
        }
    });

    return (
        <div className="container-fluid">
            <div className="form_area">
                <form onSubmit={formik.handleSubmit}>
                    <h1 className='title'>Sign up</h1>
                    <div className="form_group">
                        <input
                            type="text"
                            placeholder='Name'
                            name='name'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className='form_style'
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className='text-danger'>{formik.errors.name}</div>
                        ) : null}
                    </div>
                    <div className="form_group">
                        <input
                            type="email"
                            placeholder='Email'
                            name='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className='form_style'
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className='text-danger'>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="form_group">
                        <input
                            type="password"
                            placeholder='Password'
                            name='password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className='form_style'
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className='text-danger'>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="form_group">
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
