import Header from "@/components/header";
import React from "react"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{padding: '0', margin: '0', display: 'flex', flexDirection: 'column', backgroundColor: 'pink', alignItems: 'center'}}>
      <Header />
      {children}
      </body>
    </html>
  );
}
