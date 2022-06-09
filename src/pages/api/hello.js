// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const date = new Date().toISOString();

  res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate');

  res.status(200).json({ name: 'John Doe', date });
}
