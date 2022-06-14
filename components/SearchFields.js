import Label from "./Label";
import Tooltip from "./Tooltip";

const SearchFields = ({ register }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <Label htmlFor="englishMeaning" style="text-sm text-neutral-400 mb-2">
            English Meaning
          </Label>
          <Tooltip>
            English meaning of the kanji
            <br />
            ex. <span className="font-bold">house</span>{" "}
          </Tooltip>
        </div>

        <input
          type="text"
          {...register("englishMeaning")}
          id="englishMeaning"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <Label htmlFor="kanji" style="text-sm text-neutral-400 mb-2">
            Kanji
          </Label>
          <Tooltip>
            Kanji character <br />
            ex. <span className="font-bold">屋</span>{" "}
          </Tooltip>
        </div>
        <input
          type="text"
          {...register("kanji")}
          id="kanji"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <Label htmlFor="onyomi" style="text-sm text-neutral-400 mb-2">
            Onyomi
          </Label>
          <Tooltip>
            Onyomi in katakana or romaji
            <br />
            ex. <span className="font-bold">オク</span> or{" "}
            <span className="font-bold">oku</span>
          </Tooltip>
        </div>
        <input
          {...register("onyomi")}
          type="text"
          id="onyomi"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <Label htmlFor="kunyomi" style="text-sm text-neutral-400 mb-2">
            Kunyomi
          </Label>
          <Tooltip>
            Kunyomi in hiragana or romaji
            <br />
            ex. <span className="font-bold">や</span> or{" "}
            <span className="font-bold">ya</span>
          </Tooltip>
        </div>
        <input
          type="text"
          {...register("kunyomi")}
          id="kunyomi"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <Label htmlFor="kanjiStrokeNo" style="text-sm text-neutral-400 mb-2">
            Kanji Stroke Number
          </Label>
          <Tooltip>
            Total number of strokes of the kanji
            <br />
            ex. <span className="font-bold">3</span>{" "}
          </Tooltip>
        </div>

        <input
          type="text"
          {...register("kanjiStrokeNo")}
          id="kanjiStrokeNo"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <Label htmlFor="radicalJpName" style="text-sm text-neutral-400 mb-2">
            Radical Japanese Name
          </Label>
          <Tooltip>
            Radical in hiragana or romaji <br />
            ex. <span className="font-bold">しかばね</span> or
            <span className="font-bold"> shikabane</span>
          </Tooltip>
        </div>
        <input
          type="text"
          {...register("radicalJpName")}
          id="radicalJpName"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <Label
            htmlFor="radicalEnMeaning"
            style="text-sm text-neutral-400 mb-2"
          >
            Radical English Meaning
          </Label>
          <Tooltip>
            English meaning of the radical
            <br />
            ex. <span className="font-bold">awning</span>
          </Tooltip>
        </div>
        <input
          type="text"
          {...register("radicalEnMeaning")}
          id="radicalEnMeaning"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <Label
            htmlFor="radicalStrokeNo"
            style="text-sm text-neutral-400 mb-2"
          >
            Radical Stroke Number
          </Label>
          <Tooltip>
            Total number strokes of the radical
            <br />
            ex. <span className="font-bold">3</span>{" "}
          </Tooltip>
        </div>
        <input
          type="text"
          {...register("radicalStrokeNo")}
          id="radicalStrokeNo"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <Label
            htmlFor="radicalPosition"
            style="text-sm text-neutral-400 mb-2"
          >
            Radical Position
          </Label>
          <Tooltip>
            Radical position in hiragana or romaji
            <br />
            ex. <span className="font-bold">たれ</span> or{" "}
            <span className="font-bold">tare</span>
          </Tooltip>
        </div>
        <input
          type="text"
          {...register("radicalPosition")}
          id="radicalPosition"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <Label htmlFor="gradeLevel" style="text-sm text-neutral-400 mb-2">
            Grade Level
          </Label>
          <Tooltip>
            Grade level when the kanji is taught <br />
            ex. <span className="font-bold">3</span>{" "}
          </Tooltip>
        </div>
        <input
          type="text"
          {...register("gradeLevel")}
          id="gradeLevel"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>
    </div>
  );
};

export default SearchFields;
