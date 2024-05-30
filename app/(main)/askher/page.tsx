'use client'

import React from 'react';
import AskHerSVG from './askher.svg'; // Import the SVG file
import Image from 'next/image';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'df-messenger': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'project-id': string;
        'agent-id': string;
        'language-code': string;
        'max-query-length'?: string;
      };
      'df-messenger-chat-bubble': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'chat-title': string;
      };
    }
  }
}

const ChatPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 relative p-4">
      <div className="flex w-full flex-col items-center">
        <Image src="/askher.svg" alt="Shop" height={90} width={90} />
        <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
        Askher.ai
        </h1>
        <p className="mb-6 text-center text-lg text-muted-foreground">
          Your virtual finance Guru: Learn, Chat and Prosper
        </p>
      </div>

      <link
        rel="stylesheet"
        href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"
      />
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>

      <h1 className="text-center text-2xl font-bold text-neutral-800 mb-4">
        Askher - Your chatbot
      </h1>
      <h5 className="text-center text-2xl font-bold text-neutral-800 mb-4">
   Please refresh the page if chatbot does not appear. 
      </h5>
      <div className="flex-grow"></div> {/* Spacer to push the chatbot to the bottom */}

      <df-messenger
        project-id="shecents-424209"
        agent-id="043f59d1-e987-4a7f-a799-3ac1b53c9532"
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat-bubble chat-title=""></df-messenger-chat-bubble>
      </df-messenger>

      <style jsx>{`
        df-messenger {
          --df-messenger-font-color: #000;
          --df-messenger-font-family: Google Sans;
          --df-messenger-chat-background: #f3f6fc;
          --df-messenger-message-user-background: #d3e3fd;
          --df-messenger-message-bot-background: #fff;
          bottom: 16px;
          right: 16px;
          position: fixed;
          z-index: 999;
        }
        @media (max-width: 768px) {
          df-messenger {
            --df-messenger-font-size: 14px;
            --df-messenger-chat-background: #e0f7fa;
            bottom: 8px;
            right: 8px;
          }
          .text-2xl {
            font-size: 1.5rem;
          }
          .text-lg {
            font-size: 1rem;
          }
        }
        @media (max-width: 480px) {
          df-messenger {
            --df-messenger-font-size: 12px;
            --df-messenger-chat-background: #e0f7fa;
            bottom: 4px;
            right: 8px;
            left: 8px; /* Add left space */
            width: auto;
            height: calc(50vh - 4px); /* Adjust the height for better fit */
          }
          .text-2xl {
            font-size: 1.25rem;
          }
          .text-lg {
            font-size: 0.875rem;
          }
          .my-6 {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .mb-6 {
            margin-bottom: 1.5rem;
          }
          .mb-4 {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ChatPage;
