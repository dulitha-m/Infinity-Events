// Phase 1: We might use EmailJS directly in the component, or we can wrap it here.
// Phase 2: replace with axios.post(API_URL + '/contact/submit')
export const submitContactForm = async (formData) => {
  await new Promise(r => setTimeout(r, 800));
  return { success: true, message: 'Message sent successfully' };
};
