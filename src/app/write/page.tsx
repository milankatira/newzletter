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
    <>

      {/* <Analytics /> */}
          <Emaileditor subjectTitle="new post" />
      {/* <DataTableDemo /> */}
    </>
  )
}
