import { $ } from '@wdio/globals';
import Page from '../page.js';

class CreatePekerja extends Page {
    get btnCreate() {
        return $('#btnCreatePekerja');
    }

    get inputNamaPekerja() {
        return $('#name');
    }

    get inputPosition() {
        return $('#position');
    }

    get inputAlamat() {
        return $('#address');
    }

    get inputNoTelp() {
        return $('#phone');
    }

    get inputEmail() {
        return $('#email');
    }

    get inputPassword() {
        return $('#password');
    }

    get inputTTL() {
        return $('#date_of_birth');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get scroll() {
        return $('.content')
    }

    async pekerja(name, position, alamat, phone, email, password, date_of_birth) {
        await this.btnCreate.click();
        await this.inputNamaPekerja.setValue(name);
        await this.inputPosition.selectByVisibleText(position);        
        await this.inputAlamat.setValue(alamat);
        await this.inputNoTelp.setValue(phone);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputTTL.setValue(date_of_birth);
        await browser.pause(5000);
        await this.btnSubmit.click();
        const dropdown = await $('select[name="dataTable_length"]');
        await dropdown.selectByVisibleText('100');
        await browser.pause(5000);
    }

    open() {
        return super.open('employees');
    }
}

export default new CreatePekerja();
