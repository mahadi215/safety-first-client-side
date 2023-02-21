import React from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const submit = (data) => {
        const loginData = {
            username: data.name,
            password: data.password,
        }
console.log(loginData);
        fetch('http://localhost:5000/adminSecret/login', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loginData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.token){
                   localStorage.setItem("safe-token", data.token )
                   navigate(from, { replace: true })
                // toast.success('Register succesfully')
                }
                else{
                    toast.error(data.message)
                }
            })
            .catch(err => {
                // console.log(err)
            })


    }
    return (
        <Container className='my-5 p-4'>
            <Row>
                <h2 className='text-center text-success mb-4'><b>Admin Login</b></h2>
                <form
                    className='bg-warning shadow border mx-auto  p-5 rounded col-sm-12 col-md-6 col-lg-6 '
                    id='contact-form'
                    onSubmit={handleSubmit(submit)}
                >
                    <Form.Group className='my-2 p-2'>
                        <label className='mb-2' htmlFor='name'>
                            <b>UserName</b>
                        </label><br />
                        <Form.Control type='text' id='name' {...register("name")} />
                    </Form.Group>
                    <Form.Group className='my-2 p-2'>
                        <label className='mb-2' htmlFor='password'>
                            <b>Password</b>
                        </label><br />
                        <Form.Control type='password' name='password' id='password' {...register("password")} />
                    </Form.Group>
                    <div className=' text-center'>
                        <button
                            className='mx-auto  btn btn-dark'
                            type='submit'
                        >
                            Login
                        </button>
                    </div>
                </form>
            </Row>
        </Container>
    );
};

export default Login;