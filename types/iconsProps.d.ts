import React, { FC } from "react"
// import { ImageProps } from "react-native"
import { SvgProps } from "react-native-svg"

export type TabIconprops = {
    focused: boolean,
    title: string,
    icon:FC<SvgProps>
}