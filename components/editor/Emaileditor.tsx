"use client"
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor"
import { Button } from '../ui/button';
import { useUser } from '@clerk/nextjs';
import { saveEmail } from '@/actions/saveEmail';
import { GetEmailDetails } from '@/actions/getEmailDetails';

const Emaileditor = ({ subjectTitle }: { subjectTitle: string }) => {
    const [loading, setLoading] = useState(true);
    const [jsonData, setJsonData] = useState<any | null>(null);
    const emailEditorRef = useRef<EditorRef>(null);
    const { user } = useUser();

    const getEmailDetails = async () => {
        console.log("Fetching email details...");
        const res = await GetEmailDetails({ title: subjectTitle, newsLetterOwnerId: user?.id! });
        if (res) {
            const data = JSON.parse(res);
            console.log("Fetched email details:", data);
            setJsonData(JSON.parse(data.content));
        }
        setLoading(false);
    };

    useEffect(() => {
        if (user) {
            getEmailDetails();
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        if (jsonData && emailEditorRef.current?.editor) {
            console.log("Loading design:", jsonData);
            emailEditorRef.current.editor.loadDesign(jsonData);
        }
    }, [jsonData]);

    const onReady: EmailEditorProps['onReady'] = () => {
        console.log("EmailEditor is ready");
    };

    const saveDraft = () => {
        console.log('Saving draft...');
        const unlayer = emailEditorRef.current?.editor;
        unlayer?.exportHtml(async (data) => {
            const { design } = data;
            await saveEmail({
                title: subjectTitle,
                content: JSON.stringify(design),
                newsLetterOwnerId: user?.id!,
            });
            console.log('Draft saved');
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className='w-full h-[90vh] relative'>
                <EmailEditor minHeight={"80vh"} ref={emailEditorRef} onReady={onReady} />
            </div>
            <div className='flex items-center justify-end gap-4 right-3'>
                <Button onClick={saveDraft} variant={'secondary'}>
                    Save Draft
                </Button>
                <Button>
                    Send
                </Button>
            </div>
        </>
    );
}

export default Emaileditor;
