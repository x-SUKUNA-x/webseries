import React, { useEffect } from 'react';
import './Auth.css';

const Notification = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // Auto close after 3 seconds

        return () => clearTimeout(timer);
    }, [onClose]);

    if (!message) return null;

    return (
        <div className={`notification-container ${type}`}>
            <div className="notification-content">
                {message}
            </div>
            <button className="notification-close" onClick={onClose}>&times;</button>
        </div>
    );
};

export default Notification;
