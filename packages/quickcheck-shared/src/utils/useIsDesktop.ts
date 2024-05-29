import { useMedia } from "react-use"

export const useIsDesktop = () => useMedia("(min-width: 640px)", true)
