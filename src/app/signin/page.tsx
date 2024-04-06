import SignIn from '@/components/SignIn'
import { validateRequest } from '@/utils/validateRequest'
// import { lucia } from '@/utils/auth';
// import { validateRequest } from '@/utils/validateRequest';
// import { cookies } from 'next/headers';

// import { redirect } from 'next/navigation';
import React from 'react'

export default async function SignUpPage() {
  // const d = await validateRequest();
  // console.log(d,"data")
  // const sessionId = cookies().get("username")?.value ?? null;
  // if (!sessionId) {
  //   return {
  //     user: null,
  //     session: null,
  //   };
  // }

  // const result = await lucia.validateSession(sessionId);
  // console.log("sessionId","result",sessionId)

  // React.useEffect(() => {
  //   checkAuth();
  // },[])
  return <SignIn />
}
