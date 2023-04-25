import React, { useState } from 'react';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [avoidDuplicates, setAvoidDuplicates] = useState(false);

  const handleGeneratePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let availableChars = lowercaseChars;
    let generatedPassword = '';

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
    <div>
      <label>
        Password Length:
        <input
          type="range"
          min="8"
          max="32"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
        <span>{passwordLength}</span>
      </label>
      <br />
      <label>
        Include Special Characters:
        <input
          type="checkbox"
          checked={includeSpecialChars}
          onChange={(e) => setIncludeSpecialChars(e.target.checked)}
        />
      </label>
      <br />
      <label>
        Include Numbers:
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
      </label>
      <br />
      <label>
        Include Uppercase:
        <input
          type="checkbox"
          checked={includeUpperCase}
          onChange={(e) => setIncludeUpperCase(e.target.checked)}
        />
      </label>
      <br />
      <label>
        Avoid Duplicates:
        <input
          type="checkbox"
          checked={avoidDuplicates}
          onChange={(e) => setAvoidDuplicates(e.target.checked)}
        />
      </label>
      <br />
      <button onClick={handleGeneratePassword}>Generate Password</button>
      <p>{password}</p>
      <button onClick={handleCopyPassword}>Copy Password</button>
    </div>
  );
}

export default PasswordGenerator;
