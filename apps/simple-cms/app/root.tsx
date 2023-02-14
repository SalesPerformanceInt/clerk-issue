import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./style.css";
import uiStyles from "accelerate-cms-ui/dist/index.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
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
      <body className="flex bg-dark-500">
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
