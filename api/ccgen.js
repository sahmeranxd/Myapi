function luhnCheckDigit(number) {
  let sum = 0;
  let shouldDouble = true;
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number[i]);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return (10 - (sum % 10)) % 10;
}

function generateCard(prefix = '4', length = 16) {
  let number = prefix;
  while (number.length < length - 1) {
    number += Math.floor(Math.random() * 10);
  }
  const checkDigit = luhnCheckDigit(number);
  return number + checkDigit;
}

function generateExpiry() {
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const year = String(Math.floor(Math.random() * 10) + 23); // 2023-2032 arası
  return `${month}|${year}`;
}

function generateCVV() {
  return String(Math.floor(Math.random() * 900) + 100); // 100-999 arası
}

export default function handler(req, res) {
  const card = generateCard();
  const expiry = generateExpiry();
  const cvv = generateCVV();
  res.status(200).json({ card, expiry, cvv, full: `${card}|${expiry}|${cvv}` });
                                 }
