import { useState } from 'react';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(10);
  const [includeDigits, setIncludeDigits] = useState(true);
  const [includeLetters, setIncludeLetters] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [includeUppercaseLetters, setIncludeUppercaseLetters] = useState(false);

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
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  }

  function handlePasswordLengthChange(event) {
    setPasswordLength(event.target.value);
  }

  function handleIncludeDigitsChange(event) {
    setIncludeDigits(event.target.checked);
  }

  function handleIncludeLettersChange(event) {
    setIncludeLetters(event.target.checked);
  }

  function handleIncludeSpecialCharsChange(event) {
    setIncludeSpecialChars(event.target.checked);
  }

  function handleIncludeUppercaseLettersChange(event) {
    setIncludeUppercaseLetters(event.target.checked);
  }

  return (
    <div>
      <p>Your password is: {password}</p>
      <label>
        Password length:
        <input
          type="range"
          min="6"
          max="20"
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
        Include lowercase letters:
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
      <button onClick={generatePassword}>Generate Password</button>
    </div>
  );
}

export default PasswordGenerator;
