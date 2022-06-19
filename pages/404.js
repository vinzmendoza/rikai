import NextLink from "next/link";
import PageLayout from "../components/PageLayout";

export default function Error404() {
  return (
    <PageLayout pageTitle="404 Error">
      <div className="flex flex-row items-center justify-center h-full gap-x-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-5xl ">404</p>
          <p className="text-sm ">Not Found</p>
        </div>
        <div className="flex flex-col items-start justify-center my-1/2 gap-y-8">
          <div className="">
            <p className="text-2xl font-bold ">Oops,</p>
            <p className="text-2xl font-bold ">
              We can&apos;t seem to find <br /> the page you&apos;re looking
              for.
            </p>
          </div>

          <div className="items-start">
            <NextLink asChild href="/">
              <a className="px-4 py-1 text-sm font-bold transition duration-200 ease-in-out bg-teal-600 rounded cursor-pointer gap-x-2 hover:bg-teal-700">
                Return home
              </a>
            </NextLink>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
