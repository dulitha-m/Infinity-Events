import { events } from '../data/events';

// Phase 2: replace import above with:
// import axios from 'axios';
// const API = import.meta.env.VITE_API_URL;

export const getAllEvents = async (filters = {}) => {
  // Phase 2: return (await axios.get(`${API}/events`, { params: filters })).data;
  await new Promise(r => setTimeout(r, 300)); // simulate latency
  return events;
};

export const getEventById = async (id) => {
  // Phase 2: return (await axios.get(`${API}/events/${id}`)).data;
  await new Promise(r => setTimeout(r, 300));
  return events.find(e => e.id === id);
};

export const getFeaturedEvents = async () => {
  // Phase 2: return (await axios.get(`${API}/events/featured`)).data;
  await new Promise(r => setTimeout(r, 300));
  return events.slice(0, 3); // Return first 3 as featured
};

export const getEventsByCategory = async (category) => {
  // Phase 2: return (await axios.get(`${API}/events?category=${category}`)).data;
  await new Promise(r => setTimeout(r, 300));
  return events.filter(e => e.category === category);
};
