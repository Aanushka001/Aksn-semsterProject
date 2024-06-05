
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AccountPage } from "./AccountPage"


export function HomePage() {
  return (
    (<div
      className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <div className="w-full max-w-3xl p-6 bg-[#5f92fb] rounded-lg shadow-md">
        <div className="flex items-center justify-between pb-6">
          <h1 className="text-2xl font-bold text-white">Good morning, Krati</h1>
          <Avatar>
            <AvatarImage alt="User profile" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Card className="col-span-1 bg-white">
            <CardContent>
              <CarIcon className="text-black h-6 w-6" />
              <BikeIcon className="text-black h-6 w-6" />
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <div className="text-sm font-semibold">Parking nearby</div>
              <Button className="bg-[#5f92fb] text-white">Book Parking</Button>
            </CardFooter>
          </Card>
          <div className="col-span-2 bg-white p-4 rounded-lg shadow">
            <img
              alt="Map of Available Parking Spaces"
              className="rounded-lg"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/200",
                objectFit: "cover",
              }}
              width="400" />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Available Spaces</h2>
              <div className="flex justify-between mt-2">
                <div className="text-sm">Free</div>
                <div className="text-sm">$5 per hour</div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between">
                  <div>Parking Area 1</div>
                  <div>Parking Area 2</div>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="text-sm">Parking Lot A</div>
                  <div className="text-sm">Parking Lot B</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-xs">3.5 miles away</div>
                  <div className="text-xs">2.0 miles away</div>
                </div>
              </div>
              <Button className="mt-4 bg-[#5f92fb] text-white">Book Parking</Button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Recent Bookings</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-sm">Parking Lot C</div>
                <div className="flex items-center">
                  <div className="text-sm">$10</div>
                  <ClockIcon className="text-black h-4 w-4 ml-2" />
                </div>
              </div>
              <div className="text-xs">2 hours ago</div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <Link
            className="bg-white text-[#5f92fb] px-4 py-2 rounded-lg shadow-md hover:bg-[#5f92fb] hover:text-white transition-colors"
            href="#">
            History
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="bg-white text-[#5f92fb] px-4 py-2 rounded-lg shadow-md hover:bg-[#5f92fb] transition-colors"
              >
                My Account
              </Button>
            </DialogTrigger>
            <DialogContent className="min-w-[200rem]">
              <AccountPage />
            </DialogContent>
          </Dialog>
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
