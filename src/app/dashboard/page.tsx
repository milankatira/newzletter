'use client'
import Analytics from '@/components/Home/analytics'
import Emaileditor from '@/components/common/EmailEditor'
import { SubscriberDataTable } from '@/components/common/SubscribeTable'
import { DataTableDemo } from '@/components/common/Table'
import ApexChart from '@/components/common/graph'
import BarChart from '@/components/common/graph/barChart'
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
      '<strong>and easy to do anywhere, even with Node.js</strong>',
    )
  }, [])
  return (
    <Sidebar>
      <div className="p-4 flex flex-row justify-between">
        <div>

        <h1 className="text-3xl font-bold">Hi milan 👋</h1>
        <p className="text-slate-500">Here's how your publication is doing</p>
        </div>
        <div>
          <Button>Get Started</Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="w-full p-4">
        <TabsList className="grid w-full grid-cols-6 bg-gray-100">
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

        <TabsContent value="overview">
          <Analytics />
          <ApexChart />
        </TabsContent>

        <TabsContent value="audience">
          <Analytics />
          <SubscriberDataTable />
        </TabsContent>

        <TabsContent value="engagement">
          <Analytics />
          <BarChart />
        </TabsContent>
      </Tabs>
      {/* <Analytics /> */}
      {/* <Emaileditor subjectTitle="milan k" /> */}
      {/* <DataTableDemo /> */}
    </Sidebar>
  )
}
