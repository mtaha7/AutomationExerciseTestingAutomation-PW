const { test, request, expect } = require('@playwright/test')
const dataset = JSON.parse(JSON.stringify(require('../testdata/endpoints.json')))
const servers = JSON.parse(JSON.stringify(require('../testdata/apiServers.json')))

for (const server of servers) {
    for (const data of dataset) {
        test(`Testing API - ${server.apiUrl} - ${data.endPoint}`, async ({ request }) => {

            let response

            if (data.endPoint === 'Cities') {
                response = await request.get(server.apiUrl + data.resource,
                    {
                        params: {
                            countryCode: data.paramValue,
                        }
                    }
                )
            }
            else {
                response = await request.get(server.apiUrl + data.resource)
            }
            const responseBody = await response.json()
            expect(response.status()).toEqual(200)
            console.log(responseBody)
        });
    }
}