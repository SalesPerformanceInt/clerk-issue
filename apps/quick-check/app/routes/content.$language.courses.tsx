import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getContentStackClient } from "~/contentstack.server";
import { first, isArray, sortBy } from "remeda";

import { invariant, simpleErrorResponse } from "quickcheck-shared";

import { Pagination, usePagination } from "~/components";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  try {
    const { language } = params;
    invariant(language, "Language not found");

    const contentStack = getContentStackClient(language);
    const allCourses = (await contentStack.getCourses()) ?? [];

    const courses = allCourses.filter(
      ({ metadata }) =>
        isArray(metadata.quickcheck_taxonomy) &&
        first(metadata.quickcheck_taxonomy),
    );

    return json({
      courses,
      language,
    });
  } catch (error) {
    throw simpleErrorResponse(error);
  }
};

export default function QuestionPage() {
  const { courses, language } = useLoaderData<typeof loader>();

  const orderedCorses = sortBy(courses, (c) => c.metadata.display_title);

  const { onPageChange, currentItems, pageCount } =
    usePagination(orderedCorses);

  return (
    <div className="sm:p-8">
      <div className="flex w-full flex-col">
        <div className="overflow-x-auto sm:-mx-6 desktop:-mx-8">
          <div className="inline-block min-w-full sm:px-6 desktop:px-8">
            <div className="mb-8 flex items-center justify-center px-4 pt-4 sm:p-0">
              <h1 className="text-center text-4xl font-bold">Courses</h1>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full table-auto text-left text-sm">
                <thead className="border-b bg-white font-medium">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Course
                    </th>

                    <th scope="col" className="px-6 py-4">
                      Taxonomy Title
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((course, row) => (
                    <tr
                      key={course.uid}
                      className={`border-b ${
                        row % 2 === 0 ? "bg-neutral-100" : "bg-white"
                      }`}
                    >
                      <td className="whitespace-nowrap px-6 py-4">
                        <Link
                          className="text-primary-50 hover:text-primary-75 hover:underline"
                          to={`/content/${language}/course/${course.uid}`}
                        >
                          {course.metadata.display_title}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {isArray(course.metadata.quickcheck_taxonomy)
                          ? first(course.metadata.quickcheck_taxonomy)?.title
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
