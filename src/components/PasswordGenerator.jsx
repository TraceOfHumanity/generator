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
    <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-black bg-opacity-30 backdrop-blur-[2px] text-white border-[#00eaff] border-b-[1px] border-r-2 p-2 w-80">
      <h1 className="gradient-text uppercase flex justify-center text-2xl font-semibold	mb-3">
        password generator
      </h1>
      <label style={{ "--i": "0" }} className="gradient-text font-bold">
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
      </label>

      <label className="gradient-text font-bold">
        Special Characters:
        <input
          type="checkbox"
          checked={includeSpecialChars}
          onChange={(e) => setIncludeSpecialChars(e.target.checked)}
        />
      </label>
      <label className="gradient-text font-bold">
        Numbers:
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
      </label>

      <label className="gradient-text font-bold">
        Uppercase:
        <input
          type="checkbox"
          checked={includeUpperCase}
          onChange={(e) => setIncludeUpperCase(e.target.checked)}
        />
      </label>

      <label className="gradient-text font-bold">
        Avoid Duplicates:
        <input
          type="checkbox"
          checked={avoidDuplicates}
          onChange={(e) => setAvoidDuplicates(e.target.checked)}
        />
      </label>

      <button className="btn " onClick={handleGeneratePassword}>
        <p>Generate Password</p>
      </button>
      <div className="flex ">
        <p className="gradient-text justify-between w-full">{password}</p>
        <button onClick={handleCopyPassword}>
          <RxCopy />
        </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
