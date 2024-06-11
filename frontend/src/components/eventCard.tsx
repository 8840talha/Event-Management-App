import React from 'react';

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
}

const EventCard: React.FC<Props> = ({ event }) => {
  return (
    <div className="bg-white w-3/4 shadow-xl rounded-lg py-6">
      <h2 className="py-4 border-0 border-b-[1px] w-full text-lg font-bold">{event.name}</h2>
      <p className='text-left p-2 border-0 border-b-[1px] w-full'><span className='font-semibold'>Date</span> {event.date} {event.time}</p>
      <p className='text-left p-2 border-0 border-b-[1px] w-full'><span className='font-semibold'>Duration</span> {event.duration} hours</p>
      <p className='text-left p-2 border-0 border-b-[1px] w-full'><span className='font-semibold'>Guests </span><span>{event.guests}</span></p>
      <p className='text-left p-2 border-0 border-b-[1px] w-full'><span className='font-semibold'>Agenda</span> {event.agenda}</p>
    </div>
  );
};

export default EventCard;
