import { formatDistance } from 'date-fns';
import TypeIcon from '../components/TypeIcon';
import Image from 'next/image';
import Form from 'next/form';

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

interface PageProps {
	searchParams?: Promise<{ [key: string]: string | string[] | undefined}>;
}

export default async function Page({ searchParams }: PageProps) {
	const typeFilter = (await searchParams)?.type || '';

	const data = await fetch('http://localhost:3000/api/feed');
	const json = await data.json();

	const res = typeFilter ? json.filter((item: Item) => item.Type === typeFilter) : json;
	const now = new Date();

	return (
		<div>
			<Form action="/" className="max-w-sm mx-auto m-2 flex items-center justify-center">
				<select name="type" className="bg-gray-700 border border-gray-600 placeholder-gray-400 text-white text-sm text-center block w-auto p-2.5 rounded-lg" defaultValue={typeFilter}>
					<option value="">All</option>
					<option value="ANIME_LIST">Anime</option>
					<option value="MANGA_LIST">Manga</option>
					<option value="music">Music</option>
					<option value="episode">Episode</option>
				</select>
				<button type="submit" className="mx-2 bg-gray-600 border border-gray-500 rounded-lg w-12">Filter</button>
			</Form>
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
		</div>
	);
}