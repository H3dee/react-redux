import React from "react";
import FetchedPostsList from "./components/FetchedPostsList";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";

function App() {
  return (
    <div className="App">
      <div className="container pt-3">
        <div className="row">
          <div className="col">
            <PostForm />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-5">
            <h2>Sync posts:</h2>
            <PostsList posts={[]} />
          </div>
          <div className="col-5">
            <h2>Async posts:</h2>
            <FetchedPostsList posts={[]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
