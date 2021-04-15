import { NextApiRequest, NextApiResponse } from 'next';
import { getJobs } from '../../lib/jobs';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { description, location } = req.query;
  const jobsResponse = await getJobs(description, location);
  const jobs = await jobsResponse.json();

  return res.send(jobs);
};
