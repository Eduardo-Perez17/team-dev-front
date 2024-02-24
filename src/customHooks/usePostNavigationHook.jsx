// Hooks
import { usePosts } from '../hook/usePosts';

export const usePostNavigationHook = ({ id, likesPost, disLikesPost }) => {
	const { editPostById } = usePosts();

	const buttonLikes = () => {
		if (likesPost) {
			const body = { likes: null };
			editPostById({ id: id, body: body });
			return;
		}

		const body = { likes: id };
		editPostById({ id: id, body: body });
	};

	const buttonDisLikes = () => {
		if (disLikesPost) {
			const body = { dislikes: null };
			editPostById({ id: id, body: body });
			return;
		}

		const body = { dislikes: id };
		editPostById({ id: id, body: body });
	};

	return { buttonLikes, buttonDisLikes };
};