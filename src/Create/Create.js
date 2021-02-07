import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('kader');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
      history.push('/');
    });
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Blog title/</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Blog Body/</label>
        <textarea
          value={body}
          required
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label htmlFor="">Blog Author:</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="kader">kader</option>
          <option value="ibtissem">ibtissem</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding Blog ...</button>}
      </form>
    </div>
  );
};

export default Create;
