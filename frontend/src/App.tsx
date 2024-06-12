import React, { useEffect, useState } from 'react';
import './App.css';
import EventList from './components/eventList';
import FormComponent from './components/formComponent';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC = () => {
  const [events, setEvents] = useState([]);
  const [openModal, setModal] = useState(false);

  const fetchEvents = () => {
    axios.get('http://localhost:5000/api/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, []);


  return (
    <div className="App min-h-screen bg-gray-100">
      <ToastContainer autoClose={2000}/>
      <div className='bg-gray-300 py-6 mb-4'>
        <h1 className="text-3xl font-bold text-center">Event Management</h1>
        <div className="flex justify-center mt-4">
          <button 
            onClick={() => setModal(true)} 
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Create Event
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <h1 className='text-2xl font-bold mb-4 mt-2'>Upcoming Events</h1>
        {openModal && <FormComponent setOpen={setModal} fetchEvents={fetchEvents} />}
        <EventList events={events} fetchEvents={fetchEvents} />
      </div>
    </div>
  );
};

export default App;
