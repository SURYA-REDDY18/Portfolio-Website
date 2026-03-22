/** Shared easing and transitions for consistent, smooth motion across the site. */
export const easeSmooth = [0.22, 1, 0.36, 1] as const;

export const transitionView = {
  duration: 0.65,
  ease: easeSmooth,
} as const;

export const transitionStagger = {
  duration: 0.5,
  ease: easeSmooth,
} as const;
