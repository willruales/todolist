const table = ` <table>
                <thead>
                    <tr>
                        <th colspan="3">
                            <button class="add-row-button" id="addRowButton" onclick = "myfunction()" >Add Row</button>
                        </th>
                    </tr>
                    <tr>
                        <th>Task Name</th>
                        <th>Task Description</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody id="taskTableBody">
                    <tr>
                        <td>Task 1</td>
                        <td>Complete the project proposal</td>
                        <td><input type="checkbox"></td>
                    </tr>
                    <tr>
                        <td>Task 2</td>
                        <td>Review and edit the report</td>
                        <td><input type="checkbox"></td>
                    </tr>
                    <!-- More rows will be added dynamically -->
                </tbody>
            </table>`

export { table }