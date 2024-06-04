import { useRef, type ChangeEventHandler, type FC } from "react"
import { useSearchParams } from "@remix-run/react"

import { faMagnifyingGlass, faXmark } from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const getSearchFromSearchParams = (searchParams: URLSearchParams) => {
  const search = searchParams.get("search") ?? ""
  return { search }
}

export const getSearchFromRequest = (request: Request) => {
  const searchParams = new URL(request.url).searchParams
  return getSearchFromSearchParams(searchParams)
}

export type SearchParams = {
  search: string
}

export const SearchBar: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useRef<HTMLInputElement>(null)
  const search = searchParams.get("search") ?? ""

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchParams(
      (prev) => {
        prev.set("search", event.target.value)
        prev.delete("offset")
        return prev
      },
      { replace: true },
    )
  }

  const onReset = () => {
    setSearchParams(
      (prev) => {
        prev.delete("search")
        return prev
      },
      { replace: true },
    )

    if (ref?.current) {
      ref.current.value = ""
    }
  }

  return (
    <div className="relative mb-2">
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-text-10" />
      </div>
      <input
        value={search}
        type="search"
        ref={ref}
        onChange={onChange}
        className="w-full rounded px-2 py-2 ps-10"
        placeholder="Search"
      />
      <div className="absolute inset-y-0 end-0 flex items-center pe-3">
        <button onClick={onReset} className="h-6 w-6 rounded-full bg-text-10 text-contrast hover:brightness-110">
          <FontAwesomeIcon icon={faXmark} className="" />
        </button>
      </div>
    </div>
  )
}
