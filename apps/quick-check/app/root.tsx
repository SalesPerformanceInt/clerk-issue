import { useTranslation } from "react-i18next";
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
import { useChangeLanguage } from "remix-i18next";

import { i18nConfig } from "quickcheck-shared";
import sharedStyles from "quickcheck-shared/dist/index.css";

import { remixI18next } from "~/utils/i18next.server";

import { getUserDataFromSession } from "~/models/session";

import { TimeTravel } from "~/components/TimeTravel";

import {
  QC_CONTENTSTACK_DELIVERY_TOKEN,
  QC_CONTENTSTACK_ENVIRONMENT,
  QC_CONTENTSTACK_STACK_KEY,
  ZIPY_API_KEY,
} from "./utils/envs.server";
import { getSplit } from "./utils/getSplit";

import { makeErrorBoundary } from "./components/error";

import { getOptionalUserApolloClientFromRequest } from "./graphql";

export const ErrorBoundary = makeErrorBoundary({ wat: "root level error" });

export const loader = async ({ request }: LoaderArgs) => {
  const [now] = await getUserDataFromSession(request);
  const [timeTravelFlag = false] = await getSplit(request, [
    "quickcheck__time_travel",
  ]);

  const userApolloClient =
    await getOptionalUserApolloClientFromRequest(request);

  const theme = await userApolloClient?.getUserTheme();

  const locale = await remixI18next.getLocale(request);

  const ENV = {
    QC_CONTENTSTACK_DELIVERY_TOKEN,
    QC_CONTENTSTACK_ENVIRONMENT,
    QC_CONTENTSTACK_STACK_KEY,
    ZIPY_API_KEY,
  };

  return json({ theme, locale, ENV, timeTravelFlag, now });
};

export const handle = {
  i18n: i18nConfig.defaultNS,
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
  const { theme, locale, ENV, timeTravelFlag, now } =
    useLoaderData<typeof loader>();

  const { i18n } = useTranslation();
  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()} className="h-full overflow-hidden">
      <head>
        <Meta />
        <Links />
        {theme && <style dangerouslySetInnerHTML={{ __html: theme }}></style>}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
        <script
          src="https://cdn.zipy.ai/sdk/v1.0/zipy.min.umd.js"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.addEventListener('load', () => { if (window.zipy) { window.zipy.init(window.ENV.ZIPY_API_KEY) } else { console.error('zipy is not available yet') }})`,
          }} />
      </head>
      <body className="h-full overflow-auto bg-background-secondary overscroll-x-none">
        <TimeTravel now={now} flag={timeTravelFlag} />

        <Outlet context={{ now }} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
