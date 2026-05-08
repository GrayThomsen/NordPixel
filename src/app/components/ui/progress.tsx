import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, max = 100, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div
        ref={ref}
        className={cn('w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden', className)}
        {...props}
      >
        <div
          className="h-full bg-[#F5A623] transition-all duration-300 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }
);

Progress.displayName = 'Progress';
