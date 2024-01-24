const getBase64 = ({ file }) => {
	if (file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = error => reject(error);
		});
	}
};

export const imagesToBase64 = async ({ files }) => {
	if (files[0].url) {
		const sendFile = [];

		await Promise.all(
			files.map(async file => {
				const base64 = await getBase64({ file: file.file });

				sendFile.push({
					filename: file.file.name,
					contentType: file.file.type,
					content: base64,
				});
			}),
		);

		return sendFile;
	}
};
