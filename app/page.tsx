import { formatDistance } from 'date-fns';
import TypeIcon from '../components/TypeIcon';
import Image from 'next/image';

interface Item {
	rowid: number;
	ID: string;
	Name: string;
	CreatedAt: string;
	Author: string;
	Type: string;
	Status: string;
	Progress: string;
	Image: string;
}

export default async function Page() {
	const now = new Date();

	const data = await fetch('http://localhost:3000/api/feed');
	const res = await data.json();

	return (
		<div className="grid grid-cols-4 gap-4 items-center justify-items-center">
			{res.map((item: Item) => (
				<div key={item.rowid} className="relative flex flex-row items-center min-w-full overflow-hidden shadow-lg w-80 h-32 bg-gray-800 rounded-lg">			
					<Image
						className="rounded-l"
						width={128}
						height={128}
						src={item.Image}
						alt={item.Name}
					/>
					<div className="absolute bottom-2 right-2">
						<TypeIcon type={item.Type} />
					</div>
					<div className="px-6 py-4 flex flex-col items-center justify-between text-center w-full">
						<div className="font-bold text-xl mb-2">{item.Name}</div>
						<p className="text-base">{item.Status} {item.Progress}</p>
						<p className="text-base">{formatDistance(new Date(parseInt(item.CreatedAt) * 1000), now, { addSuffix: true })}</p>
					</div>
				</div>
			))};
		</div>
	);
}