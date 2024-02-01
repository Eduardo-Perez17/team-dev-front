// Components
import { Paragraph } from '../../Paragraph';
import { Box } from '../../Box';

export const HeaderSearhTypePosts = ({ post, children }) => {
	return (
		<Box className='post_search_item'>
			<Box className='post_search_item_content'>
				{children}
				<Paragraph className='post_search_item_paragraph'>
					{post?.title}
				</Paragraph>
			</Box>
			<Paragraph className={`post_search_item_tag tags ${post?.tags?.tag}`}>
				{post?.tags?.tag}
			</Paragraph>
		</Box>
	);
};
