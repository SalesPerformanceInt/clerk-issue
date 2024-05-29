import React, { createContext, useContext, type FC } from "react"

import { useQuestion } from "./hooks/useQuestion"

import type { QuestionContextProps, QuestionContextProviderProps } from "./QuestionContext.types"

export const QuestionContext = createContext<QuestionContextProps | undefined>(undefined)

export const useQuestionContext = () => {
  const context = useContext(QuestionContext)

  if (context === undefined) {
    throw new Error("useQuestionContext must be used within a CountProvider")
  }

  return context
}

export const QuestionContextProvider: FC<QuestionContextProviderProps> = ({ children, offset = 0, ...props }) => {
  const questionProps = useQuestion(props)

  const currentTopic = props.questionItem.topic[0]?.title ?? ""

  return (
    <QuestionContext.Provider value={{ currentTopic, ...props, ...questionProps, offset }}>
      {children}
    </QuestionContext.Provider>
  )
}
