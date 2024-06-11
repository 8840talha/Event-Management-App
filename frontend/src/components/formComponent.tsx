// src/components/FormComponent.tsx
import axios from 'axios';
import React, { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';

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
}

const FormComponent:  React.FC<FormComponentProps> = ({ setOpen }) => {
  const { register, handleSubmit, formState } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data,'d')
    axios.post('http://localhost:5000/api/events', data)
      .then(response => {
        console.log('Event created:', response.data);
        if(response.data){
          alert('New Event Created')
        
        setOpen(false); // Close the modal
        }
      })
      .catch(error => {
        console.error('Error creating event:', error);
      });
  };

  return (
     <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
    
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label htmlFor="name">Event Name:</label>
        <input {...register('name')} id="name" type="text" className="input" />

        <label htmlFor="date">Date:</label>
        <input {...register('date')} id="date" type="date" className="input" />

        <label htmlFor="time">Time:</label>
        <input {...register('time')} id="time" type="time" className="input" />

        <label htmlFor="duration">Duration (in hours):</label>
        <input {...register('duration')} id="duration" type="number" className="input" />

        <label htmlFor="guests">Guests:</label>
        <input {...register('guests')} id="guests" type="text" className="input" />

        <label htmlFor="agenda">Agenda:</label>
        <textarea {...register('agenda')} id="agenda" rows={4} className="input" />

        <button type="submit" disabled={formState.isSubmitting} className="btn">
          Create Event
        </button>
      </form>
    </div>     
        </div>
              </div>
    </div>
  </div>
</div>

    
  );

};

export default FormComponent;
