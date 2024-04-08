export const logger = (request, response, next) => {
    console.log(
        new Date().toUTCString(),
        'Request from',
        request.ip,
        request.method,
        request.originalUrl
    )
    next()
}

export const recipeSlug = {
    mushroom_rice : [
        "mushroom rice",
        "mushroomrice",
        "mushroom-rice"
    ],
    gnocchi_bake : [
        "gnocchi bake", 
        "gnocchibake",
        "gnocchi-bake"
    ]
}