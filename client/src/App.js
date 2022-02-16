import React, {useState} from 'react';
import Header from './components/Header';
import Posts from './components/Posts';
import './styles/style.css';
import motion from 'framer-motion';

function App() {
  const example = {
    title: "Hello",
    author: "bob",
    content: "this is a post",
    id: '1'
  }
  return (
    <>
      <Header headerText = {"Message Board"}></Header>
      <Posts posts = {[example, example]}></Posts>
    </>
  );
}

export default App;
