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
    
    // Custom filename: StudentName_SeatNo.pdf
    const fileName = studentNameForFile.replace(/\s+/g, '_') + "_" + seatNoForFile + ".pdf";
    
    const opt = {
        margin: 0,
        filename: fileName,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
            scale: 2,           // Higher scale means better quality
            width: 794,         // Forces the width to A4 pixels
            useCORS: true,
            letterRendering: true
        },
        jsPDF: { 
            unit: 'px', 
            format: [794, 1123], // Exact pixels for A4
            orientation: 'portrait' 
        }
    };

    // New Promise-based usage to ensure full capture
    html2pdf().set(opt).from(element).save();
}
    html2pdf().set(opt).from(element).save();
}
