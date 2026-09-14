"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "./icons";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
}

export function CopyEmailButton({ email, className = "" }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`v3-copy-button ${copied ? "copied" : ""} ${className}`.trim()}
      aria-label={copied ? "Email copiado al portapapeles" : `Copiar correo ${email}`}
      title={copied ? "¡Copiado!" : `Copiar ${email}`}
    >
      {copied ? (
        <>
          <CheckIcon className="v3-button-icon" />
          <span>¡Email copiado!</span>
        </>
      ) : (
        <>
          <CopyIcon className="v3-button-icon" />
          <span>Copiar email</span>
        </>
      )}
    </button>
  );
}
