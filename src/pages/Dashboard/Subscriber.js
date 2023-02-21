import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchingSubscriber from '../../redux/thunk/fetchingSubscriber/fetchingSubscriber';

const Subscriber = () => {
    const dispatch = useDispatch()
    const {subscribers} = useSelector(state => state.subscribers)
    
    useEffect(() => {
        dispatch(fetchingSubscriber())
    }, [dispatch])

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this subscriber?')) {
            const url = `http://localhost:5000/deleteSubscriber/${id}`;
            fetch(url, {
              method: 'DELETE',
              headers: {
                authorization: `bearer ${localStorage.getItem('safe-token')}`
            }
            })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              toast.success('messge deleted success')
              dispatch(fetchingSubscriber())
            })
            .catch(error => {
                toast.error(error)
            });
        }
      };
    return (
        <div>
            <h2 className='text-center my-3'>Subscribers List</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Subscribe date</th>
                        <th className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {subscribers.map(data => (
                        <tr key={data._id}>
                            <td>{data?.email}</td>
                            <td>{data.date}</td>
                            <td className='d-flex justify-content-center'>
                                <Link onClick={()=>handleDelete(data._id)} className='btn mb-2 btn-danger btn-sm' to="">Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Subscriber;