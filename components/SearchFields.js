import Label from "./Label";

const SearchFields = ({ register }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col">
        <Label htmlFor="englishMeaning" style="text-sm text-neutral-400 mb-2">
          English Meaning
        </Label>
        <input
          type="text"
          {...register("englishMeaning")}
          id="englishMeaning"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <Label htmlFor="kanji" style="text-sm text-neutral-400 mb-2">
          Kanji
        </Label>
        <input
          type="text"
          {...register("kanji")}
          id="kanji"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <Label htmlFor="onyomi" style="text-sm text-neutral-400 mb-2">
          Onyomi
        </Label>
        <input
          {...register("onyomi")}
          type="text"
          id="onyomi"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <Label htmlFor="kunyomi" style="text-sm text-neutral-400 mb-2">
          Kunyomi
        </Label>
        <input
          type="text"
          {...register("kunyomi")}
          id="kunyomi"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <Label htmlFor="kanjiStrokeNo" style="text-sm text-neutral-400 mb-2">
          Kanji Stroke #
        </Label>
        <input
          type="text"
          {...register("kanjiStrokeNo")}
          id="kanjiStrokeNo"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <Label htmlFor="radicalJpName" style="text-sm text-neutral-400 mb-2">
          Radical Japanese Name
        </Label>
        <input
          type="text"
          {...register("radicalJpName")}
          id="radicalJpName"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <Label htmlFor="radicalEnMeaning" style="text-sm text-neutral-400 mb-2">
          Radical English Meaning
        </Label>
        <input
          type="text"
          {...register("radicalEnMeaning")}
          id="radicalEnMeaning"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <Label htmlFor="radicalStrokeNo" style="text-sm text-neutral-400 mb-2">
          Radical Stroke Number
        </Label>
        <input
          type="text"
          {...register("radicalStrokeNo")}
          id="radicalStrokeNo"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <Label htmlFor="radicalPosition" style="text-sm text-neutral-400 mb-2">
          Radical Position
        </Label>
        <input
          type="text"
          {...register("radicalPosition")}
          id="radicalPosition"
          className="w-full px-2 py-1 border rounded appearance-none border-neutral-600 bg-neutral-800 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <Label htmlFor="gradeLevel" style="text-sm text-neutral-400 mb-2">
          Grade Level
        </Label>
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
