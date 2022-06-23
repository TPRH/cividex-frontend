import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL;
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl + '/api/token/';
const username = process.env.NEXT_PUBLIC_USERNAME;
const password = process.env.NEXT_PUBLIC_PASSWORD;


export default function InputForm({ user }) {

  async function createResource(info) {
    try {
      const response = await axios.post(tokenUrl, { username, password });        
      let tokens = response.data
      
      let authHeader = {
        headers: {
            'Authorization': 'Bearer ' + tokens.access
        }
    };
      await axios.post(apiUrl, info, authHeader);
    } catch (err) {
        console.log(err);
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    let userId = ''
    if (user) {
      userId = user.id
      }
    else if (!user) {
      userId = '3'
      }
    const info = {
      fact: e.target.fact.value,
      date: e.target.date.value,
      flags: e.target.flag.value,
      progress: false,
      verified: false,
      contributor: userId,
      source: e.target.source.value,
    }
    createResource(info)
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <legend>Fact Entry Form</legend>
      <input placeholder="fact" name="fact" />
      <input type="date" name="date" />
      <select name='flag' >
        <option value='c'>Civil Rights</option>
        <option value='v'>Voting</option>
        <option value='s'>Slavery</option>
      </select>
      <input placeholder="source" name="source" />
      <button>Create</button>
    </form>
  )
}