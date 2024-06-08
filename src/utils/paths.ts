const PRODUTOS_PATH = {
  todosOsProdutos: 'todos-os-produtos',
  adicionarNovoProduto: 'adicionar-novo-produto',
}

const VENDEDOR_PATH = {
  todosOsVendedores: 'todos-os-vendedores',
  adicionarNovoVendedor: 'adicionar-novo-vendedor',
  metricasDeVendedores: 'metricas-de-vendedores',
}

export const PATHS = {
  base: '/',
  login: '/login',

  dashboard: '/dashboard',

  produtos: '/produtos',
  ...PRODUTOS_PATH,

  estoque: '/estoque',

  vendedor: '/vendedor',
  ...VENDEDOR_PATH,
}
