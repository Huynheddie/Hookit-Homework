import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './components/Table'
import './css/App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [postValues, setPostValues] = useState([]);
  // Non-changing list of merged posts
  const [mergedPosts, setMergedPosts] = useState([]);
  // List of posts displayed on table - will be modified often by filters
  const [onDisplayPosts, setOnDisplayPosts] = useState([]);

  const [searchFilter, setSearchFilter] = useState('');
  const [sortField, setSortField] = useState('');

  // Retrieves data when page is rendered
  useEffect(() => {
    contactAPI('Posts', setPosts);
    contactAPI('PostValues', setPostValues);
  }, [])

  // Once both datasets are retrieved, merge into one array of entries by ID
  useEffect(() => {
    if (posts.length && postValues.length) {
      // console.log('Posts:', posts);
      // console.log('PostValues:', postValues);

      // Merge data from child (PostValues) into parent (Posts) object 
      let merged = postValues.map(postValue => 
        Object.assign(postValue, posts.find(post => post.SocialPost_ID === postValue.SocialPost_ID)));

      setMergedPosts(merged);
      setOnDisplayPosts(merged);
    }
  }, [posts, postValues])

  // Debug: view merged list when it's completed
  useEffect(() => {
    console.log('Merged:', mergedPosts);
  }, [mergedPosts])

  // Retrieve data from remote endpoint and update local data
  const contactAPI = (endpoint, setFunc) => {
    // console.log(`Retrieving ${endpoint}...`);
    axios
    .get(`/${endpoint}.json`)
    .then((response) => {
      // console.log(`Successfully retrieved ${endpoint}`);
      setFunc(response.data);
    });
  }

  // Update search term filter and filter posts 
  const handleSearchFilterChange = (event) => {
    let searchTerm = event.target.value.toLowerCase();
    setSearchFilter(searchTerm);
    setOnDisplayPosts(mergedPosts
      .filter((post) => post.Displayname.toLowerCase().includes(searchTerm))
    )
  }

  return (
    <div>
      <h1>Hookit User Dashboard</h1>
      <p>Sorting by: {sortField}</p>
      <input value={searchFilter} onChange={handleSearchFilterChange}></input>
      <Table posts={onDisplayPosts} setSortField={setSortField} />
    </div>
  )
}

export default App;
