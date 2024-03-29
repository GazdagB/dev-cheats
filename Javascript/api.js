

/**
 * /**
 * Fetches data from a given URL and returns it as a JSON object.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<object>} The data from the URL as a JSON object.
 **/
async function fetchBasic(url){
    let res = await fetch(url); 
    let data = await res.json(); 
    return data; 
}