export const cssToTailwindMap = {
  display: {
    flex: "flex",
    block: "block",
    inline: "inline",
    "inline-block": "inline-block",
    grid: "grid",
    none: "hidden",
  },

  position: {
    static: "static",
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
    sticky: "sticky",
  },

  "flex-direction": {
    row: "flex-row",
    column: "flex-col",
    "row-reverse": "flex-row-reverse",
    "column-reverse": "flex-col-reverse",
  },

  "flex-wrap": {
    wrap: "flex-wrap",
    nowrap: "flex-nowrap",
    "wrap-reverse": "flex-wrap-reverse",
  },

  "justify-content": {
    "flex-start": "justify-start",
    "flex-end": "justify-end",
    center: "justify-center",
    "space-between": "justify-between",
    "space-around": "justify-around",
    "space-evenly": "justify-evenly",
  },

  "align-items": {
    stretch: "items-stretch",
    "flex-start": "items-start",
    "flex-end": "items-end",
    center: "items-center",
    baseline: "items-baseline",
  },

  gap: {
    "0": "gap-0",
    "0.25rem": "gap-1",
    "0.5rem": "gap-2",
    "0.75rem": "gap-3",
    "1rem": "gap-4",
    "1.5rem": "gap-6",
    "2rem": "gap-8",
    "3rem": "gap-12",
  },

  padding: {
    "0": "p-0",
    "0.25rem": "p-1",
    "0.5rem": "p-2",
    "0.75rem": "p-3",
    "1rem": "p-4",
    "1.5rem": "p-6",
    "2rem": "p-8",
  },

  margin: {
    "0": "m-0",
    auto: "m-auto",
    "0.25rem": "m-1",
    "0.5rem": "m-2",
    "1rem": "m-4",
    "2rem": "m-8",
  },

  width: {
    auto: "w-auto",
    "100%": "w-full",
    "100vw": "w-screen",
  },

  height: {
    auto: "h-auto",
    "100%": "h-full",
    "100vh": "h-screen",
  },

  "text-align": {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  },

  "font-weight": {
    "100": "font-thin",
    "200": "font-extralight",
    "300": "font-light",
    "400": "font-normal",
    "500": "font-medium",
    "600": "font-semibold",
    "700": "font-bold",
    "800": "font-extrabold",
    "900": "font-black",
  },

  "border-radius": {
    "0": "rounded-none",
    "0.125rem": "rounded-sm",
    "0.25rem": "rounded",
    "0.375rem": "rounded-md",
    "0.5rem": "rounded-lg",
    "0.75rem": "rounded-xl",
    "1rem": "rounded-2xl",
    "9999px": "rounded-full",
  },

  opacity: {
    "0": "opacity-0",
    "0.25": "opacity-25",
    "0.5": "opacity-50",
    "0.75": "opacity-75",
    "1": "opacity-100",
  },

  overflow: {
    hidden: "overflow-hidden",
    auto: "overflow-auto",
    scroll: "overflow-scroll",
    visible: "overflow-visible",
  },

  cursor: {
    pointer: "cursor-pointer",
    default: "cursor-default",
    "not-allowed": "cursor-not-allowed",
  },

  visibility: {
    hidden: "invisible",
    visible: "visible",
  },
}