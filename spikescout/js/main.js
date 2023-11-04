// main process

//1. import configuration
$("#loader").load("config.json", (result) => {
    console.log(result);
    const settings = JSON.parse(result);

    // apply settings
})