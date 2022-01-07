// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function AirbnbLogoIcon(props) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "max-w-full fill-current text-gray-400"
      )}
      viewBox={"0 0 125 39"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M65.879 9.8a2.533 2.533 0 01-2.539 2.537 2.532 2.532 0 01-2.538-2.538 2.508 2.508 0 012.538-2.537c1.446.039 2.539 1.171 2.539 2.537zm-10.466 5.114v.624s-1.21-1.562-3.787-1.562c-4.256 0-7.576 3.24-7.576 7.73 0 4.45 3.28 7.73 7.576 7.73 2.616 0 3.787-1.601 3.787-1.601v.663c0 .313.235.546.547.546h3.163V14.365H55.96a.561.561 0 00-.547.549zm0 9.407c-.585.86-1.757 1.601-3.162 1.601-2.5 0-4.413-1.561-4.413-4.216 0-2.655 1.914-4.216 4.413-4.216 1.367 0 2.616.78 3.162 1.6v5.231zm6.053-9.954h3.749v14.678h-3.749V14.367zm55.998-.391c-2.578 0-3.788 1.562-3.788 1.562V7.301h-3.749v21.744h3.163a.558.558 0 00.547-.546v-.664s1.21 1.6 3.787 1.6c4.257 0 7.576-3.277 7.576-7.728 0-4.45-3.319-7.731-7.536-7.731zm-.625 11.907c-1.445 0-2.577-.741-3.163-1.6V19.05c.586-.78 1.835-1.6 3.163-1.6 2.499 0 4.412 1.561 4.412 4.216 0 2.654-1.913 4.216-4.412 4.216zm-8.864-5.543v8.744h-3.75V20.77c0-2.42-.78-3.396-2.888-3.396-1.132 0-2.304.585-3.047 1.445v10.228h-3.748v-14.68h2.967c.313 0 .547.274.547.548v.624c1.094-1.132 2.538-1.562 3.983-1.562 1.64 0 3.007.47 4.1 1.406 1.328 1.093 1.836 2.498 1.836 4.958zm-22.533-6.364c-2.576 0-3.787 1.562-3.787 1.562V7.301h-3.749v21.744h3.163a.559.559 0 00.547-.546v-.664s1.21 1.6 3.787 1.6c4.257 0 7.576-3.277 7.576-7.728.04-4.451-3.28-7.731-7.537-7.731zm-.625 11.907c-1.444 0-2.576-.741-3.162-1.6V19.05c.586-.78 1.835-1.6 3.162-1.6 2.5 0 4.413 1.561 4.413 4.216 0 2.654-1.913 4.216-4.413 4.216zM74.665 13.976c1.132 0 1.718.196 1.718.196v3.474s-3.124-1.055-5.076 1.171v10.267h-3.75V14.367h3.164c.312 0 .546.273.546.546v.625c.704-.82 2.227-1.562 3.398-1.562zM35.733 27.718c-.195-.468-.39-.976-.586-1.406-.313-.702-.625-1.366-.898-1.99l-.039-.04a406.921 406.921 0 00-8.63-17.644l-.117-.235c-.32-.608-.633-1.22-.937-1.835-.39-.703-.78-1.444-1.406-2.147C21.87.859 20.074 0 18.161 0c-1.953 0-3.71.86-4.998 2.342-.586.703-1.016 1.444-1.406 2.148a84.724 84.724 0 01-.936 1.835l-.118.234c-3.007 5.856-5.935 11.79-8.63 17.645l-.04.078c-.272.625-.585 1.289-.898 1.99-.195.43-.39.899-.585 1.406-.508 1.444-.664 2.81-.468 4.217a8.297 8.297 0 005.076 6.48c1.016.43 2.07.625 3.163.625.313 0 .703-.039 1.016-.078 1.288-.156 2.616-.585 3.905-1.327 1.6-.898 3.124-2.186 4.842-4.06 1.718 1.874 3.28 3.162 4.842 4.06 1.29.742 2.616 1.17 3.905 1.327.312.04.703.078 1.016.078 1.093 0 2.186-.195 3.162-.625 2.734-1.094 4.647-3.591 5.077-6.48.31-1.366.154-2.732-.353-4.177zm-17.611 2.03c-2.11-2.655-3.476-5.153-3.944-7.26-.195-.899-.235-1.68-.117-2.382a3.78 3.78 0 01.625-1.64c.742-1.054 1.991-1.718 3.436-1.718 1.445 0 2.734.625 3.437 1.718.312.468.547 1.015.625 1.64.117.703.078 1.522-.117 2.381-.47 2.069-1.837 4.568-3.945 7.26zm15.58 1.835a5.802 5.802 0 01-3.553 4.568c-.937.39-1.953.507-2.968.39-.976-.118-1.953-.43-2.967-1.015-1.406-.782-2.812-1.991-4.452-3.787 2.577-3.162 4.139-6.051 4.725-8.627a9.765 9.765 0 00.195-3.32 6.329 6.329 0 00-1.054-2.654c-1.212-1.757-3.242-2.771-5.507-2.771-2.264 0-4.295 1.054-5.505 2.771a6.335 6.335 0 00-1.055 2.655 8.107 8.107 0 00.195 3.319c.586 2.576 2.187 5.504 4.725 8.666-1.601 1.796-3.046 3.006-4.452 3.787-1.015.586-1.991.898-2.967 1.015a6.25 6.25 0 01-2.968-.39 5.802 5.802 0 01-3.553-4.568 6.457 6.457 0 01.351-3.045c.117-.39.313-.78.508-1.25.273-.624.585-1.288.898-1.951l.04-.078a425.627 425.627 0 018.59-17.528l.117-.235c.313-.585.625-1.21.937-1.795.313-.625.664-1.211 1.094-1.719.82-.936 1.913-1.444 3.124-1.444 1.21 0 2.304.508 3.124 1.444.43.51.78 1.095 1.093 1.719.313.585.626 1.21.937 1.795l.118.235a516.841 516.841 0 018.552 17.567v.039c.312.626.586 1.328.898 1.953.195.468.39.858.508 1.248.311 1.014.428 1.991.272 3.006z"
        }
      ></path>
    </svg>
  )
}

export default AirbnbLogoIcon
/* prettier-ignore-end */
