import { $ } from '@wdio/globals';
import Page from '../page.js';

class DeleteDesa extends Page {
    openDesa() {
        return super.open('desa');
    }

    async deleteDesaByLastTd() {
        await this.openDesa();
        const dropdown = await $('select[name="dataTable_length"]');
        await dropdown.selectByVisibleText('100');
        
        await browser.pause(5000);

        const deleteButton = await $("//tr[last()]/td[last()]//form[@id='deleteForm']//button[@type='submit']");
        await deleteButton.click();
    }
}

export default new DeleteDesa();
