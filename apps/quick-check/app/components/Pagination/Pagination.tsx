import { useState, type FC } from "react"
import ReactPaginate, { ReactPaginateProps } from "react-paginate"

import { twMerge } from "tailwind-merge"

export const usePagination = <T,>(items: T[], itemsPerPage = 10) => {
  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + itemsPerPage
  const currentItems = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  const onPageChange: PaginationProps["onPageChange"] = ({ selected }) => {
    const newOffset = (selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }

  return {
    onPageChange,
    currentItems,
    pageCount,
  }
}

export type PaginationProps = Pick<ReactPaginateProps, "onPageChange" | "pageCount">

const pageClassName =
  "flex items-center justify-center px-6 py-4 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
const linkClassName = "text-primary-50 -m-4 p-4"

export const Pagination: FC<PaginationProps> = ({ onPageChange, pageCount }) => {
  return (
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
      previousClassName={pageClassName}
      previousLinkClassName={linkClassName}
      nextClassName={pageClassName}
      nextLinkClassName={linkClassName}
      disabledLinkClassName={linkClassName}
      breakClassName={pageClassName}
      breakLinkClassName={linkClassName}
    />
  )
}
