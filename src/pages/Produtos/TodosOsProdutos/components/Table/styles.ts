import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;

  overflow: hidden;
`
export const Table = styled.table`
  display: grid;
  border-collapse: collapse;
  width: 100%;
`
export const TableHeader = styled.tr`
  display: grid;
  grid-template-columns: 150px 1fr 200px 1fr 200px 100px;

  width: 100%;
  padding-bottom: 20px;
`
export const TableBody = styled.tr`
  display: grid;
  grid-template-columns: 150px 1fr 200px 1fr 200px 100px;
  font-size: 20px;
  width: 100%;


`

export const Th = styled.th`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  font-size: 25px;
  font-weight: 500;
  background-color: gray;
`

export const Td = styled.td`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
`
export const TableIcon = styled.td`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
