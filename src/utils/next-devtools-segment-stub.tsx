import type { ReactNode } from 'react';

type SegmentViewNodeProps = {
  children?: ReactNode;
};

// Workaround for Next.js devtools segment explorer runtime crash in dev.
export function SegmentViewNode(_props: SegmentViewNodeProps) {
  return null;
}

export default SegmentViewNode;
