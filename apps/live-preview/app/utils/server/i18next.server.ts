import { getRemixI18next } from "quickcheck-shared";

import { getCSENV } from "./env.server";

const contenstackEnvs = getCSENV();

export const remixI18next = getRemixI18next(contenstackEnvs);
