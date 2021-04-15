import { NextPage } from 'next';
import React, { ChangeEvent, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import Job from '../components/Job';
import SearchButton from '../components/SearchButton';
import SearchInput from '../components/SearchInput';
import { IJob } from '../types/types';
import { fetcher } from './utils/fetcher';

const IndexPage: NextPage = () => {
  const [description, setDescription] = useState<string>();
  const [location, setLocation] = useState<string>();

  const { data, refetch, isLoading, isError, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<
    { data: IJob[]; nextPage: number },
    Error
  >(
    'jobs',
    async ({ pageParam = 1 }) => {
      const url = '/api/jobs?page=' + pageParam;

      const params = new URLSearchParams();

      description ? params.set('description', description.toString()) : null;
      location ? params.set('location', location.toString()) : null;

      return {
        data: await fetcher(
          `${url}${params.toString().length > 0 ? '&' : null}${params.toString()}`,
        ),
        nextPage: pageParam,
      };
    },
    { enabled: false, getNextPageParam: (lastPage) => lastPage.nextPage + 1 },
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
        {data?.pages?.map((group, i) => (
          <React.Fragment key={i}>
            {group.data.map((job) => {
              return <Job key={job.id} {...job} />;
            })}
          </React.Fragment>
        ))}
      </div>
      {data && data?.pages[data?.pages?.length - 1]?.data?.length % 50 === 0 && (
        <div className="self-end">
          <SearchButton
            type="button"
            handleClick={() => fetchNextPage()}
            handleDisabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Loading more...' : 'Load More'}
          </SearchButton>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
