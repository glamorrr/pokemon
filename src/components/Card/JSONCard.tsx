import clsx from 'clsx';
import { Card } from './Card';

interface ComponentProps {
  data: string;
  className?: string;
}

export const JSONCard: React.FC<ComponentProps> = ({ className, data }) => {
  return (
    <Card className={clsx('!p-0', className)}>
      <div className="py-2 text-center border-b-[1px] border-slate-300">
        <p>Data</p>
      </div>
      <pre className="p-8 overflow-auto h-80">{data}</pre>
    </Card>
  );
};
