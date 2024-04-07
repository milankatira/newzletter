'use client'
import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor'
import React, { useEffect, useRef, useState } from 'react'
import { DefaultJsonData } from '@/assets/mails'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { verifyJWTToken } from '@/utils/jwtUtils'
import { saveEmail } from '@/action/email/save.email'
import { useToast } from '@/components/ui/use-toast'
import { CardWithForm } from '@/app/write/sidebar'
// import { saveEmail } from "@/actions/save.email";
// import toast from "react-hot-toast";
// import { GetEmailDetails } from "@/actions/get.email-details";
// import { sendEmail } from "@/shared/utils/email.sender";

const Emaileditor = ({ subjectTitle }: { subjectTitle: string }) => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [title, settitle] = useState(subjectTitle)
  const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData)
  //   const { user } = useClerk();
  const emailEditorRef = useRef<EditorRef>(null)
  const history = useRouter()

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor

    unlayer?.exportHtml(async (data) => {
      const { design, html } = data

      console.log(JSON.stringify(design), 'design')
      setJsonData(design)
      //    const userData=await verifyJWTToken(localStorage.getItem("token") as unknown as string)
      await saveEmail({
        user_id: '66111e789e7b80d48870cd9f',
        title: subjectTitle,
        content: html,
      }).then((res) => {
        toast({ title: 'Email send successfully' })
        history.push('/dashboard/write')
      })
    })
  }

  useEffect(() => {
    getEmailDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onReady: EmailEditorProps['onReady'] = () => {
    const unlayer: any = emailEditorRef.current?.editor
    unlayer.loadDesign(jsonData)
  }

  const saveDraft = async () => {
    const unlayer = emailEditorRef.current?.editor

    unlayer?.exportHtml(async (data) => {
      const { design } = data
      //   await saveEmail({
      //     title: subjectTitle,
      //     content: JSON.stringify(design),
      //     newsLetterOwnerId: user?.id!,
      //   }).then((res: any) => {
      //     toast.success(res.message);
      //     history.push("/dashboard/write");
      //   });
    })
  }

  const getEmailDetails = async () => {
    // await GetEmailDetails({
    //   title: subjectTitle,
    //   newsLetterOwnerId: user?.id!,
    // }).then((res: any) => {
    //   if (res) {
    //     setJsonData(JSON.parse(res?.content));
    //   }
    //   setLoading(false);
    // });
  }

  return (
    <>
      {/* {!loading && ( */}
      <div className="w-full h-[90vh] relative">
        <div className="flex flex-row">
          <EmailEditor minHeight={'80vh'} ref={emailEditorRef} onReady={onReady} />
          <CardWithForm title={title} settitle={settitle} />
        </div>
        <div className="absolute bottom-0 flex items-center justify-end gap-4 right-0 w-full border-t p-3">
          <Button variant="outline" onClick={saveDraft}>
            <span className="opacity-[.7]">Save Draft</span>
          </Button>
          <Button onClick={exportHtml}>
            <span>Send</span>
          </Button>
        </div>
      </div>
      {/* )} */}
    </>
  )
}

export default Emaileditor
