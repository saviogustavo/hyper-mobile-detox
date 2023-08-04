describe('Sign Up tests', ()=> {
    beforeAll(async()=> {
        await device.launchApp();
    })

    beforeEach(async()=> {
        await device.reloadReactNative();
    })

    it('User should successfully view splash screen', async ()=> {

        await expect(element(by.text('PARTICIPATING STORIES'))).toBeVisible()
    })

    it('User is able to register successfuly', async ()=> {

        //Given I am at the splash screen page
        await expect(element(by.text('PARTICIPATING STORIES'))).toBeVisible()

        // When I click on any of the available stores
        await expect(element(by.id('storeCard'))).tap()

        // And I click on "I am a new shopper" card
        await expect(element(by.id('newShopper'))).tap()

        //And I fill in all required fields
        await expect(element(by.id('name'))).typeText('savio')
        await expect(element(by.id('lastName'))).typeText('Gustavo')
        await expect(element(by.id('birthDate'))).typeText('19/12/1999')

        //And I click the submit button
        await expect(element(by.id('submitButton'))).tap()

        //And I fill in all required contact fields
        await expect(element(by.id('phone'))).typeText('12345678')
        await expect(element(by.id('email'))).typeText('savio@exemplo.com')

        //And I click the registration button
        await expect(element(by.id('registrationButton'))).tap()

        //Then I can see a registration success message
        await expect(element(by.text('REGISTRATION SUCCESS!'))).toBeVisible()
    })
})