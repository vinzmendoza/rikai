import NextLink from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 px-6 py-4 bg-neutral-900">
      <div className="flex flex-row items-center justify-between ">
        <div className="flex flex-row items-baseline">
          <NextLink asChild href="/">
            <h2 className="text-2xl font-bold uppercase transition duration-200 ease-in-out cursor-pointer hover:text-neutral-400">
              Rikai{" "}
            </h2>
          </NextLink>
        </div>
        <div className="flex flex-row space-x-4">
          <NextLink asChild href="/">
            <a className="transition duration-200 ease-in-out hover:text-neutral-400">
              Home
            </a>
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
