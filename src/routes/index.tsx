import { Route, Routes } from 'react-router-dom'
import { PATHS } from '../utils/paths'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { TodosOsProdutos } from '../pages/Produtos/TodosOsProdutos'

export function Router() {
  return (
    <>
      <Routes>
        <Route path={PATHS.login} element={<Login />} />
        <Route path={PATHS.base} element={<DefaultLayout />}>
          <Route path={PATHS.base} element={<Home />} />
          <Route path={PATHS.dashboard} element={<Home />} />
          <Route path={PATHS.todosOsProdutos} element={<TodosOsProdutos />} />
        </Route>
      </Routes>
    </>
  )
}
