export const dateFormat = async ({ response })  => {
    const formattedData = await response?.map(item => {
        const updatedAt = new Date(item.updatedAt).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return { ...item, updatedAt };
    });

    return formattedData
}
