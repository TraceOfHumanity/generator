import React, { useState } from "react";
import { RxCopy } from "react-icons/rx";

function PasswordGenerator() {
  const [password, setPassword] = useState("Your password");
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
    <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-black bg-opacity-30 backdrop-blur-[2px] text-white border-[#00eaff] border-b-[1px] border-r-2 p-2 w-80 max-w-[90%] ">
      <h1 className="gradient-text uppercase flex justify-center text-2xl font-semibold	mb-3">
        password generator
      </h1>
      <label className=" gradient-text font-bold">
        Password Length:
        <span className="ml-2 text-xl ">{passwordLength}</span>
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

      <label className="checkbox gradient-text font-bold">
        Special Characters:
        <input
          type="checkbox"
          checked={includeSpecialChars}
          onChange={(e) => setIncludeSpecialChars(e.target.checked)}
        />
        <span className="checkmark"></span>
      </label>
      <label className="checkbox gradient-text font-bold">
        Numbers:
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
        <span className="checkmark"></span>
      </label>

      <label className="checkbox gradient-text font-bold">
        Uppercase:
        <input
          type="checkbox"
          checked={includeUpperCase}
          onChange={(e) => setIncludeUpperCase(e.target.checked)}
        />
        <span className="checkmark"></span>
      </label>

      <label className="checkbox gradient-text font-bold">
        Avoid Duplicates:
        <input
          type="checkbox"
          checked={avoidDuplicates}
          onChange={(e) => setAvoidDuplicates(e.target.checked)}
        />
        <span className="checkmark"></span>
      </label>
      {/* <label className="checkbox">
        <input type="checkbox" />
        <span className="checkmark"></span>
        Label Text
      </label> */}

      <button className="btn gradient-text" onClick={handleGeneratePassword}>
        <p>Generate Password</p>
      </button>
      <div className="flex gradient-text">
        <p className=" text-sm justify-between w-full">{password}</p>
        <button className="text-[#00eaff]" onClick={handleCopyPassword}>
          <RxCopy />
        </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
