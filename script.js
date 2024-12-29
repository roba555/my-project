const banks = [
    {
        'bankName': 'Alrajhi Bank',
        'samaCode': '80',
        'nameEn': 'Alrajhi Bank',
        'nameAr': 'بنك الراجحي',
    },
    {
        'samaCode': '10',
        'bankName': 'National Commercial Bank',
        'nameEn': 'National Commercial Bank',
        'nameAr': 'البنك الأهلي التجاري',
    },
    {
        'samaCode': '20',
        'bankName': 'Riyadh Bank',
        'nameEn': 'Riyad Bank',
        'nameAr': 'بنك الرياض',
    }
    
];



function check_iban(iban){

    if(!iban){
        return false
    }
    
    iban = iban.replaceAll(' ', '');

    // check length
    if(iban.length !== 24){
        return false
    }
    // must start with SA
    if(!iban.startsWith('SA')){
        return false
    }

    return iban
}

function get_iban() {

    let ibanField = document.getElementById('iban')
    let iban = ibanField.value
    let resualt = document.getElementById('resualt');
    

    
    iban = check_iban(iban)
    if(iban === false){
        resualt.innerHTML = 'الايبان غير صحيح';

    }else {
        resualt.innerHTML = 'الايبان صحيح';

        
        const bankCode = iban.substring(4, 6);
        const bankdetails = banks.find(bank => bank.samaCode === bankCode);

        document.getElementById('nameAr').innerHTML = bankdetails.nameAr;
        document.getElementById('nameEn').innerHTML = bankdetails.nameEn;
        document.getElementById('samaCode').innerHTML = bankdetails.samaCode;
        document.getElementById('samaCode').innerHTML = bankdetails.samaCode;
        
    }


    
}



