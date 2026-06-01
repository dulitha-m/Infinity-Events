// Phase 2: replace with axios.post(API_URL + '/tickets/book')
export const bookTicket = async (ticketData) => {
  await new Promise(r => setTimeout(r, 600));
  return { success: true, bookingId: 'BK-1001' };
};

// Phase 2: replace with axios.get(API_URL + '/tickets/my-tickets')
export const getMyTickets = async () => {
  await new Promise(r => setTimeout(r, 400));
  return []; // Mock empty tickets
};
