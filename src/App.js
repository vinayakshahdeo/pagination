import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=tEkYywQ8ZsQXhKKOqJjkBdGPnqPciCYROhBE6Pz1'
      );
      const data = res.data.photos.map(result => result.img_src);
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className='container mt-5'>
      <center>
        <h1 className='text-primary -3'>Pagination in React</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </center>
    </div>
  );
}

export default App;
