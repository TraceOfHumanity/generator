import { useState } from 'react';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeDigits, setIncludeDigits] = useState(true);
  const [includeLetters, setIncludeLetters] = useState(true);
  const [includeUppercaseLetters, setIncludeUppercaseLetters] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [includeDuplicateChars, setIncludeDuplicateChars] = useState(true);

  function handlePasswordLengthChange(event) {
    setPasswordLength(event.target.value);
  }

  function handleIncludeDigitsChange(event) {
    setIncludeDigits(event.target.checked);
  }

  function handleIncludeLettersChange(event) {
    setIncludeLetters(event.target.checked);
  }

  function handleIncludeUppercaseLettersChange(event) {
    setIncludeUppercaseLetters(event.target.checked);
  }

  function handleIncludeSpecialCharsChange(event) {
    setIncludeSpecialChars(event.target.checked);
  }

  function handleIncludeDuplicateCharsChange(event) {
    setIncludeDuplicateChars(event.target.checked);
  }

  function generatePassword() {
    const length = passwordLength;
    let charset = '';
    if (includeDigits) {
      charset += '0123456789';
    }
    if (includeLetters) {
      charset += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeUppercaseLetters) {
      charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeSpecialChars) {
      charset += '!@#$%^&*()_+-={}[]|;:"<>,.?/~`';
    }
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      let newChar = '';
      do {
        newChar = charset.charAt(Math.floor(Math.random() * charset.length));
      } while (!includeDuplicateChars && newPassword.includes(newChar));
      newPassword += newChar;
    }
    setPassword(newPassword);
  }

  return (
    <div>
      <label>
        Password length:
        <input
          type="range"
          min="8"
          max="32"
          value={passwordLength}
          onChange={handlePasswordLengthChange}
        />
        {passwordLength}
      </label>
      <br />
      <label>
        Include digits:
        <input
          type="checkbox"
          checked={includeDigits}
          onChange={handleIncludeDigitsChange}
        />
      </label>
      <br />
      <label>
        Include letters:
        <input
          type="checkbox"
          checked={includeLetters}
          onChange={handleIncludeLettersChange}
        />
      </label>
      <br />
      <label>
        Include uppercase letters:
        <input
          type="checkbox"
          checked={includeUppercaseLetters}
          onChange={handleIncludeUppercaseLettersChange}
        />
      </label>
      <br />
      <label>
        Include special characters:
        <input
          type="checkbox"
          checked={includeSpecialChars}
          onChange={handleIncludeSpecialCharsChange}
        />
      </label>
      <br />
      <label>
        Include duplicate characters:
        <input
          type="checkbox"
          checked={includeDuplicateChars}
          onChange={handleIncludeDuplicateCharsChange}
        />
      </label>
      <br />
      <button onClick={generatePassword}>Generate Password</button>
      <br />
      <input type="text" value={password} readOnly />
    </div>
  );
}


export default PasswordGenerator;
