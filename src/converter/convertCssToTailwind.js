import { cssToTailwindMap } from "./cssToTailwindMap"

export function convertCssToTailwind(cssText) {
  if (!cssText) return ""

  const lines = cssText.split(";")
  const result = []

  for (let line of lines) {
    const cleaned = line
      .trim()
      .replace(/\s*:\s*/g, ":")

    if (!cleaned) continue

    const [property, value] = cleaned.split(":")

    const rule = cssToTailwindMap[property]
    if (!rule) continue

    const tailwindClass = rule[value]
    if (tailwindClass) {
      result.push(tailwindClass)
    }
  }

  return result.join(" ")
}