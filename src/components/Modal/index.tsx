import { ReactNode, useState } from 'react'
import { Modal, Space } from 'antd'
import { Buttons } from '../Button'
import { DefaultColors } from '../../styles/colors'

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
        <Buttons type="primary" onClick={showModal}>
          {children}
        </Buttons>
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
