const api_key = 'fsq3Vscb/L/cVmdwDQMMu285Lio5Y+ZgyE4vCMMGv2HYGN4=';


async function placeSearch(searchTerm, location, sortOrder, setArr) {
    try {
        const searchParams = new URLSearchParams({
            query: 'coffee',
            near: 'Seattle, WA',
            open_now: 'true',
            sort: 'DISTANCE'
        });
        const results = await fetch(
            `https://api.foursquare.com/v3/places/search?${searchParams}`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: api_key,
                }
            }
        );
        const data = await results.json();

        const resultArr = data.results.map(item => {
            const name = item.name;
            const address = item.location.address;
            const imgUrl = item.categories[0].icon.prefix + item.categories[0].icon.suffix;

            const obj = { name, address, imgUrl };

            return obj;
        })

        setArr(resultArr);

    } catch (err) {
        console.error(err);
    }
}

export default placeSearch;