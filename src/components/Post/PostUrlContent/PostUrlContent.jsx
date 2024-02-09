export const PostUrlContent = ({ postByUrl }) => {
	return (
			<div
				dangerouslySetInnerHTML={{ __html: postByUrl?.data?.content }}
				className='post_content_item'
			/>
	);
};
