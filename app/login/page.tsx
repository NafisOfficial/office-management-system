"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const login = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Card className="w-full max-w-sm">
        <div className="flex justify-between items-center mx-6">
          <p className="text-2xl">Login to your account</p>
          <div>
            <Link href="/register" className="text-blue-700">Sign up</Link>
          </div>
        </div>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-blue-700"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white">
            Log in
          </Button>
          <Button variant="outline" className="w-full"> 
            Log in with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default login;
