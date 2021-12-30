import type { NextPage } from 'next';
import { useState } from 'react';
import Layout from '../components/Layout';
import useWindowDimensions from '../hooks/useWindowDimensions';

type techType = {
	name: string;
	images: {
		portrait: string;
		landscape: string;
	};
	description: string;
};

const technologyData: techType[] = [
	{
		name: 'Launch vehicle',
		images: {
			portrait: 'assets/technology/image-launch-vehicle-portrait.jpg',
			landscape: 'assets/technology/image-launch-vehicle-landscape.jpg',
		},
		description:
			"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
	},
	{
		name: 'Spaceport',
		images: {
			portrait: 'assets/technology/image-spaceport-portrait.jpg',
			landscape: 'assets/technology/image-spaceport-landscape.jpg',
		},
		description:
			'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
	},
	{
		name: 'Space capsule',
		images: {
			portrait: 'assets/technology/image-space-capsule-portrait.jpg',
			landscape: 'assets/technology/image-space-capsule-landscape.jpg',
		},
		description:
			"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
	},
];

const Technology: NextPage = () => {
	const { width } = useWindowDimensions();
	const [activeIndex, setActiveIndex] = useState(0);

	const currentTechnology: techType = technologyData[activeIndex];

	let imgSrc = currentTechnology.images.landscape;

	if (width > 699) {
		imgSrc = currentTechnology.images.portrait;
	}

	const handleChangeIndex = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<Layout page='technology' extraClassName='flow'>
			<>
				<h1 className='numbered-title'>
					<span>03</span>Space Launch 101
				</h1>
				<picture>
					<img src={imgSrc} alt='space-capsule' />
				</picture>

				<div className='numbers-list flex'>
					{technologyData.map((tech, index) => {
						return (
							<button
								aria-selected={index === activeIndex}
								className='small-button ff-serif'
								role='tab'
								onClick={() => {
									handleChangeIndex(index);
								}}
								key={index}
							>
								<span>{index + 1}</span>
							</button>
						);
					})}
				</div>
				<article className='tech-info flow'>
					<h2 className='fs-600 text-accent uppercase'>
						The Terminology...
					</h2>

					<p className='fs-700 uppercase ff-serif'>
						{currentTechnology.name}
					</p>
					<p className='text-accent'>
						{currentTechnology.description}
					</p>
				</article>
			</>
		</Layout>
	);
};

export default Technology;
