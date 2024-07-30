'use client'
import React, { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";

interface AnnouncementProps {
    badgeName: string;
    text: string;
}

export default function Announcement({ badgeName, text }: AnnouncementProps) {
    const [isOpen, setIsOpen] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    const handleClose = () => {
        setIsFadingOut(true);
        setTimeout(() => {
            setIsOpen(false);
        }, 500);
    };

    return (
        isOpen && (
            <div className={`text-center py-4 lg:px-4 transition-opacity duration-300 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
                <div className={`p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex inline-flex}`} role="alert">
                    <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">{badgeName}</span>
                    <span className="font-semibold mr-2 text-left flex-auto">{text}</span>
                    <button onClick={handleClose} className="ml-2 focus:outline-none">
                        <IoMdCloseCircle className="text-white size-5 mr-2"/>
                    </button>
                </div>
            </div>
        )
    );
}
