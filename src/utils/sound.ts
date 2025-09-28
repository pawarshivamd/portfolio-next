// Utility for playing click sound and vibration

export const playClickSound = () => {
  try {
    // Create audio context
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

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
  if (navigator.vibrate) {
    navigator.vibrate(50); // Vibrate for 50ms
  }
};

export const playClickWithVibration = () => {
  playClickSound();
  vibrate();
};