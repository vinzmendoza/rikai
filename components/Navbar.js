import NextLink from "next/link";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 px-6 py-4 backdrop-blur-lg">
      <div className="flex flex-row items-center justify-between ">
        <div className="flex flex-row items-baseline">
          <h2 className="text-2xl">Rikai </h2>
        </div>
        <div className="flex flex-row space-x-4">
          <NextLink asChild href="/">
            <a>Home</a>
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
