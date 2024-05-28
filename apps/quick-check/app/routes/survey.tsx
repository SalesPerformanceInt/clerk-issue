import { json, type ActionFunctionArgs } from "@vercel/remix";

import { validationError } from "remix-validated-form";

import { logError, simpleErrorResponse } from "quickcheck-shared";

import { getUserApolloClientFromRequest } from "~/graphql";

import { surveyValidator } from "~/components";

export const config = {
  maxDuration: 300,
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const userApolloClient = await getUserApolloClientFromRequest(request);

    const result = await surveyValidator.validate(await request.formData());

    if (result.error) {
      return validationError(result.error);
    }

    const productSurvey = await userApolloClient.createSurveyResponse(
      result.data,
    );

    return json(productSurvey, { status: 200 });
  } catch (error) {
    logError({ error, log: "/survey" });
    return simpleErrorResponse(error);
  }
};
