import { useState } from "react";
import { Button } from "./Components/Button";
import { Input } from "./Components/Input";
import { Hero } from "./Components/Hero";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const HARD_CODED_USERNAME = "niri the best coder";
  const HARD_CODED_PASSWORD = "1234";

  const handleLogin = () => {
    if (
      username === HARD_CODED_USERNAME &&
      password === HARD_CODED_PASSWORD
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  if (isLoggedIn) {
    return <Hero />;
  }

  return (
    <div className="h-screen bg-blue-300 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-lg font-semibold">Login</h1>

        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default App;