import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import { IJob } from '../types/types';

const JobContainer: React.FC<IJob> = ({
  company,
  company_logo,
  company_url,
  created_at,
  description,
  how_to_apply,
  location,
  title,
  type,
}) => {
  dayjs.extend(relativeTime);

  return (
    <>
      <div className="relative flex flex-col p-6 space-y-4 break-words bg-gh-gray rounded-xl">
        {company_logo && (
          <img
            className="absolute bg-white border rounded-lg h-14 border-gh-darkBlue top-10 right-6"
            src={company_logo}
            alt={`${company} logo`}
          />
        )}
        <div className="w-2/3 text-4xl font-bold">{title}</div>
        <h1 className="text-xl font-bold">
          <a href={company_url} target="_blank" rel="noopener noreferrer">
            {company}
          </a>
        </h1>
        <div className="flex flex-row">
          <div className="pr-2 font-light text-gh-cyan">{location}</div>
          &#8729;
          <div className="pl-2 font-light text-gh-cyan">{type}</div>
        </div>
        <div className="font-light text-gh-cyan">Added {dayjs(created_at).toNow(true)} ago.</div>
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="text-gh-cyan" dangerouslySetInnerHTML={{ __html: how_to_apply }}></div>
      </div>
    </>
  );
  1;
};
1;
export default JobContainer;
