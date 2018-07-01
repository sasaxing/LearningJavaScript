async function waitMs(time) {
    
}

async function makeAppointment(){
    console.log('Write down the required date');
    setTimeout(() => {
        console.log('House master responses.');
    }, 2000);
}

async function doLaundry() {
    await makeAppointment();
    console.log('do laundry');
}

doLaundry()