
import React from 'react';
import { Leader } from '@/data/leaders';

interface LeaderFooterProps {
  years: string;
}

const LeaderFooter: React.FC<LeaderFooterProps> = ({ years }) => {
  return (
    <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 text-xs text-gray-500 dark:text-gray-400">
      {years}
    </div>
  );
};

export default LeaderFooter;
