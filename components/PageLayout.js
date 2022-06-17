import NextHead from "next/head";
import Search from "./Search";
import Navbar from "./Navbar";

const PageLayout = ({ children, pageTitle }) => {
  return (
    <div className="h-full">
      <NextHead>
        <title>{pageTitle} - Rikai</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </NextHead>
      <div className="flex flex-col min-h-full sm:flex-row sm:gap-x-4 sm:max-w-[96rem] sm:mx-auto">
        <div className="flex flex-col sm:items-end sm:basis-1/6 sm:ml-12">
          <div className="fixed justify-between h-full sm:flex sm:flex-col">
            <Search />
          </div>
        </div>
        <div className="flex flex-col w-full sm:mt-0 grow basis-5/6 sm:border-l sm:border-neutral-600">
          <Navbar />
          <div className="h-full px-6 py-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
