
export default function populateLogTable(currentTask) {
    const logTableBody = document.getElementById('logtablebody');

    for (const logEntry of currentTask) {
        const newRow = logTableBody.insertRow();

        const logCell = newRow.insertCell(0);
        const dateCell = newRow.insertCell(1);


        logCell.textContent = logEntry.LogName;
        dateCell.textContent = logEntry.timestamp;
    }

}