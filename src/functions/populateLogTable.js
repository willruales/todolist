
export default function populateLogTable(currentTask) {
    const logTable = document.querySelector('.logTable');
    const logTableBody = document.getElementById('logtablebody');

    for (const logEntry of currentTask) {
        const newRow = logTableBody.insertRow();

        // Create and insert cells for each data item
        const logCell = newRow.insertCell(0);
        const dateCell = newRow.insertCell(1);


        // Populate the cells with data from the current log entry
        logCell.textContent = logEntry.LogName; // Access the field value
        dateCell.textContent = logEntry.timestamp;
    }

}