import { useTranslation } from "react-i18next";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import {
  json,
  type LinksFunction,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@vercel/remix";

import fontAwesome from "@fortawesome/fontawesome-svg-core/styles.css";
import tailwind from "~/tailwind.css";
import { useChangeLanguage } from "remix-i18next";

import { i18nConfig } from "quickcheck-shared";

import { getUserDataFromSession } from "~/models/session";

import { TimeTravel } from "~/components/TimeTravel";

import { CONTENTSTACK_ENVS, QC_ENV, ZIPY_API_KEY } from "./utils/envs.server";
import { getSplit } from "./utils/getSplit";
import type { OutletContext } from "./utils/outletContext";

import { getUserConfig } from "./models/user";

import { makeErrorBoundary } from "./components/error";

export const ErrorBoundary = makeErrorBoundary({ wat: "root level error" });

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const [now] = await getUserDataFromSession(request);
  const [timeTravelFlag = false, accelerateEnabledFlag = false] =
    await getSplit(request, [
      "quickcheck__time_travel",
      "quickcheck__accelerate_enabled",
    ]);
  const featureFlags = {
    timeTravelFlag,
    accelerateEnabledFlag,
  };

  const { theme, locale } = await getUserConfig(request);

  const isAdminEnabled = QC_ENV !== "production";

  const ENV = {
    ...CONTENTSTACK_ENVS,
    ZIPY_API_KEY,
  };

  return json({ theme, locale, ENV, now, isAdminEnabled, featureFlags });
};

export const handle = {
  i18n: i18nConfig.defaultNS,
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
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

export const meta: MetaFunction = () => [
  { charset: "utf-8" },
  { title: "QuickCheck" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
];

export default function App() {
  const { theme, locale, ENV, now, isAdminEnabled, featureFlags } =
    useLoaderData<typeof loader>();

  const { i18n } = useTranslation();
  useChangeLanguage(locale);

  const outletContext: OutletContext = {
    now,
    isAdminEnabled,
    featureFlags,
  };

  return (
    <html lang={i18n.resolvedLanguage} dir={i18n.dir()} className="h-full">
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
          }}
        />
      </head>
      <body className="h-full overscroll-none bg-background-secondary">
        <TimeTravel now={now} flag={featureFlags.timeTravelFlag} />

        <Outlet context={outletContext} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
