import axios from 'axios';
import React, { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface FormData {
  name: string;
  date: string;
  time: string;
  duration: number;
  guests: string;
  agenda: string;
}

interface FormComponentProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  fetchEvents: () => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ setOpen,fetchEvents }) => {
  const { register, handleSubmit, formState } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    axios.post('https://event-management-app-1.onrender.com/api/events', data)
      .then(response => {
        if (response.data) {
          toast('New Event Created');
          setOpen(false);
          fetchEvents();
        }
      })
      .catch(error => {
        console.error('Error creating event:', error);
      });
  };

  return (
    <div className="fixed z-20 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Create New Event</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">Event Name</label>
            <input {...register('name')} id="name" type="text" className="w-full px-3 py-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-bold mb-2">Date</label>
            <input {...register('date')} id="date" type="date" className="w-full px-3 py-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-sm font-bold mb-2">Time</label>
            <input {...register('time')} id="time" type="time" className="w-full px-3 py-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="duration" className="block text-sm font-bold mb-2">Duration (in hours)</label>
            <input {...register('duration')} id="duration" type="number" className="w-full px-3 py-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="guests" className="block text-sm font-bold mb-2">Guests</label>
            <input {...register('guests')} id="guests" type="text" className="w-full px-3 py-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="agenda" className="block text-sm font-bold mb-2">Agenda</label>
            <textarea {...register('agenda')} id="agenda" rows={4} className="w-full px-3 py-2 border rounded" required></textarea>
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={() => setOpen(false)} className="bg-gray-500 text-white py-2 px-4 rounded mr-2">Cancel</button>
            <button type="submit" disabled={formState.isSubmitting} className="bg-blue-500 text-white py-2 px-4 rounded">Create Event</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
