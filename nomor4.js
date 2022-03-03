function terbilang(angka){

    var bilne=["","Satu","Dua","Tiga","Empat","Lima","Enam","Tujuh","Delapan","Sembilan","Sepuluh","Sebelas"];

    if(angka < 12){

        return bilne[angka];

    }else if(angka < 20){

        return terbilang(angka-10)+" belas";

    }else if(angka < 100){

        return terbilang(Math.floor(parseInt(angka)/10))+" puluh "+terbilang(parseInt(angka)%10);

    }else if(angka < 200){

        return "seratus "+terbilang(parseInt(angka)-100);

    }else if(angka < 1000){

        return terbilang(Math.floor(parseInt(angka)/100))+" ratus "+terbilang(parseInt(angka)%100);

    }else if(angka < 2000){

        return "seribu "+terbilang(parseInt(angka)-1000);

    }else if(angka < 1000000){

        return terbilang(Math.floor(parseInt(angka)/1000))+" ribu "+terbilang(parseInt(angka)%1000);

    }else if(angka < 1000000000){

        return terbilang(Math.floor(parseInt(angka)/1000000))+" juta "+terbilang(parseInt(angka)%1000000);

    }else if(angka < 1000000000000){

        return terbilang(Math.floor(parseInt(angka)/1000000000))+" milyar "+terbilang(parseInt(angka)%1000000000);

    }else if(angka < 1000000000000000){

        return terbilang(Math.floor(parseInt(angka)/1000000000000))+" trilyun "+terbilang(parseInt(angka)%1000000000000);

    }

}

console.log(terbilang(2048))