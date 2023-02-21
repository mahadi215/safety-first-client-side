
import React, { useEffect, useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchingBlog from '../../redux/thunk/fetchingBlog/fetchingBlog';
import updateBlogData from '../../redux/thunk/UpdateBlog/UpdateBlog';
import { useQuill } from 'react-quilljs';


const EditBlog = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const id = useParams({})

  const blogs = useSelector(state => state.blog.blogs)
  const updateBlog = blogs.find(x => x._id === id.id)

  const [content, setContent] = useState();

  const { quill, quillRef } = useQuill();
  useEffect(() => {
    if (quill) {
      setContent(quillRef.current.firstChild.innerHTML = updateBlog?.description)
      quill.on('text-change', () => {
        setContent(quillRef.current.firstChild.innerHTML)
      })
    }
  }, [quill]);
  // console.log(content);
  // console.log(quill);
  // console.log(quillRef);

  const submit = (data) => {
    
    const blog = {
      title: data.title,
      image: data.image,
      metaDesc: data.metaDescription,
      description: content,
      postDate: updateBlog.postDate,
      tags: [
        data.tag1,
        data.tag2,
        data.tag3
      ]
    };
    console.log(blog);
    dispatch(updateBlogData(updateBlog._id, blog))
  }
  useEffect(() => {
    dispatch(fetchingBlog())

  }, [dispatch])


  return (
    <div className=' bg-light p-4 col-sm-12 col-lg-12 col-md-12 m-auto'>
      <h4 className='text-center m-2'>Edit Blog</h4>
      <form
        className=' '
        id='form'
        onSubmit={handleSubmit(submit)}
      >
        <Form.Group className='my-2 p-2'>

          <label className='mb-2' htmlFor='title'>
            Title
          </label><br />
          <Form.Control type='text' id='title' defaultValue={updateBlog?.title} {...register("title")} />
        </Form.Group>
        <Form.Group className='my-2 p-2'>

          <label className='mb-2' htmlFor='image'>
            Image
          </label><br />
          <Form.Control type='text' name='image' id='image' defaultValue={updateBlog?.image} {...register("image")} />
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
            defaultValue={updateBlog?.metaDesc ? updateBlog?.metaDesc : ''}
            {...register("metaDescription")}
          />
        </Form.Group>

        <div style={{ backgroundColor: '#fff', minHeight: 200 }}
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
              defaultValue={updateBlog?.tags[0]}
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
              defaultValue={updateBlog?.tags[1]}
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
              defaultValue={updateBlog?.tags[2]}
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

export default EditBlog;