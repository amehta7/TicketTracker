const express = require('express')
const { protect } = require('../middleware/authMiddleware')
const { getNotes } = require('../controllers/noteController')

const router = express.Router({ mergeParams: true })

router.route('/').get(protect, getNotes)

module.exports = router
