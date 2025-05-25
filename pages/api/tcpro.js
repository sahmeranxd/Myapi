import axios from 'axios';

export default async function handler(req, res) {
  const { tc } = req.query;
  if (!tc) return res.status(400).json({ error: 'tc parametresi gerekli' });

  try {
    const response = await axios.get(https://api.hexnox.pro/sowixapi/aile.php?tc=${encodeURIComponent(tc)});
    const data = response.data.data || response.data;
    res.status(200).json({ message: "ig: @obirsanaltanrisi", data });
  } catch (e) {
    res.status(500).json({ error: 'API request failed', detail: e.message });
  }
}
