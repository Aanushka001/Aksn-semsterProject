
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { DialogClose } from "../ui/dialog";

export function AccountPage() {
  return (
    (<div
      className="flex flex-col items-center justify-center min-h-screen bg-white/5 text-black">
      <div className="w-full max-w-3xl p-6 bg-[#5f92fb] rounded-lg shadow-md">
        <div className="flex items-center justify-between pb-6">
          <h1 className="text-2xl font-bold text-white">My Account</h1>
          <Avatar>
            <AvatarImage alt="User profile" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Krati Sharma</h2>
              <div className="text-sm text-gray-500">krati@example.com</div>
            </div>
            <Button className="bg-[#5f92fb] text-white">Edit Profile</Button>
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-semibold">Parking History</h3>
              <div className="text-sm text-gray-500">View your parking history</div>
              <Button className="mt-2 bg-[#5f92fb] text-white">View History</Button>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Payment Methods</h3>
              <div className="text-sm text-gray-500">Manage your payment methods</div>
              <Button className="mt-2 bg-[#5f92fb] text-white">Manage Methods</Button>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-semibold">Notifications</h3>
              <div className="text-sm text-gray-500">Manage your notification settings</div>
              <Button className="mt-2 bg-[#5f92fb] text-white">Manage Notifications</Button>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Security</h3>
              <div className="text-sm text-gray-500">Change your password or enable 2FA</div>
              <Button className="mt-2 bg-[#5f92fb] text-white">Manage Security</Button>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <DialogClose>
            <Button
              className="bg-white text-[#5f92fb] px-4 py-2 rounded-lg shadow-md hover:bg-[#5f92fb] hover:text-white transition-colors">
              Back to Dashboard
            </Button>
          </DialogClose>
          <Button
            className="bg-white text-[#5f92fb] px-4 py-2 rounded-lg shadow-md hover:bg-[#5f92fb] hover:text-white transition-colors">
            Logout
          </Button>
        </div>
      </div>
    </div>)
  );
}

function BikeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>)
  );
}


function CarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>)
  );
}


function ClockIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>)
  );
}
