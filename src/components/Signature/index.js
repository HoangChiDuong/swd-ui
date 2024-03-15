import SignaturePad from "react-signature-canvas";
import { useRef, useState } from "react";
import "~/components/Signature/Signature.scss";
const SignatureComponent = ({ setSignature,setGopay,setSignedPdfUrl }) => {
  const sigPad = useRef({});
  const [trimmedDataURL, setTrimmedDataURL] = useState(null);

  const clear = () => {
    sigPad.current.clear();
    setSignedPdfUrl(null)
    setGopay(false);
    setSignature(null);
  };

  const save = () => {
    setTrimmedDataURL(sigPad.current.getTrimmedCanvas().toDataURL("image/png"));
    setSignature(sigPad.current.getTrimmedCanvas().toDataURL("image/png"));
  };

  return (
    <div className="signature_pad_container">
      <div className="signature_detail_proText">
        Tạo chữ ký 
      </div>
      <SignaturePad
        ref={sigPad}
        canvasProps={{ className: "signature_canvas" }}
      />
      <div className="btn_sign_paint">
        <button className="btn_signature_ag" onClick={clear}>
          Ký Lại
        </button>
        <button className="btn_signature" onClick={save}>
          Hoàn Tất
        </button>
      </div>
      {/* {trimmedDataURL ? (
        <img
          src={trimmedDataURL}
          alt="Your signature"
          className="signature_user"
        />
      ) : null} */}
      <div className="signature_paint"></div>
    </div>
  );
};

export default SignatureComponent;
