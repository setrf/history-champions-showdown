
import React from 'react';

interface LeaderFooterProps {
  years: string;
}

const LeaderFooter: React.FC<LeaderFooterProps> = ({ years }) => {
  return (
    <div className="px-4 py-2 border-t border-border text-center">
      <span className="text-xs text-muted-foreground">{years}</span>
    </div>
  );
};

export default LeaderFooter;
