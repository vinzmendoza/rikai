import PageLayout from "../components/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <div className="flex flex-col w-full my-12 sm:my-16">
        <div className="flex flex-col max-w-md flex-start gap-y-16">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-3xl font-bold">
              Combine search terms to narrow down results
            </h2>
            <p className="text-xl text-neutral-300">
              For starters, you can find kanji by their english meaning, or type
              the kanji character you came across with. Alternatively you can
              search using two or more combination of search terms to find kanji
              that is in common with the filter.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <h2 className="text-3xl font-bold ">Powered by KanjiAlive API</h2>
            <p className="text-xl text-neutral-300">
              Rikai is an unofficial web-application for KanjiAlive that uses
              the KanjiAlive&apos;s public API that has 1235 kanji currently
              available. You can find more information about KanjiAlive API and
              the web application by clicking{" "}
              <a
                href="https://app.kanjialive.com/search"
                className="text-blue-500 hover:underline"
              >
                here
              </a>{" "}
              and{" "}
              <a
                href="https://app.kanjialive.com/api/docs"
                className="text-blue-500 hover:underline"
              >
                here
              </a>{" "}
              respectively.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
