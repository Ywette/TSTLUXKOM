// components/ui/Button.jsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import '../../app/stylings/Button.css';

/**
 * Button Component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content inside the button
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {'primary'|'secondary'|'outline'} [props.variant='primary'] - Button style variant
 * @returns {JSX.Element}
 */
const Button = ({ 
    children, 
    className = '', 
    variant = 'primary',
    ...props 
}) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`btn btn-${variant} ${className}`}
            {...props}
        >
            <span className="btn-content">{children}</span>
        </motion.button>
    );
};

export default Button;