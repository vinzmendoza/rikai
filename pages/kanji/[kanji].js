import PageLayout from "../../components/PageLayout";
import NextImage from "next/image";
import { PlayIcon } from "@radix-ui/react-icons";

const KanjiInfo = ({ data }) => {
  console.log(data);

  if (data.error) return <PageLayout>No Data</PageLayout>;

  const togglePlay = (audioId) => {
    const audio = document.getElementById(audioId);

    audio.play();
  };

  return (
    <PageLayout>
      <div className="flex flex-col items-center mb-12 sm:flex-row sm:justify-start sm:gap-x-12">
        <h2 className="text-6xl sm:text-[10rem] mb-4">
          {data.kanji.character}
        </h2>
        <div className="flex flex-col">
          <p className="text-3xl italic">{data.kanji.meaning.english}</p>
          <p>
            <span className="mr-2 text-neutral-500">Strokes:</span>
            {data.kanji.strokes.count}{" "}
          </p>
          <p>
            <span className="mr-2 text-neutral-500">Onyomi:</span>
            {data.kanji.onyomi.katakana}
          </p>
          <p>
            <span className="mr-2 text-neutral-500">Kunyomi:</span>
            {data.kanji.kunyomi.hiragana}
          </p>
          <p>
            <span className="mr-2 text-neutral-500">Grade Taught:</span>
            {data.references.grade}
          </p>
        </div>
      </div>
      <div className="flex flex-col mb-8 sm:flex-row sm:gap-x-12">
        <div className="flex flex-col mb-8">
          <h3 className="mb-4 text-neutral-500">Examples</h3>
          <ul className="flex flex-col gap-y-6 gap-x-12 sm:grid sm:grid-cols-2 md:grid-cols-3">
            {data.examples.map((example, index) => (
              <li key={index} className="pb-2 border-b border-neutral-500">
                <div className="grid items-center grid-cols-5 ">
                  <p className="col-span-4">{example.japanese}</p>
                  <audio id={example.audio.mp3}>
                    <source src={example.audio.mp3} type="audio/mpeg" />
                  </audio>
                  <PlayIcon
                    onClick={() => togglePlay(example.audio.mp3)}
                    className="w-6 h-6 cursor-pointer justify-self-end hover:text-neutral-500"
                  />
                </div>
                <p className="italic text-neutral-400">
                  {example.meaning.english}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-y-4">
          <h3 className="text-neutral-500">Radical</h3>
          <div className="flex flex-row gap-x-4">
            <NextImage
              src={data.radical.image}
              alt="radical"
              height={64}
              width={64}
              className="invert"
            />
            <div className="">
              <p>{data.radical.name.hiragana}</p>
              <p className="italic">{data.radical.meaning.english}</p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4">
            <div className="flex flex-col gap-y-4">
              <h3 className=" text-neutral-500">Strokes</h3>
              <p>{data.radical.strokes}</p>
            </div>
            <div className="flex flex-col gap-y-4 ">
              <h3 className="text-neutral-500">Position</h3>
              {data.radical.position.icon ? (
                <div className="">
                  <NextImage
                    src={data.radical.position.icon}
                    alt="radical"
                    height={16}
                    width={16}
                    className="invert"
                  />
                </div>
              ) : (
                <p>N/A</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-4 gap-y-4">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-neutral-500">Video Demonstration</h3>
          <video width="200" height="200" className="rounded invert ">
            <source src={data.kanji.video.mp4} type="video/mp4" />
            <p>Your Browser does not support the video tag.</p>
          </video>
        </div>

        <div className="">
          <h3 className="mb-4 text-neutral-500">Stroke Order</h3>
          {data.kanji.strokes.images.map((step, index) => (
            <NextImage
              src={step}
              alt={`kanjiStroke-${index}`}
              key={index}
              height={48}
              width={48}
              className="invert"
            />
          ))}
        </div>
      </div>
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

  return {
    props: {
      data,
    },
  };
}

export default KanjiInfo;