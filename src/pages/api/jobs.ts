import { NextApiRequest, NextApiResponse } from 'next';
import { getJobs } from '../../lib/jobs';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { description, location, page } = req.query;
  const jobsResponse = await getJobs(description, location, page);
  const jobs = await jobsResponse.json();

  return res.send(jobs);
};
