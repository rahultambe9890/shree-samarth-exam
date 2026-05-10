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
    
    // Get student name and seat no for a custom filename
    const fileName = currentStudentName.replace(/\s+/g, '_') + "_" + currentSeatNo + ".pdf";

    const opt = {
        margin: 0,
        filename: fileName,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
            scale: 2,         // Increases clarity
            width: 794,       // FORCES the width to A4 size
            useCORS: true, 
            logging: false 
        },
        jsPDF: { 
            unit: 'px', 
            format: [794, 1123], // Matches the width/height exactly
            orientation: 'portrait' 
        }
    };

    html2pdf().set(opt).from(element).save();
}
