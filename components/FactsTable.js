

export default function FactsTable({ facts }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Fact</th>
          <th>Date</th>
          <th>Category</th>
          <th>Source</th>
        </tr>
      </thead>
      <tbody>
        {facts.map(fact => (
          <tr key={fact.id}>
            <td>{fact.fact}</td>
            <td>{fact.date}</td>
            <td>{fact.flags}</td>
            <td>{fact.contributor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}