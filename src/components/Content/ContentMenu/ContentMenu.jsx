// Icons Materual UI
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

// Components 
import { Paragraph } from '../../Paragraph'
import { Box } from '../../Box'


export const ContentMenu = ({ getCourse, getNormal, getTecnology }) => {
  return (
    <Box className='content_menu_nav'>
        <Box className='content_menu_item' onClick={getNormal}>
          <InsertDriveFileIcon />
          <Paragraph>Documentaciones</Paragraph>
        </Box>

        <Box className='content_menu_item' onClick={getCourse}>
          <ImportContactsIcon />
          <Paragraph>Cursos</Paragraph>
        </Box>

        <Box className='content_menu_item' onClick={getTecnology}>
          <RocketLaunchIcon />
          <Paragraph>Tecnologias</Paragraph>
        </Box>
    </Box>
  )
}
