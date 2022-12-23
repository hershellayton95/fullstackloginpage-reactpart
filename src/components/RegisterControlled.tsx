import { useState } from "react";

function RegisterControlled() {

    async function provaFetch(data : {email: string, username : string, password: string}) {
        try{
            const req = await fetch(`http://localhost:3001/users/signin?email=${data.email}&username=${data.username}&password=${data.password}`, {
                method: "POST"
            });

            const res = await req.json();
            console.log(res);
        } catch (err){
            console.log(err);
        }
    }


    const [data, setData] = useState({
        email: "filidm5795@gmail.com",
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
        <h1>Sign In</h1>
        <form>
        <label>email</label>
        <input onChange={handleForm} type="text" name="username" value={data.username}
        />
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

export default RegisterControlled;
