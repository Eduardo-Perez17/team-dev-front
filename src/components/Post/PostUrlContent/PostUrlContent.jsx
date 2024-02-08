export const PostUrlContent = ({ postByUrl }) => {
	
	return <div dangerouslySetInnerHTML={{ __html: postByUrl?.data?.content }} />;
};
