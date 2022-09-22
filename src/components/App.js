import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"


console.log(blogData);

const { name, image, about, posts} = blogData

function App() {
  return (

    <div className="App">
      <Header name={name}/>

      <About  image={image} about={about}/>

      <ArticleList posts={posts}/>

      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!



    </div>



  );
}

export default App;
