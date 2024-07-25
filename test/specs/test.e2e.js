import LoginPage from '../pageobjects/login.page.js';

import CreatePekerjaPage from '../pageobjects/Pekerja/createPekerja.page.js';
import EditPekerjaPage from '../pageobjects/Pekerja/editPekerja.page.js';
import deletePekerjaPage from '../pageobjects/Pekerja/deletePekerja.page.js';


import CreateDesaPage from '../pageobjects/Desa/createDesa.page.js';
import EditDesaPage from '../pageobjects/Desa/editDesa.page.js';
import deleteDesaPage from '../pageobjects/Desa/deleteDesa.page.js';

import CreateDusunPage from '../pageobjects/Dusun/createDusun.page.js';
import EditDusunPage from '../pageobjects/Dusun/editDusun.page.js';
import deleteDusunPage from '../pageobjects/Dusun/deleteDusun.page.js';

import CreatePengirimanPage from '../pageobjects/Pengiriman/createPengiriman.page.js';

import LogoutPage from '../pageobjects/logout.page.js';

import showPengirimanPage from '../pageobjects/Pengiriman/showPengiriman.page.js';

function generateUniqueEmail(baseEmail, index) {
    const [localPart, domain] = baseEmail.split('@');
    return `${localPart}${index}@${domain}`;
}

describe ('Login Page', () => {
    it('Masuk dengan Email dan Password yang valid, Role = Admin', async () => {
        await LoginPage.open();
        await LoginPage.login('admin@gmail.com', 'password');
        await browser.pause(5000);
    }
    );
})

describe('Fitur Pekerja', () => {
    it('Tambahkan akun Pekerja Baru', async () => {
        const baseEmail = 'testing@gmail.com';
        const uniqueEmail = generateUniqueEmail(baseEmail, Date.now());
        
        await CreatePekerjaPage.open();
        await CreatePekerjaPage.pekerja('Pekerja Testing', 'Kurir', 'Testing Alamat', '081234567891212', uniqueEmail, 'password', '01-01-2001');
    });

    it('Edit data Pekerja', async () => {
        await EditPekerjaPage.openDetailModal();
        await browser.pause(3000);
        await EditPekerjaPage.openEditPekerjaPage(4);
        await EditPekerjaPage.editPekerja('Mohammad Rizky Ramadhani');
        await browser.pause(3000);
    });

    it ('Hapus data Pekerja', async() => {
        await deletePekerjaPage.openDetailModal();
    })

});

describe ('Fitur Desa', () => {

    it('Tambahkan Data Desa', async () => {
        await CreateDesaPage.open();
        await browser.pause(3000);
        await CreateDesaPage.desa('Desa Test', '35.14.13.2002');
        await browser.pause(3000);
    });

    it('Edit Data Desa', async () => {
        await EditDesaPage.openEditDesaPage(2);
        await browser.pause(3000);
        await EditDesaPage.editDesa('Desa Test Edit', '35.14.13.2003');
        await browser.pause(3000);
    });

    it ('Hapus Data Desa', async () => {
        await deleteDesaPage.openDesa();
        await browser.pause(4000);
        await deleteDesaPage.deleteDesaByLastTd();
        await browser.pause(3000);
    });
   
})

describe('Fitur Dusun', () => {
    it('Tambahkan Data Dusun', async () => {
        await CreateDusunPage.open();
        await CreateDusunPage.dusun('Wonokoyo', 'Dusun Test', '-7.608164982237016', '112.76748448762676');
        await browser.pause(3000);
    })

    it('Edit Data Dusun', async () => {
        await EditDusunPage.openEditDusunPage(5);
        await browser.pause(3000);
        await EditDusunPage.editDusun('Dusun Test Edit');
        await browser.pause(3000);
    });

    it ('Hapus Data Dusun', async () => {
        await deleteDusunPage.openDusun();
        await browser.pause(4000);
        await deleteDusunPage.deleteDusunByLastTd();
        await browser.pause(3000);
    });
})

describe ('Fitur Pengiriman', () => { 
    it('Tambahkan Data Pengiriman', async () => {
        await CreatePengirimanPage.open();
        await browser.pause(5000);
        await CreatePengirimanPage.pengiriman('Kurir Test', '01-01-2024', 'Desa Test Edit', ['3', '4']);
        await browser.pause(3000);
    })

})


describe('Logout', () => {
    it('Logout', async () => {
        await LogoutPage.logout();
        await browser.pause(8000);
    });
});


describe ('Login Page Kurir', () => {
    it('Masuk dengan Email dan Password yang valid, Role = Kurir', async () => {
        await LoginPage.open();
        await LoginPage.login('kurir@gmail.com', 'password');
        await browser.pause(3000);
    }
    );

})

describe('Fitur Pengiriman', () => {
    it('Kurir Melakukan Pengiriman', async () => {
        await showPengirimanPage.openPengiriman();
        await browser.pause(5000);
        const firstRowCode = await $('//table[@id="dataTable"]//tr[1]//td[2]').getText();
        await showPengirimanPage.clickDetailButtonByKode(firstRowCode);
        await expect(browser).toHaveUrlContaining(`pengiriman/${firstRowCode}/edit`);

        await browser.pause(10000);
        await showPengirimanPage.openPengiriman();
    });
});

describe('Logout', () => {
    it('Logout', async () => {
        await LogoutPage.logout();
        await browser.pause(10000);
    });
});
