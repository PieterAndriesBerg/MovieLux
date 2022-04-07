import React,{useState, useRef} from 'react'

import axios from "../../api/axios"

const SigUp = () => {
  const SIGNUP_URL = "/api/auth/signup"

  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        SIGNUP_URL,
        JSON.stringify({ username: user, password: pwd, email: email }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));

    } catch (error) {
      console.log(error);
      if (!error?.response) {
        setErrMsg("No server response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing username or password");
      } else if (error.reponse?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
      console.log(error);
    }
  };

  
  return (
    <section>
        <h1>SignUp</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor='username'>Username</label>
            <input type="text" id="username" onChange={(e) => setUser(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e) => setPwd(e.target.value)}/>
            <button type="submit">Signup</button>
        </form>
    </section>
  )
}

export default SigUp