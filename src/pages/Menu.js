import { useState } from 'react';
import Tabel from "./Tabel";

function Menu() {
    const titel = "Daftar Menu";
    const [menus, setMenu] = useState(
        [
            {
            idmenu : 1, 
            idkategori : 1, 
            menu : "Mie Angel", 
            gambar : "angel.jpg", 
            harga : 9500,
            },

            {
            idmenu : 2, 
            idkategori : 1, 
            menu : "Mie Setan", 
            gambar : "setan.jpg", 
            harga : 9500,
            },

            {
            idmenu : 3, 
            idkategori : 1, 
            menu : "Mie Iblis", 
            gambar : "iblis.jpg", 
            harga : 9500,
            },

            {
            idmenu : 4, 
            idkategori : 2, 
            menu : "Siomay", 
            gambar : "siomay.jpg", 
            harga : 8600,
            },

            {
            idmenu : 5, 
            idkategori : 2, 
            menu : "Udang Rambutan", 
            gambar : "rambutan.jpg", 
            harga : 8600,
            },

            {
            idmenu : 6, 
            idkategori : 2, 
            menu : "Udang Keju", 
            gambar : "keju.jpg", 
            harga : 8600,
            },

            {
                idmenu : 7, 
                idkategori : 2, 
                menu : "Lumpia Udang", 
                gambar : "lumpia.jpg", 
                harga : 8600,
                },
    
                {
                idmenu : 8, 
                idkategori : 2, 
                menu : "Ceker", 
                gambar : "ceker.jpg", 
                harga : 8600,
                },
    
                {
                idmenu : 9, 
                idkategori : 2, 
                menu : "Pangsit Goreng", 
                gambar : "pangsit.jpg", 
                harga : 9500,
                },
    
                {
                idmenu : 10, 
                idkategori : 3, 
                menu : "Es Genderuwo", 
                gambar : "genderuwo.jpg", 
                harga : 8600,
                },
    
                {
                idmenu : 11, 
                idkategori : 3, 
                menu : "Es Tuyul", 
                gambar : "tuyul.jpg", 
                harga : 5500,
                },
    
                {
                idmenu : 12, 
                idkategori : 3, 
                menu : "Es Teh", 
                gambar : "keju.jpg", 
                harga : 8600,
                },

                {
                    idmenu : 13, 
                    idkategori : 3, 
                    menu : "Es Sundelbolong", 
                    gambar : "sundelbolong.jpg", 
                    harga : 5900,
                    },
        
                    {
                    idmenu : 14, 
                    idkategori : 3, 
                    menu : "Es Pocong", 
                    gambar : "pocong.jpg", 
                    harga : 8600,
                    },
        
                    {
                    idmenu : 15, 
                    idkategori : 3, 
                    menu : "Tea Tarik", 
                    gambar : "tea.jpg", 
                    harga : 5900,
                    },

                    {
                        idmenu : 16, 
                        idkategori : 3, 
                        menu : "Milo", 
                        gambar : "milo.jpg", 
                        harga : 7700,
                        },
            
                        {
                        idmenu : 17, 
                        idkategori : 3, 
                        menu : "Fresh Milk", 
                        gambar : "milk.jpg", 
                        harga : 8600,
                        },
            
            ]
    )
    return (
        <div className="App">
            <Tabel menu={menus} titel={titel}/>
        </div>
    );
}

export default Menu;