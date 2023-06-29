import { Injectable } from '@nestjs/common'
import puppeteer from 'puppeteer'
import { OnModuleInit, Logger } from '@nestjs/common'


@Injectable()
export class BotService implements OnModuleInit {
	private readonly logger = new Logger(BotService.name)

	async openBrowser() {
			const browser = await puppeteer.launch({ headless: false })
			const page = await browser.newPage()
			await page.goto('https://bumble.com/get-started')
			await page.waitForTimeout(1000)
			try {
				const button = await page.$('.message-component .message-row:nth-child(2) .button-row button:nth-child(2)')
				if (button) {
					this.logger.log('gonna click on button')
					await button.click()
					this.logger.log('button has been clicked')
					await page.waitForTimeout(7000)
				}
			}
			catch (err)	{
				this.logger.log(err)
			}
			await browser.close()
	}
  async onModuleInit() {
    await this.openBrowser()
  }
}
