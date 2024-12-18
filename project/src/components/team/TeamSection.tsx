import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from './TeamMember';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Lead Designer",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Michael Chen",
    role: "Tech Lead",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

export function TeamSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate experts dedicated to bringing your vision to life with cutting-edge web solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.name}
              {...member}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}