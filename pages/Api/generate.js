export default function handler(req, res) {
  const count = parseInt(req.query.count) || 1;
  const codes = [];

  for (let i = 0; i < count; i++) {
    const part = () =>
      [...Array(4)]
        .map(() => Math.random().toString(36).toUpperCase()[2])
        .join('');
    const code = `${part()}-${part()}-${part()}-${part()}`;
    codes.push(code);
  }

  res.status(200).json({ generated: codes });
}
