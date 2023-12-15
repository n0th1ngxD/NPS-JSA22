const api_url1 = "https://api.apify.com/v2/key-value-stores/Zs0pZgeg7dFS1rgfM/records/LATEST";

const api_url2 = "https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST";

function click1() {
    let dt = fetch(api_url1)
    .then(function (response) {
        return response.join();
    })
    .then(function (data){
        console.log("Success: ", data.detail);
    });

    console.log(dt);
};