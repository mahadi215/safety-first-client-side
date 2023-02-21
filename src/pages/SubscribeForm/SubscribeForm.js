import moment from 'moment';
import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import addSubscriberData from '../../redux/thunk/addSubscriber/addSubscriber';

const SubscribeForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const date = moment()
    const newDate = date.format('MMMM Do YYYY')

    const submit = (data) => {
        const email = {
            email: data.email,
            date: newDate
        }
        console.log(email);
        dispatch(addSubscriberData(email))
    }
    return (
        <form id='subscriber-form' onSubmit={handleSubmit(submit)}>
                                <h5 className='text-white mt-5 mb-3'>Subscribe for get latest update</h5>
                                <InputGroup>
                                    <Form.Control
                                        type="email"
                                        name='email'
                                        placeholder="Enter Email"
                                        aria-label="Input group example"
                                        aria-describedby="btnGroupAddon"
                                        {...register("email", {
                                            required: 'Email Address is required'
                                        })}
                                    />
                                    <Button type='submit' className='bg-success border-0 text-white' aria-describedby="btnGroupAddon">Subscribe</Button>
                                </InputGroup>
                                <br />
                                {errors.email && <p className='p-1 text-danger'>{errors.email.message}</p>}
                            </form>
    );
};

export default SubscribeForm;