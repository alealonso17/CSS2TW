export const cssToTailwindMap = {

  /* =========================
     DISPLAY
  ========================== */
  display: {
    block: "block",
    inline: "inline",
    "inline-block": "inline-block",
    flex: "flex",
    grid: "grid",
    none: "hidden",
  },

  /* =========================
     POSITION
  ========================== */
  position: {
    static: "static",
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
    sticky: "sticky",
  },

  inset: {
    "0": "inset-0",
    auto: "inset-auto",
  },

  top: {
    "0": "top-0",
    auto: "top-auto",
  },

  right: {
    "0": "right-0",
    auto: "right-auto",
  },

  bottom: {
    "0": "bottom-0",
    auto: "bottom-auto",
  },

  left: {
    "0": "left-0",
    auto: "left-auto",
  },

  /* =========================
     FLEXBOX
  ========================== */
  "flex-direction": {
    row: "flex-row",
    column: "flex-col",
    "row-reverse": "flex-row-reverse",
    "column-reverse": "flex-col-reverse",
  },

  "flex-wrap": {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
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

  "align-self": {
    auto: "self-auto",
    "flex-start": "self-start",
    "flex-end": "self-end",
    center: "self-center",
    stretch: "self-stretch",
  },

  "align-content": {
    start: "content-start",
    center: "content-center",
    end: "content-end",
    between: "content-between",
    around: "content-around",
    evenly: "content-evenly",
  },

  flex: {
    "1": "flex-1",
    auto: "flex-auto",
    initial: "flex-initial",
    none: "flex-none",
  },

  /* =========================
     GRID
  ========================== */
  "grid-template-columns": {
    "1": "grid-cols-1",
    "2": "grid-cols-2",
    "3": "grid-cols-3",
    "4": "grid-cols-4",
    "5": "grid-cols-5",
    "6": "grid-cols-6",
    "12": "grid-cols-12",
  },

  "grid-template-rows": {
    "1": "grid-rows-1",
    "2": "grid-rows-2",
    "3": "grid-rows-3",
    "4": "grid-rows-4",
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

  /* =========================
     SPACING
  ========================== */
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

  /* =========================
     SIZE
  ========================== */
  width: {
    auto: "w-auto",
    "100%": "w-full",
    "100vw": "w-screen",
    fit: "w-fit",
    min: "w-min",
    max: "w-max",
  },

  height: {
    auto: "h-auto",
    "100%": "h-full",
    "100vh": "h-screen",
    fit: "h-fit",
  },

  /* =========================
     TEXT
  ========================== */
  "text-align": {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  },

  "font-size": {
    "0.75rem": "text-xs",
    "0.875rem": "text-sm",
    "1rem": "text-base",
    "1.125rem": "text-lg",
    "1.25rem": "text-xl",
    "1.5rem": "text-2xl",
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

  "line-height": {
    "1": "leading-none",
    "1.25": "leading-tight",
    "1.5": "leading-normal",
    "2": "leading-loose",
  },

  /* =========================
     BORDERS
  ========================== */
  "border-width": {
    "0": "border-0",
    "1px": "border",
    "2px": "border-2",
    "4px": "border-4",
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

  /* =========================
     EFFECTS
  ========================== */
  opacity: {
    "0": "opacity-0",
    "0.25": "opacity-25",
    "0.5": "opacity-50",
    "0.75": "opacity-75",
    "1": "opacity-100",
  },

  "box-shadow": {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
  },

  /* =========================
     OVERFLOW
  ========================== */
  overflow: {
    hidden: "overflow-hidden",
    auto: "overflow-auto",
    scroll: "overflow-scroll",
    visible: "overflow-visible",
  },

  /* =========================
     INTERACTION
  ========================== */
  cursor: {
    pointer: "cursor-pointer",
    default: "cursor-default",
    "not-allowed": "cursor-not-allowed",
    wait: "cursor-wait",
    text: "cursor-text",
  },

  "pointer-events": {
    none: "pointer-events-none",
    auto: "pointer-events-auto",
  },

  visibility: {
    hidden: "invisible",
    visible: "visible",
  },

};