import { useRef } from "react";

export function Current_color():string {
  const textRef = useRef<HTMLParagraphElement>(null);

  const checkColor = () => {
    if (textRef.current) {
      const color = window.getComputedStyle(textRef.current).color;
      alert(`Current text color is: ${color}`);
      return color
    }
    return "#000000"
  }
return checkColor()}

export function  toNum(lol:string | number, option: "int" | "string"){
    switch (option) {
        case "int":
            const str:string = String(lol).toUpperCase()
            let intval = 0
            if (str.toUpperCase() == "A"){
                intval = 10
            }
            else if (str.toUpperCase() == "B"){
                intval = 11
            }
            else if (str.toUpperCase() == "C"){
                intval = 12
            }
            else if (str.toUpperCase() == "D"){
                intval = 13
            }
            else if (str.toUpperCase() == "E"){
                intval = 14
            }
            else if (str.toUpperCase() == "F"){
                intval = 15
            } else {
                intval = parseInt(str)
            }
            return intval
        case "string":
            const intt:number = lol as number;
            let strval = ""
            if (intt == 10){
                strval = "A"
            }
            else if (intt == 11){
                strval = "B"
            }
            else if (intt == 12){
                strval = "C"
            }
            else if (intt == 13){
                strval = "D"
            }
            else if (intt == 14){
                strval = "E"
            }
            else if (intt >= 15){
                strval = "F"
            } else {
                strval = intt.toString()
            }
            return strval
    }
}

type Props_colorChange = {
  mode?: "light" | "combine"| "dark"
  color2?: string | null
  value?: number
}

export function colorChange(color:string, options:Props_colorChange= {}):string{
    const {mode = "light", color2 = null, value = 30} = options
    let non_hex = ""
    color.startsWith("#")? non_hex = color.split("#")[1]: non_hex = color 
    if (non_hex.length != 6) return color 
    const red = parseInt(non_hex.substring(0, 2), 16)
    const green = parseInt(non_hex.substring(2, 4), 16)
    const blue = parseInt(non_hex.substring(4, 6), 16)
    const toHex = (n: number) => Math.min(255, Math.max(0, Math.round(n))).toString(16).padStart(2, "0");
    switch (mode) {
        case "light":
          return `#${toHex(red + value)}${toHex(green + value)}${toHex(blue + value)}`
        case "dark":
          return `#${toHex(red - value)}${toHex(green - value)}${toHex(blue - value)}`
        case "combine":
            if (color2 == null){
                return color
            }
            const non_hex2 = color2.split("#")[1]
            const r1 = parseInt(non_hex.substring(0, 2), 16); //red
            const g1 = parseInt(non_hex.substring(2, 4), 16); //green
            const b1 = parseInt(non_hex.substring(4, 6), 16); //blue

            const r2 = parseInt(non_hex2.substring(0, 2), 16); //same but for color2
            const g2 = parseInt(non_hex2.substring(2, 4), 16);
            const b2 = parseInt(non_hex2.substring(4, 6), 16);

            const r = Math.round((r1 + r2) / 2); //combine
            const g = Math.round((g1 + g2) / 2);
            const b = Math.round((b1 + b2) / 2);
            return `#${toHex(r)}${toHex(g)}${toHex(b)}`
        default:
            return color
    }
}