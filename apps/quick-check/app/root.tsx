import { json, type LinksFunction, type LoaderArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import uiStyles from "accelerate-learner-ui/dist/index.css";
import tailwind from "~/tailwind.css";

import { getOptionalUserApolloClientFromRequest } from "./graphql";

const defaultTheme = `
:root { 
  --color-primary-medium: #564874;
  --color-primary-dark: #21154A;
  --font-face: Open Sans
}`;

export const loader = async ({ request }: LoaderArgs) => {
  const userApolloClient = await getOptionalUserApolloClientFromRequest(
    request,
  );

  const theme = (await userApolloClient?.getUserTheme()) ?? defaultTheme;

  return json({ theme });
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: uiStyles },

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
];

export default function App() {
  const { theme } = useLoaderData<typeof loader>();

  return (
    <html lang="en" className="h-full overflow-hidden">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {theme && <style>{theme}</style>}
      </head>
      <body className="h-full overflow-auto">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
