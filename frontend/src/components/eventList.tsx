import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './eventCard'; // Import EventCard component

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  duration: number;
  guests: string;
  agenda: string;
}
interface EventListProps {
    events: Event[];
  }
  
  const EventList: React.FC<EventListProps> = ({ events }) => {
 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
