import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css'
				/>

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Bellefair&family=Barlow:wght@400;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<a className='skip-to-content' href='#main'>
					Skip to content
				</a>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
