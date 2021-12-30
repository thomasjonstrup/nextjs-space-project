import type { NextPage } from 'next';
import { useState } from 'react';
import Layout from '../components/Layout';

type destinationType = {
	name: string;
	images: {
		png: string;
		webp: string;
	};
	description: string;
	distance: string;
	travel: string;
};

const destinations: destinationType[] = [
	{
		name: 'Moon',
		images: {
			png: 'assets//destination/image-moon.png',
			webp: 'assets//destination/image-moon.webp',
		},
		description:
			'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
		distance: '384,400 km',
		travel: '3 days',
	},
	{
		name: 'Mars',
		images: {
			png: 'assets//destination/image-mars.png',
			webp: 'assets//destination/image-mars.webp',
		},
		description:
			'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
		distance: '225 mil. km',
		travel: '9 months',
	},
	{
		name: 'Europa',
		images: {
			png: 'assets//destination/image-europa.png',
			webp: 'assets//destination/image-europa.webp',
		},
		description:
			'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
		distance: '628 mil. km',
		travel: '3 years',
	},
	{
		name: 'Titan',
		images: {
			png: 'assets//destination/image-titan.png',
			webp: 'assets//destination/image-titan.webp',
		},
		description:
			'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
		distance: '1.6 bil. km',
		travel: '7 years',
	},
];

const Destination: NextPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const currentDestination: destinationType = destinations[activeIndex];

	const handleChangeIndex = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<Layout page='destination' extraClassName='flow'>
			<h1 className='numbered-title'>
				<span>01</span>Pick your destination
			</h1>
			<picture id='europa-image'>
				<source
					srcSet={currentDestination.images.webp}
					type='image/webp'
				/>
				<img
					src={currentDestination.images.png}
					alt={currentDestination.name}
				/>
			</picture>
			<div className='tab-list flex underline-indicators'>
				{destinations.map((destination, index) => {
					return (
						<button
							aria-selected={index === activeIndex}
							className='uppercase ff-sans-cond text-accent letter-spacing-2'
							role='tab'
							onClick={() => {
								handleChangeIndex(index);
							}}
							key={index}
						>
							<span>{destination.name}</span>
						</button>
					);
				})}
			</div>
			<article className='destination-info flow'>
				<h2 className='fs-800 ff-serif uppercase'>
					{currentDestination.name}
				</h2>
				<p className='text-accent'>{currentDestination.description}</p>
				<div className='destination-meta flex'>
					<div>
						<h3 className='text-accent fs-200 uppercase'>
							Avg. distance
						</h3>
						<p className='ff-serif uppercase'>
							{currentDestination.distance}
						</p>
					</div>
					<div>
						<h3 className='text-accent fs-200 uppercase'>
							Est. Travel time
						</h3>
						<p className='ff-serif uppercase'>
							{currentDestination.travel}
						</p>
					</div>
				</div>
			</article>
		</Layout>
	);
};

export default Destination;
