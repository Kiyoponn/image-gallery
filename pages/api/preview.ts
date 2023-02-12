import type { NextApiRequest, NextApiResponse } from 'next'

export default function preview(_: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({})
  res.writeHead(307, { Location: '/' })
  res.end()
}
