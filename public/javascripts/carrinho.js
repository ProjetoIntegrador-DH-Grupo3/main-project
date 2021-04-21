let produtos = [];

function loadProduto() {
  const produtosLocal = localStorage.getItem("@hambuguer:produto");
  if (!produtosLocal) {
    return [];
  }
  return [...JSON.parse(produtosLocal)];
}

function addCarrinho(produtoId, precoProduto) {
  let produtosAtualizados;
  produtos = loadProduto();

  const produtoExistente = produtos.find((p) => p.id === produtoId);

  if (produtoExistente) {
    produtosAtualizados = produtos.map((p) =>
      p.id === produtoId
        ? { id: produtoId, preco: precoProduto, quantia: p.quantia + 1 }
        : p
    );
    produtos = produtosAtualizados;
  } else {
    produtosAtualizados = [
      ...produtos,
      { id: produtoId, preco: precoProduto, quantia: 1 },
    ];
    produtos = produtosAtualizados;
  }

  localStorage.setItem(
    "@hambuguer:produto",
    JSON.stringify(produtosAtualizados)
  );
}
