import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { client } from './chroma'
import { embeddingFunction } from './embedding'

(async () => {

  const content = readFileSync(join(__dirname, 'policies.txt'), 'utf-8')
  const policies = content.split('\n').filter(Boolean)

  const collection = await client.getOrCreateCollection({
    name: 'policies',
    embeddingFunction
  })

  await collection.add({
    ids: policies.map(() => crypto.randomUUID()),
    documents: policies,
    metadatas: policies.map((_, index) => {
      return {
        line: index
      }
    })
  })

})()