import React from "react"

import TodosContainer from "./TodosContainer"
import ImageContainer from "./ImageContainer"

const HomePage = () => (
  <div className="flex flex-col items-center p-8">
    <ImageContainer />
    <TodosContainer />
  </div>
)

export default HomePage
