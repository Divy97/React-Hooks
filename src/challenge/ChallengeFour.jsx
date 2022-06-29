import React, { useState } from 'react'

const ChallengeFour = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [newUser, setNewUser] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const newEntry = { email: email, password: password}

        setNewUser([...newUser, newEntry]);
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>Email:  </label>
                <input type="text" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='password'>PassWord:  </label>
                <input type="password" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type='submit'>Login</button>
        </form>
        <div>
            {
                newUser.map((element) => {
                    return(
                        <>
                            <h1>Email: {element.email}</h1>
                            <h1>Password: {element.password}</h1>
                        </>
                    )
                })  
            }
        </div>
    </>
  )
}

export default ChallengeFour