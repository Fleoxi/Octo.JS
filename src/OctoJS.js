class OctoJS 
{
    #apiKey
    #apiPath

    constructor(key, path)
    {
        this.#apiKey     = key;
        this.#apiPath    = path;
    }
}

module.exports.OctoJS = OctoJS