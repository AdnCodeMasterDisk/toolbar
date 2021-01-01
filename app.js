function b1() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <div class="container">
    </div>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}

function b2() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <div class="row">
    </div>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}

function b3() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <div class="col">
    </div>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}


function b4() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <h1> `);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}


function b5() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <p> `);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}

function b6() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <div class="container">
        <div class="row">
            <div class="col">
            </div>
        </div>
    </div> `);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}


function b7() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <div class="container">
        <div class="row">
            <div class="col">
            </div>
            <div class="col">
            </div>
        </div>
    </div> `);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}

function b8() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <div class="container">
        <div class="row">
            <div class="col-xl-4 col-lg-12">
                <h1 class="text-center" style="margin-top: 40px; margin-bottom: 20px; opacity: 0.7;">Tittle</h1>
                <p style="font-weight: 400; font-size: 16px; opacity: 0.65;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam architecto facere beatae, magni perspiciatis reiciendis in labore adipisci ad vitae, odit impedit at dolorum. Aliquam nesciunt suscipit enim impedit accusantium!</p>
            </div>
            <div class="col-xl-4 col-lg-12">
                <h1 class="text-center" style="margin-top: 40px; margin-bottom: 20px; opacity: 0.7;">Tittle</h1>
                <p style="font-weight: 400; font-size: 16px; opacity: 0.65;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam architecto facere beatae, magni perspiciatis reiciendis in labore adipisci ad vitae, odit impedit at dolorum. Aliquam nesciunt suscipit enim impedit accusantium!</p>
            </div>
            <div class="col-xl-4 col-lg-12">
                <h1 class="text-center" style="margin-top: 40px; margin-bottom: 20px; opacity: 0.7;">Tittle</h1>
                <p style="font-weight: 400; font-size: 16px; opacity: 0.65;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam architecto facere beatae, magni perspiciatis reiciendis in labore adipisci ad vitae, odit impedit at dolorum. Aliquam nesciunt suscipit enim impedit accusantium!</p>
            </div>
        </div>
    </div>
    `);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}