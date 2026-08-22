"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend wired up yet — swap this for a real submit handler
    // (API route, email service, CRM webhook, etc.) when ready.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-sm border border-line-light bg-pine-900/40 p-8">
        <p className="font-serif text-xl text-stone-50">
          Thank you — your enquiry has been noted.
        </p>
        <p className="mt-2 text-sm text-stone-50/60">
          This is a prototype form with no backend connected yet, so nothing was
          actually sent. Once reservations@ is wired up, this message will
          confirm a real enquiry has gone through.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-9 flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Full name"
          required
          className="w-full border-0 border-b border-line-light bg-transparent py-3 text-[15px] text-stone-50 placeholder:text-stone-50/40 outline-none focus:border-brass-300"
        />
        <input
          type="email"
          placeholder="Email address"
          required
          className="w-full border-0 border-b border-line-light bg-transparent py-3 text-[15px] text-stone-50 placeholder:text-stone-50/40 outline-none focus:border-brass-300"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <input
          type="tel"
          placeholder="Phone / WhatsApp"
          className="w-full border-0 border-b border-line-light bg-transparent py-3 text-[15px] text-stone-50 placeholder:text-stone-50/40 outline-none focus:border-brass-300"
        />
        <input
          type="text"
          placeholder="Check-in — Check-out"
          className="w-full border-0 border-b border-line-light bg-transparent py-3 text-[15px] text-stone-50 placeholder:text-stone-50/40 outline-none focus:border-brass-300"
        />
      </div>
      <textarea
        placeholder="Tell us about your stay, conference or event..."
        rows={4}
        className="w-full resize-none border-0 border-b border-line-light bg-transparent py-3 text-[15px] text-stone-50 placeholder:text-stone-50/40 outline-none focus:border-brass-300"
      />
      <button
        type="submit"
        className="mt-3 inline-flex w-fit items-center gap-2.5 whitespace-nowrap rounded-sm bg-brass-500 px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.08em] text-pine-950 transition-colors hover:bg-brass-300">
        Send Enquiry
      </button>
    </form>
  );
}
