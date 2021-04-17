import Link from 'next/link';
import React from 'react';
import { IJob } from '../types/types';

const JobCard: React.FC<IJob> = ({ id, title, type, company, location /* company_logo */ }) => {
  return (
    <Link href={`/job/${encodeURIComponent(id)}`}>
      <a>
        <div className="relative flex flex-col gap-4 p-4 shadow min-h-56 rounded-xl bg-gh-gray">
          <div className="text-xl">{title}</div>
          <div className="font-light">{company}</div>
          <div className="flex flex-row flex-grow"></div>
          <div className="flex flex-row justify-between">
            <div className="text-sm font-light text-gh-cyan">{location}</div>
            <div className="text-sm font-light text-gh-cyan">{type}</div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default JobCard;
