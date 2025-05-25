export default async function handler(req, res) {
  const { tc } = req.method === 'GET' ? req.query : req.body;

  if (!tc) {
    return res.status(400).json({ error: 'tc parametresi zorunludur' });
  }

  try {
    const url = https://api.hexnox.pro/sowixapi/tcpro.php?tc=${encodeURIComponent(tc)};
    const response = await fetch(url);
    const json = await response.json();
    const data = json.data;

    let output = '';
    
    // İlk satır: sadece telegram objesi
    output += JSON.stringify({ telegram: "@Saltanatisiken" }, null, 2) + '\n\n';

    // Diğer her veri: tek satırda JSON objesi
    for (const [key, value] of Object.entries(data)) {
      output += JSON.stringify({ [key]: value }) + '\n';
    }

    res.status(200)
      .setHeader('Content-Type', 'text/plain')
      .send(output);
  } catch (err) {
    res.status(500).json({ error: 'API request failed', detail: err.message });
  }
}

su kodu kullan
