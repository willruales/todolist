function taskSelect(event, value) {
    let taskSelect = event.target.dataset.userid;
    // const selectedInstance = value.find(item => item.id === parseInt(taskSelect)); // Make sure to parse taskSelect to an integer if it's a string
    // console.log(selectedInstance);

    console.log(taskSelect)
    // return selectedInstance;
}

export { taskSelect };
