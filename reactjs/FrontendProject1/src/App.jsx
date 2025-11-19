import { Button } from "./Components/Button";
import { Input } from "./Components/Input";
import { Otp } from "./Components/Otp";

const App = () => {
  return (
    <div className="h-screen bg-blue-300 flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <span>hello there</span>

        <Input placeholder="UserName" />

        <Button disabled={false}>SignUp</Button>

        <div>
          otp component
          <Otp > </Otp>
        </div>
      </div>
    </div>
  );
};

export default App;