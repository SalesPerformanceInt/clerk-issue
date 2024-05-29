import Honeybadger from "@honeybadger-io/js"

import { HONEYBADGER_API_KEY, NODE_ENV } from "./envs.server"

Honeybadger.configure({
  apiKey: HONEYBADGER_API_KEY,
  environment: NODE_ENV,
})

export default Honeybadger
