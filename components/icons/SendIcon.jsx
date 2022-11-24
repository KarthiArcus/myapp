/*
 * Filename: c:\KBX Apps\KBXPay_Frontend\components\icons\SendIcon.jsx
 * Path: c:\KBX Apps\KBXPay_Frontend
 * Created Date: Wednesday, November 9th 2022, 10:31:44 am
 * Author: Hari Prasad
 * 
 * Copyright (c) 2022 KBX Digital
 */

import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_251_14499)">
        <Path
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20zm-5-7h9v2h-4v3l-5-5zm5-4V6l5 5H8V9h4z"
          fill="#222"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_251_14499">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
