import axios from 'axios'

const API_URL = '/api/tickets'

const createTicket = async (ticketData, token) => {
  const response = await axios.post(API_URL, ticketData, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

const getTickets = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

const getTicketById = async (ticketId, token) => {
  const response = await axios.get(API_URL + '/' + ticketId, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

const closeTicket = async (ticketId, token) => {
  const response = await axios.put(
    API_URL + '/' + ticketId,
    { status: 'closed' },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  )

  return response.data
}

const ticketService = {
  createTicket,
  getTickets,
  getTicketById,
  closeTicket,
}

export default ticketService
