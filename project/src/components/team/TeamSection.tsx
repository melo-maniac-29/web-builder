import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from './TeamMember';

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Lead Designer",
    imageUrl: "/team/designer.png"
  },
  {
    name: "Sarah Chen",
    role: "Tech Lead",
    imageUrl: "/team/developer.png"
  },
  {
    name: "Mike Rodriguez",
    role: "Product Manager",
    imageUrl: "/team/manager.png"
  },
  {
    name: "Emma Davis",
    role: "Senior Developer",
    imageUrl: "/team/engineer.png"
  }
];

export function TeamSection() {
  return (
    <section className="py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate experts dedicated to bringing your vision to life with cutting-edge web solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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