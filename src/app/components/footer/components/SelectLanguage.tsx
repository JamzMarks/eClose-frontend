"use client";
import { Languages } from "lucide-react";
import { useState } from "react";

export const SelectLanguage = () => {
  const languages = ["Portuguese", "English", "Spanish"];
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLang(event.target.value);
  };
  return (
    <div className="text-gray-400 hover:text-white transition flex">
      <Languages aria-hidden="true" />
      <label htmlFor="language-select" className="sr-only">
        Select Language
      </label>
      <select
        name="language"
        id="language-select"
        className="outline-none flex"
        onChange={handleChange}
      >
        {" "}
        {languages &&
          languages.map((lang) => <option className="" key={lang} value={lang}>{lang}</option>)}
      </select>
    </div>
  );
};
