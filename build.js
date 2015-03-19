({
    appDir: "app",
    baseUrl: "./",
    mainConfigFile: 'app/config.js',
    dir: "dist",
    keepBuildDir: false,
    optimize: "none",
    modules: [{
            name: "states/users/users.routes",
            insertRequire: ["states/users/users.routes"],
            // create: true,
            exclude: [
                "angular"
            ]
        }, {
            name: "states/grids/grids.routes",
            insertRequire: ["states/grids/grids.routes"],
            // create: true,
            exclude: [
                "angular"
            ]
        },

    ]
})
