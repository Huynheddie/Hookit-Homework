import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableInterface from './components/TableInterface';
import ChartInterface from './components/ChartInterface'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [postValues, setPostValues] = useState([]);
  
  // Non-changing list of merged posts
  const [postMemo, setPostMemo] = useState([]);

  // List of posts displayed on table - will be modified often by filters
  const [onDisplayPosts, setOnDisplayPosts] = useState([]);

  // Retrieves data when page is rendered
  useEffect(() => {
    contactAPI('Posts', setPosts);
    contactAPI('PostValues', setPostValues);
  }, [])

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

  // Once both datasets are retrieved, merge into one array of entries by ID
  useEffect(() => {
    if (posts.length && postValues.length) {

      // Add 'Interactions' attribute to posts
      let modifiedPosts = posts.map(post => Object.assign(post, { Interactions: post.Likes + post.Comments + post.Views }));
      
      setPostMemo(modifiedPosts);
      setOnDisplayPosts(modifiedPosts);
    }
  }, [posts, postValues])

  return (
    <div>
      <Router>

          <Navbar />

          <Switch>
            <Route path="/charts">
              <ChartInterface posts={posts} postValues={postValues} />
            </Route>
            <Route path="/">
              <TableInterface postMemo={postMemo} onDisplayPosts={onDisplayPosts} setOnDisplayPosts={setOnDisplayPosts} />
            </Route>
          </Switch>
          
      </Router>
    </div>
  )
}

export default App;
