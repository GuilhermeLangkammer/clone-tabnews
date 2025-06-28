import database from "../../../../infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 2 + 1 as sum;");
  console.log(result);
  response.status(200).json({ chave: "deu bom" });
}

export default status;
