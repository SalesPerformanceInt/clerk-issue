import { type LinksFunction, type MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwind from "~/tailwind.css";

import { Container } from "accelerate-cms-ui";
import uiStyles from "accelerate-cms-ui/dist/index.css";

import { useTheme } from "./utils/themes";

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
  const { theme } = useTheme();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />

        <style dangerouslySetInnerHTML={{ __html: theme }} />
      </head>
      <body className="flex flex-wrap bg-dark-500">
        <Sidebar />

        <Container>
          <Header />

          <Outlet />
        </Container>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
