import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ComponentItemProps {
  name: string;
  icon: LucideIcon;
}

export function ComponentItem({ name, icon: Icon }: ComponentItemProps) {
  return (
    <div
      className="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
      draggable
    >
      <Icon className="w-5 h-5 text-gray-600 mr-3" />
      <span className="text-sm text-gray-700">{name}</span>
    </div>
  );
}