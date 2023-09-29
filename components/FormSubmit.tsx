'use client';

import React from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

type Props = {title: string}

export default function FormSubmit(props: Props, pendingState: any) {
    const { title } = props
    const { pending } = useFormStatus()
  return (
    <button disabled={pending} >
        {pending && pendingState}
        {!pending && title}
    </button>
  )
}