import { useEffect } from 'react';

// Components
import { Box } from '../../Box';

// Styles
import './_slider.scss';

// Hooks
import { useTags } from '../../../hook/useTags';
import { ErrorFailedFetch } from '../../errors';
import { Spinning } from '../../Loaders';

export const Slider = ({ className }) => {
	const { getAllTags, allTags, error, loading } = useTags();

	useEffect(() => {
		getAllTags();
	}, []);

	return (
		<Box className='slider-container'>
			<Box className={`slider ${className}`}>
				<>
					{loading ? (
						<Box className='loader_search'>
							<Spinning />
						</Box>
					) : (
						<>
							{!error ? (
								<>
									{allTags.map(tag => (
										<Box key={tag.id} className='tag_main slide'>
											{`"${tag.tag}"`}
										</Box>
									))}
								</>
							) : (
								<ErrorFailedFetch />
							)}
						</>
					)}
				</>
			</Box>
		</Box>
	);
};
