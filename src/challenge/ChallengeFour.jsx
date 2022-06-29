import React, { useState } from "react";

const ChallengeFour = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newUser, setNewUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      const newEntry = { id: new Date().getTime().toString(), email, password };
      setNewUser([...newUser, newEntry]);

      setEmail("");
      setPassword("");
    } else {
      alert("Enter Details");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">PassWord: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        {newUser.map((element) => {
          const { id, email, password } = element;
          return (
            <div key={id}>
              <h1>Email: {email}</h1>
              <h1>Password: {password}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChallengeFour;
