// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hhYAirYt8bU9TEjNgFzExf
// Component: aZ_J2rMYPrG
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import Button from "../../Button" // plasmic-import: Tz4a3lVI6CGf/component
import { useScreenVariants as useScreenVariants_01LSGjai6PPg } from "./PlasmicGlobalVariant__Screen" // plasmic-import: 01lSGjai6pPg/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_habistack_com.module.css" // plasmic-import: hhYAirYt8bU9TEjNgFzExf/projectcss
import * as sty from "./PlasmicHeader.module.css" // plasmic-import: aZ_J2rMYPrG/css
import FathymLogoGreensvgIcon from "./icons/PlasmicIcon__FathymLogoGreensvg" // plasmic-import: DxCDUHw3i3/icon

export const PlasmicHeader__VariantProps = new Array()

export const PlasmicHeader__ArgProps = new Array()

function PlasmicHeader__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_01LSGjai6PPg(),
  })

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.a, sty.link)}
        component={Link}
        href={"/"}
        platform={"gatsby"}
      >
        <FathymLogoGreensvgIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      </p.PlasmicLink>

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <Button
          className={classNames("__wab_instance", sty.button___7GRWd)}
          link={"https://www.lowcodeunit.com"}
        >
          {"LowCodeUnit"}
        </Button>

        <Button
          className={classNames("__wab_instance", sty.button__wfobR)}
          link={"https://www.fathym.com"}
        >
          {"Fathym"}
        </Button>
      </p.Stack>
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root", "link", "svg", "freeBox"],
  link: ["link", "svg"],
  svg: ["svg"],
  freeBox: ["freeBox"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader"
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`
  }
  return func
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    svg: makeNodeComponent("svg"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps,
  }
)

export default PlasmicHeader
/* prettier-ignore-end */
