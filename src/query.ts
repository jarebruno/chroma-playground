import { embeddingFunction } from './embedding'
import { client } from './chroma'
import { argv } from 'bun'

(async () => {

  const queryText = argv[2] || ''

  if (queryText.trim() === '') {
    console.error('Query not provided as parameter')
    return
  }

  const collection = await client.getOrCreateCollection({
    name: 'policies',
    embeddingFunction
  })

  const result = await collection.query({
    queryTexts: [queryText],
    nResults: 1
  })

  console.log(result)

})()