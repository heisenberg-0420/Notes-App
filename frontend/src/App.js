import './App.css';
import Header from './components/Header';
import NotesList from './pages/NotesList';
import NotePage from './pages/NotePage';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='container dark'>
        <div className="app">
          <Header/>
          <Routes>
            <Route path='/' element={<NotesList />} />
            <Route path='/note/:id' element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
