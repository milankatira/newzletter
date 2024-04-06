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
import { redirect } from "next/navigation";

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

function SignIn() {

//   const checkAuth = async () => {
//     const { user } = await validateRequest();

//     console.log(user,"user")
//     if (user) {
//       return redirect('/');
//     }
//   }

//   React.useEffect(() => {
//     checkAuth();
//   },[])
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

        const resp = await signIn(formData)
        console.log(resp,"resp")
     toast({
      title:resp.message
     })
        localStorage.setItem("token",resp.token)
    }  catch (error:any) {
      console.log(error);
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
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
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

export default SignIn;
