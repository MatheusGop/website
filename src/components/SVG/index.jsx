import * as React from "react"
import { ReactSVG } from 'react-svg'

function SvgComponent({ file }) {
  return (
    <ReactSVG src={file} />
  )
}

export default SvgComponent
