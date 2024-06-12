import React from 'react';
import EventCard from './eventCard';

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
  fetchEvents: () => void;
}

const EventList: React.FC<EventListProps> = ({ events, fetchEvents }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {events.map(event => (
        <EventCard key={event.id} event={event} fetchEvents={fetchEvents} />
      ))}
    </div>
  );
};

export default EventList;
