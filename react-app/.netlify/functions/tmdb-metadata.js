async function tmdbMetadata(event, context) {
    const apiKey = process?.env?.VITE_TMDB_API_KEY;
    // respond with {apiKey, error}
    return {
        statusCode: 200,
        body: JSON.stringify({ apiKey: apiKey, error: null }),
    };
}

module.exports = { tmdbMetadata, handler: tmdbMetadata };