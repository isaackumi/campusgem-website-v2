"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/atoms/Button";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/cn";

const fieldClass =
  "w-full rounded-md border border-white/12 bg-void px-3.5 py-3 text-sm font-medium text-ink placeholder:text-ink-muted/70 transition-colors duration-200 focus-visible:border-gold/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const topic = String(data.get("topic") ?? "General").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`${topic} · message from ${name || "Campus GEM visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
    );

    setStatus("ready");
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            Name
          </span>
          <input
            className={fieldClass}
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            Email
          </span>
          <input
            className={fieldClass}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
          I want to
        </span>
        <select
          className={cn(fieldClass, "cursor-pointer appearance-none")}
          name="topic"
          defaultValue="Visit a gathering"
          required
        >
          <option>Visit a gathering</option>
          <option>Join a campus fellowship</option>
          <option>Ask about Eagles Camp</option>
          <option>Partner / give</option>
          <option>General question</option>
        </select>
      </label>

      <label className="block space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
          Message
        </span>
        <textarea
          className={cn(fieldClass, "min-h-32 resize-y")}
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help you find your place."
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg">
          Send message
        </Button>
        <p className="text-sm text-ink-muted">
          Opens your email app to send to {siteConfig.email}.
        </p>
      </div>

      {status === "ready" ? (
        <p className="text-sm text-gold-soft" role="status">
          If nothing opened, email us directly at {siteConfig.email}.
        </p>
      ) : null}
    </form>
  );
}
