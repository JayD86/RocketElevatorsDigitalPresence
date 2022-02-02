
var Building_Type_Residential ="1"
var Building_Type_Commercial ="2"
var Building_Type_Corporate ="3"
var Building_Type_Hybrid ="4"

$(quote.html).ready(function () {
    hideForms();
    //Type of building selection
    $('#building-type-select').on('change', function() {
        showForm(this.value);
    })
})

function showForm(buildingTypeId) {
    hideForms();
    switch (buildingTypeId) {
        case Building_Type_Residential:
            getResidentialDivs().show('#number-of-appartments, #number-of-floors, #number-of-basements');
            break;
        case Building_Type_Commercial:
            getCommercialDivs().show('#number-of-businesses, #number-of-floors, #number-of-basements, #number-of-parkings-spots, #number-of-elevator-cages');
            break;
        case Building_Type_Corporate:
            getCorporateDivs().show('#number-of-businesses, #number-of-floors, #number-of-basements, #number-of-parkings, #maximum-number-of-occupants-per-floor');
            break;
        case Building_Type_Hybrid:
            getHybridDivs().show('#number-of-businesses, #number-of-floors, #number-of-basements, #number-of-parkings, #maximum-number-of-occupants-per-floor, #number-of-activity-hours-in-the-building');
            break;
        default:
            break;                
    }
}

function getResidentialDivs() {
    return $('#number-of-appartments, #number-of-floors, #number-of-basements');
}

function getCommercialDivs() {
    return $('#number-of-businesses, #number-of-floors, #number-of-basements, #number-of-parkings-spots, #number-of-elevator-cages');
}

function getCorporateDivs() {
    return $('#number-of-businesses, #number-of-floors, #number-of-basements, #number-of-parkings, #maximum-number-of-occupants-per-floor');
}

function getHybridDivs() {
    return $('#number-of-businesses, #number-of-floors, #number-of-basements, #number-of-parkings, #maximum-number-of-occupants-per-floor, #number-of-activity-hours-in-the-building');
}

function getResidentialInputFields() {
    return $('#number-of-appartments-input, #number-of-floors-input, #number-of-basements-input');
}

function getCommercialInputFields() {
    return $('#number-of-businesses-input, #number-of-floors-input, #number-of-basements-input, #number-of-parkings-spots-input, #number-of-elevator-cages-input');
}

function getCorporateInputFields() {
    return $('#number-of-businesses-input, #number-of-floors-input, #number-of-basements-input, #number-of-parkings-input, #maximum-number-of-occupants-per-floor-input');
}

function getHybridInputFields() {
    return $('#number-of-businesses-input, #number-of-floors-input, #number-of-basements-input, #number-of-parkings-input, #maximum-number-of-occupants-per-floor-input, #number-of-activity-hours-in-the-building-input');
}


function getValuesFromInputFields(inputFields) {
    console.log(inputFields);
    var values = [];
    inputFields.each(function(i) {
        values[i] = $(this)[0].value;
    })
    return values;
}

function hideforms() {
    getResidentialDivs().hide('#number-of-parking-spots, #number-of-elevator-cages, #maximum-number-of-occupants-per-floor, #number-of-activity-hours-in-the-building');
    getCommercialDivs().hide('#number-of-appartments, #maximum-number-of-occupants-per-floor, #number-of-activity-hours-in-the-building');
    getCorporateDivs().hide('#number-of-appartments, #number-of-elevator-cages, #number-of-activity-hours-in-the-building');
    getHybridDivs().hide('#number-of-appartments, #number-of-elevator-cages');
}

function getResidentialElevatorEstimate() {
    var values = getValuesFromInputFields(getResidentialInputFields());
    var number_of_appartments = parseInt(values[0]);
    var number_of_floors = parseInt(values[1]);
    var number_of_basements = parseInt(values[2]);
    //calculations to do
    return Math.random();
}

function getCommercialElevatorEstimate() {
    var values = getValuesFromInputFields(getCommercialInputFields());
    var number_of_businesses = parseInt(values[0]);
    var number_of_floors = parseInt(values[1]);
    var number_of_basements = parseInt(values[2]);
    var number_of_parking_spots = parseInt(values[3]);
    var number_of_elevator_cages = parseInt(values[4]);
    //calculations to do
    return Math.random();
}

function getCorporateElevatorEstimate() {
    var values = getValuesFromInputFields(getCorporateInputFields());
    var number_of_businesses = parseInt(values[0]);
    var number_of_floors = parseInt(values[1]);
    var number_of_basements = parseInt(values[2]);
    var number_of_parking_spots = parseInt(values[3]);
    var maximum_number_of_occupants_per_floor = parseInt(values[4]);
}

function getHybridElevatorEstimate() {
    var values = getValuesFromInputFields(getCorporateInputFields());
    var number_of_businesses = parseInt(values[0]);
    var number_of_floors = parseInt(values[1]);
    var number_of_basements = parseInt(values[2]);
    var number_of_parking_spots = parseInt(values[3]);
    var maximum_number_of_occupants_per_floor = parseInt(values[4]);
    var number_of_activity_hours_in_the_building = parseInt(values[5]);
}
 


//continue functions