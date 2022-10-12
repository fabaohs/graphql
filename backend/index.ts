import "reflect-metadata"
import path from 'path'

import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import UserResolvers from "./src/resolvers/UserResolver"

async function main() {

   const schema = await buildSchema({
      resolvers: [UserResolvers],
      emitSchemaFile: path.resolve(__dirname, 'schema.gql')
   })

   const server = new ApolloServer({ schema })

   const { url } = await server.listen()
   console.log(url)

}

main()