import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../components/Layout';

type crewType = {
	name: string;
	images: {
		png: string;
		webp: string;
	};
	role: string;
	bio: string;
};

const crewData: crewType[] = [
	{
		name: 'Douglas Hurley',
		images: {
			png: 'assets/crew/image-douglas-hurley.png',
			webp: 'assets/crew/image-douglas-hurley.webp',
		},
		role: 'Commander',
		bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
	},
	{
		name: 'Mark Shuttleworth',
		images: {
			png: 'assets/crew/image-mark-shuttleworth.png',
			webp: 'assets/crew/image-mark-shuttleworth.webp',
		},
		role: 'Mission Specialist',
		bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
	},
	{
		name: 'Victor Glover',
		images: {
			png: 'assets/crew/image-victor-glover.png',
			webp: 'assets/crew/image-victor-glover.webp',
		},
		role: 'Pilot',
		bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
	},
	{
		name: 'Anousheh Ansari',
		images: {
			png: 'assets/crew/image-anousheh-ansari.png',
			webp: 'assets/crew/image-anousheh-ansari.webp',
		},
		role: 'Flight Engineer',
		bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
	},
];

const Crew: NextPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const currentCrewMember: crewType = crewData[activeIndex];

	const handleChangeIndex = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<Layout page='crew' extraClassName='flow'>
			<>
				<h1 className='numbered-title'>
					<span>02</span>Meet Your Crew
				</h1>
				<picture>
					<source
						srcSet={currentCrewMember.images.webp}
						type='image/webp'
					/>
					<img
						src={currentCrewMember.images.png}
						alt={currentCrewMember.name}
					/>
				</picture>

				<div className='dot-indicators flex'>
					{crewData.map((crewMemberInfo, index) => {
						return (
							<button
								aria-selected={index === activeIndex}
								aria-controls='crew-tab'
								role='tab'
								onClick={() => {
									handleChangeIndex(index);
								}}
								key={index}
							>
								<span className='sr-only'>
									{crewMemberInfo.role}
								</span>
							</button>
						);
					})}
				</div>
				<article className='crew-details flow'>
					<h2 className='fs-600 ff-serif uppercase'>Commander</h2>

					<p className='fs-700 uppercase ff-serif'>Douglas Hurley</p>
					<p>
						Douglas Gerald Hurley is an American engineer, former
						Marine Corps pilot and former NASA astronaut. He
						launched into space for the third time as commander of
						Crew Dragon Demo-2.
					</p>
				</article>
			</>
		</Layout>
	);
};

export default Crew;
