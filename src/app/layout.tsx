// styles
import './globals.css';

// const
import { montserrat } from '../constants';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='es'>
			<head>
				<title>Team Dev</title>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</head>
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
