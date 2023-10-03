import { useMemo } from "react";
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
  useLocation,
} from "@remix-run/react";

import fontAwesome from "@fortawesome/fontawesome-svg-core/styles.css";
import { useChangeLanguage } from "remix-i18next";
import tailwind from "~/tailwind.css";

import { i18nConfig } from "quickcheck-shared";
import sharedStyles from "quickcheck-shared/dist/index.css";

import { remixI18next } from "~/utils/i18next.server";

import { getUserDataFromFromSession } from "~/models/session";

import { TimeTravel } from "~/components/TimeTravel";

import {
  QC_CONTENTSTACK_DELIVERY_TOKEN,
  QC_CONTENTSTACK_ENVIRONMENT,
  QC_CONTENTSTACK_STACK_KEY,
} from "./utils/envs.server";

import { getOptionalUserApolloClientFromRequest } from "./graphql";

export const loader = async ({ request }: LoaderArgs) => {
  const [now, userId] = await getUserDataFromFromSession(request);
  const userApolloClient =
    await getOptionalUserApolloClientFromRequest(request);

  const theme = await userApolloClient?.getUserTheme();

  const locale = await remixI18next.getLocale(request);

  const ENV = {
    QC_CONTENTSTACK_DELIVERY_TOKEN,
    QC_CONTENTSTACK_ENVIRONMENT,
    QC_CONTENTSTACK_STACK_KEY,
  };

  return json({ theme: null, locale, ENV, now, userId });
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
  const { theme, locale, ENV, now, userId } = useLoaderData<typeof loader>();

  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  useChangeLanguage(locale);

  const timeTravelEnabled = useMemo(() => {
    const disabledPaths = ["/admin"];

    return !disabledPaths.includes(pathname) && !!userId;
  }, []);

  return (
    <html lang={locale} dir={i18n.dir()} className="h-full overflow-hidden">
      <head>
        <Meta />
        <Links />
        {theme && <style>{theme}</style>}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
      </head>
      <body className="h-full overflow-auto bg-background-secondary">
        {timeTravelEnabled && <TimeTravel now={now} />}

        <Outlet context={{ now }} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
