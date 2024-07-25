import { $ } from '@wdio/globals';
import Page from '../page.js';

class CreatePengiriman extends Page {
    get btnCreate() {
        return $('#btnCreatePengiriman');
    }

    get inputNamaPengirim() {
        return $('#user_id');
    }

    get inputTanggalPengiriman() {
        return $('#tanggal');
    }

    get desaId() {
        return $('#desa');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }
    get btnDusun1() {
        return $(`.form-check input[value="2"]`);
    }
    get btnDusun2() {
        return $(`.form-check input[value="3"]`);
    }
    get btnDusun3() {
        return $(`.form-check input[value="4"]`);
    }

    async pengiriman(user_id, tanggal, desa, dusun) {

        await this.btnCreate.waitForDisplayed();
        await this.btnCreate.click();
        await this.inputNamaPengirim.selectByVisibleText(user_id);
        await this.inputTanggalPengiriman.setValue(tanggal);
        await this.desaId.selectByVisibleText(desa);

        await this.btnDusun1.click();
        await this.btnDusun2.click();
        // await this.btnDusun3.click();
        
        await this.btnSubmit.click();
        await browser.pause(10000);
    }

    open() {
        return super.open('pengiriman');
    }
}

export default new CreatePengiriman();
