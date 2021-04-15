import { IJob } from '../types/types';

const Job: React.FC<IJob> = ({ title, company, location }) => {
  return (
    <div className="flex flex-col p-4 space-y-4 transition bg-white border rounded shadow hover:shadow-lg">
      <div className="text-lg">{title}</div>
      <div className="flex flex-row justify-between">
        <div className="text-sm font-light">{company}</div>
        <div className="text-sm font-light">{location}</div>
      </div>
    </div>
  );
};

export default Job;
