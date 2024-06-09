import { DatePicker, Space } from 'antd'
import dayjs from 'dayjs'

const { RangePicker } = DatePicker
// volto logo
const dateFormat = 'YYYY/MM/DD'

export function DatePickers() {
  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        defaultValue={[
          dayjs('2015/01/01', dateFormat),
          dayjs('2015/01/01', dateFormat),
        ]}
        format={dateFormat}
      />
    </Space>
  )
}
