import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { fetchApi, updateNote } from '../utils/fetchApi';

const NotePage = () => {
  const [note, setNote] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(id !== 'new'){
      fetchApi(`notes/${id}`)
      .then((data) => setNote(data))
    }
  }, [id])

  const deleteNote = () => {
    updateNote(`notes/${id}`, "DELETE", note);
    navigate('/');
  }

  const changeNote = () => {
    updateNote(`notes/${id}`, "PUT", {...note, 'updated': new Date()});
    navigate('/');
  }

  const addNote = () => {
    updateNote('notes/', 'POST', {...note, 'updated': new Date()});
    navigate('/');
  }

  const handleSubmit = () => {
    if(id !== 'new' && !note.body){
      deleteNote();
    }else if(id !== 'new'){
      changeNote();
    }else if(id === 'new' && note.body !== null){
      addNote();
    }
  }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <ArrowLeft onClick = {handleSubmit} />
        </h3>
        {id !== 'new' ? <button onClick={deleteNote} >Delete</button> : <button onClick={handleSubmit} >Done</button>}
      </div>
      <textarea onChange={(e) => {setNote({...note, 'body':e.target.value})}} value={note?.body}></textarea>
    </div>
  )
}

export default NotePage