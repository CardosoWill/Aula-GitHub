import fastify from "fastify";

const app = fastify();

app.get("/", async () =>{
    return {hello: "world"};
});

app.listen(Number(process.env.port), () => {
    console.log(`Sever listening at 3000`);
});