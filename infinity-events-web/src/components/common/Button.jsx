import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = "px-6 py-3 font-label-accent uppercase rounded-DEFAULT transition-all duration-300 flex items-center justify-center";
  
  const variants = {
    primary: "bg-primary-container text-on-primary-container hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]",
    secondary: "bg-transparent border border-white text-white hover:bg-white/10",
    outline: "bg-transparent border border-primary-container text-primary-container hover:bg-primary-container/10"
  };

  return (
    <motion.button 
      whileHover={{ scale: variant === 'primary' ? 1.02 : 1 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
