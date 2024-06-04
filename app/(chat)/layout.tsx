import Sidebar from "./home/components/sidebar";
import ChatArea from "./home/components/chat-area";
import getUsers from "@/actions/getUsers";
import React, { ReactNode } from 'react'
import getCurrentUser from "@/actions/getCurrentUser";
import getConversations from "@/actions/getConversations";
import ChatHeader from "@/components/wrappers/header/chat-header";
import ChatFooterMenu from "@/components/wrappers/footer/chat-footer-menu";
import getCalls from "@/actions/getCalls";

export default async function Layout({ children }: { children: ReactNode; }
) {

  const contacts = getUsers()
  const currentUser = getCurrentUser()
  const conversations = getConversations()
  const calls = getCalls()

  return (
    // <div className="h-screen px-16 py-10 bg-[url('/images/bg-home.jpg')]">
    <div className="h-screen overflow-hidden">
      <div className="h-full">
        <div className='grid grid-cols-3 h-full relative shadow-lg shadow-gray-500'>
          <ChatHeader />
          <Sidebar calls={calls} contacts={contacts} conversations={conversations} currentUser={currentUser} />
          <ChatArea>
            {children}
          </ChatArea>
          <ChatFooterMenu />
        </div>
      </div>
    </div>
  );
}
