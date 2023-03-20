import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import uiStyles from "accelerate-cms-ui/dist/index.css";

import tailwind from "~/tailwind.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: uiStyles },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Accelerate CMS",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex flex-wrap bg-dark-500">
        <Sidebar />

        <Header />

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
