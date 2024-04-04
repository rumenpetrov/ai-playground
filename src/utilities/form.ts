export const processForm = async (Astro, action) => {
  let success = false;
  let error = false;
  let response = null;
  let data = null;
  let formErrors = null;

  if (Astro.request.method === "POST") {
    try {
      response = await action(Astro);

      if (response.status === 200) {
        success = true;
        data = await response.json();
      } else if (response.status === 422) {
        error = true;
        formErrors = await response.json();
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }

  return {
    success,
    error,
    response,
    data,
    formErrors,
  };
}
