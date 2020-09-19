export default async function (base, url) {
  try {
    const response = await base.delete(url);
    const { data } = response;
    return data;
  } catch ({ response }) {
    if (response.status === 401) {
      const error = {
        unauthorized: true,
      };
      throw error;
    }

    if (response.status === 403) {
      const error = {
        unauthorized: false,
        forbidden: true
      };
      throw error;
    }

    return null;
  }
};