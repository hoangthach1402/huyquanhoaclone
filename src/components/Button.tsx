// Button.js
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
    to?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    color?: 'primary' | 'secondary';
    size?: 'large' | 'small';
    className?: string; 
}

const Button: React.FC<ButtonProps> = ({ to, onClick, children, color = 'primary', size = 'large',className }) => {
    const buttonClassNames = classNames(styles.button, styles[color], styles[size], className);

    // Add an explicit condition to determine which kind of button we render
    if (to) {
        const LinkButtonProps: LinkProps = { to, className: buttonClassNames, children };

        return <Link {...LinkButtonProps} />;
    } else {
        const StandardButtonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
            onClick,
            className: buttonClassNames,
            children,
            type: 'button'
        };

        return <button {...StandardButtonProps} />;
    }
};

export default Button;
