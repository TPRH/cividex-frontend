
export default function FactsCards({ facts }) {
  return (
    <>
    <section>
      <h1>Here are the CiviDex Facts</h1>
      <div>
        {facts.filter(fact=>fact.verified).map(fact => (
          <article key={fact.id}>
            <p>{fact.date}<span>{fact.flags}</span></p>
            <h3>{fact.fact}</h3>
            <a href={fact.source}>more info &gt;</a>
          </article>
        ))}
      </div>
    </section>
    </>
  )
}