import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  gap: 20px;

  .sales-container {
    display: flex;
    gap: 20px;
    width: 100%;
  }

  .products-container {
    display: flex;
    gap: 20px;
    width: 100%;
  }
  .in-line,
  .bar,
  .estoque-barChart,
  .vendedor-pieChart,
  .clientes_barChart {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 20px;
    width: 100%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`
