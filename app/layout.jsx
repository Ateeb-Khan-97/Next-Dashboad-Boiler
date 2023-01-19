"use client";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
//
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <MantineProvider withGlobalStyles>
        <NotificationsProvider>
          <body>{children}</body>
        </NotificationsProvider>
      </MantineProvider>
    </html>
  );
}
