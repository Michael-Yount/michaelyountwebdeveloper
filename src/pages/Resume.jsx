import { Document } from "react-pdf";

function Resume() {
    console.log('resume');
    return (
        <div>
            <h1 className="page-title">Resume</h1>
            <Document file="../FullStackResume_endRevision_PDF (1).pdf">
                
            </Document>
        </div>
    )
}
export default Resume;
