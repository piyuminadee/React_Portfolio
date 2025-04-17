export const getImageUrl = (path) => {
    if (!path) {
        console.error("Path is undefined or empty");
        return ""; // Return an empty string or a default image URL
    }
    
    const timestamp = Date.now();
    return `/assests/${path}?v=${timestamp}`;
};
