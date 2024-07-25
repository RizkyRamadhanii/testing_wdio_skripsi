import { $ } from '@wdio/globals';
import Page from './page.js';

class LogoutPage extends Page {
    get logoutLink() {
        return $('a[href="#"][onclick*="logout-form"]'); 
    }

    async logout() {
        await this.logoutLink.scrollIntoView();
        await this.logoutLink.click();
    }

    open() {
        return super.open('desa');
    }
}

export default new LogoutPage();
