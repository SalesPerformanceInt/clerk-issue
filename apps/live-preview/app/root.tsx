import { useTranslation } from "react-i18next"
import reactflow from "reactflow/dist/style.css"
import { json, type LinksFunction, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react"

import contentStackStyles from "@contentstack/live-preview-utils/dist/main.css"
import tailwind from "~/tailwind.css"

import { i18nConfig } from "quickcheck-shared"

import { remixI18next } from "~/utils/server"

import { getCSENV } from "./utils/server/env.server"

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const locale = await remixI18next.getLocale(request)

  const ENV = getCSENV()

  return json({ locale, ENV })
}

export const handle = {
  i18n: i18nConfig.defaultNS,
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: contentStackStyles },
  { rel: "stylesheet", href: reactflow },

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
]

export const meta: MetaFunction = () => [
  { charset: "utf-8" },
  { title: "QuickCheck LivePreview" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
]

export default function App() {
  const { locale, ENV } = useLoaderData<typeof loader>()

  const { i18n } = useTranslation()

  return (
    <html lang={locale} dir={i18n.dir()} className="h-full">
      <head>
        <Meta />
        <Links />

        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
      </head>

      <body className="h-full overscroll-none bg-background-secondary">
        <Outlet />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
