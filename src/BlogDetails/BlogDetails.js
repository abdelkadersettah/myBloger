import { Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../CustomHooks/useFetch';

const BlogDetails = (props) => {
  const { id } = useParams();

  const { data: blog, isPending, error } = useFetch(
    'http://localhost:8000/blogs/' + id
  );
  const history = useHistory();
  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'delete',
    }).then(() => {
      history.push('/');
    });
  };
  return (
    <div className="blog-details" key={id}>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>written by {blog.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
};
export default BlogDetails;
