export default async function (base, url, payload) {
  try {
    const response = await base.put(url, payload);
    const { data } = response;
    return data;
  } catch ({ response }) {
    if (response.status === 401) {
      const error = {
        unauthorized: true,
      };
      throw error;
    }

    if (response.status === 422) {
      const error = {
        errors: response.data.errors,
        unauthorized: false,
      };
      throw error;
    }

    return null;
  }
};