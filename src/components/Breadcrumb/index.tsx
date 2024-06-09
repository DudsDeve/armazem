import { Breadcrumb } from 'antd'
import { PATHS } from '../../utils/paths'
import { useLocation } from 'react-router-dom'

export function Breadcrumbs() {
  const { pathname, search } = useLocation()
  const removePathBase = pathname.replace('/', '').charAt(0).toLocaleUpperCase()
  const restPath = pathname.substring(2).replace(/-/g, ' ')

  return (
    <Breadcrumb
      separator=">"
      items={[
        {
          title: 'Home',
          href: `${PATHS.base}`,
        },
        {
          title: `${removePathBase}${restPath}`,
          href: `${search}`,
        },
      ]}
    />
  )
}
