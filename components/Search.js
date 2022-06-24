import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

import SearchFields from "./SearchFields";
import ScrollArea from "./ScrollArea";
import { useSearch } from "../utils/context/SearchContext";

const Search = () => {
  const { searchValue, pathname } = useSearch();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      englishMeaning: "",
      kanji: "",
      onyomi: "",
      kunyomi: "",
      kanjiStrokeNo: "",
      radicalJpName: "",
      radicalEnMeaning: "",
      radicalStrokeNo: "",
      radicalPosition: "",
      gradeLevel: "",
    },
  });

  useEffect(() => {
    if (pathname !== "/kanji") reset();
    if (!searchValue) return;
    if (Object.keys(searchValue).length === 0) return;

    if ("kem" in searchValue) setValue("englishMeaning", searchValue.kem);
    if ("kan" in searchValue) setValue("kanji", searchValue.kan);
    if ("on" in searchValue) setValue("onyomi", searchValue.on);
    if ("kun" in searchValue) setValue("kunyomi", searchValue.kun);
    if ("ks" in searchValue) setValue("kanjiStrokeNo", searchValue.ks);
    if ("rjn" in searchValue) setValue("radicalJpName", searchValue.rjn);
    if ("rem" in searchValue) setValue("radicalEnMeaning", searchValue.rem);
    if ("rs" in searchValue) setValue("radicalStrokeNo", searchValue.rs);
    if ("rpos" in searchValue) setValue("radicalPosition", searchValue.rpos);
    if ("grade" in searchValue) setValue("gradeLevel", searchValue.grade);
  }, [searchValue, setValue, pathname, reset]);

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const onSearch = (data, e) => {
    const objValues = Object.values(data).every((value) => value === "");
    if (objValues) return;

    const firstQueryParam = Object.entries(data).filter(
      (item) => item[1] !== ""
    )[0][0];

    router.push(
      `/kanji?${
        (data.englishMeaning
          ? Object.keys(data)[0] === firstQueryParam
            ? "kem=" + data.englishMeaning.toLowerCase()
            : "&kem=" + data.englishMeaning.toLowerCase()
          : "") +
        (data.kanji
          ? Object.keys(data)[1] === firstQueryParam
            ? "kan=" + data.kanji.toLowerCase()
            : "&kan=" + data.kanji.toLowerCase()
          : "") +
        (data.onyomi
          ? Object.keys(data)[2] === firstQueryParam
            ? "on=" + data.onyomi.toLowerCase()
            : "&on=" + data.onyomi.toLowerCase()
          : "") +
        (data.kunyomi
          ? Object.keys(data)[3] === firstQueryParam
            ? "kun=" + data.kunyomi.toLowerCase()
            : "&kun=" + data.kunyomi.toLowerCase()
          : "") +
        (data.kanjiStrokeNo
          ? Object.keys(data)[4] === firstQueryParam
            ? "ks=" + data.kanjiStrokeNo.toLowerCase()
            : "&ks=" + data.kanjiStrokeNo.toLowerCase()
          : "") +
        (data.radicalJpName
          ? Object.keys(data)[5] === firstQueryParam
            ? "rjn=" + data.radicalJpName.toLowerCase()
            : "&rjn=" + data.radicalJpName.toLowerCase()
          : "") +
        (data.radicalEnMeaning
          ? Object.keys(data)[6] === firstQueryParam
            ? "rem=" + data.radicalEnMeaning.toLowerCase()
            : "&rem=" + data.radicalEnMeaning.toLowerCase()
          : "") +
        (data.radicalStrokeNo
          ? Object.keys(data)[7] === firstQueryParam
            ? "rs=" + data.radicalStrokeNo.toLowerCase()
            : "&rs=" + data.radicalStrokeNo.toLowerCase()
          : "") +
        (data.radicalPosition
          ? Object.keys(data)[8] === firstQueryParam
            ? "rpos=" + data.radicalPosition.toLowerCase()
            : "&rpos=" + data.radicalPosition.toLowerCase()
          : "") +
        (data.gradeLevel
          ? Object.keys(data)[9] === firstQueryParam
            ? "grade=" + data.gradeLevel.toLowerCase()
            : "&grade=" + data.gradeLevel.toLowerCase()
          : "")
      }`
    );

    setIsOpen(false);
  };

  return (
    <form className="h-full">
      <div className="hidden h-full py-4 pl-5 justify-evenly sm:flex sm:flex-col">
        <h2 className="sm:mb-6 sm:text-xl">Search</h2>
        <ScrollArea>
          <SearchFields register={register} />
        </ScrollArea>

        <div className="flex flex-row justify-between mr-4 gap-x-2">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full px-3 py-2 font-bold transition duration-200 ease-in-out bg-orange-500 rounded hover:bg-orange-600"
          >
            Reset
          </button>
          <button
            type="submit"
            onClick={handleSubmit(onSearch)}
            className="w-full px-3 py-2 font-bold transition duration-200 ease-in-out bg-blue-500 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </div>

      <DialogPrimitive.Root
        open={isOpen}
        onOpenChange={() => setIsOpen(!isOpen)}
      >
        <DialogPrimitive.Trigger asChild>
          <button className="fixed bottom-0 right-0 p-2 mb-4 mr-4 transition duration-200 ease-in-out bg-blue-500 rounded hover:bg-blue-600 sm:hidden">
            <span className="flex flex-row items-center justify-center font-bold gap-x-2">
              <MagnifyingGlassIcon className="w-5 h-5" />
              Search
            </span>
          </button>
        </DialogPrimitive.Trigger>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 bg-neutral-900/75 sm:hidden z-[60]" />
          <DialogPrimitive.Content className="fixed bottom-0 flex flex-col justify-between w-full p-4 rounded h-3/4 bg-neutral-800 animate-slide-up sm:hidden z-[70]">
            <DialogPrimitive.Title className="text-xl font-bold">
              Search
            </DialogPrimitive.Title>
            <DialogPrimitive.Description></DialogPrimitive.Description>
            <DialogPrimitive.Close asChild>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 cursor-pointer top-3 right-3">
                <Cross2Icon />
              </div>
            </DialogPrimitive.Close>
            <ScrollArea>
              <SearchFields register={register} />
            </ScrollArea>
            <div className="flex flex-row mr-4 justify-evenly gap-x-2">
              <button
                type="button"
                onClick={() => reset()}
                className="w-full px-3 py-2 font-bold transition duration-200 ease-in-out bg-orange-500 rounded hover:bg-orange-600"
              >
                Reset
              </button>
              <DialogPrimitive.Close asChild>
                <button
                  type="submit"
                  onClick={handleSubmit(onSearch)}
                  className="flex justify-center w-full p-2 font-bold transition duration-200 ease-in-out bg-blue-500 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </DialogPrimitive.Close>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </form>
  );
};

export default Search;
