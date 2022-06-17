import NextImage from "next/image";
import { PlayIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";

import PageLayout from "../../components/PageLayout";
import VideoPlayer from "../../components/VideoPlayer";
import Steps from "../../components/VideoPlayer/Steps";

const KanjiInfo = ({ data }) => {
  const router = useRouter();

  if (data.error) return <PageLayout>No Data</PageLayout>;

  const playAudio = (audioId) => {
    const audio = document.getElementById(audioId);

    audio.play();
  };

  console.log(data);

  return (
    <PageLayout pageTitle={data.kanji.character}>
      <div className="mb-16">
        <button
          className="flex flex-row items-center hover:text-neutral-400"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon className="w-6 h-6 mr-2" /> Back
        </button>
      </div>
      <div className="flex flex-col items-center mb-12 sm:flex-row sm:justify-start sm:gap-x-12">
        <h2 className="text-6xl sm:text-[10rem] mb-4 font-mplus1 font-thin">
          {data.kanji.character}
        </h2>
        <div className="flex flex-col">
          <p className="text-3xl italic text-center sm:text-left">
            {data.kanji.meaning.english}
          </p>
          <p>
            <span className="mr-2 text-lg font-semibold text-neutral-500">
              Strokes:
            </span>
            {data.kanji.strokes.count}{" "}
          </p>
          <p>
            <span className="mr-2 text-lg font-semibold text-neutral-500">
              Onyomi:
            </span>
            <span className=" font-mplus1">{data.kanji.onyomi.katakana}</span>
          </p>
          <p>
            <span className="mr-2 text-lg font-semibold text-neutral-500">
              Kunyomi:
            </span>
            <span className=" font-mplus1">{data.kanji.kunyomi.hiragana}</span>
          </p>
          <p>
            <span className="mr-2 text-lg font-semibold text-neutral-500">
              Grade Taught:
            </span>
            {data.references.grade}
          </p>
        </div>
      </div>

      <div className="flex flex-col mb-16 sm:flex-row sm:items-start sm:gap-x-12 gap-y-4">
        <div className="flex flex-col mb-16 gap-y-4 sm:mb-0">
          <h3 className="text-lg font-semibold text-neutral-500">Radical</h3>
          <div className="flex flex-row gap-x-4">
            <NextImage
              src={data.radical.image}
              alt="radical"
              height={64}
              width={64}
              className="invert"
            />
            <div className="">
              <p className="font-mplus1 ">{data.radical.name.hiragana}</p>
              <p className="italic">{data.radical.meaning.english}</p>
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <h3 className="text-lg font-semibold text-neutral-500">Strokes</h3>
            <p>{data.radical.strokes}</p>
          </div>
          <div className="flex flex-col gap-y-4 ">
            <h3 className="text-lg font-semibold text-neutral-500">Position</h3>
            {data.radical.position.icon ? (
              <div className="flex flex-row items-center gap-x-4">
                <NextImage
                  src={data.radical.position.icon}
                  alt="radical"
                  height={16}
                  width={16}
                  className="invert"
                />
                <div className="flex flex-col ">
                  <p className="font-mplus1">
                    {data.radical.position.hiragana}
                  </p>
                  <p className="">{data.radical.position.romaji}</p>
                </div>
              </div>
            ) : (
              <p>N/A</p>
            )}
          </div>
        </div>

        <VideoPlayer
          videoUrl={data.kanji.video.mp4}
          strokes={data.kanji.strokes}
        />
        <div className="flex flex-col">
          <h3 className="mb-4 text-lg font-semibold text-neutral-500">
            Stroke Order
          </h3>
          <Steps strokes={data.kanji.strokes} />
        </div>
      </div>

      <div className="flex flex-col mb-8 sm:flex-row sm:gap-x-12">
        <div className="flex flex-col mb-8">
          <h3 className="mb-4 text-lg font-semibold text-neutral-500">
            Examples
          </h3>
          <ul className="flex flex-col gap-y-6 gap-x-12 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.examples.map((example, index) => (
              <li key={index} className="pb-2 border-b border-neutral-500">
                <div className="grid items-center grid-cols-5 ">
                  <p className="col-span-4 text-lg font-light font-mplus1">
                    {example.japanese}
                  </p>
                  <audio id={example.audio.mp3}>
                    <source src={example.audio.mp3} type="audio/mpeg" />
                  </audio>
                  <PlayIcon
                    onClick={() => playAudio(example.audio.mp3)}
                    className="w-6 h-6 cursor-pointer justify-self-end hover:text-neutral-500"
                  />
                </div>
                <p className="italic text-neutral-500">
                  {example.meaning.english}
                </p>
              </li>
            ))}
          </ul>
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
