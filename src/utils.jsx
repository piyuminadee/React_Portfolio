//pass the relative path into dynamic url
export const getImageUrl = (path) => {
    return new URL(`assets/${path}`, import.meta.url).href;
}