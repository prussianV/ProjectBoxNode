import fastify from "fastify";
import { prisma } from "./prisma.js";

const PORT = process.env.PORT;

const server = fastify();

server.get("/", (request, reply) => {
    prisma.$connect()
    
    prisma.$disconnect()
  reply.send({ message: "Hello World!" });
});

server.listen({ port: PORT });
