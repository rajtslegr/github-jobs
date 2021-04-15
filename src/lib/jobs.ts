export const getJobs = (
  description?: string | string[],
  location?: string | string[],
  // page?: number,
): Promise<Response> => {
  const url = new URL('https://jobs.github.com/positions.json');

  description ? url.searchParams.append('description', description.toString()) : null;
  location ? url.searchParams.append('location', location.toString()) : null;

  return fetch(url.href);
};
