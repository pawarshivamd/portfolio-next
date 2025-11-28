// Utility for playing click sound and vibration

type ExtendedWindow = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext;
  };

const getAudioContext = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const extendedWindow = window as ExtendedWindow;
  return extendedWindow.AudioContext || extendedWindow.webkitAudioContext || null;
};

export const playClickSound = () => {
  try {
    const AudioContextClass = getAudioContext();

    if (!AudioContextClass) {
      return;
    }

    const audioContext = new AudioContextClass();

    // Create oscillator for beep sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Configure sound
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime); // Frequency in Hz
    oscillator.type = 'sine'; // Wave type

    // Envelope for quick attack and decay
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01); // Attack
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1); // Decay

    // Play sound
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  } catch (error) {
    console.warn('Audio playback failed:', error);
  }
};

export const vibrate = () => {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(50); // Vibrate for 50ms
  }
};

export const playClickWithVibration = () => {
  playClickSound();
  vibrate();
};