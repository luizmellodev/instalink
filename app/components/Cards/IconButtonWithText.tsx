import { IconType } from 'react-icons';

type IconButtonWithTextProps = {
    title: string;
    color: string | { start: string; end: string };
    link: string;
    icon: IconType;
    username: string;
};

export default function IconButtonWithText({ title, color, link, icon: Icon, username }: IconButtonWithTextProps) {
    let colorStyle = {};
    if (typeof color === 'string') {
        colorStyle = { backgroundColor: color };
    } else {
        colorStyle = { backgroundImage: `linear-gradient(to right, ${color.start}, ${color.end})` };
    }

    const hoverEffect = "transform transition-transform duration-300 hover:scale-110";

    return (
        <div className={`relative ${hoverEffect}`}>
            <a 
                href={link} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center h-full"
            >
                <div className={`rounded-lg shadow w-80 h-24`} style={colorStyle}>
                    <div className="flex items-center justify-center w-full h-full">
                        <Icon className="h-12 text-white size-8" />
                    </div>
                </div>
                <div className="pt-2 text-left">
                    <div className="text-base font-medium text-white" style={{ fontSize: '24px' }}>{title}</div>
                    <div className="text-sm text-gray-500" style={{ fontSize: '14px' }}>{username}</div>
                </div>
            </a>
        </div>
    );
}
