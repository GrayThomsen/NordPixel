'use client';

import type { ReactNode } from 'react';

type SegmentState = {
  boundaryType: 'loading' | 'not-found' | 'error' | null;
  setBoundaryType: (_type: 'loading' | 'not-found' | 'error' | null) => void;
};

type SegmentViewNodeProps = {
  children?: ReactNode;
};

type SegmentStateProviderProps = {
  children?: ReactNode;
};

type SegmentViewStateNodeProps = {
  page: string;
};

export const SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE = 'NEXT_DEVTOOLS_SIMULATED_ERROR';

const noopSetBoundaryType: SegmentState['setBoundaryType'] = () => {};

// Workaround for Next.js devtools segment explorer runtime crash in dev.
// Keep the exported API shape compatible with Next's userspace module.
export function SegmentViewNode({ children }: SegmentViewNodeProps) {
  return <>{children ?? null}</>;
}

export function SegmentStateProvider({ children }: SegmentStateProviderProps) {
  return <>{children ?? null}</>;
}

export function SegmentViewStateNode(_props: SegmentViewStateNodeProps) {
  return null;
}

export function SegmentBoundaryTriggerNode() {
  return null;
}

export function useSegmentState(): SegmentState {
  return {
    boundaryType: null,
    setBoundaryType: noopSetBoundaryType,
  };
}

export default SegmentViewNode;
