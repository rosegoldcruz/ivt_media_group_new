import Script from "next/script"

export function GhlFormSection() {
  return (
    <section id="contact" className="px-6 py-24 border-t border-zinc-900/80">
      <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">Request Access.</h2>
          <p className="text-zinc-500 text-lg leading-relaxed text-balance">
            Share your details and IVT Media Group will follow up with the right next step.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-3 shadow-2xl shadow-black/40">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/7NCNH4ko17ESX5y3Oq8A"
            style={{ width: "100%", height: "760px", border: "none", borderRadius: "14px" }}
            id="inline-7NCNH4ko17ESX5y3Oq8A"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 8"
            data-height="760"
            data-layout-iframe-id="inline-7NCNH4ko17ESX5y3Oq8A"
            data-form-id="7NCNH4ko17ESX5y3Oq8A"
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            title="IVT Media Group contact form"
          />
        </div>
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </section>
  )
}
