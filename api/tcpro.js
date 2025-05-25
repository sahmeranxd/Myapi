const axios = require('axios');

module.exports = async function handler(req, res) {
  const { tc } = req.query;
  if (!tc) return res.status(400).json({ error: 'tc parametresi gerekli' });

  try {
    const response = await axios.get(`https://api.hexnox.pro/sowixapi/aile.php?tc=${encodeURIComponent(tc)}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0' // bazı sunucular boş User-Agent'te engeller
      }
    });
    const data = response.data.data || response.data;
    res.status(200).json({ message: "ig: @ato.asd", data });
  } catch (e) {
    res.status(500).json({ error: 'API request failed', detail: e.message });
  }
};
