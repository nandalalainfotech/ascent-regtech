const mQuery = window.matchMedia('(max-width: 1200px)');

function platform1() {

    if (document.getElementById('platform').innerText == 'Platform' && mQuery.matches) {
        setPlatform();
        document.getElementById('capabilities').removeAttribute('onclick');
        document.getElementById('whoweserve').removeAttribute('onclick');
        document.getElementById('resources').removeAttribute('onclick');
        document.getElementById('company').removeAttribute('onclick');

        // document.getElementById('capabilities').style.transitionDuration = '2s';

        document.getElementById('capabilities').setAttribute('href', './OurApproach/OurApproach.html');
        document.getElementById('whoweserve').setAttribute('href', './OurData/OurData.html');
        document.getElementById('resources').setAttribute('href', './Regulators/Regulators.html');
        document.getElementById('company').setAttribute('href', './TechnologyPartners/TechnologyPartners.html');
    }
    else if (document.getElementById('platform').innerText == 'Back') {
        console.log("called");
        document.getElementById('platform').innerText = 'Platform';
        document.getElementById('capabilities').innerText = 'Capabilities';
        document.getElementById('whoweserve').innerText = 'Who we serve';
        document.getElementById('resources').innerText = 'Resoursces';
        document.getElementById('company').innerText = 'Company';
        document.getElementById('sign_in').innerText = 'Sign In';
        document.getElementById('contact-us').innerText = ' Contact Us';
        document.getElementById('platform').removeAttribute('href');
        document.getElementById('capabilities').removeAttribute('href');
        document.getElementById('whoweserve').removeAttribute('href');
        document.getElementById('resources').removeAttribute('href');
        document.getElementById('company').removeAttribute('href');
        document.getElementById('sign_in').removeAttribute('href');
        document.getElementById('capabilities').setAttribute("onclick", "capabilities1()");
        document.getElementById('whoweserve').setAttribute("onclick", "whoweserve1()");
        document.getElementById('resources').setAttribute("onclick", "resources1()");
        document.getElementById('company').setAttribute("onclick", "company1()");
    }
}

function capabilities1() {
    setCapabilities();

    document.getElementById('capabilities').removeAttribute('onclick');
    document.getElementById('whoweserve').removeAttribute('onclick');
    document.getElementById('resources').removeAttribute('onclick');
    document.getElementById('company').removeAttribute('onclick');

    setTimeout(() => {
        document.getElementById('capabilities').setAttribute('href', './Oligation-Inventory/obligations.html');
    }, 1000);
    document.getElementById('whoweserve').setAttribute('href', './Scenario-planning/scenerio.html');
    document.getElementById('resources').setAttribute('href', './Horizon-Scanning/horizonScanning.html');
    document.getElementById('company').setAttribute('href', './Audit-Trail/Audit.html');
    document.getElementById('sign_in').setAttribute('href', './Explore/explore.html');

}
function whoweserve1() {
    setWhoWeServe();

    document.getElementById('capabilities').removeAttribute('onclick');
    document.getElementById('whoweserve').removeAttribute('onclick');
    document.getElementById('resources').removeAttribute('onclick');
    document.getElementById('company').removeAttribute('onclick');

    document.getElementById('capabilities').setAttribute('href', './Financial-Services/FinancialServices.html');
    setTimeout(() => {
        document.getElementById('whoweserve').setAttribute('href', './Mortage-Lenders/MortgageLenders.html');
    }, 1000);
    document.getElementById('resources').setAttribute('href', './Fintech/FinTech.html');
    document.getElementById('company').setAttribute('href', './Professional/professional.html');
}
function resources1() {
    setResources();

    document.getElementById('capabilities').removeAttribute('onclick');
    document.getElementById('whoweserve').removeAttribute('onclick');
    document.getElementById('resources').removeAttribute('onclick');
    document.getElementById('company').removeAttribute('onclick');

    document.getElementById('capabilities').setAttribute('href', './WhatisReg/whatis.html');
    document.getElementById('whoweserve').setAttribute('href', './Blogs/blogs.html');
    setTimeout(() => {
        document.getElementById('resources').setAttribute('href', './Resources/Resources.html');
    }, 1000);
    document.getElementById('company').setAttribute('href', './Customer-Stories/Customerstories.html');
}
function company1() {
    setCompany();

    document.getElementById('capabilities').removeAttribute('onclick');
    document.getElementById('whoweserve').removeAttribute('onclick');
    document.getElementById('resources').removeAttribute('onclick');
    document.getElementById('company').removeAttribute('onclick');

    document.getElementById('capabilities').setAttribute('href', './OurTeam/ourteam.html');
    document.getElementById('whoweserve').setAttribute('href', './Diversity/DiversityEquityandInclusion.html');
    document.getElementById('resources').setAttribute('href', './Careers/Careers.html');
}




