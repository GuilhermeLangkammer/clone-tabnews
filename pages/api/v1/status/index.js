function status(request, response) {
  response.status(200).json({
    chave: "deu bom",
  });
}

export default status;
