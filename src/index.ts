// src/index.ts

// 1
import { createYoga } from "graphql-yoga";
import { createServer } from 'http'
import { schema } from "./schema";
// 2
const port = Number(process.env.API_PORT) || 4000;
// 3
const yoga = createYoga({ schema });
const server = createServer(yoga);
// 4
server.listen(port, () => {
    console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`)
});