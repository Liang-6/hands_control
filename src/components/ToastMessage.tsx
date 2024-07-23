import React, { useEffect } from 'react';

interface MessageProps {
    message: string;
    onClose: () => void;
}
//用于显示一个短暂的提示消息，并在指定时间后自动关闭
const ToastMessage: React.FC<MessageProps> = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 1500);

        return () => {
            clearTimeout(timer);
        };
    }, [onClose]);

    return (
        <div className="fixed top-8 ml-3 bg-red-500 text-white py-2 px-4 rounded shadow-xl transition-opacity duration-300">
            {message}
        </div>
    );
};

export default ToastMessage;