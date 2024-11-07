import { useState } from "react";
import { PIX } from "gpix";
import { QRCodeSVG } from "qrcode.react";

import "../style.css";

interface PixButtonProps {
  name: string;
  value: number;
}

function PixButton(pixButtonProps: PixButtonProps) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [showToast, setShowToast] = useState(false);

  let pix = PIX.static()
    .setReceiverName("Assucena e Lucas")
    .setReceiverCity("Alfenas")
    .setReceiverZipCode("37136136")
    .setKey("46959755808")
    .setDescription("Presente de casamento da Assucena e do Lucas")
    .isUniqueTransaction(true)
    .setAmount(pixButtonProps.value);

  const pixCopiaECola = pix.getBRCode();

  const handleCopyText = () => {
    navigator.clipboard
      .writeText(pixCopiaECola)
      .then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      })
      .catch((error) => {
        console.error("Erro ao copiar texto: ", error);
      });
  };

  return (
    <>
      <a href="#" className="btn btn-primary mt-auto" onClick={handleOpenModal}>
        Presentear!
      </a>

      {showModal && (
        <div className="modal-backdrop" onClick={handleCloseModal}></div>
      )}

      {showModal && (
        <div className="modal show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Presentear o casal</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Você pode ler o QR Code utilizando seu aplicativo bancário
                <div
                  className="d-flex justify-content-center"
                  style={{ margin: "20px" }}
                >
                  <QRCodeSVG value={pixCopiaECola} size={256} />
                </div>
                <p></p>
                ou clicar para copiar o código do pix :)
                <p></p>
                <p
                  onClick={handleCopyText}
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "underline",
                  }}
                >
                  {pixCopiaECola}
                </p>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      )}

      {showToast && (
        <div className="toast-container position-fixed top-0 end-0 p-3">
          <div
            className="toast show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="me-auto">Ebaaaaa</strong>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowToast(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">
              Pix copiado para a área de transferência!
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PixButton;