function setPlatform() {
    document.getElementById('platform').innerText = 'Back';
    document.getElementById('capabilities').innerText = 'Our Approach';
    document.getElementById('whoweserve').innerText = 'Our Data';
    document.getElementById('resources').innerText = 'Regulators';
    document.getElementById('company').innerText = 'Technology Partners';
    document.getElementById('sign_in').innerText = '';
    document.getElementById('contact-us').innerText = '';
}

function setCapabilities() {
    document.getElementById('platform').innerText = 'Back';
    document.getElementById('capabilities').innerText = 'Obligations Inventory';
    document.getElementById('whoweserve').innerText = 'Scenario Planning';
    document.getElementById('resources').innerText = 'Horizon Scanning';
    document.getElementById('company').innerText = 'Audit Trail';
    document.getElementById('sign_in').innerText = 'Explore Use Cases';
    document.getElementById('contact-us').innerText = '';
}
function setWhoWeServe() {
    document.getElementById('platform').innerText = 'Back';
    document.getElementById('capabilities').innerText = 'Financial Services';
    document.getElementById('whoweserve').innerText = 'Mortgage Lenders';
    document.getElementById('resources').innerText = 'FinTech';
    document.getElementById('company').innerText = 'Professional Services';
    document.getElementById('sign_in').innerText = '';
    document.getElementById('contact-us').innerText = '';
}
function setResources() {
    document.getElementById('platform').innerText = 'Back';
    document.getElementById('capabilities').innerText = 'What is RegTech?';
    document.getElementById('whoweserve').innerText = 'Blog';
    document.getElementById('resources').innerText = 'Resources';
    document.getElementById('company').innerText = 'Customer Stories';
    document.getElementById('sign_in').innerText = '';
    document.getElementById('contact-us').innerText = '';
}
function setCompany() {
    document.getElementById('platform').innerText = 'Back';
    document.getElementById('capabilities').innerText = 'Our Team';
    document.getElementById('whoweserve').innerText = 'Diversity,Equity and Inclusion';
    document.getElementById('resources').innerText = 'Careers';
    document.getElementById('company').innerText = '';
    document.getElementById('sign_in').innerText = '';
    document.getElementById('contact-us').innerText = '';
}
let counter = 0;
function toggleClicker() {
    counter++;
    if (counter == 1) {
        document.getElementById('platform').removeAttribute('href');
        document.getElementById('capabilities').removeAttribute('href');
        document.getElementById('whoweserve').removeAttribute('href');
        document.getElementById('resources').removeAttribute('href');
        document.getElementById('company').removeAttribute('href');
    }
    if (counter == 2) {
        counter = 0;
        document.getElementById('platform').innerText = 'Platform';
        document.getElementById('capabilities').innerText = 'Capabilities';
        document.getElementById('whoweserve').innerText = 'Who we serve';
        document.getElementById('resources').innerText = 'Resoursces';
        document.getElementById('company').innerText = 'Company';
        document.getElementById('sign_in').innerText = 'Sign In';
        document.getElementById('contact-us').innerText = ' Contact Us';

        document.getElementById('platform').setAttribute('href', './PlatForm-page/PlatForm.html');
        document.getElementById('whoweserve').setAttribute('href', './WhoweServe/whoweserve.html');
        document.getElementById('resources').setAttribute('href', './Resources/Resources.html');
        document.getElementById('company').setAttribute('href', './OurTeam/ourteam.html');
    }
}