# chroma-playground

Chroma playground is a playground where you can play with [Chroma](https://www.trychroma.com/home), a vectorial database. This kind of databases, let you capture the meaning of items because they embed and transform them into vectorial points and thanks to algorithms like k nearest neighbor, to retrieve closest item. To create the embeddings, the Open AI embedding function has been used.

Tech stack:
  - [Chroma](https://www.trychroma.com/home)
  - [Open AI API](https://platform.openai.com/docs/overview)
  - [Bun](https://bun.com/docs)
  - [Typescript](https://www.typescriptlang.org/)
  - [Kubernetes](https://kubernetes.io/)

## How to run

### 1. Infrastructure deployment

Infrastructure has been coded under the `infra` folder using kubernetes configuration files.

To deploy the infrastructure

```sh
minikube start
kubectl apply -k infra/
```


### 2. Configure the environment variables

Copy the `.env.template` file and set the environment variables with your own


### 3. Configure the environment variables

Install dependencies

```sh
bun install
```


### 4. Ingest the data

The chroma database must be ingested first with the policies defined in the `data` folder. To achieve that, execute the `ingest.ts` file with

```sh
bun run ingest
```


### 5. Query the data

To get the most semantic related item to a custom prompt, execute the `query` file with

```sh
bun run query "Put here your prompt"
```