import React, { type FC } from "react"

import parse from "html-react-parser"

interface StemProps {
  content: string
}

export const Stem: FC<StemProps> = ({ content }) => {
  return (
    <div className="text-xl font-semibold leading-8 text-primary" data-testid="QuestionItem-Stem">
      {parse(content)}
    </div>
  )
}
