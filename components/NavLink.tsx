import React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

export interface NavLinkProps extends LinkProps {
	children: React.ReactElement;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, ...props }) => {
	const router = useRouter();
	return (
		<Link href={href} {...props}>
			{router.pathname === href
				? React.cloneElement(children, { className: 'active' })
				: children}
		</Link>
	);
};

export default NavLink;
