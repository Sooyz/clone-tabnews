function status(request, response) {
  response.status(200).json({
    chave: "balão",
  });
}

export default status;
