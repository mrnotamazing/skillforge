import { HashRouter, MemoryRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {
  BarChart3,
  BookOpen,
  Compass,
  GraduationCap,
  ShieldCheck,
  Users,
} from 'lucide-react';
import HomePage from './pages/HomePage';
import PracticePage from './pages/PracticePage';
import GrowthPage from './pages/GrowthPage';
import ManagerPage from './pages/ManagerPage';
import HRPage from './pages/HRPage';
import EthicsPage from './pages/EthicsPage';
import { providerIsLive } from './lib/ai/provider';

const NAV = [
  { to: '/', label: 'Overview', icon: Compass, end: true },
  { to: '/practice', label: 'Practice', icon: GraduationCap, end: false },
  { to: '/growth', label: 'My growth', icon: BarChart3, end: false },
  { to: '/manager', label: 'Manager', icon: Users, end: false },
  { to: '/hr', label: 'HR & workforce', icon: BookOpen, end: false },
  { to: '/ethics', label: 'Data & ethics', icon: ShieldCheck, end: false },
];

/**
 * Pick a router that works wherever this build is served.
 *
 * HashRouter drives navigation through the History API. Inside a sandboxed
 * iframe (an embedded preview, for example) the document can have an opaque
 * origin, and history.pushState then throws SecurityError. React Router
 * swallows that, so the first route renders but every nav click silently does
 * nothing. MemoryRouter keeps its history in memory and works everywhere, at
 * the cost of URL syncing -- so use it only when the History API is unusable.
 */
function historyIsUsable() {
  try {
    window.history.replaceState(window.history.state, '', window.location.href);
    return true;
  } catch {
    return false;
  }
}

const Router = historyIsUsable() ? HashRouter : MemoryRouter;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function Shell() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-40">
      <header className="border-b border-line bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink">
              <svg viewBox="0 0 32 32" className="h-5 w-5">
                <path
                  d="M9 21.5 L16 8 L23 21.5"
                  stroke="#60a5fa"
                  strokeWidth="2.6"
                  fill="none"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <circle cx="16" cy="18.5" r="2.3" fill="#f59e0b" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-[15px] font-semibold tracking-tight">SkillForge</div>
              <div className="text-[11px] text-slate-500">
                The judgement layer for AI-enabled work
              </div>
            </div>
          </div>

          <nav className="-mx-1 flex items-center gap-0.5 overflow-x-auto pb-1 lg:pb-0">
            {NAV.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-soft text-brand'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-ink'
                  }`
                }
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {!providerIsLive && (
        <div className="border-b border-amber-200 bg-amber-50">
          <div className="mx-auto max-w-7xl px-4 py-1.5 text-center text-[11px] text-amber-900 sm:px-6">
            Running in <strong>deterministic demo mode</strong> — no model API key
            configured. Reasoning analysis uses concept matching, not semantic
            understanding. Set <code className="font-mono">VITE_AI_API_KEY</code> to
            enable the live model.
          </div>
        </div>
      )}
      </div>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-7 sm:px-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/practice/:scenarioId" element={<PracticePage />} />
          <Route path="/growth" element={<GrowthPage />} />
          <Route path="/manager" element={<ManagerPage />} />
          <Route path="/hr" element={<HRPage />} />
          <Route path="/ethics" element={<EthicsPage />} />
        </Routes>
      </main>

      <footer className="border-t border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 text-[11px] leading-relaxed text-slate-500 sm:px-6">
          <p>
            <strong className="text-slate-700">SkillForge</strong> — academic prototype
            built for an Organisational Behaviour / HR project. All borrowers, documents,
            figures and cohort data are <strong>synthetic</strong>. No real company,
            customer or employee information is used. Capability figures are evidence for
            a human conversation, never verdicts, and are never used for promotion,
            performance rating or termination decisions.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Shell />
    </Router>
  );
}
