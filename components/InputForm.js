
export default function InputForm({ createFact }) {

  function handleSubmit(e) {
    e.preventDefault()
    const info = {
      fact: e.target.fact.value,
      date: e.target.date.value,
      flags: e.target.flag.value,
      progress: false,
      contributor: 7
      // source: e.target.source.value,
    }
    createFact(info)
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Fact Entry</legend>
        <input placeholder="fact" name="fact" />
        <input type="date" name="date" />
        <select name='flag'>
          <option value='c'>Civil Rights</option>
          <option value='v'>Voting</option>
          <option value='s'>Slavery</option>
        </select>
        <input placeholder="source" name="source" />
        <button>Create</button>
      </fieldset>
    </form>
  )
}