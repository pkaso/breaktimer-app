import { Button, HTMLSelect } from "@blueprintjs/core";
import * as React from "react";
import { SoundType } from "../../types/settings";
import styles from "./SoundSelect.scss";

interface SoundSelectProps {
  value: SoundType;
  onChange: (value: SoundType) => void;
  disabled?: boolean;
}

export function SoundSelect({ value, onChange, disabled }: SoundSelectProps) {
  const playSound = (soundType: SoundType) => {
    if (soundType === SoundType.None) return;
    ipcRenderer.invokeStartSound(soundType);
  };

  return (
    <div className={styles.soundSelect}>
      <HTMLSelect
        value={value}
        onChange={(e) => onChange(e.target.value as SoundType)}
        disabled={disabled}
        style={{ flex: 1 }}
      >
        <option value={SoundType.None}>None</option>
        <option value={SoundType.Jungle}>Jungle</option>
        <option value={SoundType.Gong}>Gong</option>
        <option value={SoundType.Blip}>Blip</option>
        <option value={SoundType.Bloop}>Bloop</option>
        <option value={SoundType.Ping}>Ping</option>
        <option value={SoundType.Scifi}>Sci-fi</option>
      </HTMLSelect>
      {value !== SoundType.None && (
        <Button
          icon="play"
          minimal
          disabled={disabled}
          onClick={() => playSound(value)}
        />
      )}
    </div>
  );
}
