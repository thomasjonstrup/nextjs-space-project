import { useState, useEffect } from 'react';

type Props = {
	width: number;
	height: number;
};

const getWindowDimensions = (): Props => {
	console.log('window :>> ', window);
	const { innerWidth: width, innerHeight: height } = window;

	return {
		width,
		height,
	};
};

const useWindowDimensions = (): Props => {
	const [windowDimensions, setWindowDimensions] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		setWindowDimensions(getWindowDimensions());
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions(getWindowDimensions());
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	return windowDimensions;
};

export default useWindowDimensions;
