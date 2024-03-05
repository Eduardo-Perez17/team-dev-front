// Styles
import './_comments.scss'

// Components
import { ImageLoad } from "../ImageLoad"
import { Paragraph } from "../Paragraph"
import { Title } from "../Title"
import { Box } from "../Box"

const CommentsUser = ({ comments }) => {

  return (
    <Box className='comments_main'>
        {comments?.map((comment)=> (
            <Box key={comment?.id} className='comments'>
                <Box className='comments_header'>
                    <ImageLoad image={comment?.avatar} />
                    <Title title='md'>{comment?.firstname} {comment?.lastname}</Title>
                </Box>
                <Box className='comments_article'>
                    <Paragraph>{comment?.comment}</Paragraph>
                </Box>
            </Box>
        ))}
    </Box>
  )
}

export default CommentsUser