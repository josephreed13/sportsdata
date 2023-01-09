function Tester() {
    function foo(): any {
        alert("Making request! check the console.");
        makeRequest();
    }

    async function makeRequest() {
        try {
            const response = await fetch(
                "https://api.nhle.com/stats/rest/en/team/summary?isAggregate=false&isGame=false&sort=%5B%7B%22property%22:%22points%22,%22direction%22:%22DESC%22%7D,%7B%22property%22:%22wins%22,%22direction%22:%22DESC%22%7D,%7B%22property%22:%22teamId%22,%22direction%22:%22ASC%22%7D%5D&start=0&limit=50&factCayenneExp=gamesPlayed%3E=1&cayenneExp=gameTypeId=2%20and%20seasonId%3C=20222023%20and%20seasonId%3E=20222023",
                {
                    headers: {
                        accept: "*/*",
                        "accept-language": "en-US,en;q=0.9",
                        "sec-ch-ua":
                            '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": '"Windows"',
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "cross-site",
                        Referer: "https://www.nhl.com/",
                        "Referrer-Policy": "strict-origin-when-cross-origin",
                    },
                    body: null,
                    method: "GET",
                }
            );

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log("result is: ", JSON.stringify(result, null, 4));
        } catch (error) {
            if (error instanceof Error) {
                console.log("error message: ", error.message);
                return error.message;
            } else {
                console.log("unexpected error: ", error);
                return "An unexpected error occurred";
            }
        }
    }

    return (
        <div>
            <button onClick={foo()}>Make Request</button>
        </div>
    );
}
export default Tester;
