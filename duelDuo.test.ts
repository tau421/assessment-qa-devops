
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button dispalys div id = choices', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click()
    const choices = await driver.findElement(By.id('choices'))
    expect(await choices.isDisplayed).toBeTruthy
})

test('Add to Duo button displays div id = player-duo', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click()
    const addToDuoBtn = await driver.findElement(By.className('bot-btn'))
    await addToDuoBtn.click()
    const playerDuoId = await driver.findElement(By.id('player-duo'))
    expect(await playerDuoId.isDisplayed).toBeTruthy
})