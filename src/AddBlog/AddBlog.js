import { Fragment, useState } from 'react';

import styles from './AddBlog.module.scss';
const AddBlog = (props) => {
  const newBlog = {
    title: null,
    body: null,
    author: null,
  };
  const handleChange = (event) => {
    newBlog[event.target.name] = event.target.value;
    //const blogs={...props.blogs}
    console.log(newBlog);
  };
  const handleAddBlog = (e) => {
    const blogs = [...props.listOfBlogs];
    console.log(blogs);
    newBlog.id = blogs.length + 1;
    blogs.unshift(newBlog);
    props.setListOfBlogs([...blogs]);
    console.log(newBlog);
    e.preventDefault();
  };
  return (
    <Fragment>
      <form action="addNewBlog" className={styles.blog}>
        <label className={styles.blogLabel} htmlFor="title">
          Title:
        </label>
        <input
          className={styles.blogInput}
          type="text"
          id="title"
          name="title"
          placeholder="blog title..."
          required
          onChange={handleChange}
        />
        <label className={styles.blogLabel} htmlFor="body">
          Body:
        </label>
        <input
          className={styles.blogInput}
          type="text"
          id="body"
          name="body"
          placeholder="Blog body..."
          onChange={handleChange}
        />
        <label className={styles.blogLabel} htmlFor="author">
          Author:
        </label>
        <input
          className={styles.blogInput}
          type="text"
          id="author"
          name="author"
          placeholder="author name..."
          onChange={handleChange}
        />
        <input
          onClick={handleAddBlog}
          className={styles.blogSubmit}
          type="submit"
          value="Add blog"
        />
      </form>
    </Fragment>
  );
};

export default AddBlog;
