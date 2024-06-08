import React, { useState } from 'react'
import { Tag, TreeSelect } from 'antd'

const roupasData = [
  {
    value: 'Roupas',
    title: <Tag color="red"> Roupa</Tag>,
    children: [
      {
        value: 'Camisa',
        title: <Tag color="blue"> Camisa</Tag>,
      },
      {
        value: 'Shorts',
        title: <Tag color="blue"> Shorts</Tag>,
      },
      {
        value: 'Calças',
        title: <Tag color="blue"> Calças</Tag>,
      },
      {
        value: 'Blusas',
        title: <Tag color="blue"> Blusas</Tag>,
      },
      {
        value: 'Cuecas',
        title: <Tag color="blue"> Cuecas</Tag>,
      },
    ],
  },
  {
    value: 'Calçados',
    title: <Tag color="blue"> Calçados</Tag>,
    children: [
      {
        value: 'Tenis',
        title: <Tag color="blue"> Tenis</Tag>,
      },
      {
        value: 'Chinelo',
        title: <Tag color="blue"> Chinelo</Tag>,
      },
      {
        value: 'Papete',
        title: <Tag color="blue"> Papete</Tag>,
      },
    ],
  },
]

interface Props {
  whidthSize?: string
  maxTagCount?: number
  maxTagTextLength?: number
}
export function Tree({ whidthSize, maxTagCount, maxTagTextLength }: Props) {
  const [value, setValue] = useState<string>()

  const onChange = (newValue: string) => {
    setValue(newValue)
  }

  return (
    <TreeSelect
      showSearch
      style={{ width: `${whidthSize}` }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Selecione uma ou mais categoraias"
      allowClear
      multiple
      maxTagTextLength={maxTagTextLength}
      maxTagCount={maxTagCount}
      onChange={onChange}
      treeData={roupasData}
    />
  )
}
