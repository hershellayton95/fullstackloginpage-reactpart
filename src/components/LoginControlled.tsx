import { useState } from "react";

function LoginControlled() {

    async function provaFetch(data : {username : string, password: string}) {
        const req = await fetch(`http://localhost:3001/users/login?username=${data.username}&password=${data.password}`);

        const res = await req.json();

        console.log(res);
    }



    const [data, setData] = useState({
    username: "Filippo",
    password: "password",
    });

    const handleForm = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;

    setData(data => ({
        ...data,
        [name]: value,
    }));
    };

    const handleClick = () => {
    console.log(data);
    provaFetch(data);
    }

    return (
    <div>
        <h1>Login</h1>
        <form>
        <label>username</label>
        <input onChange={handleForm} type="text" name="username" value={data.username}
        />
        <label>password</label>
        <input onChange={handleForm} type="password" name="password" value={data.password}
        />
        <button type="button" onClick={handleClick}> Login </button>
        </form>
    </div>
    );
}

export default LoginControlled;
