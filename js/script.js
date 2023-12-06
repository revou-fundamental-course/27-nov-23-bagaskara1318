    // luas segitiga
    const alas = document.getElementById('input-alas')
    const tinggi = document.getElementById('input-tinggi')
    const hitungluas = document.getElementById('hitung-luas')
    const outputluas = document.getElementById('output-luas')
    const resetluas = document.getElementById('reset-luas')

    hitungluas.addEventListener('click', function(){
        if(alas.value == ""){
            alert("Alas Tidak Boleh Kosong!");
        }
        if(tinggi.value == ""){
            alert("Tinggi Tidak Boleh Kosong!");
        }
        let a = alas.value
        let t = tinggi.value
        let l = 0.5*a*t
        outputluas.innerHTML = `Luas Segitiga adalah 1/2 x ${a} x ${t} = ${l}`
    })

    resetluas.addEventListener('click', function(){
        alas.value = null;
        tinggi.value = null;
        outputluas.innerHTML = null;
    })

    // keliling segitiga
    const sisia = document.getElementById('input-sisiA')
    const sisib = document.getElementById('input-sisiB')
    const sisic = document.getElementById('input-sisiC')
    const hitungkel = document.getElementById('hitung-kel')
    const outputkel = document.getElementById('output-kel')
    const resetkel = document.getElementById('reset-kel')

    hitungkel.addEventListener('click', function(){
        if(sisia.value == ""){
            alert("Sisi a Tidak Boleh Kosong!");
        }
        if(sisib.value == ""){
            alert("Sisi b Tidak Boleh Kosong!");
        }
        if(sisic.value == ""){
            alert("Sisi c Tidak Boleh Kosong!");
        }
        let sa = sisia.value
        let sb = sisib.value
        let sc = sisic.value
        let k = parseInt(sa) + parseInt(sb) + parseInt(sc)
        outputkel.innerHTML = `Keliling Segitiga adalah ${sa} + ${sb} + ${sc} = ${k}`
    })

    resetkel.addEventListener('click', function(){
        sisia.value = null;
        sisib.value = null;
        sisic.value = null;
        outputkel.innerHTML = null;
    })