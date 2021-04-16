import React from 'react';
import { IJob } from '../types/types';

const JobCard: React.FC<IJob> = ({ title, type, company, location, company_logo }) => {
  return (
    <div className="relative flex flex-col gap-4 p-4 shadow min-h-56 rounded-xl border-gh-violet bg-gh-gray">
      {company_logo && (
        <img
          className="absolute h-12 bg-white border rounded-lg border-gh-softBlue -top-8 right-4"
          src={company_logo}
          alt={`${company} logo`}
        />
      )}
      <div className="w-2/3 text-xl">{title}</div>
      <div className="font-light">{company}</div>
      <div className="flex flex-row flex-grow"></div>
      <div className="flex flex-row justify-between">
        <div className="text-sm font-light text-gh-cyan">{location}</div>
        <div className="text-sm font-light text-gh-cyan">{type}</div>
      </div>
    </div>
  );
};

export default JobCard;
