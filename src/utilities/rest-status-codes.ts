// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
export const status200 = {
  status: 200,
  statusText: 'OK',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const status201 = {
  status: 201,
  statusText: 'Created',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const status401 = {
  status: 401,
  statusText: 'Unauthorized',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const status404 = {
  status: 404,
  statusText: 'Not Found',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const status422 = {
  status: 422,
  statusText: 'Unprocessable Content',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const status500 = {
  status: 500,
  statusText: 'Internal Server Error',
  headers: {
    'Content-Type': 'application/json',
  },
};
