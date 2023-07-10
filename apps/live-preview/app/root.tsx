import { type LinksFunction, type MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import contentStackStyles from "@contentstack/live-preview-utils/dist/main.css";
import tailwind from "~/tailwind.css";

import sharedStyles from "quickcheck-shared/dist/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: sharedStyles },
  { rel: "stylesheet", href: contentStackStyles },

  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap",
    crossOrigin: "anonymous",
  },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Accelerate QuickCheck",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full overflow-auto bg-background-secondary">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
