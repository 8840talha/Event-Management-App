// src/App.tsx
import React, { useEffect, useState } from 'react';
import './App.css';
import EventList from './components/eventList';
import { Button } from '@headlessui/react';
import FormComponent from './components/formComponent';
import axios from 'axios';

const App: React.FC = () => {

  const [events, setEvents] = useState([]);
  const [openModal, setModal] = useState(false);


  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, [openModal]);
  return (
    <div className="App min-h-screen bg-gray-100">
<div className='bg-gray-300 py-6 mb-4'>
  <h1 className="text-3xl font-bold">Event Management</h1>
  <button onClick={()=>setModal(true)}>Create</button>
 
  </div>
      <div className="container mx-auto">
      {openModal&&<FormComponent setOpen={setModal}/>}
        <EventList events={events} />
      </div>
    </div>
  );
};

export default App;
