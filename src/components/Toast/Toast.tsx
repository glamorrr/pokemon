import clsx from 'clsx';
import { Toast as ReactHotToast } from 'react-hot-toast';

interface ComponentProps {
  t: ReactHotToast;
  description: string;
  variant?: 'primary' | 'secondary';
}

export const Toast: React.FC<ComponentProps> = ({ t, description, variant = 'primary' }) => {
  return (
    <div
      className={clsx(
        t.visible ? 'animate-enter' : 'animate-leave',
        'rounded-full  font-medium px-6 shadow-lg max-w-md py-2',
        variant === 'primary' && 'bg-slate-800 text-white',
        variant === 'secondary' && 'bg-white text-slate-800 border-slate-300 border-[1px]'
      )}
    >
      {description}
    </div>
  );
};
