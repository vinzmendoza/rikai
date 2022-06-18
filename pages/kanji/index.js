import NextLink from "next/link";

import PageLayout from "../../components/PageLayout";

const KanjiList = ({ data }) => {
  if (data.length === 0)
    return (
      <PageLayout>
        <p>No Data found</p>
      </PageLayout>
    );

  const sortedKanji = data.sort((a, b) => a.kanji.stroke - b.kanji.stroke);

  return (
    <PageLayout pageTitle="Search Result">
      <div className="mb-4">
        <h2 className="text-xl font-semibold ">Search Results</h2>
        <p className="text-sm italic text-neutral-400">
          Found {data.length.toString()} {data.length > 1 ? "matches" : "match"}
        </p>
      </div>

      <ul className="flex flex-row flex-wrap gap-3">
        {sortedKanji.map((item) => (
          <li
            key={item.kanji.character}
            className="p-2 transition duration-200 ease-in-out rounded cursor-pointer hover:bg-neutral-600 "
          >
            <NextLink href={`/kanji/${item.kanji.character}`} passHref>
              <a className="text-4xl font-light font-mplus1">
                {item.kanji.character}
              </a>
            </NextLink>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
};

export async function getServerSideProps({ query }) {
  let endpoint;

  endpoint = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced?${
    (query.kem !== undefined ? "kem=" + query.kem : "") +
    (query.kan !== undefined ? "&kanji=" + query.kan : "") +
    (query.on !== undefined ? "&on=" + query.on : "") +
    (query.kun !== undefined ? "&kun=" + query.kun : "") +
    (query.ks !== undefined ? "&ks=" + query.ks : "") +
    (query.rjn !== undefined ? "&rjn=" + query.rjn : "") +
    (query.rem !== undefined ? "&rem=" + query.rem : "") +
    (query.rs !== undefined ? "&rs=" + query.rs : "") +
    (query.rpos !== undefined ? "&rpos=" + query.rpos : "") +
    (query.grade !== undefined ? "&grade=" + query.grade : "")
  }`;

  const res = await fetch(endpoint, {
    headers: {
      "X-RapidAPI-Key": "41c214b525mshba86938013a3d37p13b71bjsn8f99d8629242",
    },
  });

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default KanjiList;
