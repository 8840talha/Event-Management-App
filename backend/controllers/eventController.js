const { Event } = require('../models');

const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteEvent = async (req, res) => {
  try {
    const eventId = parseInt(req.params.id);
    const event = await Event.findByPk(eventId);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    await event.destroy();
    res.status(204).json({message:"Event Deleted Successfully"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editEvent = async (req, res) => {
  try {
    const eventId = parseInt(req.params.id);
    const updatedEvent = req.body;
    const event = await Event.findByPk(eventId);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    await event.update(updatedEvent);
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  createEvent,
  getEvents,
  editEvent,
  deleteEvent
};
