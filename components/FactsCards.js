
export default function FactsCards({ facts }) {
  return (
    <section>
      <h1>Here are the CiviDex Facts</h1>
      {facts.map(fact => (
        <article key={fact.id}>
          <p>{fact.date}<span>{fact.flags}</span></p>
          <h3>{fact.fact}</h3>
          <a href={fact.source}>Source</a>
        </article>
      ))}
    </section>
  )
}