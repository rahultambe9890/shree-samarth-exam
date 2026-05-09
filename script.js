document.getElementById('examForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById('studentName').value;
    const sClass = document.getElementById('studentClass').value;
    const center = document.getElementById('centerName').value;
    const date = document.getElementById('examDate').value;

    // Set values to Hall Ticket
    document.getElementById('outName').innerText = name;
    document.getElementById('outClass').innerText = sClass;
    document.getElementById('outCenter').innerText = center;
    document.getElementById('outDate').innerText = date;

    // Show the ticket and the download button
    document.getElementById('hallTicket').style.display = 'block';
    document.getElementById('actionButtons').style.display = 'block';
});

function downloadPDF() {
    const element = document.getElementById('hallTicket');
    const opt = {
        margin:       10,
        filename:     'Hall_Ticket_Shree_Samarth.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();
}
