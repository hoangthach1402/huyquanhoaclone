import React from 'react';
import styles from './Tooltip.module.scss';
import classNames from 'classnames';

interface TooltipProps {
    children: React.ReactNode;
    content: string;
    position?: 'top' | 'right' | 'bottom' | 'left';
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, position = 'top' }) => {
    return (
        <div className={styles.tooltip}>
            {children}
            <span className={classNames(styles.tooltipText, styles[position])}>{content}</span>
        </div>
    );
};

export default Tooltip;
