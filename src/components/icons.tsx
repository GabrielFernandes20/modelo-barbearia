import React from "react";

export function ScissorsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

export function RazorIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l3.5-3.5L14 17l-3.5 3.5a2.121 2.121 0 01-3 0L3 16a2.121 2.121 0 010-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7l4-4 5 5-4 4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 8l4 4" />
    </svg>
  );
}

export function BeerIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h10v12a2 2 0 01-2 2H7a2 2 0 01-2-2V8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10h3a2 2 0 012 2v3a2 2 0 01-2 2h-3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8a2 2 0 012-2h6a2 2 0 012 2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12v5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 12v5" />
    </svg>
  );
}

export function SparklesIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" />
    </svg>
  );
}

export function ClockIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function StarIcon({ className = "w-5 h-5", fill = "currentColor" }: { className?: string; fill?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth={1.5}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function MapPinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.905.534 3.684 1.458 5.205L2 22l4.896-1.427a10.02 10.02 0 005.135 1.458h.005c5.535 0 10.031-4.496 10.031-10.031A10.007 10.007 0 0012.031 2zm0 18.358h-.004a8.318 8.318 0 01-4.24-1.157l-.304-.18-3.15.918.924-3.072-.198-.315a8.313 8.313 0 01-1.278-4.521c0-4.595 3.738-8.333 8.336-8.333a8.29 8.29 0 015.892 2.441 8.293 8.293 0 012.44 5.892c0 4.596-3.738 8.334-8.418 8.334zm4.567-6.241c-.25-.125-1.48-.73-1.71-.813-.23-.083-.396-.125-.563.125-.167.25-.646.813-.792.98-.146.166-.292.187-.542.062s-1.057-.39-2.013-1.242c-.744-.663-1.246-1.482-1.392-1.732-.146-.25-.016-.385.109-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438s-.563-1.354-.77-1.854c-.203-.487-.41-.421-.563-.429l-.479-.008c-.167 0-.438.062-.667.313-.23.25-.875.855-.875 2.084s.896 2.417 1.021 2.584c.125.167 1.764 2.693 4.274 3.777.597.258 1.064.412 1.428.528.6.191 1.147.164 1.579.1.481-.072 1.48-.605 1.688-1.189.208-.584.208-1.084.146-1.189-.063-.104-.229-.167-.479-.292z" />
    </svg>
  );
}

export function CheckCircleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export function MenuIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function CrownIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18M4 14l3-7 5 5 5-5 3 7H4z" />
    </svg>
  );
}
