import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
  title: string;
  rightContent?: ReactNode;
}

export default function Layout({ children, title, rightContent }: LayoutProps) {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#0F0F23" }}>
      <div
        className="flex flex-col w-[280px] justify-between border-r border-[#374151] min-h-screen"
        style={{ backgroundColor: "#1A1A2E" }}
      >
        <div className="flex-1 flex flex-col">
          <Sidebar />
        </div>
        <div>
          <a
            href="https://github.com/nicolasmcort/Proyecto_Matematicas_Discretas_I.git" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-medium"
            style={{
              color: "#9CA3AF",
              padding: "12px 16px 5px",
              textDecoration: "none",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.192 2.53598C8.888 1.28798 7.112 1.28798 6.808 2.53598C6.76261 2.72351 6.67359 2.89768 6.54818 3.0443C6.42277 3.19093 6.26451 3.30588 6.08628 3.37979C5.90805 3.4537 5.71489 3.48449 5.52251 3.46965C5.33014 3.4548 5.14398 3.39475 4.9792 3.29438C3.8816 2.62558 2.6256 3.88158 3.2944 4.97918C3.7264 5.68798 3.3432 6.61278 2.5368 6.80878C1.288 7.11198 1.288 8.88878 2.5368 9.19118C2.72438 9.23662 2.89858 9.32572 3.04521 9.45123C3.19184 9.57674 3.30675 9.73511 3.38059 9.91343C3.45443 10.0918 3.48511 10.285 3.47014 10.4774C3.45516 10.6699 3.39495 10.856 3.2944 11.0208C2.6256 12.1184 3.8816 13.3744 4.9792 12.7056C5.14395 12.605 5.33012 12.5448 5.52255 12.5298C5.71498 12.5149 5.90822 12.5455 6.08654 12.6194C6.26487 12.6932 6.42323 12.8081 6.54874 12.9548C6.67425 13.1014 6.76336 13.2756 6.8088 13.4632C7.112 14.712 8.8888 14.712 9.1912 13.4632C9.2368 13.2757 9.32599 13.1016 9.45153 12.9551C9.57706 12.8086 9.7354 12.6937 9.91367 12.6199C10.0919 12.5461 10.2851 12.5154 10.4775 12.5303C10.6699 12.5451 10.856 12.6052 11.0208 12.7056C12.1184 13.3744 13.3744 12.1184 12.7056 11.0208C12.6052 10.856 12.5452 10.6698 12.5303 10.4775C12.5154 10.2851 12.5461 10.0919 12.6199 9.91364C12.6937 9.73536 12.8086 9.57704 12.9551 9.4515C13.1016 9.32596 13.2757 9.23677 13.4632 9.19118C14.712 8.88798 14.712 7.11118 13.4632 6.80878C13.2756 6.76333 13.1014 6.67423 12.9548 6.54872C12.8082 6.42321 12.6933 6.26484 12.6194 6.08652C12.5456 5.90819 12.5149 5.71495 12.5299 5.52252C12.5448 5.3301 12.6051 5.14393 12.7056 4.97918C13.3744 3.88158 12.1184 2.62558 11.0208 3.29438C10.856 3.39492 10.6699 3.45513 10.4775 3.47011C10.285 3.48509 10.0918 3.45441 9.91346 3.38057C9.73513 3.30673 9.57677 3.19181 9.45126 3.04518C9.32575 2.89856 9.23665 2.72436 9.1912 2.53678L9.192 2.53598ZM8 10.4C8.63652 10.4 9.24697 10.1471 9.69706 9.69703C10.1471 9.24694 10.4 8.6365 10.4 7.99998C10.4 7.36346 10.1471 6.75301 9.69706 6.30292C9.24697 5.85283 8.63652 5.59998 8 5.59998C7.36348 5.59998 6.75303 5.85283 6.30294 6.30292C5.85286 6.75301 5.6 7.36346 5.6 7.99998C5.6 8.6365 5.85286 9.24694 6.30294 9.69703C6.75303 10.1471 7.36348 10.4 8 10.4Z"
                fill="currentColor"
              />
            </svg>
            Más información
          </a>
          <div
            className="text-xs"
            style={{
              color: "#6B7280",
              marginTop: "4px",
              padding: "0 16px 16px",
            }}
          >
            v.1.0 - Academic Edition
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header
          className="h-[60px] px-4 flex items-center justify-between"
          style={{
            backgroundColor: "#1A1A2E",
            borderBottom: "1px solid #16213E",
          }}
        >
          <h2
            className="text-lg font-bold truncate"
            style={{ color: "#E5E7EB", fontFamily: "Inter" }}
          >
            {title}
          </h2>
          {rightContent && (
            <div className="flex items-center gap-2 shrink-0">
              {rightContent}
            </div>
          )}
        </header>
        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}