export const getImageUrl = (folder, path) => {
    if (!path) {
        console.error("Path is undefined or empty");
        return ""; // Return an empty string or a default image URL
    }
    
    const timestamp = Date.now();
    return `${import.meta.env.BASE_URL}assests/${folder}/${path}`;
};
