import { ReactElement } from 'react';

interface Props {
  children: ReactElement | ReactElement[];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen text-white bg-gh-darkBlue font-mont">
      <main className="flex-auto w-full">
        <div className="absolute left-0 right-0 z-0 w-full mx-auto sm:h-64 h-60 bg-gh-violet xl:rounded-b-full"></div>
        <div className="container relative px-4 py-6 mx-auto my-4 md:py-12 xl:w-4/6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
