import { $ } from '@wdio/globals';
import Page from '../page.js';

class ShowPengiriman extends Page {

    openPengiriman() {
        return super.open('pengiriman');
    }

    async clickDetailButtonByKode(kode) {
        const row = $(`//table[@id='dataTable']//tr[td[2]='${kode}']`);
        const detailButton = row.$('a.btn-warning');
        await detailButton.click();
    }
}

export default new ShowPengiriman();
