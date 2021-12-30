import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<Layout page='home'>
			<div>
				<h1
					className='
						text-accent
						fs-500
						ff-sans-cond
						uppercase
						letter-spacing-1
					'
				>
					So, you want to travel to 2
					<span className='d-block fs-900 ff-serif text-white'>
						Space
					</span>
				</h1>
				<p>
					Let’s face it; if you want to go to space, you might as well
					genuinely go to outer space and not hover kind of on the
					edge of it. Well sit back, and relax because we’ll give you
					a truly out of this world experience!
				</p>
			</div>

			<div>
				<a
					href='#'
					className='large-button uppercase ff-serif text-dark bg-white'
				>
					Explore
				</a>
			</div>
		</Layout>
	);
};

export default Home;
