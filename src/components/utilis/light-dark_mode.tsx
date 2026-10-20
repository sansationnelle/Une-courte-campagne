import { Dark_mode, Light_mode } from "../../types/light-dark_mode"

const mode = "dark"

export function Get_text_color(){
    if (mode == "dark") {
        return Dark_mode.text
    } else {
        return Light_mode.text
    }
}

export function Get_bg_color(){
    if (mode == "dark") {
        return Dark_mode.bg_color
    } else {
        return Light_mode.bg_color
    }
}

export function Get_border_color(){
    if (mode == "dark") {
        return Dark_mode.border_color
    } else {
        return Light_mode.border_color
    }
}

export function Get_header_color(){
    if (mode == "dark") {
        return Dark_mode.header_color
    } else {
        return Light_mode.header_color
    }
}
