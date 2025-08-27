import { useState } from 'react';

export default function InvitationSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  }

  return (
    <section id="invite" className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
      <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-8 md:p-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="text-xs tracking-widest text-neutral-400">INVITATION</span>
        </div>
        <h3 className="font-serif text-2xl text-neutral-100 md:text-3xl">Private Viewing List</h3>
        <p className="mt-3 text-neutral-300">Receive an early window into releases, ateliers, and scripture studies that informed the work.</p>
        {submitted ? (
          <p className="mt-6 rounded-lg border border-emerald-800/50 bg-emerald-900/20 p-4 text-sm text-emerald-200">
            Thank you. Your invitation is reserved. We will be in touch.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-neutral-800 bg-black/40 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-500 outline-none focus:border-amber-300"
            />
            <button
              type="submit"
              className="rounded-lg bg-amber-300 px-5 py-3 text-sm font-semibold text-neutral-950 hover:brightness-95"
            >
              Request Invite
            </button>
          </form>
        )}
        <p className="mt-3 text-xs text-neutral-500">By subscribing, you consent to receive communications from FOTTOKOGAE. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
