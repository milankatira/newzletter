'use client'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function Sidebar({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()
  return (
    // <div className="max-w-full flex flex-col">
    <ResizablePanelGroup direction="horizontal" className='h-screen"'>
      <ResizablePanel defaultSize={25} className="min-w-[4rem] h-screen">
        <div className="flex h-full items-start justify-center p-4">
          <Link
            href="/dashboard"
            //  legacyBehavior
            // type="button" onClick={() => router.push('/dashboard')}
            className="flex flex-row p-4 hover:bg-slate-100 w-full items-center gap-4"
            passHref
          >
            <svg
              className="h-8 w-8"
              fill="#000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3V88c0-13.3-10.7-24-24-24s-24 10.7-24 24V292.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
            </svg>
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
