import { OpenAIEmbeddingFunction } from '@chroma-core/openai'

const apiKey = process.env.OPEN_API_API_KEY
const organizationId = process.env.OPEN_AI_ORGANIZATION_ID

export const embeddingFunction = new OpenAIEmbeddingFunction({
  apiKey,
  modelName: 'text-embedding-3-small',
  organizationId,
})