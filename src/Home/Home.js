import { useState } from 'react';
import AddBlog from '../AddBlog/AddBlog';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    {
      title: 'Web dev top tips',
      body: 'lorem ipsum...',
      author: 'mario',
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <AddBlog listOfBlogs={blogs} setListOfBlogs={setBlogs} />
      {blogs.map((blog, index) => (
        <div
          className="blog-preview"
          key={blog.id ? blog.id : Math.floor(Math.random() * index + 5)}
        >
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
