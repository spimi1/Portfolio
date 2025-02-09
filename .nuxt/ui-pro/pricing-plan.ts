const orientation = [
  "horizontal",
  "vertical"
] as const

const variant = [
  "solid",
  "outline",
  "soft",
  "subtle"
] as const

export default {
  "slots": {
    "root": "relative grid rounded-[calc(var(--ui-radius)*2.5)] p-6 lg:p-8 xl:p-10 gap-6",
    "header": "",
    "body": "flex flex-col min-w-0",
    "footer": "flex flex-col gap-6 items-center",
    "titleWrapper": "flex items-center gap-3",
    "title": "text-[var(--ui-text-highlighted)] text-2xl sm:text-3xl text-pretty font-semibold",
    "description": "text-base text-pretty mt-2",
    "priceWrapper": "flex items-center gap-1",
    "price": "text-[var(--ui-text-highlighted)] text-3xl sm:text-4xl font-semibold",
    "discount": "text-[var(--ui-text-muted)] line-through text-xl sm:text-2xl",
    "billing": "flex flex-col justify-between min-w-0",
    "billingPeriod": "text-[var(--ui-text-toned)] truncate text-xs font-medium",
    "billingCycle": "text-[var(--ui-text-muted)] truncate text-xs font-medium",
    "features": "flex flex-col gap-3 flex-1 mt-6 grow-0",
    "feature": "flex items-center gap-2 min-w-0",
    "featureIcon": "size-5 shrink-0 text-[var(--ui-primary)]",
    "featureTitle": "text-sm truncate",
    "badge": "",
    "button": "",
    "tagline": "text-base font-semibold text-[var(--ui-text)]",
    "terms": "text-xs/5 text-[var(--ui-text-muted)] text-center text-balance"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "grid-cols-1 lg:grid-cols-3 justify-between divide-y lg:divide-y-0 lg:divide-x divide-[var(--ui-border)]",
        "body": "lg:col-span-2 pb-6 lg:pb-0 lg:pr-6 justify-center",
        "footer": "lg:justify-center lg:items-center lg:p-6 lg:max-w-xs lg:w-full lg:mx-auto",
        "features": "lg:grid lg:grid-cols-2 lg:mt-12"
      },
      "vertical": {
        "footer": "justify-end",
        "priceWrapper": "mt-6"
      }
    },
    "variant": {
      "solid": {
        "root": "bg-[var(--ui-bg-inverted)]",
        "title": "text-[var(--ui-bg)]",
        "description": "text-[var(--ui-text-dimmed)]",
        "price": "text-[var(--ui-bg)]",
        "discount": "text-[var(--ui-text-dimmed)]",
        "billingCycle": "text-[var(--ui-text-dimmed)]",
        "billingPeriod": "text-[var(--ui-text-dimmed)]",
        "featureTitle": "text-[var(--ui-text-dimmed)]"
      },
      "outline": {
        "root": "bg-[var(--ui-bg)] ring ring-inset ring-[var(--ui-border)]",
        "description": "text-[var(--ui-text-muted)]",
        "featureTitle": "text-[var(--ui-text-muted)]"
      },
      "soft": {
        "root": "bg-[var(--ui-bg-elevated)]/50",
        "description": "text-[var(--ui-text-toned)]",
        "featureTitle": "text-[var(--ui-text-toned)]"
      },
      "subtle": {
        "root": "bg-[var(--ui-bg-elevated)] ring ring-inset ring-[var(--ui-border-accented)]",
        "description": "text-[var(--ui-text)]",
        "featureTitle": "text-[var(--ui-text)]"
      }
    },
    "highlight": {
      "true": {
        "root": "ring-2 ring-inset ring-[var(--ui-primary)]"
      }
    },
    "scale": {
      "true": {
        "root": "lg:scale-[1.1] lg:z-[1]"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal" as typeof orientation[number],
      "variant": "soft" as typeof variant[number],
      "class": {
        "root": "divide-[var(--ui-border-accented)]"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "variant": "subtle" as typeof variant[number],
      "class": {
        "root": "divide-[var(--ui-border-accented)]"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "outline" as typeof variant[number]
  }
}