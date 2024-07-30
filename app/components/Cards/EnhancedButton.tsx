import React from 'react';
import { IconType } from 'react-icons';

type EnhancedButtonProps = {
    title: string;
    color: string | { start: string; end: string };
    isNew?: boolean;
    link: string;
    icon?: IconType;
};

export default function EnhancedButton({ title, color, isNew, link, icon: Icon }: EnhancedButtonProps) {
    let colorStyle = {};
    if (typeof color === 'string') {
        colorStyle = { backgroundColor: color };
    } else {
        colorStyle = { backgroundImage: `linear-gradient(to right, ${color.start}, ${color.end})` };
    }

    const hoverEffect = "transform transition-transform duration-300 hover:scale-110";

    return (
        <div className={`relative ${hoverEffect}`}>
            {isNew && (
                <div className="absolute -top-2 -right-2 bg-white px-2 py-1 text-xs font-bold rounded-lg shadow-md z-10">
                    NEW
                </div>
            )}
            <div className="rounded-lg shadow w-80 h-24">
                <a 
                    href={link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={colorStyle} 
                    className="flex items-center justify-center w-full h-full text-base font-medium text-white rounded-lg px-4 border border-transparent"
                >
                    {Icon && <Icon className="mr-2 h-6" />}
                    {title}
                </a>
            </div>
        </div>
    );
}
