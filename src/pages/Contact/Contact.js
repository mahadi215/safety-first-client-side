import moment from 'moment';
import React from 'react';
import { Container, Form,} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addMessageData } from '../../redux/thunk/messageThunk/messageThunk';

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const date = moment()
    const newDate = date.format('YYYY-MM-DD HH:mm:ss')
    const submit = (data) => {
        const messageData = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            date: newDate
        }
        dispatch(addMessageData(messageData))
        
     }
    return (
        <div id='contact' className='bg-light py-5'>
            <Container>
                <div className=' bg-white p-4 col-sm-12 col-lg-6 col-md-12 m-auto shadow-sm'>
                    <h2 className='text-center text-success'>Let's Get In Touch</h2> <br />
                    <p className=' text-center'>We'r open to any suggetion <br /> or just to have a chat</p>
                    <form
                        className=' '
                        id='contact-form'
                        onSubmit={handleSubmit(submit)}
                    >
                        <div className='d-flex justify-content-between'>
                            <Form.Group className='my-2 p-2'>

                                <label className='mb-2' htmlFor='name'>
                                    Name
                                </label><br />
                                <Form.Control type='text' id='name' {...register("name")} />
                            </Form.Group>
                            <Form.Group className='my-2 p-2'>

                                <label className='mb-2' htmlFor='email'>
                                    Email
                                </label><br />
                                <Form.Control type='email' name='email' id='email' {...register("email")} />
                            </Form.Group>
                        </div>
                        <Form.Group className='my-2 p-2'>

                                <label className='mb-2' htmlFor='subject'>
                                    Subject
                                </label><br />
                                <Form.Control type='subject' name='subject' id='subject' {...register("subject")} />
                            </Form.Group>
                        <Form.Group className='my-2 p-2'>

                            <label className='mb-2' htmlFor='message'>
                                Message
                            </label><br />
                            <Form.Control
                                as="textarea"
                                rows="3"
                                name='message'
                                id='message'
                                {...register("message")}
                            />
                        </Form.Group>
                        <div className=' text-center'>
                            <button
                                className='mx-auto btn btn-success'
                                type='submit'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Contact;