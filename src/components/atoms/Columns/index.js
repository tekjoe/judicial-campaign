import styled from "styled-components"

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }
`

const Column = styled.div`
  flex: 1;
  @media (min-width: 1024px) {
    padding: 1rem;
  }
`

export { Columns, Column }
