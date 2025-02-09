export default {
  "slots": {
    "root": "relative border-b border-[var(--ui-border)] py-8",
    "container": "",
    "wrapper": "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",
    "headline": "mb-2.5 text-sm font-semibold text-[var(--ui-primary)] flex items-center gap-1.5",
    "title": "text-3xl sm:text-4xl text-pretty font-bold text-[var(--ui-text-highlighted)]",
    "description": "text-lg text-pretty text-[var(--ui-text-muted)]",
    "links": "flex flex-wrap items-center gap-1.5"
  },
  "variants": {
    "title": {
      "true": {
        "description": "mt-4"
      }
    }
  }
}