import { trigger, state, style, animate, transition } from '@angular/animations';

const desktopAnimation = trigger('fade', [
  state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
  transition(':enter, :leave', [animate(600)]),
]);

const mobileAnimation = trigger('fade', [
  state('void', style({ opacity: 0, transform: 'translateX(-20px)' })),
  transition(':enter, :leave', [animate(600)]),
]);

export const animations = [window.innerWidth > 1024 ? desktopAnimation : mobileAnimation];
