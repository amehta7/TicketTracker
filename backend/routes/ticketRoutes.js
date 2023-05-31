const express = require('express')
const { protect } = require('../middleware/authMiddleware')
const {
  getTickets,
  createTicket,
  getSingleTicket,
  updateTicket,
  deleteTicket,
} = require('../controllers/ticketController')

const router = express.Router()

router.route('/').get(protect, getTickets).post(protect, createTicket)

router
  .route('/:id')
  .get(protect, getSingleTicket)
  .put(protect, updateTicket)
  .delete(protect, deleteTicket)

module.exports = router
