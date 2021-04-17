import { NextPage } from 'next';
import Router, { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Button from '../../components/Button';
import JobContainer from '../../components/JobContainer';
import { fetcher } from '../../utils/fetcher';

const Job: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  const { data /*, isLoading, isError */ } = useQuery(
    'job',
    async () => {
      const url = `/api/job?id=${id}`;

      return await fetcher(url);
    },
    { refetchOnWindowFocus: false },
  );

  return (
    <>
      <JobContainer {...data} />
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

export default Job;
