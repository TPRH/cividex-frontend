

export default function FactsTable({ facts, onDelete, update }) {
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
            <td><a href={fact.source}>{fact.source}</a></td>
            <td><button onClick={() => onDelete(fact.id)}>Delete</button><button onClick={update}>Update</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
