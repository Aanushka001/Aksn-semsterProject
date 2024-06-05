
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"

export function Component() {
  return (
    (<div
      className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <div className="w-full max-w-2xl p-6 bg-[#5f92fb] rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-white">Welcome to AKSN</h1>
        <div className="flex flex-col items-center mt-6">
          <Button className="w-full bg-white text-[#5f92fb]">Login with Google</Button>
          <Button className="w-full mt-4 bg-white text-[#5f92fb]">Login with Facebook</Button>
          <div className="my-4">OR</div>
          <div className="w-full space-y-4">
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <div className="flex items-center justify-between">
              <Link className="text-white" href="#">
                Forgot Password?
              </Link>
              <Button className="bg-[#5f92fb] text-white">Login</Button>
            </div>
            <div className="flex items-center justify-between">
              <Checkbox id="remember-me" />
              <label className="text-white" htmlFor="remember-me">
                Remember me
              </label>
            </div>
            <div className="text-center">
              <span className="text-white">Don’t have an account?</span>
              <Link className="text-[#5f92fb]" href="#">
                {""}
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}
