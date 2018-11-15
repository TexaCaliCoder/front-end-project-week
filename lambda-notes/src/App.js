import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

import NotesList from './components/notesList';
import { MainAppContainer, SideBar } from './components/styledcomponents';



const App = props =>{
    return (
      <MainAppContainer >
        <SideBar className='side-bar'>
            <h1>Lambda Notes</h1>
            <button>View Your Notes</button>
            <button>+ Create New Note</button> 
        </SideBar>
        <div>
          <NotesList />
        </div>
      </MainAppContainer>
    );
}

export default App;
