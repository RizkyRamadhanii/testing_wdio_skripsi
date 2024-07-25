import { $ } from '@wdio/globals';
import Page from '../page.js';

class EditPekerja extends Page {

    openDesa() {
      return super.open('employees');
    }

    get btnDetailModal() {
        return $('button[data-bs-target="#staticBackdrop4"]');
    }  

    get inputNamaPekerja () {
        return $('#name');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async editPekerja (name) {
        await this.inputNamaPekerja.setValue(name);
        await browser.pause(3000);
        await this.btnSubmit.click();

    }

    async openDetailModal() {
        await this.openDesa();
        const dropdown = await $('select[name="dataTable_length"]');
        await dropdown.selectByVisibleText('100');
        await browser.pause(5000);
        await this.btnDetailModal.click();
    }

    openEditPekerjaPage (id) {
        return super.open(`employees/${id}/edit`);
    }
}

export default new EditPekerja();