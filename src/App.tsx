import {useState} from 'react';

function App() {

  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleForm = (event : any) => {
    const name = event.target.name;
    const value = event.target.value;

    setData(data => ({
      ...data,
      [name] : value
    }))
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>username</label>
        <input onChange={handleForm} type="text" name="username" value={data.username}/>
        <label>password</label>
        <input onChange={handleForm} type="text" name="password" value={data.password}/>
        <button type="button" onClick={()=>{
          console.log(data);
        }}>Login</button>
      </form>
    </div>
  );
}

export default App;
