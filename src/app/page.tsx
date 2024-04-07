'use client'
import Analytics from '@/components/Home/analytics'
import Emaileditor from '@/components/common/EmailEditor'
import { DataTableDemo } from '@/components/common/Table'
import ApexChart from '@/components/common/graph'
import { Sidebar } from '@/components/layout/Sidebar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { sendMail } from '@/utils/sendmail'
import { useEffect } from 'react'
export default function Home() {
  useEffect(() => {
    sendMail(
      'Sending with SendGrid is Fun',
      'milankatira26@gmail.com',
      '<strong>and easy to do anywhere, even with Node.js</strong>'
    )
  },[])
  return (
    <div>
      <Tabs defaultValue="overview" className="w-full p-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">overview</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <ApexChart />
      <Analytics />
      <Emaileditor subjectTitle="milan k" />
      <DataTableDemo />
    </div>
  )
}
