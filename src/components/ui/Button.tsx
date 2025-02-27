// components/ui/Button.tsx
"use client";  // Add this line since we're using framer-motion
import React from 'react';  // Add this import
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
}

// components/ui/Button.tsx
const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            
                        className={`relative overflow-hidden text-white rounded-md transition-all duration-300  group bg-pink-300 ${className}`}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            
        </motion.button>
    );
};

export default Button;