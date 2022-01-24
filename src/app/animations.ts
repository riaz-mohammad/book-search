import { animate, animateChild, animation, group, query, stagger, style, transition, trigger } from "@angular/animations";


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
              '500ms 600ms ease',
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
      style({
        opacity: 0,
        height: '0px'
      }),

      group([
        animate('400ms ease', style({
          opacity: 1,
          height: '*'
        })),
        query('app-search-bar-list',[
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
    ]),

    transition(':leave', [
      style({
        opacity: 1,
        height: '*'
      }),

      group([
        query('app-search-bar-list',[
          style({
            opacity: 1,
            transform: 'translateY(0%)',
          }),

          stagger('20ms', [
            animate(
              '100ms',
              style({
                opacity: 0,
                transform: 'translateY(-40%)',
              })
            ),
          ]),
        ], { optional: true }
        ),
        
        animate('500ms 500ms ease', style({
          opacity: 0,
          height: '0px'
        })),
      ])
    ])
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



export const button = trigger('button', [
  transition(':leave', [
    style({
      opacity: 1
    }),

    animate('200ms ease', style({
      opacity: 0
    }))
  ])
])