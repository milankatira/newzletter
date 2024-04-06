import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"

  export function Sidebar({ children }:Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-full h-screen"
      >
        <ResizablePanel defaultSize={25} className="min-w-[4rem] h-screen">
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75} minSize={75}>
        {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  }
