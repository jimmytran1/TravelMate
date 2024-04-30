import React, { Component } from "react";
import Nav from "../component/Nav";
import NewPostForm from "../component/NewPostForm";
import Post from "../component/Post";
import { fetchPosts } from "../actions/PostActions";
import { setPost } from "../actions/PostActions";
import { connect } from 'react-redux';
import ButtonGroup from "../component/ButtonGroup";


class Discover extends Component {
  constructor(props) {
      super(props);
      this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
      const {dispatch} = this.props;
      dispatch(fetchPosts());
  }

  handleSelect(selectedIndex, e) {
      const {dispatch} = this.props;
      dispatch(setPost(this.props.itineraries[selectedIndex]));
  }

  handleClick = (post) => {
      const {dispatch} = this.props;
      dispatch(setPost(post));
  }

  state = {
    selectedFilter: null
  };

  handleFilterSelect = (filter) => {
    this.setState({ selectedFilter: filter });
  };
  
  render() {
    const { posts } = this.props;
    const { selectedFilter } = this.state;
  
    let filteredPosts = [...posts];
  
    if (selectedFilter === "Popular") {
      filteredPosts.sort((a, b) => b.likes - a.likes);
    } else if (selectedFilter === "Newest") {
      filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (selectedFilter === "Oldest") {
      filteredPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
  
    if (!posts) {
      return <div>Loading....</div>;
    }
  
    return (
      <div>
        <Nav btn="Discover"/>
        <div className="home-container">
          <div className="filter-container">
            <h1 className="discover-title">What's New</h1>
            <div className="btn-container">
              <ButtonGroup
                text={[
                  "Popular",
                  "Newest",
                  "Oldest"
                ]}
                filterItineraries={this.handleFilterSelect}
              />
            </div>
          </div>
          <div className="post-container">
            {filteredPosts.map((post) => (
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
          <NewPostForm onNewPost={this.handleClick} />
        </div>
      </div>
    );
  }  
  }

const mapStateToProps = state => {
  return {
      posts: state.post.posts
  }
}

export default connect(mapStateToProps)(Discover);



  // const [posts, setPosts] = useState(postsDB);
  // const handleNewPost = (newPostData) => {
  //   // Sned date to backend here, but we're gonna just update the state
  //   setPosts([...posts, { ...newPostData, id: Date.now(), likes: 0, date: today }]);
  // };

