import http from 'http';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed. Use GET.' });
  }

  const phoneNumber = req.query.phoneNumber;
  if (!phoneNumber) {
    return res.status(400).json({ error: 'phoneNumber is required in query parameters.' });
  }

  let cleanedNumber = phoneNumber;
  if (cleanedNumber.startsWith('0')) {
    cleanedNumber = cleanedNumber.slice(1);
  }

  if (!/^[1-9][0-9]{9}$/.test(cleanedNumber)) {
    return res.status(400).json({
      error: 'Invalid phone number. Must be 10 digits, no leading 0 (e.g., 5551234567).',
    });
  }

  const apiUrl = http://67.220.85.157:6407/api/v1/sms?phone=${cleanedNumber}&amount=100;

  http.get(apiUrl, (apiRes) => {
    let data = '';

    apiRes.on('data', (chunk) => {
      data += chunk;
    });

    apiRes.on('end', () => {
      try {
        const parsed = JSON.parse(data);
        res.status(200).json({
          message: 'SMS request sent successfully.',
          phoneNumber: cleanedNumber,
          apiResponse: parsed,
        });
      } catch (err) {
        res.status(500).json({ error: 'Failed to parse API response.', details: err.message });
      }
    });
  }).on('error', (err) => {
    res.status(500).json({ error: 'External API request failed.', details: err.message });
  });
}

şunla değiş kodu
