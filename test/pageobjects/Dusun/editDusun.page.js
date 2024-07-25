import { $ } from '@wdio/globals'
import Page from '../page.js';

class EditDusun extends Page {
    get inputNamaDusun () {
        return $('#nama');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async editDusun (nama) {
        await this.inputNamaDusun.setValue(nama);
        await browser.pause(5000);
        await this.btnSubmit.click();
    }

    openEditDusunPage (id) {
        return super.open(`dusun/${id}/edit`);
    }

}

export default new EditDusun();