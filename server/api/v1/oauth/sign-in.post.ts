import vine, { errors } from "@vinejs/vine";
import { createError, sendError } from "h3";

export default defineEventHandler(async (event) => {
  const data = await readBody(event);
  const contentType = getRequestHeaders(event);

  console.log(contentType);

  try {
    const validator = vine.compile(
      vine.object({
        email: vine.string().email(),
        password: vine.string().minLength(6).maxLength(32),
      })
    );

    await validator.validate(data);

    const response = await $fetch(`${process.env.API_URL}/legacy/auth/login`, {
      method: "POST",
      headers: {
        Authorization: `${process.env.API_KEY}`,
        Accept: "application/json",
        "Accept-Language": "id",
        "Content-Type": "application/json",
        "User-Agent": "",
        Origin: "esmartclinic.id",
      },
      body: JSON.stringify({
        username: data.email,
        password: data.password,
      }),
    });

    return response;
  } catch (err) {
    if (err instanceof errors.E_VALIDATION_ERROR) {
      // Create an error response with a 422 status code and the validation messages
      const errorResponse = createError({
        status: 422,
        statusMessage: "Validation Error",
        data: err.messages,
      });
      // Send the error response
      return sendError(event, errorResponse);
    }
    // For other types of errors, throw them to be handled by the global error handler
    throw err;
  }
});
