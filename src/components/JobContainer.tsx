import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import { IJob } from '../types/types';

interface Props {
  data?: IJob;
  loading: boolean;
  error: boolean;
}

const JobContainer: React.FC<Props> = ({ data, loading, error }) => {
  dayjs.extend(relativeTime);

  return (
    <>
      <div className="relative flex flex-col p-6 space-y-4 break-words bg-gh-gray rounded-xl">
        {loading && (
          <div className="flex flex-col space-y-2">
            <div className="absolute w-32 bg-gray-400 border rounded shadow h-14 animate-pulse right-8 top-8"></div>
            <div className="flex flex-col justify-between w-full">
              <div className="w-2/3 h-12 mb-4 bg-gray-400 rounded-xl animate-pulse"></div>
              <div className="w-1/3 h-6 mb-2 bg-gray-400 rounded-xl animate-pulse"></div>
              <div className="w-1/3 h-6 mb-4 bg-gray-400 rounded-xl animate-pulse"></div>
            </div>
            {new Array(5).fill(undefined).map((_value, i) => {
              return (
                <div key={i} className="flex flex-col justify-between w-full">
                  <div className="w-5/6 h-6 mb-4 bg-gray-400 rounded-xl animate-pulse"></div>
                  <div className="w-4/6 h-4 mb-2 bg-gray-400 rounded-xl animate-pulse"></div>
                  <div className="w-4/6 h-4 mb-2 bg-gray-400 rounded-xl animate-pulse"></div>
                  <div className="w-4/6 h-4 mb-2 bg-gray-400 rounded-xl animate-pulse"></div>
                  <div className="w-3/6 h-4 mb-2 bg-gray-400 rounded-xl animate-pulse"></div>
                  <div className="w-3/6 h-4 mb-2 bg-gray-400 rounded-xl animate-pulse"></div>
                </div>
              );
            })}
          </div>
        )}
        {error && <div>Oops, something went wrong.</div>}
        {data && !loading && !error && (
          <>
            {data?.company_logo && (
              <img
                className="absolute bg-white border rounded-lg h-14 border-gh-darkBlue top-10 right-6"
                src={data?.company_logo}
                alt={`${data?.company} logo`}
              />
            )}
            <div className="w-2/3 text-4xl font-bold">{data?.title}</div>
            <h1 className="text-xl font-bold">
              <a href={data?.company_url} target="_blank" rel="noopener noreferrer">
                {data?.company}
              </a>
            </h1>
            <div className="flex flex-row font-light text-gh-cyan">
              <div className="pr-2">{data?.location}</div>
              &#8729;
              <div className="pl-2">{data?.type}</div>
            </div>
            <div className="font-light text-gh-cyan">
              Added {dayjs(data?.created_at).toNow(true)} ago
            </div>
            <div className="space-y-4" dangerouslySetInnerHTML={{ __html: data?.description }} />
            <div
              className="text-gh-cyan"
              dangerouslySetInnerHTML={{ __html: data?.how_to_apply }}
            ></div>
          </>
        )}
      </div>
    </>
  );
  1;
};
1;
export default JobContainer;
