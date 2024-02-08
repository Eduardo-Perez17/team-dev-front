import { useEffect, useState } from 'react';

// Components
import { ArticlePostsImage } from '../../Home/ArticlePostsImage';
import { Paragraph } from '../../Paragraph';
import { Title } from '../../Title';
import { Box } from '../../Box';

// Helpers
import { dateFormat } from '../../../utils/helpers/dateFormat.js';

// Styles
import './_postUrlHeader.scss';

export const PostUrlHeader = ({ postByUrl }) => {
	const [dataPost, setDataPost] = useState([]);

	const formatData = async () => {
		const data = await dateFormat({ response: [postByUrl?.data] });
		setDataPost(data);
	};

	useEffect(() => {
		formatData();
	}, [postByUrl]);

	return (
		<>
			{dataPost &&
				dataPost.map(data => (
					<Box className='post_header' key={data?.id}>
						<ArticlePostsImage post={data?.data} />
						<Box className='post_header_content'>
							<Title title='lg' className='post_header_content_title'>{data?.title}</Title>
							<Box className='post_header_content_info'>
								<Paragraph>{data?.updatedAt}</Paragraph>
								<Paragraph className='post_header_content_info_name'>
									{data?.user?.firstName} {data?.user?.lastName}
								</Paragraph>
							</Box>
						</Box>
					</Box>
				))}
		</>
	);
};
