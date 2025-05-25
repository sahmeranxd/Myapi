export default async function handler(req, res) {
  try {
    // Validate request method
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed. Use GET.' });
    }

    // Get phoneNumber from query parameters
    const phoneNumber = req.query.phoneNumber;
    if (!phoneNumber) {
      return res.status(400).json({ error: 'phoneNumber is required in query parameters.' });
    }

    // Clean phoneNumber: Remove leading "0"
    let cleanedNumber = phoneNumber;
    if (cleanedNumber.startsWith('0')) {
      cleanedNumber = cleanedNumber.slice(1); // e.g., "05551234567" -> "5551234567"
    }

    // Validate number format: 10 digits, no leading 0
    if (!/^[1-9][0-9]{9}$/.test(cleanedNumber)) {
      return res.status(400).json({
        error: 'Invalid phone number. Must be 10 digits, no leading 0 (e.g., 5551234567).',
      });
    }

    // Send request to external API
    const response = await fetch(http://67.220.85.157:6407/api/v1/sms?phone=${cleanedNumber}&amount=5, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(External API request failed with status ${response.status});
    }

    const data = await response.json();

    // Return success response
    return res.status(200).json({
      message: 'SMS request sent successfully.',
      phoneNumber: cleanedNumber,
      apiResponse: data,
    });
  } catch (error) {
    // Log error for debugging
    console.error('Error in SMS bomber handler:', error.message, error.stack);

    // Return error response
    return res.status(500).json({
      error: 'Internal server error. Please try again later.',
      details: error.message,
    });
  }
}
