export const getJobs = (
  description?: string | string[],
  location?: string | string[],
  page?: string | string[],
): Promise<Response> => {
  const url = new URL('https://jobs.github.com/positions.json');

  description ? url.searchParams.append('description', description.toString()) : null;
  location ? url.searchParams.append('location', location.toString()) : null;
  page ? url.searchParams.append('page', page.toString()) : null;

  return fetch(url.href);
};

export const getJob = (id?: string | string[]): Promise<Response> => {
  const url = `https://jobs.github.com/positions/${id}.json`;

  return fetch(url);
};
