'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MessageSquare, User } from 'lucide-react';
import Reveal from './Reveal';

/** Shared contact section: glass form wired to /api/contact, with robot artwork. */
export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; error?: string }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setResult({ ok: true });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await res.json().catch(() => ({}));
        setResult({ ok: false, error: data?.error || 'Failed to send message' });
      }
    } catch {
      setResult({ ok: false, error: 'Network error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full pl-12 pr-4 py-4 rounded-2xl bg-white/70 border border-white/80 font-['Manrope'] font-medium text-[16px] text-[#191938] placeholder:text-[#191938]/40 shadow-[inset_0_1px_2px_rgba(77,90,248,0.06)] focus:outline-none focus:ring-2 focus:ring-[#c05aff]/70 focus:bg-white transition";

  return (
    <section id="contact" className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-[100px] sm:pt-[140px] pb-[80px] sm:pb-[120px]">
      <Reveal direction="scale">
        <div className="glass rounded-[36px] sm:rounded-[48px] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <span className="eyebrow">
                <span className="w-8 h-[2px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] rounded-full" />
                Get in touch
              </span>
              <h2 className="font-['Outfit'] font-semibold text-[36px] sm:text-[46px] lg:text-[54px] tracking-[-1.5px] text-gradient mt-3 mb-4">
                Let&apos;s build together
              </h2>
              <p className="font-['Manrope'] font-medium text-[15px] sm:text-[16px] text-[#191938]/65 leading-[1.7] mb-8">
                Interested in working together? Send us your details and we will be in touch shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c05aff]" />
                  <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className={inputClass} />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c05aff]" />
                  <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className={inputClass} />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-[#c05aff]" />
                  <textarea
                    placeholder="Tell us about your project…"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className={`${inputClass} resize-none min-h-[150px]`}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center pt-2">
                  <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto">
                    {isSubmitting ? 'Sending…' : 'Send message'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  {result?.ok && (
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-['Manrope'] font-semibold text-sm">
                      <CheckCircle2 className="w-4 h-4" /> Thanks! We&apos;ll be in touch shortly.
                    </span>
                  )}
                  {result && !result.ok && <span className="text-red-500 font-['Manrope'] font-semibold text-sm">{result.error}</span>}
                </div>
              </form>
            </div>

            <div className="relative min-h-[280px] lg:min-h-full overflow-hidden">
              <img src="/images/robot-contact.png" alt="Friendly robot ready to help" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4d73f8]/30 via-transparent to-[#c05aff]/20 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
