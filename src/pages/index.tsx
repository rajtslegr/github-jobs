import { NextPage } from 'next';
import React, { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';
import Job from '../components/Job';
import SearchButton from '../components/SearchButton';
import SearchInput from '../components/SearchInput';
import { IJob } from '../types/types';
import { fetcher } from './utils/fetcher';

const IndexPage: NextPage = () => {
  const [description, setDescription] = useState<string>();
  const [location, setLocation] = useState<string>();

  const { data, refetch, isLoading, isError } = useQuery<IJob[], Error>(
    'jobs',
    async ({ pageParam = 1 }) => {
      const url = '/api/jobs?page' + pageParam;

      const params = new URLSearchParams();

      description ? params.set('description', description.toString()) : null;
      location ? params.set('location', location.toString()) : null;

      return await fetcher(`${url}${params.toString()}`);
    },
    { enabled: false },
  );

  if (data && !isLoading && !isError) {
    console.log(data);
  }

  return (
    <div className="flex flex-col justify-center w-full space-y-4">
      <h1 className="text-5xl">GitHub Jobs</h1>
      <div className="flex flex-row py-12 space-x-6">
        <SearchInput
          placeholder="Description..."
          handleType={(e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault;
            setDescription(e.currentTarget.value);
          }}
        />
        <SearchInput
          placeholder="Location..."
          handleType={(e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault;
            setLocation(e.currentTarget.value);
          }}
        />
        <SearchButton handleClick={() => refetch()} type="button">
          Search
        </SearchButton>
      </div>
      <div className="space-y-4">
        {data?.map((job) => {
          return <Job key={job.id} {...job} />;
        })}
      </div>
    </div>
  );
};

export default IndexPage;
