const nameInput = document.querySelector('.name-input');

const mechantInput = document.querySelector('.mechant-name-input');

const btnElement = document.querySelector('.btn');

const resetElement = document.querySelector('.reset');

const tempElement = document.querySelector('.template');

const selectElement = document.getElementById('dropdown');

btnElement.addEventListener('click', () => {
    if (nameInput.value && mechantInput.value) {
        tempElement.classList.add('grow');
        tempElement.innerHTML = `
            <h1>ECONOMIC AND FINANCIAL CRIME COMMISSION (EFCC)</h1>
    
            <div class="flex">
                <section  class="name">
                    <h3>Dear ${nameInput.value},</h3>
                </section>
    
                <section>
                    <h3>No, 15A, Awolowo Road,Ikoyi, Lagos, Nigeria.</h3>
                </section>
            </div>
    
            <p>We have received many information from ${mechantInput.value} APP regards your long loan indebtedness already susceptible to a criminal act.</p>
    
            <p>To eradicate financial crimes through prevention, enforcement and coordination, the Economic and Financial Crimes Commission (EFCC) has given you Immediate demand to return their funds within ${selectElement.value}.</p>
    
            <p>Failure to your obligation means we shall probe you in our custody which could see you pay more in distress.</p>
            <p>We shall continue uploading the mandate to prevent, investigate and prosecute any form financial crimes cases including money laundering either public or private funds</p>

            <div>Signed:</div>
            <div>Executive Chairman</div>
            <div>Ola Olukayode</div>
        `;
    } 
});

resetElement.addEventListener('click', () => {
    tempElement.classList.remove('grow');
    nameInput.value = '';
    mechantInput.value = '';
    selectElement.value = '2 HOURS';
});
