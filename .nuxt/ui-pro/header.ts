const toggleSide = [
  "left",
  "right"
] as const

export default {
  "slots": {
    "root": "bg-[var(--ui-bg)]/75 backdrop-blur border-b border-[var(--ui-border)] sticky top-0 z-50",
    "container": "flex items-center justify-between gap-3 h-[var(--ui-header-height)]",
    "left": "lg:flex-1 flex items-center gap-1.5",
    "center": "hidden lg:flex",
    "right": "flex items-center justify-end lg:flex-1 gap-1.5",
    "title": "shrink-0 font-bold text-xl text-[var(--ui-text-highlighted)] flex items-end gap-1.5",
    "toggle": "lg:hidden",
    "content": "lg:hidden",
    "overlay": "lg:hidden",
    "header": "",
    "body": "p-4 sm:p-6 overflow-y-auto"
  },
  "variants": {
    "toggleSide": {
      "left": {
        "toggle": "-ms-1.5"
      },
      "right": {
        "toggle": "-me-1.5"
      }
    }
  }
}