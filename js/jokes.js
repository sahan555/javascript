const url = 'https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Top%20Text&bottom=Bottom%20Text&meme=Condescending-Wonka&font_size=50&font=Impact';
const options = {
	method: 'GET',
    url: 'https://api.api-ninjas.com/v1/jokes?limit=' + limit,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
