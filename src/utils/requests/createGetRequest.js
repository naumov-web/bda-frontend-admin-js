import { buildQueryParams } from '../httpBuildQuery';

export default async function (base, url, params = {}) {
    try {
      const response = await base.get(buildQueryParams(url, params));
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
  }