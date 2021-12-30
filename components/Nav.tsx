import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';

type Props = {
	openMobile?: boolean;
};

const Layout: React.FC<Props> = ({
	children,
	openMobile = false,
	...props
}) => {
	return (
		<nav>
			<ul
				data-visible={openMobile}
				className='primary-navigation underline-indicators flex'
			>
				<NavLink href='/'>
					<li>
						<a
							className='
								uppercase
								text-white
								ff-sans-cond
								letter-spacing-2
							'
						>
							<span aria-hidden='true'>00</span> Home
						</a>
					</li>
				</NavLink>
				<NavLink href='/destination'>
					<li>
						<a
							className='
								uppercase
								text-white
								ff-sans-cond
								letter-spacing-2
							'
						>
							<span aria-hidden='true'>01</span> Destination
						</a>
					</li>
				</NavLink>
				<NavLink href='/crew'>
					<li>
						<a
							className='
								uppercase
								text-white
								ff-sans-cond
								letter-spacing-2
							'
						>
							<span aria-hidden='true'>02</span> Crew
						</a>
					</li>
				</NavLink>
				<NavLink href='/technology'>
					<li>
						<a
							className='
								uppercase
								text-white
								ff-sans-cond
								letter-spacing-2
							'
						>
							<span aria-hidden='true'>03</span> Technology
						</a>
					</li>
				</NavLink>
			</ul>
		</nav>
	);
};

export default Layout;
