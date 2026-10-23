import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'yellow' | 'purple' | 'green' | 'amber' | 'slate' | 'outline-purple';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'purple',
  size = 'md',
  className = '',
  icon
}) => {
  const variantStyles = {
    yellow: 'bg-yellow-100 text-yellow-950 border border-yellow-300 font-medium',
    purple: 'bg-purple-100 text-purple-900 border border-purple-200 font-medium',
    green: 'bg-emerald-100 text-emerald-900 border border-emerald-200 font-medium',
    amber: 'bg-amber-100 text-amber-900 border border-amber-300 font-medium',
    slate: 'bg-slate-100 text-slate-800 border border-slate-200 font-normal',
    'outline-purple': 'bg-transparent text-purple-800 border border-purple-300 font-medium'
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 rounded-md gap-1',
    md: 'text-xs px-2.5 py-1 rounded-lg gap-1.5'
  };

  return (
    <span className={`inline-flex items-center font-semibold tracking-wide ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
