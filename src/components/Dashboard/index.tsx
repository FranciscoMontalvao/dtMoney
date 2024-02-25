import { Summary } from "../Summary"
import { TransactionsTable } from "../TrasactionsTable"
import { Container } from "./style"

export const Dashboard = () => {

  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}