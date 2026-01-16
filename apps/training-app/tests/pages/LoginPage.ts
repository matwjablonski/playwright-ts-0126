import test, { Locator, Page } from "playwright/test";

interface LoginPageInterface {
    readonly passwordInput: Locator;
    login(password: string): Promise<void>;
}

export class LoginPage implements LoginPageInterface {
    constructor(
        private page: Page,
        readonly passwordInput: Locator = page.getByRole('textbox', { name: 'Wprowadź hasło...' }),
    ) {}

    async login(password: string) {
        await this.passwordInput.fill(password);
        await this.passwordInput.press('Enter');
    }

    // async aadasd(title: string) {
    //     const cardWithTitle = this.page.locator('.card', {
    //         has: this.page.getByRole('heading', { name: title })
    //     })

    //     this.page
    //         .locator('.card')
    //         .filter({
    //             hasText: title
    //         })
    //         .getByRole('button', { name: 'Usuń' })

    //     cardWithTitle.getByRole('button', { name: 'Usuń' }).click();
    // }
}

export default LoginPage;