import type { ReactNode } from 'react';
import { AlertTriangle, FlaskConical, Info } from 'lucide-react';
import { MATERIALITY_LABEL, type Materiality } from '../lib/types';

export function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function SectionTitle({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-5">
      {eyebrow && (
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-1.5">
          {eyebrow}
        </div>
      )}
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">{title}</h2>
      {sub && <p className="text-sm text-slate-600 mt-1.5 max-w-3xl leading-relaxed">{sub}</p>}
    </div>
  );
}

const MAT_STYLE: Record<Materiality, string> = {
  critical: 'bg-red-50 text-red-700 border-red-200',
  major: 'bg-orange-50 text-orange-700 border-orange-200',
  minor: 'bg-amber-50 text-amber-800 border-amber-200',
  cosmetic: 'bg-slate-100 text-slate-600 border-slate-200',
};

export function MaterialityBadge({ m }: { m: Materiality }) {
  return (
    <span
      className={`inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${MAT_STYLE[m]}`}
    >
      {MATERIALITY_LABEL[m]}
    </span>
  );
}

export function SyntheticBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border border-amber-300 bg-amber-50 px-2 py-1 text-[11px] font-medium text-amber-900 ${className}`}
    >
      <FlaskConical className="h-3 w-3" />
      Synthetic demonstration data — not measurements of real people
    </span>
  );
}

export function Note({
  icon = 'info',
  children,
}: {
  icon?: 'info' | 'warn';
  children: ReactNode;
}) {
  const Icon = icon === 'warn' ? AlertTriangle : Info;
  return (
    <div className="flex gap-2.5 rounded-lg border border-slate-200 bg-slate-50 p-3 text-[13px] leading-relaxed text-slate-700">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
      <div>{children}</div>
    </div>
  );
}

export function Meter({
  label,
  value,
  hint,
  tone = 'brand',
}: {
  label: string;
  value: number;
  hint?: string;
  tone?: 'brand' | 'good' | 'warn' | 'bad';
}) {
  const pctv = Math.max(0, Math.min(100, Math.round(value * 100)));
  const bar =
    tone === 'good'
      ? 'bg-green-600'
      : tone === 'warn'
        ? 'bg-amber-500'
        : tone === 'bad'
          ? 'bg-red-600'
          : 'bg-brand';
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[13px] font-medium text-slate-700">{label}</span>
        <span className="text-sm font-semibold tabular-nums text-ink">{pctv}%</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
        <div className={`h-full rounded-full ${bar}`} style={{ width: `${pctv}%` }} />
      </div>
      {hint && <p className="mt-1 text-[11px] leading-snug text-slate-500">{hint}</p>}
    </div>
  );
}

export function Stat({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub?: string;
  tone?: 'good' | 'bad' | 'neutral';
}) {
  const color =
    tone === 'good' ? 'text-green-700' : tone === 'bad' ? 'text-red-700' : 'text-ink';
  return (
    <Card className="p-4">
      <div className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <div className={`mt-1 text-2xl font-semibold tabular-nums ${color}`}>{value}</div>
      {sub && <div className="mt-0.5 text-[11px] leading-snug text-slate-500">{sub}</div>}
    </Card>
  );
}
