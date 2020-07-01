import snakeCaseKeys from 'snakecase-keys';

export const buildQueryParams = (url, params) => {
  const result = `${url  }?`;
  const parts = [];

  params = snakeCaseKeys(params);

  for(const k in params) {
      parts.push(`${k  }=${  params[k]}`);
  }

  return result + parts.join('&');
};