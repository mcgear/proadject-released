// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hhYAirYt8bU9TEjNgFzExf
// Component: m8MF3DD_Un
import * as React from "react"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import Footer from "../../Footer" // plasmic-import: tnj0d_eW4Ts/component
import "@plasmicapp/react-web/lib/plasmic.css"
import * as sty from "./PlasmicHabistackFooter.module.css" // plasmic-import: m8MF3DD_Un/css

export const PlasmicHabistackFooter__VariantProps = new Array()

export const PlasmicHabistackFooter__ArgProps = new Array()

function PlasmicHabistackFooter__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  return (
    <Footer
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    />
  )
}

const PlasmicDescendants = {
  root: ["root"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHabistackFooter__ArgProps,
      internalVariantPropNames: PlasmicHabistackFooter__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicHabistackFooter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicHabistackFooter"
  } else {
    func.displayName = `PlasmicHabistackFooter.${nodeName}`
  }
  return func
}

export const PlasmicHabistackFooter = Object.assign(
  // Top-level PlasmicHabistackFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicHabistackFooter
    internalVariantProps: PlasmicHabistackFooter__VariantProps,
    internalArgProps: PlasmicHabistackFooter__ArgProps,
  }
)

export default PlasmicHabistackFooter
/* prettier-ignore-end */