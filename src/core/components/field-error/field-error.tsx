import { ComponentProps } from 'react';
import { Text } from '../ui/text';
import { cn } from '@/core/lib/utils';

type FieldErrorProps = ComponentProps<typeof Text>;

export function FieldError({ children, ...props }: FieldErrorProps) {
  return (
    <Text {...props} className={cn('text-xs font-medium text-destructive', props.className)}>
      {children}
    </Text>
  );
}
