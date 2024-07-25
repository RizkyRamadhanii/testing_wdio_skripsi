import { $ } from '@wdio/globals';
import Page from '../page.js';

class CreateDusun extends Page {
    get btnDusun() {
        return $('#btnCreateDusun');
    }

    get desaId() {
        return $('#desa');
    }

    get inputNamaDusun() {
        return $('#nama');
    }

    get inputLatitude() {
        return $('#latitude');
    }

    get inputLongitude() {
        return $('#longitude');
    }
    
    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async dusun (desa, nama, latitude, longitude) {
        await this.btnDusun.waitForDisplayed();
        await this.btnDusun.click();
        await this.desaId.selectByVisibleText(desa);
        await this.inputNamaDusun.setValue(nama);
        await this.inputLatitude.setValue(latitude);
        await this.inputLongitude.setValue(longitude);
        await this.btnSubmit.click();
        await browser.pause(10000);
    }

    open() {
        return super.open('dusun');
    }
}

export default new CreateDusun();