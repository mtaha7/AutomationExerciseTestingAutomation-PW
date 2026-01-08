const { test, expect } = require('@playwright/test')
const validData = JSON.parse(JSON.stringify(require('../testdata/registerationInfo.json')))
const invalidData = JSON.parse(JSON.stringify(require('../testdata/invalidRegisterationInfo copy.json')))
const resources = JSON.parse(JSON.stringify(require('../testdata/resources.json')))


test('Create New Account With Invalid HTTP Method', async ({ request }) => {

    const response = await request.get(process.env.apiUrl + resources.createAccount, {
        form: validData

    });
    const responseBody = await response.json()
    console.log(responseBody)
    expect(response.status()).toBe(405)
    expect(responseBody.detail).toEqual(expect.any(String))
    expect(responseBody.detail).toContain("not allowed.")

});

test('Create New Account With Invalid Data', async ({ request }) => {

    const response = await request.post(process.env.apiUrl + resources.createAccount, {
        form: invalidData

    });
    const responseBody = await response.json()
    console.log(responseBody)
    expect(response.status()).toBe(200)
    expect(responseBody.responseCode).toEqual(expect.any(Number))
    expect(responseBody.message).toEqual(expect.any(String))
    expect(responseBody.responseCode).toBe(400)
    expect(responseBody.message).toContain("parameter is missing in POST request.")

});

test('Create New Account With Valid Data', async ({ request }) => {

    const response = await request.post(process.env.apiUrl + resources.createAccount, {
        form: validData

    });
    const responseBody = await response.json()
    console.log(responseBody)
    expect(response.status()).toBe(200)
    expect(responseBody.responseCode).toEqual(expect.any(Number))
    expect(responseBody.message).toEqual(expect.any(String))
    expect(responseBody.responseCode).toBe(201)
    expect(responseBody.message).toBe("User created!")

});

test('Verify Login With Invalid HTTP Method', async ({ request }) => {

    const response = await request.delete(process.env.apiUrl + resources.verifyLogin, {
        form: {
            email: validData.email,
            password: validData.password

        }

    });
    const responseBody = await response.json()
    console.log(responseBody)
    expect(response.status()).toBe(200)
    expect(responseBody.responseCode).toEqual(expect.any(Number))
    expect(responseBody.message).toEqual(expect.any(String))
    expect(responseBody.responseCode).toBe(405)
    expect(responseBody.message).toBe("This request method is not supported.")

});

test('Verify Login With Missing Data', async ({ request }) => {

    const response = await request.post(process.env.apiUrl + resources.verifyLogin, {
        form: {
            email: validData.email,

        }

    });
    const responseBody = await response.json()
    console.log(responseBody)
    expect(response.status()).toBe(200)
    expect(responseBody.responseCode).toEqual(expect.any(Number))
    expect(responseBody.message).toEqual(expect.any(String))
    expect(responseBody.responseCode).toBe(400)
    expect(responseBody.message).toContain("parameter is missing in POST request.")

});

test('Verify Login With Valid Data', async ({ request }) => {

    const response = await request.post(process.env.apiUrl + resources.verifyLogin, {
        form: {
            email: validData.email,
            password: validData.password

        }

    });
    const responseBody = await response.json()
    console.log(responseBody)
    expect(response.status()).toBe(200)
    expect(responseBody.responseCode).toEqual(expect.any(Number))
    expect(responseBody.message).toEqual(expect.any(String))
    expect(responseBody.responseCode).toBe(200)
    expect(responseBody.message).toContain("User exists!")

});

test('Verify Login With Invalid Data', async ({ request }) => {

    let password = "wrongPassword"

    const response = await request.post(process.env.apiUrl + resources.verifyLogin, {
        form: {
            email: validData.email,
            password: password

        }

    });
    const responseBody = await response.json()
    console.log(responseBody)
    expect(response.status()).toBe(200)
    expect(responseBody.responseCode).toEqual(expect.any(Number))
    expect(responseBody.message).toEqual(expect.any(String))
    expect(responseBody.responseCode).toBe(404)
    expect(responseBody.message).toContain("User not found!")

});

test('Delete Created Account', async ({ request }) => {

    const response = await request.delete(process.env.apiUrl + resources.deleteAccount, {
        form: {
            email: validData.email,
            password: validData.password
        }

    });
    const responseBody = await response.json()
    console.log(responseBody)
    expect(response.status()).toBe(200)
    expect(responseBody.responseCode).toEqual(expect.any(Number))
    expect(responseBody.message).toEqual(expect.any(String))
    expect(responseBody.responseCode).toBe(200)
    expect(responseBody.message).toBe("Account deleted!")

});


