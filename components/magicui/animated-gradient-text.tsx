/*
<ai_context>
This client component provides an animated gradient text with purple colors.
</ai_context>
*/

import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export default function AnimatedGradientText({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_rgba(147,51,234,0.1)] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_rgba(147,51,234,0.2)] dark:bg-black/40",
        className
      )}
    >
      <div
        className={`animate-gradient absolute inset-0 block size-full bg-gradient-to-r from-purple-600/50 via-purple-400/50 to-purple-600/50 bg-[length:var(--bg-size)_100%] p-[1px] [border-radius:inherit] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
      />

      {children}
    </div>
  )
}
