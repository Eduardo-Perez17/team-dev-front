import { useEffect } from 'react'

import './_homeAnalytics.scss'

// Components
import { Paragraph } from '../../Paragraph'
import { Title } from '../../Title'
import { Box } from '../../Box'

// Hooks
import { usePosts } from '../../../hook/usePosts'

const HomeAnalytics = () => {
  const { postAnalytics, postsAnalytics } = usePosts()

  useEffect(()=> {
    postAnalytics()
  }, [])

  return (
    <Box className='home_analytics'>
      <Box className='home_analytics_card'>
        <Title title='lg'>{postsAnalytics?.data?.postsCount}</Title>
        <Paragraph>Documentaciones</Paragraph>
      </Box>
      <Box className='home_analytics_card'>
        <Title title='lg'>{postsAnalytics?.data?.courseCount}</Title>
        <Paragraph>Cursos</Paragraph>
      </Box>
      <Box className='home_analytics_card'>
        <Title title='lg'>{postsAnalytics?.data?.tagsCount}</Title>
        <Paragraph>Tecnologías</Paragraph>
      </Box>
    </Box>
  )
}

export default HomeAnalytics
