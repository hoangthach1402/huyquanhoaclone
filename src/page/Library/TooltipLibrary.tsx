import React from 'react';
import Tooltip from '../../components/Tooltip';

const TooltipDemo = () => {
    return (
        <div>
            <Tooltip content="Tooltip ở trên" position="top">
                <button>Hover lên tôi</button>
            </Tooltip>

            <Tooltip content="Tooltip ở dưới" position="bottom">
                <button>Hover lên tôi</button>
            </Tooltip>

            <Tooltip content="Tooltip ở bên trái" position="left">
                <button>Hover lên tôi</button>
            </Tooltip>

            <Tooltip content="Tooltip ở bên phải" position="right">
                <button>Hover lên tôi</button>
            </Tooltip>
        </div>
    );
};

export default TooltipDemo;
