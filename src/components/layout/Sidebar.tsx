'use client'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Sidebar({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()
  return (
    // <div className="max-w-full flex flex-col">
    <ResizablePanelGroup direction="horizontal" className="h-screen bg-gray-50">
      <ResizablePanel defaultSize={25} className="min-w-[4rem] h-screen bg-slate-800 text-white">
        <div className="flex h-full items-start justify-center p-4 flex-col">
          <Link
            href="/dashboard"
            //  legacyBehavior
            // type="button" onClick={() => router.push('/dashboard')}
            className="flex flex-row p-4  w-full items-center gap-4"
            passHref
          >
            <p>DashBoard</p>
          </Link>

          <Link
            href="/dashboard"
            //  legacyBehavior
            // type="button" onClick={() => router.push('/dashboard')}
            className="flex flex-row p-4  w-full items-center gap-4"
            passHref
          >
            <p>DashBoard</p>
          </Link>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75} minSize={75} className="h-screen overflow-scroll">
        <div className="h-screen overflow-scroll">{children}</div>
      </ResizablePanel>
    </ResizablePanelGroup>

    // </div>
  )
}
