var inputToNumber = function(input) {
    return Number(input.replace(/[^0-9\.]+/g, ""));
}
var numberToCurrency = function(input) {
    return "$" + input.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
var numberToPercent = function(input) {
    return parseFloat(input.toFixed(3)) + "%";
}

$("#initial-choice-from-home-price").on('click', function() {
    switchToHomePrice();
});
$("#initial-choice-from-income").on('click', function() {
    switchToIncome();
});
$("#initial-choice-from-monthly-payment").on('click', function() {
    switchToMonthlyPayment();
});
var switchToHomePrice = function() {
    $("#initial-choice-from-home-price").addClass("selected-choice");
    $("#initial-choice-from-income").removeClass("selected-choice");
    $("#initial-choice-from-monthly-payment").removeClass("selected-choice");
    $(".from-home-price").show();
    $(".from-income").hide();
    $(".from-monthly-payment").hide();
    calculateFromHomePrice();
}

var switchToIncome = function() {
    $("#initial-choice-from-home-price").removeClass("selected-choice");
    $("#initial-choice-from-income").addClass("selected-choice");
    $("#initial-choice-from-monthly-payment").removeClass("selected-choice");
    $(".from-home-price").hide();
    $(".from-income").show();
    $(".from-monthly-payment").hide();
    calculateFromIncome();
}

var switchToMonthlyPayment = function() {
    $("#initial-choice-from-home-price").removeClass("selected-choice");
    $("#initial-choice-from-income").removeClass("selected-choice");
    $("#initial-choice-from-monthly-payment").addClass("selected-choice");
    $(".from-home-price").hide();
    $(".from-income").hide();
    $(".from-monthly-payment").show();
    calculateFromPayment();
}
$(".homeprice-field").on('change', function() {
    var loanTerm = inputToNumber($("#hp-loan-term-year").val());
    this.value = loanTerm + " years";
    $("#hp-loan-term-month").val(Math.round(loanTerm * 12) + " months");
    calculateFromHomePrice();
});
$("#hp-loan-amount").on('change', function() {
    this.value = numberToCurrency(inputToNumber(this.value));
    var price = inputToNumber(this.value);
    var downPayment = inputToNumber($("#hp-down-payment-amount").val());
    var percent = (downPayment / price) * 100;
    $("#hp-down-payment-percent").val(numberToPercent(percent));
    calculateFromHomePrice();
});
$("#hp-interest-rate").on('change', function() {
    this.value = numberToPercent(inputToNumber(this.value));
    calculateFromHomePrice();
});
$("#hp-home-insurance").on('change', function() {
    this.value = numberToCurrency(inputToNumber(this.value));
    calculateFromHomePrice();
});
$("#hp-property-tax").on('change', function() {
    this.value = numberToPercent(inputToNumber(this.value));
    calculateFromHomePrice();
});
$("#hp-hoa").on('change', function() {
    this.value = numberToCurrency(inputToNumber(this.value));
    calculateFromHomePrice();
});
$("#hp-down-payment-amount").on('change', function() {
    var downPayment = inputToNumber(this.value);
    this.value = numberToCurrency(downPayment);
    var price = inputToNumber($("#hp-loan-amount").val());
    var percent = (downPayment / price) * 100;
    $("#hp-down-payment-percent").val(numberToPercent(percent));
    calculateFromHomePrice();
});
$("#hp-down-payment-percent").on('change', function() {
    var percent = inputToNumber(this.value);
    this.value = numberToPercent(percent);
    var price = inputToNumber($("#hp-loan-amount").val());
    var downPayment = (percent * price) / 100;
    $("#hp-down-payment-amount").val(numberToCurrency(downPayment));
    calculateFromHomePrice();
});
$("#i-income").on('change', function() {
    this.value = numberToCurrency(inputToNumber(this.value));
    calculateFromIncome();
});
$("#i-monthly-debts").on('change', function() {
    this.value = numberToCurrency(inputToNumber(this.value));
    calculateFromIncome();
});
$("#i-interest-rate").on('change', function() {
    this.value = numberToPercent(inputToNumber(this.value));
    calculateFromIncome();
});
$("#i-debt-to-income").on('change', function () { 
    this.value = numberToPercent(inputToNumber(this.value));
    calculateFromIncome(); 
}); 
$("#i-loan-term-year").on('change', function() {
    var loanTerm = inputToNumber(this.value);
    this.value = loanTerm + " years";
    $("#i-loan-term-month").val(Math.round(loanTerm * 12) + " months");
    calculateFromIncome();
});
$("#i-down-payment-amount").on('change', function() {
    var downPayment = inputToNumber(this.value);
    this.value = numberToCurrency(downPayment);
    calculateFromIncome(true);
});
$("#i-down-payment-percent").on('change', function() {
    var percent = inputToNumber(this.value);
    this.value = numberToPercent(percent);
    calculateFromIncome();
});
$("#i-home-insurance").on('change', function() {
    this.value = numberToCurrency(inputToNumber(this.value));
    calculateFromIncome();
});
$("#i-property-tax").on('change', function() {
    this.value = numberToPercent(inputToNumber(this.value));
    calculateFromIncome();
});
$("#i-hoa").on('change', function() {
    this.value = numberToCurrency(inputToNumber(this.value));
    calculateFromIncome();
});
$("#mp-monthly-payment").on('change', function() {
    this.value = numberToCurrency(inputToNumber(this.value));
    calculateFromPayment();
});
$("#mp-interest-rate").on('change', function() {
    this.value = numberToPercent(inputToNumber(this.value));
    calculateFromPayment();
});
$("#mp-loan-term-year").on('change', function() {
    var loanTerm = inputToNumber(this.value);
    this.value = loanTerm + " years";
    $("#mp-loan-term-month").val(Math.round(loanTerm * 12) + " months");
    calculateFromPayment();
});
$("#mp-down-payment-amount").on('change', function() {
    var downPayment = inputToNumber(this.value);
    this.value = numberToCurrency(downPayment);
    calculateFromPayment(true);
});
$("#mp-down-payment-percent").on('change', function() {
    var percent = inputToNumber(this.value);
    this.value = numberToPercent(percent);
    calculateFromPayment();
});
$("#mp-home-insurance").on('change', function() {
    this.value = numberToCurrency(inputToNumber(this.value));
    calculateFromPayment();
});
$("#mp-property-tax").on('change', function() {
    this.value = numberToPercent(inputToNumber(this.value));
    calculateFromPayment();
});
$("#mp-hoa").on('change', function() {
    this.value = numberToCurrency(inputToNumber(this.value));
    calculateFromPayment();
});

// PMI Declaration with Onchange Function (Monthly Payment)
$("#mp-pmi-1").on('change', function() {
    this.value = inputToNumber(this.value);
    calculateFromPayment();
});
$("#mp-pmi-2").on('change', function() {
    this.value = inputToNumber(this.value);
    calculateFromPayment();
});
$("#mp-pmi-3").on('change', function() {
    this.value = inputToNumber(this.value);
    calculateFromPayment();
});
$("#mp-pmi-4").on('change', function() {
    this.value = inputToNumber(this.value);
    calculateFromPayment();
});

// PMI Declaration with Onchange Function (Income)
$("#i-pmi-1").on('change', function() {
    this.value = inputToNumber(this.value);
    calculateFromIncome();
});
$("#i-pmi-2").on('change', function() {
    this.value = inputToNumber(this.value);
    calculateFromIncome();
});
$("#i-pmi-3").on('change', function() {
    this.value = inputToNumber(this.value);
    calculateFromIncome();
});
$("#i-pmi-4").on('change', function() {
    this.value = inputToNumber(this.value);
    calculateFromIncome();
});

// PMI Declaration with Onchange Function (Home Price)
$("#hp-pmi-1").on('change', function() {
    this.value = inputToNumber(this.value);
    calculateFromHomePrice();
});
$("#hp-pmi-2").on('change', function() {
    this.value = inputToNumber(this.value);
    calculateFromHomePrice();
});
$("#hp-pmi-3").on('change', function() {
    this.value = inputToNumber(this.value);
    calculateFromHomePrice();
});
$("#hp-pmi-4").on('change', function() {
    this.value = inputToNumber(this.value);
    calculateFromHomePrice();
});

var calculateFromHomePrice = function() {
    var homePrice = inputToNumber($("#hp-loan-amount").val());
    var interest = inputToNumber($("#hp-interest-rate").val());
    var term = Math.round(inputToNumber($("#hp-loan-term-year").val()) * 12);
    var downPayment = inputToNumber($("#hp-down-payment-amount").val());
    var homeInsurance = Math.round(inputToNumber($("#hp-home-insurance").val()) / 12);
    var propertyTax = Math.round(inputToNumber($("#hp-property-tax").val()) / 100 * homePrice / 12);
    var hoaFees = inputToNumber($("#hp-hoa").val());
    var loanAmount = homePrice - downPayment;
    $("#hp-loan-final-amount").val(numberToCurrency(loanAmount));
    var piPayment = annuityCF(loanAmount, interest, term);
    var values = [Math.round(piPayment), propertyTax, homeInsurance];
    if (hoaFees > 0)
        values.push(hoaFees);
    else
        values.push(null);
    var mi = calculateMI(homePrice, downPayment);
    if (mi)
        values.push(Math.round(mi));
    drawChart(values);
    var amortizationTable = createAmortizationTable(piPayment, loanAmount, interest, term);
    var canvas = document.getElementById("canvasHomePriceAmortization");
    drawAmortizationChart(amortizationTable, canvas);
}

var calculateFromIncome = function(calcFromDownPaymentAmount) {
    var monthlyIncome = inputToNumber($("#i-income").val()) / 12;
    var debt = inputToNumber($("#i-monthly-debts").val());
    var dti = inputToNumber($("#i-debt-to-income").val()) / 100;
    var downPayment = calcFromDownPaymentAmount ? inputToNumber($("#i-down-payment-amount").val()) : inputToNumber($("#i-down-payment-percent").val()) / 100;
    var interestRate = inputToNumber($("#i-interest-rate").val()) / 1200;
    var term = inputToNumber($("#i-loan-term-year").val()) * 12;
    var homeInsurance = inputToNumber($("#i-home-insurance").val()) / 12;
    var propertyTaxPercent = inputToNumber($("#i-property-tax").val()) / 1200;
    var hoaFees = inputToNumber($("#i-hoa").val());
    var maxDTICF = (monthlyIncome * dti) - debt;
    var maxFinanceCF = maxDTICF - hoaFees - homeInsurance;
    var miRate = getMIRateIncome(.20) / 12;
    var factor = calculateFactor(interestRate, term);
    var financedPrice, homePrice;
    do {
        financedPrice = calcFromDownPaymentAmount ? (maxFinanceCF * factor - factor * propertyTaxPercent * downPayment) / (1 + miRate * factor + propertyTaxPercent * factor) : (maxFinanceCF * factor) / (1 + miRate * factor + propertyTaxPercent * factor / (1 - downPayment));
        homePrice = calcFromDownPaymentAmount ? financedPrice + downPayment : financedPrice / (1 - downPayment);
        var ltv = 1 - financedPrice / homePrice;
        var oldMIRate = miRate;
        miRate = getMIRateIncome((Math.round(ltv * 100000) / 100000)) / 12;
    } while (miRate != oldMIRate);
    $("#i-loan-final-amount").val(numberToCurrency(financedPrice));
    if (calcFromDownPaymentAmount) {
        $("#mp-down-payment-amount").val(numberToPercent(downPayment / homePrice));
    } else {
        $("#i-down-payment-amount").val(numberToCurrency(homePrice - financedPrice));
    }
    var paymentPI = financedPrice / factor;
    var finalPayment = maxFinanceCF + hoaFees + homeInsurance;
    $("#i-output-home-price").html(numberToCurrency(Math.round(homePrice)));
    $("#i-output-monthly-payment").html(numberToCurrency(finalPayment));
    var amortizationTable = createAmortizationTable(paymentPI, financedPrice, interestRate * 1200, term);
    var canvas = document.getElementById("canvasIncomeAmortization");
    drawAmortizationChart(amortizationTable, canvas);
}

var calculateFromPayment = function(calcFromDownPaymentAmount) {
    var monthlyPayment = inputToNumber($("#mp-monthly-payment").val());
    var interestRate = inputToNumber($("#mp-interest-rate").val()) / 1200;
    var term = inputToNumber($("#mp-loan-term-year").val()) * 12;
    var downPayment = inputToNumber($("#mp-down-payment-percent").val()) / 100;

    var numb11 = $("#mp-downPayment").val(numberToCurrency(downPayment));
    var homeInsurance = inputToNumber($("#mp-home-insurance").val()) / 12;
    var propertyTaxPercent = inputToNumber($("#mp-property-tax").val()) / 1200;
    var hoaFees = inputToNumber($("#mp-hoa").val());
    var maxDTICF = monthlyPayment;
    var maxFinanceCF = maxDTICF - hoaFees - homeInsurance;
    var miRate = getMIRatePayment(downPayment);
    var factor = calculateFactor(interestRate, term);
    var financedPrice, homePrice;


    homePrice = homePriceFromMonthlyPayment(maxFinanceCF, interestRate, term, propertyTaxPercent, downPayment, miRate / 12);

    financedPrice = homePrice - (homePrice * downPayment);
    $("#mp-down-payment-amount").val(numberToCurrency((homePrice * downPayment)));

    var paymentPI = financedPrice / factor;
    var finalPayment = maxFinanceCF + hoaFees + homeInsurance;

    $("#mp-loan-final-amount").val(numberToCurrency(financedPrice));
    $("#mp-output-home-price").html(numberToCurrency(Math.round(homePrice)));

    var amortizationTable = createAmortizationTable(paymentPI, financedPrice, interestRate * 1200, term);
    var canvas = document.getElementById("canvasMonthlyPaymentAmortization");
    drawAmortizationChart(amortizationTable, canvas);
}

var homePriceFromMonthlyPayment = function(monthlyPayment, monthlyInterestRate, loanTerm, monthlyPropertyTax, downPaymentPercent, privateMortgageInsurance) {

    return (Math.pow((monthlyInterestRate + 1), loanTerm) - 1) * monthlyPayment / ((Math.pow((monthlyInterestRate + 1), loanTerm) - 1) * monthlyPropertyTax + ((1 - downPaymentPercent) * Math.pow((monthlyInterestRate + 1), loanTerm) + downPaymentPercent - 1) * privateMortgageInsurance + (1 - downPaymentPercent) * monthlyInterestRate * Math.pow((monthlyInterestRate + 1), loanTerm));
}

var calculateMI = function(homePrice, downPayment) {
    var principal = homePrice - downPayment;
    var ltv = 1 - principal / homePrice;
    var miRate = getMIRatePrice((Math.round(ltv * 100000) / 100000));
    return miRate === 0 ? null : principal * miRate / 12;
}

var getMIRatePrice = function(ltv) {
    var miRate = 0;
    if (ltv < 0.05) {
        miRate = inputToNumber($("#hp-pmi-1").val());
    } else if (ltv < 0.10) {
        miRate = inputToNumber($("#hp-pmi-2").val());
    } else if (ltv < 0.15) {
        miRate = inputToNumber($("#hp-pmi-3").val());
    } else if (ltv < 0.20) {
        miRate = inputToNumber($("#hp-pmi-4").val());
    }
    return miRate;
}

var getMIRateIncome = function(ltv) {
    var miRate = 0;
    if (ltv < 0.05) {
        miRate = inputToNumber($("#i-pmi-1").val());
    } else if (ltv < 0.10) {
        miRate = inputToNumber($("#i-pmi-2").val());
    } else if (ltv < 0.15) {
        miRate = inputToNumber($("#i-pmi-3").val());
    } else if (ltv < 0.20) {
        miRate = inputToNumber($("#i-pmi-4").val());
    }
    return miRate;
}

var getMIRatePayment = function(ltv) {
    var miRate = 0;
    if (ltv < 0.05) {
        miRate = inputToNumber($("#mp-pmi-1").val());
    } else if (ltv < 0.10) {
        miRate = inputToNumber($("#mp-pmi-2").val());
    } else if (ltv < 0.15) {
        miRate = inputToNumber($("#mp-pmi-3").val());
    } else if (ltv < 0.20) {
        miRate = inputToNumber($("#mp-pmi-4").val());
    }
    return miRate;
}

var createAmortizationTable = function(piPayment, initialBalance, interest, term) {
    var currentBalance = initialBalance;
    var interestMonthly = interest / 1200;
    var results = [];

    for (var n = 0; n < term; n++) {
        var interestComponent = currentBalance * interestMonthly;
        var principalComponent = piPayment - interestComponent;
        currentBalance -= principalComponent;
        var result = {
            period: n,
            principal: principalComponent,
            interest: interestComponent,
            balance: currentBalance
        };
        results.push(result);
    }

    return results;
}
var annuityCF = function(pv, rate, term) {
    var ratio = calculateFactor(rate / 1200, term);
    return pv / ratio;
}

var calculateFactor = function(rate, term) {
    return (1 - Math.pow(1 + rate, -term)) / rate;
}

var drawChart = function(amounts) {
    var colors = ['#409a49', 'Gold', 'IndianRed', 'GoldenRod', 'LightSeaGreen'];
    var labels = ['', '', '', '', ''];
    var chartFont = "12px sans-serif";
    var chartTotalFont = "24px sans-serif";
    var canvas = document.getElementById("canvasHomePricePayment");
    if (window.innerWidth > 480) {
        canvas.height = window.innerWidth * .25;
    } else {
        canvas.height = window.innerWidth * .75;
    }
    canvas.width = canvas.height * 1.5;
    var context = canvas.getContext("2d");
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = ((canvas.height < canvas.width ? canvas.height : canvas.width) * .90) / 2 - 1;
    var textRadius = radius * 0.8;
    var totalValue = amounts.reduce(function(a, b) {
        return a + b;
    });
    var scale = 2 / totalValue;
    var startAngle = 1.5;
    var offset = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var n in amounts) {
        var amount = amounts[n];
        if (amount === null) {
            offset++;
            continue;
        }
        var endAngle = ((amount * scale) + startAngle) % 2;
        context.beginPath();
        context.moveTo(centerX, centerY);
        context.arc(centerX, centerY, radius, startAngle * Math.PI, endAngle * Math.PI, false);
        context.lineTo(centerX, centerY);
        context.lineWidth = 0.5;
        context.closePath();
        context.fillStyle = colors[offset];
        context.fill();
        var centerAngle = Math.abs(startAngle + endAngle) / 2;
        if (startAngle > endAngle)
            centerAngle -= 1;
        var tempTextRadius = textRadius;
        if ((amount / totalValue) < .06)
            tempTextRadius *= 1.1;
        var textX = Math.cos(centerAngle * Math.PI) * tempTextRadius + centerX;
        var textY = Math.sin(centerAngle * Math.PI) * tempTextRadius + centerY;
        context.fillStyle = "White";
        context.textBaseline = "middle";
        context.textAlign = "center";
        context.font = chartFont;
        context.fillText(numberToCurrency(amount), textX, textY);
        var blipX = Math.cos(centerAngle * Math.PI) * radius + centerX;
        var blipY = Math.sin(centerAngle * Math.PI) * radius + centerY;
        context.moveTo(blipX, blipY);
        var targetX = blipX;
        var labelTargetX = blipX;
        if (blipX > centerX) {
            targetX += 15;
            labelTargetX += 25;
            context.textAlign = "left";
        } else {
            targetX -= 15;
            labelTargetX -= 25;
            context.textAlign = "right";
        }
        context.font = "12px sans-serif";
        context.fillStyle = "Black";
        context.fillText(labels[n], labelTargetX, blipY * 1.01 - 5);
        startAngle = endAngle;
        offset++;
    }
    context.beginPath();
    context.arc(centerX, centerY, radius / 2, 0, 2 * Math.PI, false);
    context.fillStyle = "Grey";
    context.fill();
    context.fillStyle = "White";
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.font = chartTotalFont;
    context.fillText(numberToCurrency(totalValue), centerX, centerY);
    context.font = "12px sans-serif";
    context.fillText("Total", centerX, centerY + 20);
}

