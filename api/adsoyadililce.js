export default async function handler(req, res) {
  const { ad, soyad, il } = req.method === 'GET' ? req.query : req.body;

  if (!ad || !soyad || !il) {
    return res.status(400).json({ error: 'ad, soyad ve il parametreleri zorunludur' });
  }

  try {
    const url = `https://nowercheck.com/nowerapi/adsoyadilce.php?ad=${encodeURIComponent(ad)}&soyad=${encodeURIComponent(soyad)}&il=${encodeURIComponent(il)}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const json = await response.json();
    const data = json.data;

    let output = '';

    // İlk satır: telegram bilgisi
    output += JSON.stringify({ telegram: "@ozeneceksiniz" }, null, 2) + '\n\n';

    // Diğer veriler: tek satır JSON objeleri
    for (const [key, value] of Object.entries(data)) {
      output += JSON.stringify({ [key]: value }) + '\n';
    }

    res.status(200)
      .setHeader('Content-Type', 'text/plain; charset=utf-8')
      .send(output);

  } catch (err) {
    res.status(500).json({ error: 'API request failed', detail: err.message });
  }
}
