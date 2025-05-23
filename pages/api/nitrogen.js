export default async function handler(req, res) {
  const ip = req.query.ip;
  if (!ip) {
    return res.status(400).json({ error: 'IP adresi parametresi eksik.' });
  }

  try {
    const response = await fetch(https://ipwho.is/${ip}?fields=ip,success,country,region,city,latitude,longitude,isp,asn,proxy,tor,threat, {
      headers: {
        'Accept': 'application/json',
      },
    });
    const data = await response.json();

    if (!data.success) {
      return res.status(404).json({ error: 'IP adresi bulunamadı.' });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'IP bilgileri alınırken bir hata oluştu.' });
  }
}
