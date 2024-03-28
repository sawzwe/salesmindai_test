import React from "react";
import Message from "@/app/components/inbox/Message";
import Datagrid from "@/app/components/inbox/Datagrid";
export default function Inbox() {
  return (
    <>
      <div>Inbox Page Stats</div>
      <Datagrid />

      <Message />
    </>
  );
}
