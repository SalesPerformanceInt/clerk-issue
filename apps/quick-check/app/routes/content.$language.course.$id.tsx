import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { json, type LoaderFunctionArgs } from "@vercel/remix";

import { faChevronLeft } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getContentStackClient } from "~/contentstack.server";
import { first, isArray } from "remeda";

import { invariant, simpleErrorResponse } from "quickcheck-shared";

import { getTranslatedQuestionsFromTaxon } from "~/models/question";
import { buildTaxonTrees, getTaxon } from "~/models/taxonomy";

import { Pagination, usePagination } from "~/components";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  try {
    const { language, id } = params;
    invariant(language, "Language not found");
    invariant(id, "ID not found");

    const contentStack = getContentStackClient(language);
    const course = first(
      (await contentStack.getCourses((query) =>
        query.containedIn("uid", [id]),
      )) ?? [],
    );
    invariant(course, "Course not found");

    const quickcheckTaxonomy =
      isArray(course.metadata.quickcheck_taxonomy) &&
      first(course.metadata.quickcheck_taxonomy);
    invariant(quickcheckTaxonomy, "QuickCheck Taxonomy not found");

    const quickcheckTaxonomyId = quickcheckTaxonomy.uid;

    const taxonTrees = await buildTaxonTrees();
    const taxon = await getTaxon(quickcheckTaxonomyId, taxonTrees);

    const questions = await getTranslatedQuestionsFromTaxon(language, taxon);

    return json({
      course,
      questions,
      language,
    });
  } catch (error) {
    throw simpleErrorResponse(error);
  }
};

export default function CoursePage() {
  const { course, questions, language } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  const { onPageChange, currentItems, pageCount } = usePagination(questions);

  return (
    <div className="sm:p-8">
      <div className="flex w-full flex-col">
        <div className="overflow-x-auto sm:-mx-6 desktop:-mx-8">
          <div className="inline-block min-w-full sm:px-6 desktop:px-8">
            <div className="mb-8 flex items-center justify-between px-4 pt-4 sm:p-0">
              <button
                className="flex items-center"
                onClick={() => navigate(`/content/${language}/courses`)}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="w-6 text-center text-4xl leading-6 text-primary-75 sm:w-[10px] sm:text-base"
                />
                <div className="ml-4 font-bold text-primary-75">Courses</div>
              </button>
              <h1 className="text-center text-4xl font-bold">
                {course.metadata.display_title}
              </h1>
              <div />
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full table-auto text-left text-sm">
                <thead className="border-b bg-white font-medium">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Question
                    </th>

                    <th scope="col" className="px-6 py-4">
                      Taxonomy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((question, row) => (
                    <tr
                      key={question.uid}
                      className={`border-b ${
                        row % 2 === 0 ? "bg-neutral-100" : "bg-white"
                      }`}
                    >
                      <td className="whitespace-nowrap px-6 py-4">
                        <Link
                          className="text-primary-50 hover:text-primary-75 hover:underline"
                          to={`/content/${language}/question/${question.uid}?courseId=${course.uid}`}
                        >
                          {question.title}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {isArray(question.topic)
                          ? first(question.topic)?.title
                          : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination onPageChange={onPageChange} pageCount={pageCount} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
