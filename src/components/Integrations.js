export default function Integrations() {
  return (
    <section className="bg-[#172B36] py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-4 mb-8">
          {[0,1,2,3].map(i => (
            <div key={i} className="w-9 h-9 rounded-full border border-[#F1F6F4]/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full border border-[#F1F6F4]/40" />
            </div>
          ))}
        </div>
        <h2 className="font-['JetBrains_Mono'] text-3xl md:text-5xl font-bold text-[#F1F6F4] leading-tight mb-6">
          Integrate with the world&apos;s most powerful neural engines. Seamlessly connect your custom data to GPT-4, Claude 3, and Perplexity for unmatched precision. Build agents that don&apos;t just process, they understand.
        </h2>
        <p className="text-[#F1F6F4]/40 text-sm max-w-xl">
          Unlock the full potential of LLM-native workflows. Our infrastructure ensures low latency and high-fidelity output for every request.
        </p>
      </div>
    </section>
  )
}