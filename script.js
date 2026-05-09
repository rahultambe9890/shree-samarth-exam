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
    
    // This configuration forces the ticket to fit perfectly on a PDF page
    const opt = {
        margin:       [10, 10, 10, 10], // top, left, bottom, right margins
        filename:     'Shree_Samarth_HallTicket.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { 
            scale: 2, 
            useCORS: true, 
            letterRendering: true,
            width: 800 // This ensures it captures the full width
        },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // This "Promise" ensures the image is fully loaded before saving
    html2pdf().set(opt).from(element).save();
}
