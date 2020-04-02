var total = 0;
var amountFromChildren = 0;
var amountFromIncome = 0;

var enumStatus  = {
    INDIVIDUAL: '0',
    HEADOFHOUSEHOLD: '1',
    MARRIED: '2'
};
var status = enumStatus.INDIVIDUAL;
var income = 0;

function onNumChildrenChanged(num) {
    amountFromChildren = 500*num;
    document.getElementById("amountFromChildren").innerText = amountFromChildren;
    updateTotal();
}
function onIncomeChanged(inputincome) {
    /*if (income<75000) {
        amountOver = 0;
        amountFromIncome = 1200
    }
    else {
        var amountOver = income-75000;
        amountFromIncome = (1200-(amountOver/100*5))
        amountFromIncome = amountFromIncome>0?amountFromIncome:0;
    }*/
    income = inputincome;
    updateIncome();
    updateTotal();
}
function onHeadOfHouseChanged(chkbx) {
    /*alert(chkbx);
    status = chkbx.checked=="on"?enumStatus.HEADOFHOUSEHOLD:enumStatus.INDIVIDUAL;
    document.getElementById("chkMarried").checked = false;
    document.getElementById("filingStatus").innerText = getFilingStatus();
    updateIncome();
    updateTotal();*/
}
function onMarriedChanged(chkbx) {
    /*alert(chkbx.checked);
    status = chkbx.checked=="on"?enumStatus.MARRIED:enumStatus.INDIVIDUAL;
    document.getElementById("chkHeadOfHouse").checked = false;
    document.getElementById("filingStatus").innerText = getFilingStatus();
    updateIncome();
    updateTotal();*/
}

function onFilingStatus(value) {
    status = value;
    document.getElementById("filingStatus").innerText = getFilingStatus();
    updateIncome();
    updateTotal();
}

function updateIncome() {
    var incomeThreshold;
    switch (status) {
        case enumStatus.INDIVIDUAL:
            incomeThreshold = 75000;
            break;
        case enumStatus.HEADOFHOUSEHOLD:
            incomeThreshold = 112500;
            break;
        case enumStatus.MARRIED:
            incomeThreshold = 150000;
            break;
    }
    var amountOver = income - incomeThreshold;
    amountOver = amountOver<0?0:amountOver
    amountFromIncome = 1200 - (amountOver/100*5);
    amountFromIncome = amountFromIncome>0?amountFromIncome:0

    document.getElementById("amountOver").innerText = amountOver;
    document.getElementById("amountFromIncome").innerText = amountFromIncome;

}
function getFilingStatus() {
    var filingStatus;
    switch(status) {
        case enumStatus.INDIVIDUAL:
            filingStatus = "Individual";
            break;
        case enumStatus.HEADOFHOUSEHOLD:
            filingStatus = "Head of Household";
            break;
        case enumStatus.MARRIED:
            filingStatus = "Married";
            break;

    }
    return filingStatus;
}
function updateTotal() {
    total = amountFromChildren + amountFromIncome;
    document.getElementById("checkAmount").innerText = total 
}

updateIncome();
updateTotal();