export default defineEventHandler(async (event) => {
  try {
    return { status: true };
  } catch (error) {
    throw error;
  }
});
