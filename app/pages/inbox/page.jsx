import React from 'react'
import InboxMessages from '@/app/components/inbox/InboxMessage';
import InboxDatagrid from '@/app/components/inbox/InboxDatagrid';
export default function Inbox() {
  return (
    <>
    <div>
      Inbox Page Stats
    </div>
    <InboxDatagrid/>
    <InboxMessages/>
    </>

  )
}
