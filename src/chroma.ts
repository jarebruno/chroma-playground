import { ChromaClient } from 'chromadb'

export const client = new ChromaClient({
  host: process.env.CHROMA_HOST,
  port: Number(process.env.CHROMA_PORT),
})