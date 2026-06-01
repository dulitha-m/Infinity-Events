// Phase 2: replace with axios.get(API_URL + '/auth/login')
export const loginUser = async (credentials) => {
  await new Promise(r => setTimeout(r, 500));
  // Mock login success
  return { token: 'mock-jwt-token', user: { name: 'Test User', role: 'Customer' } };
};

// Phase 2: replace with axios.post(API_URL + '/auth/register')
export const registerUser = async (userData) => {
  await new Promise(r => setTimeout(r, 500));
  return { success: true, message: 'Registration successful' };
};
