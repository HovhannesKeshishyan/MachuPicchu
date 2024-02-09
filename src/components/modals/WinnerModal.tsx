import { FC } from "react";
import { createPortal } from "react-dom";
import styles from "./WinnerModal.module.scss";

interface Props {
  message: string;
  hide_cancel_btn?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  ok_btn_text?: string;
  cancel_btn_text?: string;
  selector?: string;
}

export const WinnerModal: FC<Props> = ({
  message,
  selector,
  hide_cancel_btn,
  onCancel,
  onConfirm,
  ok_btn_text,
  cancel_btn_text,
}) => {
  const wrapper = document.querySelector(selector || "body") as HTMLElement;

  const handleOkClick = () => {
    if (onConfirm) onConfirm();
  };

  const handleCancelClick = () => {
    if (onCancel) onCancel();
  };

  return createPortal(
    <div className={styles.winner_modal}>
      <div className={styles.modal_shape}></div>

      <div className={styles.modal_content}>
        <p className={styles.modal_title}>Congratulations</p>

        <div className={styles.modal_message}>{message}</div>

        <div className={styles.modal_buttons}>
          <button onClick={handleOkClick} className={styles.ok_btn}>
            {ok_btn_text || "Ok"}
          </button>
          {!hide_cancel_btn && (
            <button onClick={handleCancelClick} className={styles.cancel_btn}>
              {cancel_btn_text || "Cancel"}
            </button>
          )}
        </div>
      </div>
    </div>,
    wrapper
  );
};
