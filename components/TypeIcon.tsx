interface TypeIconProps {
    type: string;
}

const TypeIcon = ({ type }: TypeIconProps) => {
    switch (type) {
        case 'ANIME_LIST':
        case 'episode':
            return (
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 11-6-2V9l6-2v10Z"/>
				</svg>
            );
    }
};

export default TypeIcon;