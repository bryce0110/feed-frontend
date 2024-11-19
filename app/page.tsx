import { formatDistance } from 'date-fns';
import TypeIcon from '../components/TypeIcon';

interface Item {
	ID: number;
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

	let data = await fetch('http://localhost:3000/api/feed');
	let res = await data.json();

	return (
		<div className="grid grid-cols-4 gap-4 items-center justify-items-center">
			{res.map((item: Item) => (
				<div key={item.ID} className="relative flex justify-center items-center min-w-full overflow-hidden shadow-lg">
					<img className="w-32 rounded-l" src={item.Image} alt={item.Name} />
					<div className="absolute bottom-0 right-0">
						<TypeIcon type={item.Type} />
					</div>
					<div className="px-6 py-4 text-center">
						<div className="font-bold text-xl mb-2">{item.Name}</div>
						<p className="text-base">{item.Status} {item.Progress}</p>
						<p className="text-base">{formatDistance(new Date(parseInt(item.CreatedAt) * 1000), now, {addSuffix: true})}</p>
					</div>
				</div>
			))};
		</div>
	);
}