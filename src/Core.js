const drivenFactory = require('./drivenCreator')

function buildCoreContainer(config, env)
{
    const container = {};
    if (!(env in config))
        throw new Error(`No build config for ${env} enviroment.`)
    
    Object.keys(config[env]).forEach(key => {
        container[key] = drivenFactory.factory(config[env][key].className);
        if (!(container[key] instanceof config[env][key].adapter))
            throw new Error(`Object ${config[env][key].className} type missmatch.`)
    });

    return container;
}

class Core {
    constructor(config, env)
    {
        this.env = env || process.env.NODE_ENV || 'test';
        this.container = buildCoreContainer(config, this.env)
    }
}

module.exports = Core;