import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Posts from './components/Posts';
import ModalButton from './components/ModalButton';
import Modal from './components/Modal';
import './styles/style.css';
import {motion, AnimatePresence} from 'framer-motion';


function App() {
  // state to handle modal
  const [modalActive, setModalState] = useState(false);
  const closeModal = () => setModalState(false);
  const openModal = () => setModalState(true);
  const toggleModal = () => {
    modalActive? closeModal() : openModal();
  }

  // state to handle data from db
  const [postList, updatePostList] = useState([]);
  async function getData() {
    const data = await fetch('/api/posts').catch((err) => console.error(err));
    return data.json();

  }
  useEffect(async () => {
    const posts = await getData();
    updatePostList([...posts]);
  }, [])

  async function updateDB() {
    const posts = await getData();
    updatePostList([...posts]);
  }

  return (
    <>
      
      <Header headerText = {"Message Board"}></Header>
      
      <Posts posts = {postList}></Posts>
      <ModalButton openModalFunc = {toggleModal}></ModalButton>
      
      <AnimatePresence
        initial = {false}
        exitBeforeEnter = {true}
      >{modalActive && <Modal text = {'hi'} handleClose = {closeModal} updateDBRoot = {updateDB}></Modal>}
      </AnimatePresence>
      
      
    </>
  );
}

export default App;
