/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Web Audio API pure synthesized soundscapes for interactive digital archaeology
// Zero external mp3 dependencies, works 100% offline and in hermetic sandboxes.
// Strictly requires explicit user interaction to trigger.

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Synthesize the iconic opening synth brass riff of "Never Gonna Give You Up"
 * Notes (in Bb major/G minor): Bb3 - C4 - D4 - D4 - C4 - Bb3 - A3 - F3 - G3 ...
 */
export function playRickrollSynthHook(volume = 0.2): () => void {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    // Notes frequencies (Hz)
    const melody: [number, number, number][] = [
      // [freq, startTimeOffset, duration]
      [466.16, 0.0, 0.16],   // Bb4
      [523.25, 0.18, 0.16],  // C5
      [587.33, 0.36, 0.16],  // D5
      [587.33, 0.54, 0.16],  // D5
      [523.25, 0.72, 0.22],  // C5
      [466.16, 0.98, 0.18],  // Bb4
      [440.00, 1.20, 0.22],  // A4
      [349.23, 1.46, 0.26],  // F4
      [392.00, 1.76, 0.60],  // G4
    ];

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(volume, now);
    masterGain.connect(ctx.destination);

    const activeNodes: (OscillatorNode | GainNode)[] = [];

    melody.forEach(([freq, offset, dur]) => {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const noteGain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc1.type = 'sawtooth';
      osc2.type = 'square';
      osc1.frequency.setValueAtTime(freq, now + offset);
      osc2.frequency.setValueAtTime(freq * 1.004, now + offset); // Slight analog detune

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, now + offset);
      filter.frequency.exponentialRampToValueAtTime(3200, now + offset + 0.05);
      filter.frequency.exponentialRampToValueAtTime(1800, now + offset + dur);

      // Attack & decay envelope
      noteGain.gain.setValueAtTime(0.0001, now + offset);
      noteGain.gain.exponentialRampToValueAtTime(0.4, now + offset + 0.03);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + offset + dur);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(masterGain);

      osc1.start(now + offset);
      osc2.start(now + offset);
      osc1.stop(now + offset + dur + 0.05);
      osc2.stop(now + offset + dur + 0.05);

      activeNodes.push(osc1, osc2, noteGain);
    });

    return () => {
      masterGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
    };
  } catch (err) {
    console.warn('Audio playback not permitted or unavailable:', err);
    return () => {};
  }
}

/**
 * Click sound for tactile feedback
 */
export function playRetroClick(): void {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch {
    // Ignore audio errors
  }
}
