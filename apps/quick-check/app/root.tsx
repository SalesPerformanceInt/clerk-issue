import {
  json,
  type LinksFunction,
  type LoaderArgs,
  type V2_MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import fontAwesome from "@fortawesome/fontawesome-svg-core/styles.css";
import tailwind from "~/tailwind.css";

import sharedStyles from "quickcheck-shared/dist/index.css";

import { getOptionalUserApolloClientFromRequest } from "./graphql";

export const loader = async ({ request }: LoaderArgs) => {
  const userApolloClient = await getOptionalUserApolloClientFromRequest(
    request,
  );

  const theme = await userApolloClient?.getUserTheme();

  return json({ theme });
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: sharedStyles },
  { rel: "stylesheet", href: fontAwesome },

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
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap",
  },
];

export const meta: V2_MetaFunction = () => [
  { charset: "utf-8" },
  { title: "QuickCheck" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
];

export default function App() {
  const { theme } = useLoaderData<typeof loader>();

  return (
    <html lang="en" className="h-full overflow-hidden">
      <head>
        <Meta />
        <Links />
        {theme && <style>{theme}</style>}
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
