import { ReactElement } from 'react';

interface Props {
  children: ReactElement | ReactElement[];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <main className="flex-auto w-full">
        <div className="container px-4 py-6 mx-auto my-4 md:py-12 xl:w-4/6">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
