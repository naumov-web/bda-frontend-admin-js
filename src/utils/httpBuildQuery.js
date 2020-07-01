export const buildQueryParams = (url, params) => {
  const result = `${url  }?`;
  const parts = [];

  for(const k in params) {
      parts.push(`${k  }=${  params[k]}`);
  }

  return result + parts.join('&');
};