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
import uiStyles from "accelerate-learner-ui/dist/index.css";
import tailwind from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: uiStyles },
  { rel: "stylesheet", href: contentStackStyles },
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
      <body>
        <Outlet />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
