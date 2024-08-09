export const DATA_KEY = "AIzaSyCxoMWmufJQ6mmv3cG5ypx3xEu-zExX80I";

export const convertView = (value) => {
    if (value > 1000000) {
        return Math.floor(value / 1000000) + "M";
    } else if (value > 1000) {
        return Math.floor(value / 1000) + "K";
    } else {
        return value;
    }
};
