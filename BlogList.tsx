import React from 'react';
import { motion } from 'framer-motion';

const BlogList = ({ posts }) => (
  <div>
    {posts.map((post) => (
      <motion.div key={post._id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="border p-4 mb-4">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p>{post.description}</p>
        <p className="text-gray-500">{post.tags}</p>
      </motion.div>
    ))}
  </div>
);

export default BlogList;
