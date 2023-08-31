import { getRemixI18next } from "quickcheck-shared";

import { CONTENTSTACK_ENVS } from "~/utils/envs.server";

export const remixI18next = getRemixI18next(CONTENTSTACK_ENVS);
