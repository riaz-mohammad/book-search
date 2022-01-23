import { animate, animateChild, animation, query, stagger, style, transition, trigger } from "@angular/animations";


export const card = [
  trigger('card', [
    transition(':enter', [
      query(
        'app-card',
        [
          style({
            opacity: 0,
            transform: 'translateX(100%)',
          }),

          stagger('50ms', [
            animate(
              '500ms 500ms ease',
              style({
                opacity: 1,
                transform: 'translateX(0%)',
              })
            ),

            query('@horizontalImage', [animateChild()], {optional: true}),
          ]),
        ],
        { optional: true }
      ),
    ]),
  ]),
];


export const searchBarList = [
  trigger('searchBarList', [
    transition(':enter', [
      query(
        'app-search-bar-list',
        [
          style({
            opacity: 0,
            transform: 'translateY(100%)',
          }),

          stagger('50ms', [
            animate(
              '300ms 200ms ease',
              style({
                opacity: 1,
                transform: 'translateY(0%)',
              })
            ),
          ]),
        ],
        { optional: true }
      ),
    ]),

    transition(':leave', [
      query(
        'app-search-bar-list',
        [
          style({
            opacity: 1,
            transform: 'translateY(0%)',
          }),

          stagger('20ms', [
            animate('100ms',
              style({
                opacity: 0,
                transform: 'translateY(-20%)',
              })
            ),
          ]),
        ],
        { optional: true }
      ),
    ]),
  ]),
];



export const image = trigger('image', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(80%)',
    }),

    animate(
      '500ms 200ms ease',
      style({
        opacity: 1,
        transform: 'translateY(0%)',
      })
    ),
  ]),
]);


export const description = trigger('description', [
  transition(":enter", [
    style({
      opacity: 0,
      transform: 'translateY(30%)'
    }),

    animate('500ms 200ms ease', style({
      opacity: 1,
      transform: 'translateY(0%)'
    }))
  ])
    
]);

export const horizontalImage = trigger('horizontalImage', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scale(0)'
    }),

    animate(
      '300ms ease',
      style({
        opacity: 1,
        transform: 'scale(1)'
      })
    ),
  ]),
]);

