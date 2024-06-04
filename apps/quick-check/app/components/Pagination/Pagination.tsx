import { useState, type FC } from "react"
import ReactPaginate, { ReactPaginateProps } from "react-paginate"
import { useSearchParams } from "@remix-run/react"

import { twMerge } from "tailwind-merge"

const DEFAULT_PER_PAGE = 10

export type PaginationParams = {
  perPage?: number
  offset?: number
}

export const getPageCount = (count?: number | null, perPage?: number | null) =>
  Math.ceil((count ?? 0) / (perPage ?? DEFAULT_PER_PAGE))

export const getPaginationFromSearchParams = (searchParams: URLSearchParams) => {
  const perPage = Number(searchParams.get("perPage") || DEFAULT_PER_PAGE)
  const offset = Number(searchParams.get("offset") || 0)
  const endOffset = offset + perPage

  return { perPage, offset, endOffset }
}

export const getPaginationFromRequest = (request: Request) => {
  const searchParams = new URL(request.url).searchParams
  return getPaginationFromSearchParams(searchParams)
}

export const usePagination = <T,>(count: number) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [page, setPage] = useState(1)

  const { offset, perPage } = getPaginationFromSearchParams(searchParams)

  const onPageChange: ReactPaginateProps["onPageChange"] = ({ selected }) => {
    setPage(selected + 1)

    const newOffset = (selected * perPage) % count

    setSearchParams((prev) => {
      if (newOffset) {
        prev.set("offset", `${newOffset}`)
      } else {
        prev.delete("offset")
      }
      return prev
    })
  }

  const pageCount = getPageCount(count, perPage)

  const start = offset + 1
  const end = Math.min(perPage * page, count)

  return {
    limit: perPage,
    offset,
    onPageChange,
    pageCount,
    count,
    start,
    end,
    page,
  }
}

export type PaginationProps = {
  count: number
}

const pageClassName =
  "flex items-center justify-center px-4 py-2 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
const linkClassName = "text-primary-50 -m-4 p-4"

export const Pagination: FC<PaginationProps> = ({ count }) => {
  const { onPageChange, pageCount, start, end, page } = usePagination(count)

  return (
    <div className="flex items-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={onPageChange}
        pageCount={pageCount}
        // pageRangeDisplayed={3}
        // marginPagesDisplayed={2}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="inline-flex -space-x-px text-sm"
        pageClassName={pageClassName}
        pageLinkClassName={linkClassName}
        activeClassName="!bg-primary"
        activeLinkClassName={twMerge(linkClassName, "!text-contrast")}
        previousClassName={twMerge(pageClassName, "rounded-l")}
        previousLinkClassName={linkClassName}
        nextClassName={twMerge(pageClassName, "rounded-r")}
        nextLinkClassName={linkClassName}
        disabledLinkClassName={linkClassName}
        breakClassName={pageClassName}
        breakLinkClassName={linkClassName}
      />
      <p className="mx-4 text-text-50">{`${start}-${end} of ${count}`}</p>
    </div>
  )
}
