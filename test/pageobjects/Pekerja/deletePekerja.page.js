import { $ } from '@wdio/globals';
import Page from '../page.js';

class DeletePekerja extends Page {
    openPekerja() {
        return super.open('employees');
    }

    get btnDetailModal() {
        return $('button[data-bs-toggle="modal"][data-bs-target^="#staticBackdrop"]');
    }

    get btnDelete() {
        return $('form[id^="deleteForm"]');
    }

    async openDetailModal() {
        await this.openPekerja();
        const dropdown = await $('select[name="dataTable_length"]');
        await dropdown.selectByVisibleText('100');
        await this.btnDetailModal.click();
        await browser.pause(5000); 
        await this.btnDelete.click();
        await browser.pause(5000);
    }
}

export default new DeletePekerja();
