// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hhYAirYt8bU9TEjNgFzExf
// Component: qhKuHWsMEEf
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import { useScreenVariants as useScreenVariants_01LSGjai6PPg } from "./PlasmicGlobalVariant__Screen" // plasmic-import: 01lSGjai6pPg/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_habistack_com.module.css" // plasmic-import: hhYAirYt8bU9TEjNgFzExf/projectcss
import * as sty from "./PlasmicHomeCta.module.css" // plasmic-import: qhKuHWsMEEf/css

export const PlasmicHomeCta__VariantProps = new Array()

export const PlasmicHomeCta__ArgProps = new Array()

function PlasmicHomeCta__RenderFunc(props) {
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__mkiYi)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"Powering weather applications"}
        </div>
      </p.Stack>

      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div className={classNames(projectcss.all, sty.freeBox___5Ylbo)} />
      ) : null}
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomeCta__ArgProps,
      internalVariantPropNames: PlasmicHomeCta__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicHomeCta__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeCta"
  } else {
    func.displayName = `PlasmicHomeCta.${nodeName}`
  }
  return func
}

export const PlasmicHomeCta = Object.assign(
  // Top-level PlasmicHomeCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicHomeCta
    internalVariantProps: PlasmicHomeCta__VariantProps,
    internalArgProps: PlasmicHomeCta__ArgProps,
  }
)

export default PlasmicHomeCta
/* prettier-ignore-end */