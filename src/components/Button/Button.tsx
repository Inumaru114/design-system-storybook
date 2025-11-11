import React, { useState } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

type ButtonType = "large" | "small" | "toggle";

interface ButtonProps {
  type?: ButtonType;
  label?: string;
  toggled?: boolean;
  onToggle?: (state: boolean) => void;
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Botão unificado do design system:
 * - large: ação principal, mais arredondado
 * - small: confirmações / enviar
 * - toggle: controle de dois estados (ativado/desativado)
 */
export const Button: React.FC<ButtonProps> = ({
  type = "large",
  label,
  toggled = false,
  onToggle,
  disabled = false,
  onClick,
}) => {
  const [isToggled, setIsToggled] = useState(toggled);

  const handleClick = () => {
    if (disabled) return;

    if (type === "toggle") {
      const newState = !isToggled;
      setIsToggled(newState);
      onToggle?.(newState);
    } else {
      onClick?.();
    }
  };

  if (type === "toggle") {
    return (
      <button
        className={clsx(
          styles.toggle,
          isToggled ? styles.toggleOn : styles.toggleOff,
          disabled && styles.disabled
        )}
        onClick={handleClick}
        role="switch"
        aria-checked={isToggled}
        disabled={disabled}
      >
        <span className={styles.thumb} />
      </button>
    );
  }

  return (
    <button
      className={clsx(
        styles.button,
        styles[type],
        disabled && styles.disabled
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
