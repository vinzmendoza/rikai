import { useContext, useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState();
  const [pathname, setPathName] = useState();
  const [loading, setLoading] = useState(true);

  const val = router.query;
  const pathnameVal = router.pathname;

  useEffect(() => {
    setSearchValue(val);
    setPathName(pathnameVal);
    setLoading(false);
  }, [val, loading, pathnameVal]);

  const value = {
    searchValue,
    pathname,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
