import { useEffect, useState } from 'react';

// Styles
import './_content.scss';

// Hook
import { usePosts } from '../../hook/usePosts';
import { useTags } from '../../hook/useTags';

// Utils
import { POSTS_TYPE } from '../../utils/constants';

// Components
import { ContentData, ContentMenu } from '../../components/Content';
import { Box } from '../../components/Box';

const Content = () => {
	const { allPosts, getAllPosts } = usePosts();
	const { allTags, getAllTags } = useTags();

	const [sawTecnology, setSawTecnology] = useState(false);
	const [pagePagination, setPagePagination] = useState(1);


	// POST TYPE COURSE
	const getPostsTypeCourse = () => {
		getAllPosts({
			page: pagePagination,
			limit: 7,
			type: POSTS_TYPE.COURSE,
		});
		setSawTecnology(false);
	};

	// POST TYPE NORMAL
	const getPostTypeNormal = () => {
		getAllPosts({
			page: pagePagination,
			limit: 7,
			type: POSTS_TYPE.NORMAL,
		});
		setSawTecnology(false);
	};

	// TECNOLOGY
	const getAllTecnology = () => {
		getAllTags();
		setSawTecnology(true);
	};

	useEffect(() => {
		getAllPosts({
			page: pagePagination,
			limit: 7,
			type: POSTS_TYPE.NORMAL,
		});
	}, []);

	// ! ==============================================================


	const paginationIncrement = () => {
		setPagePagination(pagePagination + 1);
	};

	const paginationDecrement = () => {
		setPagePagination(pagePagination - 1);
	};

	// useEffect(() => {
	// 	getAllPosts({
	// 		page: pagePagination,
	// 		limit: 7,
	// 		type: POSTS_TYPE.NORMAL,
	// 	});
	// }, [pagePagination]);

	// ! ==============================================================

	return (
		<Box className='content'>
			<Box className='content_data'>
				<ContentData
					allPosts={allPosts}
					allTags={allTags}
					sawTecnology={sawTecnology}

					paginationIncrement={paginationIncrement}
					paginationDecrement={paginationDecrement}
					pagePagination={pagePagination}
				/>
			</Box>
			<Box className='content_menu'>
				<ContentMenu
					getCourse={getPostsTypeCourse}
					getNormal={getPostTypeNormal}
					getTecnology={getAllTecnology}
				/>
			</Box>
		</Box>
	);
};

export default Content;
