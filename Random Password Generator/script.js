function generatePassword() {
    const length = document.getElementById('length').value;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;
    const excludeDuplicates = document.getElementById('excludeDuplicates').checked;
    const includeSpaces = document.getElementById('includeSpaces').checked;

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    const spaceChars = ' ';

    let allChars = '';
    if (includeLowercase) allChars += lowercaseChars;
    if (includeUppercase) allChars += uppercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;
    if (includeSpaces) allChars += spaceChars;

    if (!allChars) {
        document.getElementById('result').textContent = 'Please select at least one character type';
        return;
    }

    let password = '';
    const usedChars = new Set();

    while (password.length < length) {
        const char = allChars[Math.floor(Math.random() * allChars.length)];

        if (excludeDuplicates && usedChars.has(char)) continue;

        password += char;
        usedChars.add(char);
    }

    document.getElementById('result').textContent = password;
}
