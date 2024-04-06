"use client"
import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "@/action/user/signin.user";
import { signUp } from "@/action/user/signup.user";
import { useToast } from "@/components/ui/use-toast";

const SignUpSchema = z.object({
  username: z.string().min(1,{message:"Name is Required"}),
  email: z.string().email(),
  password: z.string().min(6),
});

function SignUp() {
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });


  const onSubmit = async (formData: any) => {
    try {

      console.log("Form Data:", formData);
      await signUp(formData)
    }  catch (error:any) {
      console.log(error.message);
      // toast.error(error.message);
      toast({
        variant: "destructive",
        title:error.message
      })
  }
  };

  return (
    <div className="flex justify-center items-center h-screen">

    <Card className="w-[350px] m-auto">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                {...register("username")}
                type="text"
                placeholder="Enter your username"
              />
              {errors.username && <span className="text-red-500">{errors.username.message as string}</span>}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                {...register("email")}
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && <span className="text-red-500">{errors.email.message as string}</span>}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                {...register("password")}
                type="password"
                placeholder="Enter your password"
              />
              {errors.password && <span className="text-red-500">{errors.password.message as string}</span>}
            </div>
          </div>
          <br />
          <Button type="submit">Sign Up</Button>
        </form>
      </CardContent>
      </Card>
    </div>

  );
}

export default SignUp;
