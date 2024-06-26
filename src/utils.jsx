export const getImageUrl = (path) => {
    if (!path) {
        console.error("Path is undefined or empty");
        return ""; // Return an empty string or a default image URL
    }
    const url = `/assests/${path}`;
    console.log("Generated URL:", url); // Log the generated URL to verify it
    return url;
};
