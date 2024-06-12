import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  duration: number;
  guests: string;
  agenda: string;
}

interface Props {
  event: Event;
  fetchEvents: () => void;
}

const EventCard: React.FC<Props> = ({ event, fetchEvents }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState(event);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/events/${event.id}`)
      .then(() => {
        toast.success('Event Deleted Successfully')
        fetchEvents();
      })
      .catch(error => {
        console.error('Error deleting event:', error);
      });
  };

  const handleEdit = () => {
    axios.put(`http://localhost:5000/api/events/${event.id}`, editedEvent)
      .then(() => {
        setIsEditing(false);
        toast.success('Event Edited Successfully')
        fetchEvents();


      })
      .catch(error => {
        console.error('Error editing event:', error);
      });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 relative">
      {isEditing ? (
        <>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Event Name</label>
            <input
              type="text"
              value={editedEvent.name}
              onChange={e => setEditedEvent({ ...editedEvent, name: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Date</label>
            <input
              type="date"
              value={editedEvent.date}
              onChange={e => setEditedEvent({ ...editedEvent, date: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Time</label>
            <input
              type="time"
              value={editedEvent.time}
              onChange={e => setEditedEvent({ ...editedEvent, time: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Duration</label>
            <input
              type="number"
              value={editedEvent.duration}
              onChange={e => setEditedEvent({ ...editedEvent, duration: Number(e.target.value) })}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Guests</label>
            <input
              type="text"
              value={editedEvent.guests}
              onChange={e => setEditedEvent({ ...editedEvent, guests: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Agenda</label>
            <textarea
              value={editedEvent.agenda}
              onChange={e => setEditedEvent({ ...editedEvent, agenda: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border rounded"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <div className="rounded-lg py-4 w-full">
        <div className='flex justify-between items-center border-b-[1px] w-full'>
        <h2 className="text-lg font-bold mb-2 pb-1 text-left pl-4">{event.name} </h2>
        <div className='flex justify-center pr-2'>
          <svg 
          role="presentation"
           onClick={handleDelete}
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24"
           strokeWidth={1.5} stroke="currentColor"
           className="size-4 text-gray-400 mr-2 cursor-pointer">
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
  <svg   onClick={() => setIsEditing(true)} role='presentation' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer size-4 ml-2 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
  </svg>
  </div>
  </div>
        <p className="mb-1 border-b-[1px] w-full pb-1 text-left pl-4"><span className="font-semibold">Date:</span> {event.date} {event.time}</p>
        <p className="mb-1 border-b-[1px] w-full pb-1 text-left pl-4"><span className="font-semibold">Duration:</span> {event.duration} hours</p>
        <p className="mb-1 border-b-[1px] w-full pb-1 text-left pl-4"><span className="font-semibold">Guests:</span> {event.guests}</p>
        <p className="mb-1 border-b-[1px] w-full pb-1 text-left pl-4"><span className="font-semibold">Agenda:</span> {event.agenda}</p>
      </div>
      )}
    </div>
  );
};

export default EventCard;
