import React, { useState } from "react";
import Nav from "../component/Nav";
import NewPostForm from "../component/NewPostForm";
import Post from "../component/Post";

export default function Discover() {
  const postsDB = [
    {
      id: 1,
      name: "Jimmy Tran",
      location: "Denver, Colorado",
      content: "I love Denver So Much! 🌸",
      image:
        "https://assets.milestoneinternet.com/cdn-cgi/image/f=auto/the-slate-denver/slatedenver/innerpageoverviewimage/the-slate-denver-colorado-ttd-overview.jpg?width=640&height=580",
      likes: 12000,
      date: "04/20/2024",
    },
    {
      id: 2,
      name: "John Doe",
      location: "Kyoto, Japan",
      content: "Ancient beauty meets modernity. #Kyoto",
      image:
        "https://i.natgeofe.com/n/508c82e4-efb5-4273-80ad-dcf1a043e6e6/temple-kyoto-japan_4x3.jpg",
      likes: 95,
      date: "04/15/2024",
    },
    {
      id: 3,
      name: "Emma Johnson",
      location: "Osaka, Japan",
      content: "The street food here is incredible! So much to try! 🍣",
      image:
        "https://boutiquejapan.com/wp-content/uploads/2017/10/takoyaki-osaka-japan-e1542938850575.png",
      likes: 230,
      date: "04/13/2024",
    },
    {
      id: 4,
      name: "Olivia Brown",
      location: "Hokkaido, Japan",
      content: "Snowy paradise. Winter wonderland at its best. ❄️",
      image:
        "https://www.skiing-hokkaido.com/wp/wp-content/uploads/2021/09/img_hokkaido01.jpg",
      likes: 340,
      date: "04/19/2024",
    },
  ];

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  const [posts, setPosts] = useState(postsDB);
  const handleNewPost = (newPostData) => {
    // Sned date to backend here, but we're gonna just update the state
    setPosts([...posts, { ...newPostData, id: Date.now(), likes: 0, date: today }]);
  };

  return (
    <div>
      <Nav />
      <div className="home-container">
        <div className="filter-container">
          <h1 className="discover-title">What's New</h1>
          <div className="btn-container">
            <button className="category">Explore</button>
            <button className="category">Popular</button>
            <button className="category">Newest</button>
            <button className="category">Oldest</button>
          </div>
        </div>
        <div className="post-container">
          {posts.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              location={post.location}
              content={post.content}
              image={post.image}
              likes={post.likes}
              date={post.date}
            />
          ))}
        </div>
        <NewPostForm onNewPost={handleNewPost} />
      </div>
    </div>
  );
}
