import { useQuery, gql } from '@apollo/client';

interface TransactionData {
  id: string;
  from: string;
  to: string;
  value: string;
}

interface TransactionsQueryData {
  transactions: TransactionData[];
}

const TRANSACTIONS_QUERY = gql`
  query TransactionsQuery {
    transactions {
      id
      from
      to
      value
    }
  }
`;

function GraphApi() {
  const { loading, error, data } = useQuery<TransactionsQueryData>(TRANSACTIONS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {data?.transactions.map((transaction) => (
          <li key={transaction.id}>
            <p>ID: {transaction.id}</p>
            <p>From: {transaction.from}</p>
            <p>To: {transaction.to}</p>
            <p>Value: {transaction.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GraphApi;
