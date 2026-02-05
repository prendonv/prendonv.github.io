import styles from './Button.module.css';

const Button = ({ children, onClick, variant = 'primary', icon: Icon, className = '', href, ...props }) => {
    const Component = href ? 'a' : 'button';

    return (
        <Component
            className={`${styles.button} ${styles[variant]} ${className}`}
            onClick={onClick}
            href={href}
            {...props}
        >
            {children}
            {Icon && <Icon size={20} weight="bold" className={styles.icon} />}
        </Component>
    );
};

export default Button;
