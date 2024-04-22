import React, { useState } from 'react';

const NewPostForm = ({ onNewPost }) => {
  const [postData, setPostData] = useState({
    name: '',
    location: '',
    image: '',
    content: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
    onNewPost({
      ...postData,
      date // The date is automatically set to now
    });
    setPostData({ name: '', location: '', image: '', content: '' }); // Reset form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form className="new-post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={postData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={postData.location}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={postData.image}
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="What's on your mind?"
        value={postData.content}
        onChange={handleChange}
        required
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default NewPostForm;
