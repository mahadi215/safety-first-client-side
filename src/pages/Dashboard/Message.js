import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getMessageData } from '../../redux/thunk/messageThunk/messageThunk';

const Message = () => {
    const [show, setShow] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const handleClose = () => setShow(false);
    const messages = useSelector(state => state.subscribers.message)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMessageData())
    }, [dispatch])

    const handleRowClick = (message) => {
        setShow(true)
        setSelectedMessage(message);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            const url = `http://localhost:5000/deleteMessage/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    toast.success('messge deleted success')
                    dispatch(getMessageData())
                })
                .catch(error => {
                    toast.error(error)
                });
        }
    };
    return (
        <div>
            <h2 className='text-center my-3'>Inbox</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {messages?.map(message => (
                        <tr key={message?._id}>
                            <td>{message?.name}</td>
                            <td>{message?.email}</td>
                            <td>{message?.subject}</td>
                            <td>{message?.date}</td>
                            <td className='d-flex justify-content-center'>
                                <Button className='m-2' variant="success"
                                    onClick={() => { handleRowClick(message) }}>
                                    Show
                                </Button>

                                <Button onClick={() => handleDelete(message._id)} className='btn m-2 btn-danger btn-sm' to="">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* modal  */}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{selectedMessage?.name}</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <p><strong>Date:</strong> {selectedMessage?.date}</p>
                    <p><strong>Email:</strong> {selectedMessage?.email}</p>
                    <p><strong>Message:</strong></p>
                    <p>{selectedMessage?.message}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Message;