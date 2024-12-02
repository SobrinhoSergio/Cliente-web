import { createForm } from './form.js';
import { createTable } from './table.js';

function main() {
    const body = document.body;

    const form = createForm();
    body.appendChild(form);

    const table = createTable();
    body.appendChild(table);
}

main();

