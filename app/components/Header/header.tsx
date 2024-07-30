interface HeaderProps {
    picture: string;
    name: string;
    username: string;
}

export default function Button({ picture, name, username }: HeaderProps) {
    const hoverEffect = "transform transition-transform duration-300 hover:scale-110";
    return (
        <div className={`text-center my-4 ${hoverEffect} cursor-pointer`}>
            <img className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                src={picture} alt="Profile Picutre" />
            <div className="py-2">
                <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">{name}</h3>
                <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                    {username}
                </div>
            </div>
        </div>
    );
};