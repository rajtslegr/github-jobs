import { NextApiRequest, NextApiResponse } from 'next';
import { getJob } from '../../lib/jobs';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { id } = req.query;
  const jobsResponse = await getJob(id);
  const jobs = await jobsResponse.json();

  return res.send(jobs);
};
