import { trigger, animate, state, style, group, animateChild, query, stagger, transition } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    // query(':enter, :leave', style({ position: 'absolute', opacity: 1 }), { optional: true }),
    group([
      query(':enter', [
        style({ opacity:0, position: 'absolute' }),
        animate('300ms ease-in-out', style({ opacity:1 }))
      ], {optional: true}),
      query(':leave', [
        style({ opacity:1, position: 'absolute' }),
        animate('600ms ease-in-out', style({ opacity:0 }))
      ], {optional: true}),
    ])
  ], {delay: 500})
])
