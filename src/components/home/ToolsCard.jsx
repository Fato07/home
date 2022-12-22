import React from "react"
import "../../tools.css"

const ToolsCard = ({ props }) => {
  const { url, name } = props

  return (
    <>
      <div class="tools-card">
        <img src={url} alt={name}></img>
      </div>
    </>
  )
}

export default ToolsCard
