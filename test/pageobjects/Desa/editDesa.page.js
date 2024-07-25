import { $ } from '@wdio/globals'
import Page from '../page.js';

class EditDesa extends Page {
    
    get inputNamaDesa () {
        return $('#nama');
    }

    get inputKodeWilayah () {
        return $('#kode_wilayah');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async editDesa (nama, kodeWilayah) {
        await this.inputNamaDesa.setValue(nama);
        await this.inputKodeWilayah.setValue(kodeWilayah);
        await browser.pause(5000);
        await this.btnSubmit.click();
    }

    openEditDesaPage (id) {
        return super.open(`desa/${id}/edit`);
    }

    
}

export default new EditDesa();