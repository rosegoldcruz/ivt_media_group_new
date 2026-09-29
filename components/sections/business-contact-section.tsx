const address = "5830 East 2nd Street, Suite 7000 #36157, Casper, Wyoming 82609"
const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

export function BusinessContactSection() {
  return (
    <section id="business-contact" className="border-t border-zinc-900 px-6 py-20" aria-labelledby="business-contact-title">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-500">IVT Media Group LLC</p>
        <h2 id="business-contact-title" className="font-display text-4xl font-bold text-zinc-100 md:text-5xl">Business contact</h2>
        <p className="mt-4 max-w-2xl text-zinc-400">Contact our team directly or use the mailing address below.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">Phone and email</h3>
            <div className="grid grid-cols-[105px_minmax(0,1fr)] gap-2 border-t border-zinc-800 py-4 text-[11px] text-zinc-100 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-4 sm:text-base">
              <a href="tel:+15203555616" className="whitespace-nowrap hover:underline">520-355-5616</a>
              <a href="mailto:chris@ivtmediagroup.com" className="whitespace-nowrap hover:underline">chris@ivtmediagroup.com</a>
            </div>
            <div className="grid grid-cols-[105px_minmax(0,1fr)] gap-2 border-t border-zinc-800 py-4 text-[11px] text-zinc-100 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-4 sm:text-base">
              <a href="tel:+18883682502" className="whitespace-nowrap hover:underline">888-368-2502</a>
              <a href="mailto:support@ivtmediagroup.com" className="whitespace-nowrap hover:underline">support@ivtmediagroup.com</a>
            </div>

            <h3 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wider text-zinc-400">Business mailing address</h3>
            <address className="not-italic leading-7 text-zinc-200">
              IVT Media Group LLC<br />
              5830 East 2nd Street<br />
              Suite 7000 #36157<br />
              Casper, Wyoming 82609
            </address>
          </div>

          <div className="min-h-[320px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
            <iframe
              title="Google Map of the IVT Media Group mailing address in Casper, Wyoming"
              src={mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full min-h-[320px] w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