function resizeCanvas() {
    calculateFromHomePrice();
}
var drawAmortizationChart = function(table, canvas) {
    var minX = 50,
        minY = 20;
    var maxX = canvas.width - 10,
        maxY = canvas.height - 60;
    var term = table.length / 12;
    var payment = table[0].principal + table[0].interest;
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    var maxYValue = (Math.ceil(payment / 200)) * 200;
    var maxXValue = Math.ceil(term / 5) * 5;
    var yScale = (maxY - minY) / maxYValue;
    var xScale = (maxX - minX) / maxXValue;
    context.font = "12px sans-serif";
    for (var n = 0; n <= maxYValue; n += 200) {
        var y = maxY - (n * yScale);
        context.textAlign = 'right';
        context.fillText('$' + n, minX - 5, y);
    }
    for (var n = 0; n <= maxXValue; n += 5) {
        var x = minX + (n * xScale);
        context.textAlign = 'center';
        context.fillText(n, x, maxY + 20);
    }
    context.beginPath();
    context.fillStyle = 'LightGreen';
    context.rect(minX, maxY - (payment * yScale), (term * xScale), payment * yScale);
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(minX + 50, maxY + 45, 5, 0, 2 * Math.PI);
    context.fill();
    context.font = "12px sans-serif";
    context.fillStyle = 'Black';
    context.textAlign = 'left';
    context.fillText('Principal', minX + 60, maxY + 50);
    context.beginPath();
    context.fillStyle = '#409a49';
    context.moveTo(minX, maxY);
    for (var n in table) {
        var data = table[n];
        var interest = data.interest;
        var x = data.period / 12 * xScale + minX;
        var y = maxY - (data.interest * yScale)
        context.lineTo(x, y);
    }
    context.lineTo(minX, maxY);
    context.fill();
    context.beginPath();
    context.arc(minX + 150, maxY + 45, 5, 0, 2 * Math.PI);
    context.fill();
    context.font = "12px sans-serif";
    context.fillStyle = 'Black';
    context.textAlign = 'left';
    context.fillText('Interest', minX + 165, maxY + 50);
    context.strokeStyle = '#555555';
    context.lineWidth = 0.05;
    for (var n = 0; n <= maxYValue; n += 200) {
        var y = maxY - (n * yScale);
        context.moveTo(minX, y);
        context.lineTo(maxX, y);
        context.stroke();
    }
    for (var n = 0; n <= maxXValue; n += 5) {
        var x = minX + (n * xScale);
        context.moveTo(x, maxY);
        context.lineTo(x, maxY + 10);
        context.stroke();
    }
    context.fillStyle = 'Black';
    context.textAlign = 'center';
    context.font = "12px sans-serif";
    context.fillText("Length of the loan(yrs)", (minX + maxX) / 2, maxY + 35);
    context.translate(0, canvas.height);
    context.rotate(-Math.PI / 2);
    context.fillText("Monthly Payment", (maxY + minY) / 2, minY - 40);
    context.setTransform(1, 0, 0, 1, 0, 0);
}
$(".advanced-label").click(function() {
    if ($(".advanced-options").hasClass("hidden-options")) {
        $(".advanced-options").slideDown();
        $(".advanced-options").removeClass("hidden-options");
        $(".advanced-label a").html("hide");
    } else {
        $(".advanced-options").slideUp();
        $(".advanced-options").addClass("hidden-options");
        $(".advanced-label a").html("show");
    }
});

function init() {
    window.addEventListener('resize', resizeCanvas, false);
    window.addEventListener('orientationchange', resizeCanvas, false);
    resizeCanvas();
}
init();
calculateFromHomePrice();