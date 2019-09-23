import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  keyframes,
  animateChild,
  group,
  sequence,
  animation,
} from '@angular/animations';

// Routable animations
export const slideInAnimation = trigger('routeAnimations', [
  transition('CryptocurrencyPage <=> CryptocurrenciesPage', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(
        ':leave',
        [style({ transform: 'translateX(-30%)' }), animate('1s ease-in-out', style({ transform: 'translateX(50%)' }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ transform: 'translateX(50%)' }), animate('1s ease-in-out', style({ transform: 'translateX(-50%)' }))],
        { optional: true }
      ),
    ]),
  ]),
]);
