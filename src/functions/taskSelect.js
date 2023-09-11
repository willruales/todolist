function taskSelect(event) {

    let taskSelect = event.target.dataset.userid
    const selectedInstance = eventSelect.tasks.find(item => item.id === taskSelect);
    console.log(selectedInstance)
    return selectedInstance

}
export { taskSelect }