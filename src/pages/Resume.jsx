import { Document } from "react-pdf";
import pdfResume from '../FullStackResume_endRevision_PDF (1).pdf'

function Resume() {
    function onDocumentSuccess() {

        console.log('resume');
    }
    return (
        <div>
            <h1 className="page-title">Resume</h1>
            <Document file={pdfResume} onLoadSuccess={onDocumentSuccess}>
                
            </Document>

        </div>
    )
}
export default Resume;
