import { useState } from "react"


export default function FactsTable({ facts, onDelete, update }) {

  const [display , setDisplay] = useState(false)
  const [fact , setFact] = useState({})

  function handleUpdate(fact) {
    setFact(fact)
    setDisplay(true)
    }

  function UpdateForm(fact) {
    fact = fact.fact
    return (
      <form>
        <legend>Fact Update Form</legend>
        <input placeholder="fact" name="fact" defaultValue={fact.fact} />
        <input type="date" name="date" defaultValue={fact.date} />
        <select name='flag' >
          <option value='c'>Civil Rights</option>
          <option value='v'>Voting</option>
          <option value='s'>Slavery</option>
        </select>
        <input placeholder="source" name="source" defaultValue={fact.source} />
        <label >verified</label>
        <input type='checkbox' name="verified" defaultValue={fact.verified} />
        <label >progress</label>
        <input type='checkbox' name="progress" defaultValue={fact.progress}/>
        <button>Update</button>
      </form>
    )
  }

  return (
    <>
      {display && <UpdateForm fact={fact}/>}
      <table>
        <thead>
          <tr>
            <th>Fact</th>
            <th>Date</th>
            <th>Category</th>
            <th>Source</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {facts.filter(fact => !fact.verified).map(fact => (
            <tr key={fact.id}>
              <td>{fact.fact}</td>
              <td>{fact.date}</td>
              <td>{fact.flags}</td>
              <td><a href={fact.source}>{fact.source}</a></td>
              <td>{fact.verified ? 'T' : 'F'}</td>
              <td><button onClick={()=>onDelete(fact.id)}>Delete</button><button onClick={()=>handleUpdate(fact)}>Update</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
