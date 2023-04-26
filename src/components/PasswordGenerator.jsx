import React, { useState } from "react";
import { RxCopy } from "react-icons/rx";
import { useTranslation } from "react-i18next";

function PasswordGenerator(props) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [password, setPassword] = useState(`${t("Password")}`);
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [avoidDuplicates, setAvoidDuplicates] = useState(false);

  const handleGeneratePassword = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let availableChars = lowercaseChars;
    let generatedPassword = "";

    if (includeUpperCase) {
      availableChars += uppercaseChars;
    }

    if (includeNumbers) {
      availableChars += numberChars;
    }

    if (includeSpecialChars) {
      availableChars += specialChars;
    }

    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * availableChars.length);
      let randomChar = availableChars[randomIndex];

      if (avoidDuplicates && generatedPassword.includes(randomChar)) {
        i--;
        continue;
      }

      generatedPassword += randomChar;
    }

    setPassword(generatedPassword);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-black bg-opacity-30 backdrop-blur-[2px] text-white border-[#00eaff] border-b-[1px] border-r-2  w-80 max-w-[90%] shadow-lg shadow-inner shadow-teal-950">
      <div className="relative w-full px-2 py-3 flex flex-col">
        <div className="gradient-text absolute right-0  bottom-full flex">
          <button
            className=" w-8 h-8 flex justify-center items-center leading-9 text-xl m-2 "
            onClick={() => changeLanguage("en")}
          >
            <p>EN</p>
          </button>
          <button
            className=" w-8 h-8 flex justify-center items-center leading-9 text-xl m-2 "
            onClick={() => changeLanguage("ua")}
          >
            <p>UA</p>
          </button>
        </div>
        <h1 className="gradient-text uppercase flex justify-center text-2xl font-semibold	mb-3">
          {t("Title")}
        </h1>
        <label className="mt-1  gradient-text font-bold">
          {t("Length")}:<span className="ml-2 text-xl ">{passwordLength}</span>
          <input
            // className="block"
            type="range"
            min="8"
            max="32"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
          <span className="checkmark"></span>
        </label>

        <label className="mt-1 checkbox gradient-text font-bold">
          {t("Special")}:
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={(e) => setIncludeSpecialChars(e.target.checked)}
          />
          <span className="checkmark"></span>
        </label>
        <label className="mt-1 checkbox gradient-text font-bold">
          {t("Numbers")}:
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          <span className="checkmark"></span>
        </label>

        <label className="mt-1 checkbox gradient-text font-bold">
          {t("Uppercase")}:
          <input
            type="checkbox"
            checked={includeUpperCase}
            onChange={(e) => setIncludeUpperCase(e.target.checked)}
          />
          <span className="checkmark"></span>
        </label>

        <label className="mt-1 checkbox gradient-text font-bold">
          {t("Duplicates")}:
          <input
            type="checkbox"
            checked={avoidDuplicates}
            onChange={(e) => setAvoidDuplicates(e.target.checked)}
          />
          <span className="checkmark"></span>
        </label>

        <button
          className="my-2 p-1 rounded-xl border-[#00eaff] border-t-[1px] border-b-[1px] gradient-text"
          onClick={handleGeneratePassword}
        >
          <p>{t("Generate")}</p>
        </button>
        <div className="flex gradient-text">
          <p className=" text-sm justify-between w-full">{password}</p>
          <button className=" text-[#00eaff]" onClick={handleCopyPassword}>
            <RxCopy />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
