import { AiOutlineDownload } from "react-icons/ai"
// import {SaveAs} from "file-server"
import { saveAs } from 'file-saver';

export default function DownloadCv() {
    const downloadpdf = () => {
        const pdfurl = '/Rian.pdf';
        console.log('pdfurl', pdfurl)
        saveAs(pdfurl, 'CvRian.pdf')
    }
    return (
        <>
            <button onClick={downloadpdf} className="flex gap-2 dark:text-c-text text-blue-900  cursor-pointer">
                Download CV <AiOutlineDownload className="text-2xl" />
            </button>
        </>
    )
}