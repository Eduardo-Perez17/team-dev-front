import { memo, useEffect, useState } from 'react';

// Components
import { Paragraph } from '../Paragraph';

const TruncatedTexts = ({ posts, index }) => {
	const [truncatedTexts, setTruncatedTexts] = useState([]);

	useEffect(() => {
		if (!posts || posts.length === 0) return;

		const maxLength = 80;
		const updatedTruncatedTexts = posts.map(post => {
			const textToTruncate = post.content;
			const truncatedText =
				textToTruncate.length > maxLength
					? `${textToTruncate.substring(0, maxLength)}...`
					: textToTruncate;
			return truncatedText;
		});
		setTruncatedTexts(updatedTruncatedTexts);
	}, [posts]);

	return <Paragraph key={index}>{truncatedTexts[index]}</Paragraph>
};

export default memo(TruncatedTexts);
