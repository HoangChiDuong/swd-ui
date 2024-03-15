import { PDFDocument, rgb } from "pdf-lib";
import React, { useEffect, useState } from "react";
import logo_admin from "../../assets/images/logo_admin.png";
import './ContractDetail.css';

const ContractDetail = ({ contractFile, contractId, onClose }) => {

    contractFile = "https://localhost:7058//Upload//contract//1//2. Quy định thi PE môn PRN221.pdf"

    const [contractFileapi, setContractFileapi] = useState();
    const [gopay, setGopay] = useState(false);
    const [signedPdfUrl, setSignedPdfUrl] = useState(contractFile);


    const handleContractDetailClose = () => {
        onClose(false);
    };

    const addSignatureToPDF = async () => {
        try {
            const existingPdfBytes = await fetch(
                contractFile
            ).then((res) => res.arrayBuffer());

            const pdfDoc = await PDFDocument.load(existingPdfBytes);
            const page = pdfDoc.getPage(0);

            const signatureImageBytes = await fetch(logo_admin).then((res) => res.arrayBuffer());

            const signatureImage = await pdfDoc.embedPng(new Uint8Array(signatureImageBytes));

            page.drawImage(signatureImage, {
                x: 400,
                y: 80,
                width: 130,
                height: 130,
                color: rgb(0, 0, 0),
            });

            const pdfBytes = await pdfDoc.save();
            const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
            const pdfUrl = URL.createObjectURL(pdfBlob);
            const data = await bufferToBase64(new Uint8Array(pdfBytes))
            setContractFileapi(data);

            setSignedPdfUrl(pdfUrl);
            setGopay(true);
        } catch (error) {
            console.error("Error adding signature to PDF:", error);
        }
    };
    async function bufferToBase64(buffer) {
        const base64url = await new Promise(r => {
            const reader = new FileReader()
            reader.onload = () => r(reader.result)
            reader.readAsDataURL(new Blob([buffer]))
        });
        return base64url.slice(base64url.indexOf(',') + 1);
    }
    console.log(contractFile, contractId)
    return (
        <div className="confirmation-modal">
            <div className="quote_detail">
                <div className="contract__close" >
                    <button className="close-button" onClick={handleContractDetailClose}>X</button>
                </div>

                <div className="contract_admin">

                    <div className="cotract_admin_title">
                        <h1>Hợp Đồng</h1>

                    </div>
                    <div className="contract_admin_button">
                        <button style={{ backgroundColor: '#696f6a' }} className="button_Submit" onClick={addSignatureToPDF}>Xác Nhận Hợp Đồng</button>
                    </div>
                </div>

                {signedPdfUrl !== null && (
                    <div
                        className="view_contract"
                        style={{ width: "100%", height: "500px" }}
                    >
                        <embed
                            src={signedPdfUrl}
                            type="application/pdf"
                            width="100%"
                            height="500px"
                        />
                    </div>
                )}

                <div className="contract__footer">
                    <button className="button__save" onClick={onClose}>Hoàn tất</button>
                </div>
            </div>
        </div>

    )
}
export default ContractDetail;