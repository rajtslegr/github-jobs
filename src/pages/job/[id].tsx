import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import Button from '../../components/Button';
import JobContainer from '../../components/JobContainer';
import { IJob } from '../../types/types';
import { fetcher } from '../../utils/fetcher';

interface Props {
  id: string;
}

const Job: NextPage<Props> = ({ id }) => {
  const { data, isLoading, isError } = useQuery<IJob, Error>(
    'job',
    async () => {
      const url = `/api/job?id=${id}`;

      return await fetcher(url);
    },
    { refetchOnWindowFocus: false },
  );

  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <JobContainer data={data} loading={isLoading} error={isError} />
      <div className="flex flex-row justify-end pt-6">
        <Button
          type="button"
          handleClick={() => {
            Router.back();
          }}
        >
          Back
        </Button>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;

  return {
    props: { id },
  };
};

export default Job;
