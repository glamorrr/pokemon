import clsx from 'clsx';

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<ComponentProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-md shadow-sm border-[1px] border-slate-300 p-8 overflow-auto',
        className
      )}
    >
      {children}
    </div>
  );
};
