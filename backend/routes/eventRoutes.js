// backend/routes/eventRoutes.js
const express = require('express');
const { createEvent, getEvents, editEvent, deleteEvent } = require('../controllers/eventController');

const router = express.Router();

router.post('/events', createEvent);
router.get('/events', getEvents);
router.put('/events/:id',editEvent);
router.delete('/events/:id',deleteEvent)

module.exports = router;
