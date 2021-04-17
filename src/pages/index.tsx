import { NextPage } from 'next';
import React, { ChangeEvent, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import Button from '../components/Button';
import JobCard from '../components/JobCard';
import LoadingIcon from '../components/LoadingIcon';
import SearchInput from '../components/SearchInput';
import { IJob } from '../types/types';
import { fetcher } from '../utils/fetcher';

const IndexPage: NextPage = () => {
  const [description, setDescription] = useState<string>();
  const [location, setLocation] = useState<string>();

  const {
    data,
    isLoading,
    isError,
    refetch,
    fetchNextPage,
    isFetchingNextPage,
    remove,
  } = useInfiniteQuery<{ data: IJob[]; nextPage: number }, Error>(
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

  const checkMore = (): boolean | undefined => {
    return (
      data &&
      data?.pages[data?.pages?.length - 1]?.data?.length > 0 &&
      data?.pages[data?.pages?.length - 1]?.data?.length % 50 === 0
    );
  };

  return (
    <div className="flex flex-col justify-center w-full space-y-6">
      <h1 className="text-5xl font-bold">GitHub Jobs</h1>
      <form
        className="flex flex-row py-12 space-x-6"
        onSubmit={(e) => {
          e.preventDefault();
          remove();
          refetch();
        }}
      >
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
        <Button
          // handleClick={() => {
          //   remove();
          //   refetch();
          // }}
          handleDisabled={!description && !location}
          type="submit"
        >
          Search
        </Button>
      </form>
      <div className="grid gap-12 2xl:grid-cols-3 lg:grid-cols-2">
        {data?.pages?.map((group, i) => (
          <React.Fragment key={i}>
            {group.data.map((job) => {
              return <JobCard key={job.id} {...job} />;
            })}
          </React.Fragment>
        ))}
      </div>
      {checkMore() && (
        <div className="self-end">
          <Button
            type="button"
            handleClick={() => fetchNextPage()}
            handleDisabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? <div className="w-5 h-5">{LoadingIcon}</div> : 'Load More'}
          </Button>
        </div>
      )}
      {isLoading && <div className="self-center w-10 h-10">{LoadingIcon}</div>}
      {isError && <div className="self-center w-10 h-10">Oops, something went wrong...</div>}
      {data?.pages[0].data.length === 0 && <div className="self-center">Nothing found...</div>}
    </div>
  );
};

export default IndexPage;
