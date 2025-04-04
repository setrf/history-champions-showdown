
import React from 'react';
import { CalendarDays } from 'lucide-react';

interface LeaderFooterProps {
  years: string;
}

const LeaderFooter: React.FC<LeaderFooterProps> = ({ years }) => {
  return (
    <div className="px-4 py-3 border-t border-border bg-muted/30 dark:bg-gray-800/30 flex items-center justify-center">
      <div className="flex items-center text-xs text-muted-foreground">
        <CalendarDays className="w-3.5 h-3.5 mr-1.5" />
        <span>{years}</span>
      </div>
    </div>
  );
};

export default LeaderFooter;
