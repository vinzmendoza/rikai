import PageLayout from "../../components/PageLayout";
import NextImage from "next/image";

const KanjiInfo = ({ data }) => {
  console.log(data);
  if (data.error) return <PageLayout>No Data</PageLayout>;

  return (
    <PageLayout>
      <h2 className="text-8xl font-m-plus">{data.kanji.character}</h2>
      <NextImage
        src={data.radical.image}
        alt="radical"
        width={64}
        height={94}
        className="invert"
      />
    </PageLayout>
  );
};

export async function getServerSideProps({ params }) {
  const endpoint = "https://kanjialive-api.p.rapidapi.com/api/public/kanji/";
  const res = await fetch(endpoint + params.kanji, {
    headers: {
      "X-RapidAPI-Key": "41c214b525mshba86938013a3d37p13b71bjsn8f99d8629242",
    },
  });

  const data = await res.json();

  console.log(data);

  return {
    props: {
      data,
    },
  };
}

export default KanjiInfo;
