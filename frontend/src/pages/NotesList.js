import React, { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
import { fetchApi } from '../utils/fetchApi';
import AddButton from '../components/AddButton';

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetchApi('notes')
    .then((data) => setNotes(data))
  }, []);

  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782; Notes</h2>
        <p className='notes-count'>{notes.length}</p>
      </div>
      <div className='notes-list'>
        {notes.map((note, idx) => (
          <ListItem key={idx} note={note}/>
        ))}
      </div>
      <AddButton />
    </div>
  )
}

export default NotesList