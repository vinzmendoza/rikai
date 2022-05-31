import Search from "./Search";
import Navbar from "./Navbar";

const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-full sm:flex-row sm:gap-x-4">
      <div className="flex flex-col sm:items-end sm:basis-1/6 sm:ml-4">
        <div className="fixed justify-between h-full sm:flex sm:flex-col">
          <Search />
        </div>
      </div>
      <div className="flex flex-col w-full sm:mt-0 grow basis-5/6 sm:border-l sm:border-neutral-600">
        <Navbar />
        <div className="h-full px-6 py-6">{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
