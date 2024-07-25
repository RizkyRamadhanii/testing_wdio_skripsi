import { $ } from '@wdio/globals'
import Page from '../page.js';

class CreateDesa extends Page {
    get btnCreate() {
        return $('#btnCreateDesa')
    }
    get inputNamaDesa () {
        return $('#nama');
    }

    get inputKodeWilayah () {
        return $('#kode_wilayah');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }


    async desa (nama, kodeWilayah) {
        await this.btnCreate.click();
        await this.inputNamaDesa.setValue(nama);
        await this.inputKodeWilayah.setValue(kodeWilayah);
        await browser.pause(5000);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('desa');
    }
    
}
export default new CreateDesa();
