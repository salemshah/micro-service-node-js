function extractRoute(str) {
    const routes = [];
    let currentRoute = {};
    const regex = /@url\s?=\s?(.*)|@method\s?=\s?(.*)|static\s(.*)\s?\(/g;
    let match;
    while ((match = regex.exec(str)) !== null) {
        const [_, url, method, action] = match

        if (url !== undefined) currentRoute.url = url;
        if (method !== undefined) currentRoute.method = method.toLowerCase();
        if (action !== undefined) currentRoute.action = action;

        if (currentRoute.url && currentRoute.action && currentRoute.action) {
            routes.push(currentRoute)
            currentRoute = {}
        }
    }
    return routes;
}

module.exports = extractRoute;