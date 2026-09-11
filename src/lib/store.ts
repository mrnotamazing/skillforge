import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AttemptRecord } from './types';

interface SkillForgeState {
  attempts: AttemptRecord[];
  /** Learner has read and accepted the data-use notice. */
  noticeAccepted: boolean;
  addAttempt: (a: AttemptRecord) => void;
  acceptNotice: () => void;
  resetProgress: () => void;
  attemptsFor: (scenarioId: string) => AttemptRecord[];
  bestFor: (scenarioId: string) => AttemptRecord | undefined;
}

export const useStore = create<SkillForgeState>()(
  persist(
    (set, get) => ({
      attempts: [],
      noticeAccepted: false,
      addAttempt: (a) => set((s) => ({ attempts: [...s.attempts, a] })),
      acceptNotice: () => set({ noticeAccepted: true }),
      resetProgress: () => set({ attempts: [] }),
      attemptsFor: (scenarioId) =>
        get().attempts.filter((a) => a.scenarioId === scenarioId),
      bestFor: (scenarioId) =>
        get()
          .attempts.filter((a) => a.scenarioId === scenarioId)
          .sort((x, y) => y.score.scrutiny - x.score.scrutiny)[0],
    }),
    { name: 'skillforge-progress' },
  ),
);
