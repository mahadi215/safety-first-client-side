import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { } from '../../redux/Actions/BlogsAction';
import addBlogData from '../../redux/thunk/addBlogData/addBlogData';
import { useQuill } from 'react-quilljs';
// or const { useQuill } = require('react-quilljs');

import 'quill/dist/quill.snow.css';

const AddBlog = () => {
  const { register, handleSubmit } = useForm();
  const [content, setContent] = useState();
  const dispatch = useDispatch();
  
  const { quill, quillRef } = useQuill();
  useEffect(() => {
    if (quill) {
      quill.on('text-change',()=>{
        // console.log(quillRef.current.firstChild.innerHTML);
        setContent(quillRef.current.firstChild.innerHTML)
      })
    }
  }, [quill]);
  console.log(content);
  // console.log(quill);
  // console.log(quillRef);
  
  const submit = (data) => {
    const date = moment()
    const newDate = date.format('MMMM Do YYYY')
    const blog = {
      title: data.title,
      image: data.image,
      metaDesc: data.metaDescription,
      description: content,
      postDate: newDate,
      tags: [
        data.tag1,
        data.tag2,
        data.tag3
      ]
    };
    console.log(blog);
    dispatch(addBlogData(blog));
    document.getElementById('form').reset()
    setContent('')
  }
  // console.log(content);
  return (
    <div className=' bg-light shadow p-4 col-sm-12 col-lg-12 col-md-12 m-auto'>
      <h4 className='text-center m-2'>Add Blog</h4>
      <form
        className=' '
        id='form'
        onSubmit={handleSubmit(submit)}
      >
        <Form.Group className='my-2 p-2'>

          <label className='mb-2' htmlFor='title'>
            Title
          </label><br />
          <Form.Control type='text' id='title' {...register("title")} />
        </Form.Group>
        <Form.Group className='my-2 p-2'>

          <label className='mb-2' htmlFor='image'>
            Image
          </label><br />
          <Form.Control type='text' name='image' id='image' {...register("image")} />
        </Form.Group>
        <Form.Group className='my-2 p-2'>

          <label className='mb-2' htmlFor='metaDescription'>
            Meta Description
          </label><br />
          <Form.Control
            as="textarea"
            rows="2"
            name='metaDescription'
            id='metaDescription'
            {...register("metaDescription")}
          />
        </Form.Group>

          <div  style={{ backgroundColor:'#fff', minHeight:200 }}
           ref={quillRef} />


        <Row className=''>
          <Form.Group className='my-2 p-2 col-lg-4 col-md-4 col-sm-12'>
            <label className='mb-2' htmlFor='tag1'>
              Related Tag 1
            </label><br />
            <Form.Control
              type='text'
              name='tag1'
              id='tag1'
              {...register("tag1")}
            />
          </Form.Group>
          <Form.Group className='my-2 p-2 col-lg-4 col-md-4 col-sm-12'>
            <label className='mb-2' htmlFor='tag2'>
              Related Tag 2
            </label><br />
            <Form.Control
              type='text'
              name='tag2'
              id='tag2'
              {...register("tag2")}
            />
          </Form.Group>
          <Form.Group className='my-2 p-2 col-lg-4 col-md-4 col-sm-12'>
            <label className='mb-2' htmlFor='tag3'>
              Related Tag 3
            </label><br />
            <Form.Control
              type='text'
              name='tag3'
              id='tag3'
              {...register("tag3")}
            />
          </Form.Group>
        </Row>


        <div className=' text-center'>
          <button
            className='mx-auto my-btn'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;