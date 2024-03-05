// Components
import { Box } from "../Box"
import { Paragraph } from "../Paragraph"

const CommentsUser = ({ comments }) => {
    console.log({comments})
  return (
    <>
        {comments?.map((comment)=> (
            <Box key={comment?.id}>
                <Box>
                    {/* <img src={comment?.avatar} alt="Icono de usuario" /> */}
                    <h3>{comment?.firstname} {comment?.lastname}</h3>
                </Box>
                <Box>
                    <Paragraph>{comment?.comment}</Paragraph>
                </Box>
            </Box>
        ))}
    </>
  )
}

export default CommentsUser