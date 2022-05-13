import clsx from 'clsx';
import { Toast as ReactHotToast } from 'react-hot-toast';

interface ComponentProps {
  t: ReactHotToast;
  description: string;
}

export const Toast: React.FC<ComponentProps> = ({ t, description }) => {
  return (
    <div
      className={clsx(
        t.visible ? 'animate-enter' : 'animate-leave',
        'rounded-full bg-slate-800 text-white font-medium px-6 shadow-lg max-w-md py-2'
      )}
    >
      {description}
    </div>
  );
};
