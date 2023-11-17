import { SplitFactory } from "@splitsoftware/splitio";
import { times } from "remeda";
import invariant from "tiny-invariant";

import { getUserDataFromSession } from "~/models/session/userSession.server";

import { SPLIT_API_KEY } from "./envs.server";

const FEATUREFLAG = { ON: "on", OFF: "off" };

export const getSplit = async (request: Request, treatments: string[]) => {
  try {
    const [_now, userId, tenant] = await getUserDataFromSession(request);

    invariant(userId, "Missing User ID");
    invariant(tenant, "Missing Tenant ID");

    const SplitObj = SplitFactory({
      core: {
        authorizationKey: SPLIT_API_KEY,
      },
      startup: {
        readyTimeout: 10,
      },
      scheduler: {
        impressionsRefreshRate: 1,
        eventsPushRate: 2,
      },
      debug: true,
    });

    let client = SplitObj.client();
    await client.ready();

    const attrs = {
      tenant,
      subdomain: request.url.split(".")[0] ?? "",
    };

    const treatmentResults = treatments.map((treatmentName) => {
      const flagResult = client.getTreatmentWithConfig(
        userId,
        treatmentName,
        attrs,
      );
      try {
        // Primary Flag use, off | on returns a boolean
        // if (flagResult.config === null)
        return flagResult.treatment === FEATUREFLAG.ON;
        // Secondary Flag use, special config object returned
        // return JSON.parse(flagResult.config);
      } catch (err) {
        console.error("Error parsing split config", {
          err,
          flagResult,
          treatmentName,
        });
        // fallthru: return boolean false
        return false;
      }
    });

    client.destroy();

    return treatmentResults;
  } catch (error) {
    return times(treatments.length, () => false);
  }
};
