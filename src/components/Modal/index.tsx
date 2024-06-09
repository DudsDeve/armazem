import { ReactNode, useState } from 'react'
import { Button, Modal, Space } from 'antd'
import { DefaultColors } from '../../styles/colors'
import { Buttons } from '../Button'

interface Props {
  children: ReactNode
  title: string
  content: string
}
export function Modals({ children, title, content }: Props) {
  const [open, setOpen] = useState(false)

  const showModal = () => {
    setOpen(true)
  }
  const handleOk = () => {
    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const { COLORS } = DefaultColors
  return (
    <>
      <Space>
        <Button type="primary" onClick={showModal}>
          {children}
        </Button>
      </Space>
      <Modal
        centered
        closable
        open={open}
        title={title}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <>
            <Buttons danger>Cancelar</Buttons>
            <Buttons backgroundColor={COLORS.GREEN_100} color={COLORS.WHITE}>
              Confirmar
            </Buttons>
          </>
        }
      >
        {content}
      </Modal>
    </>
  )
}
