export type SanitarySubsection = {
  subheading: string;
  content?: string[];
  bullets: string[];
  image?: string;
};

export type SanitaryGroup = {
  heading: string;
  subsections: SanitarySubsection[];
};

export const sanitaryCatalog: SanitaryGroup[] = [
  {
    heading: 'ONE PIECE CLOSET',
    subsections: [
      {
        subheading: 'CALLY',
        image: '/products/cally.png',
        bullets: ['L : 630 x W : 360 x H : 730 mm', 'Flush : Wash down', 'S" Trap & P" Trap : 225mm', 'Code : 101']
      },
      {
        subheading: 'ORBIT',
        image: '/products/orbit.png',
        bullets: ['L : 650 x W : 360 x H : 720 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 102']
      },
      {
        subheading: 'FLORA',
        image: '/products/flora.png',
        bullets: ['L : 690 x W : 355 x H : 730 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 103']
      },
      {
        subheading: 'MATRIX',
        image: '/products/matrix.png',
        bullets: ['L : 650 x W : 350 x H : 720 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 104']
      },
      {
        subheading: 'CLASSIC',
        image: '/products/classic.png',
        bullets: ['L : 690 x W : 355 x H : 730 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 105']
      },
      {
        subheading: 'BATTLE',
        image: '/products/battle.png',
        bullets: ['L : 650 x W : 370 x H : 710 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 106']
      },
      {
        subheading: 'CANDY',
        image: '/products/candy.png',
        bullets: ['L : 650 x W : 370 x H : 710 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 107']
      },
      {
        subheading: 'AQUA',
        image: '/products/aqua.png',
        bullets: ['L : 680 x W : 360 x H : 680 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 108']
      },
      {
        subheading: 'SPACY',
        image: '/products/spacy.png',
        bullets: ['L : 635 x W : 370 x H : 700 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 109']
      },
      {
        subheading: 'ROYAL',
        image: '/products/royal.png',
        bullets: ['L : 655 x W : 355 x H : 745 mm', 'Flush : Syphonic', 'S" Trap & P" Trap : 300mm', 'Code : 110']
      },
      {
        subheading: 'DIAMOND',
        image: '/products/diamond.png',
        bullets: ['L : 690 x W : 355 x H : 730 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 111']
      },
      {
        subheading: 'RIPON',
        image: '/products/ripon.png',
        bullets: ['L : 655 x W : 355 x H : 745 mm', 'Flush : Syphonic', 'S" Trap & P" Trap : 300mm', 'Code : 112']
      },
      {
        subheading: 'CRENZA',
        image: '/products/crenza.png',
        bullets: ['L : 630 x W : 360 x H : 720 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 113']
      },
      {
        subheading: 'ROME',
        image: '/products/rome.png',
        bullets: ['L : 650 x W : 360 x H : 720 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 114']
      },
      {
        subheading: 'CRYSTAL',
        image: '/products/crystal.png',
        bullets: ['L : 630 x W : 360 x H : 730 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 115']
      },
      {
        subheading: 'OPAL',
        image: '/products/opal.png',
        bullets: ['L : 660 x W : 370 x H : 740 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 116']
      },
      {
        subheading: 'DENIUM',
        image: '/products/denium.png',
        bullets: ['L : 700 x W : 360 x H : 745 mm', 'Flush : wash down', 'S" Trap & P" Trap : 300mm', 'Code : 117']
      },
      {
        subheading: 'ONIX',
        image: '/products/onix.png',
        bullets: ['L : 650 x W : 370 x H : 710 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 118']
      },
      {
        subheading: 'SPYKAR',
        image: '/products/spykar.png',
        bullets: ['L : 650 x W : 360 x H : 720 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 119']
      },
      {
        subheading: 'ITALIAN',
        image: '/products/italian.png',
        bullets: ['L : 650 x W : 360 x H : 720 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 120']
      },
      {
        subheading: 'SCORPIO',
        image: '/products/scorpio.png',
        bullets: ['L : 650 x W : 360 x H : 740 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 121']
      },
      {
        subheading: 'DESERT',
        image: '/products/desert.png',
        bullets: ['L : 650 x W : 360 x H : 740 mm', 'Flush : wash down', 'S" Trap & P" Trap : 225mm', 'Code : 122']
      },
      {
        subheading: 'SPECTO',
        image: '/products/specto.png',
        bullets: ['L : 660 x W : 355.6 x H : 736 mm', 'Flush : SD Syphonic', 'S" Trap : 230mm', 'Code : 123']
      },
      {
        subheading: 'BABY',
        image: '/products/baby.png',
        bullets: ['L : 520 x W : 265 x H : 555 mm', 'Flush : Wash Down', 'S" Trap & P" Trap : 230mm', 'Code : 124']
      }
    ]
  },
  // {
  //   heading: 'ONE PIECE CLOSET',
  //   subsections: [
  //     {
  //       subheading: 'IRANI',
  //       image: '/products/baby.png',
  //       bullets: [
  //         'Outlet type - S" Trap only',
  //         'Cistern - Bottom Inlate',
  //         'Size - L : 630 x W : 360 x H : 775 mm',
  //         'Flushing Type - Wash down',
  //         'Seat Cover - Soft close'
  //       ]
  //     },
  //     {
  //       subheading: 'ITALIAN',
  //       image: '/products/baby.png',
  //       bullets: [
  //         'Outlet type - S" Trap only',
  //         'Cistern - Side Inlate',
  //         'Size - L : 640 x W : 360 x H : 790 mm',
  //         'Flushing Type - Wash down',
  //         'Seat Cover - Soft close'
  //       ]
  //     },
  //     {
  //       subheading: 'IRANI',
  //       image: '/products/baby.png',
  //       bullets: [
  //         'Outlet type - P" trap only',
  //         'Cistern - Side Inlate',
  //         'Size - L : 615 x W : 360 x H : 810 mm',
  //         'Flushing Type - Wash down',
  //         'Seat Cover - Soft close'
  //       ]
  //     },
  //     {
  //       subheading: 'IRANI',
  //       image: '/products/baby.png',
  //       bullets: [
  //         'Outlet type - P" trap only',
  //         'Cistern - Bottom Inlate',
  //         'Size - L : 615 x W : 360 x H : 770 mm',
  //         'Flushing Type - Wash down',
  //         'Seat Cover - Soft close'
  //       ]
  //     },
  //     {
  //       subheading: 'ITALIAN',
  //       image: '/products/baby.png',
  //       bullets: [
  //         'Outlet type - P" trap only',
  //         'Cistern - Side Inlate',
  //         'Size - L : 650 x W : 360 x H : 800 mm',
  //         'Flushing Type - Wash down',
  //         'Seat Cover - Soft close'
  //       ]
  //     },
  //     {
  //       subheading: 'ITALIAN',
  //       image: '/products/baby.png',
  //       bullets: [
  //         'Outlet type - P" trap only',
  //         'Cistern - Bottom Inlate',
  //         'Size - L : 650 x W : 360 x H : 760 mm',
  //         'Flushing Type - Wash down',
  //         'Seat Cover - Soft close'
  //       ]
  //     },
  //     {
  //       subheading: 'NANO IRANI',
  //       image: '/products/baby.png',
  //       bullets: [
  //         'Outlet type - S" trap only',
  //         'Cistern - Side Inlate',
  //         'Size - L : 580 x W : 350 x H : 760 mm',
  //         'Flushing Type - Wash down',
  //         'Seat Cover - Soft close'
  //       ]
  //     },
  //     {
  //       subheading: 'SLIM AQUA',
  //       image: '/products/baby.png',
  //       bullets: [
  //         'Outlet type - S" trap & P" Trap',
  //         'Cistern - Side & Bottom Inlate',
  //         'Size - L : 620 x W : 360 x H : 755 mm',
  //         'Flushing Type - Wash down',
  //         'Seat Cover - Soft close'
  //       ]
  //     },
  //     {
  //       subheading: 'AQUA',
  //       image: '/products/baby.png',
  //       bullets: [
  //         'Type - Close Rim',
  //         'Outlet Type - S" trap & P" Trap',
  //         'Cistern - Side & Bottom Inlate',
  //         'Size - L : 620 x W : 355 x H : 770 mm',
  //         'Flushing Type - Wash down',
  //         'Seat Cover - Soft close'
  //       ]
  //     },
  //     {
  //       subheading: 'AMAZONE',
  //       image: '/products/baby.png',
  //       bullets: [
  //         'Type - CLOSE rim',
  //         'Outlet Type - S" trap & P" Trap',
  //         'Cistern - Side & Bottom Inlate',
  //         'Size - L : 645 x W : 360 x H : 770 mm',
  //         'Flushing Type - Wash down',
  //         'Seat Cover - Soft close'
  //       ]
  //     },
  //     {
  //       subheading: 'ALEXA',
  //       image: '/products/baby.png',
  //       bullets: [
  //         'Type - Close rim',
  //         'Outlet Type - S" trap & P" Trap',
  //         'Cistern - Side & Bottom Inlate',
  //         'Size - L : 620 x W : 355 x H : 770 mm',
  //         'Flushing Type - Wash down',
  //         'Seat Cover - Soft close'
  //       ]
  //     },
  //     {
  //       subheading: 'MARVEL',
  //       image: '/products/baby.png',
  //       bullets: [
  //         'Type - Close rim',
  //         'Outlet Type - S" trap & P" Trap',
  //         'Cistern - Side & Bottom Inlate',
  //         'Size - L : 660 x W : 350 x H : 810 mm',
  //         'Flushing Type - Wash down',
  //         'Seat Cover - Soft close'
  //       ]
  //     }
  //   ]
  // },
  {
    heading: 'WATER CLOSET',
    subsections: [
      {
        subheading: 'EWC',
        image: '/products/ewc.png',
        bullets: [
          'Outlet Type - P trap only',
          'Size - L : 465 x W : 355 x H : 400 mm',
          'Flushing Type - Wash down',
          'Seat Cover - Soft close'
        ]
      },
      {
        subheading: 'EWC CONCEALED',
        image: '/products/ewc-concealed.png',
        bullets: [
          'Outlet Type - S trap only',
          'Size - L : 475 x W : 355 x H : 400 mm',
          'Flushing Type - Wash down',
          'Seat Cover - Soft close'
        ]
      },
      {
        subheading: 'EWC CONCEALED',
        image: '/products/ewc-concealed-1.png',
        bullets: [
          'Outlet Type - S trap only',
          'Size - L : 535 x W : 370 x H : 405 mm',
          'Flushing Type - Wash down',
          'Seat Cover - Soft close'
        ]
      },
      {
        subheading: 'KVIP',
        image: '/products/kvip.png',
        bullets: [
          'Outlet Type - S trap only',
          'Size - L : 490 x W : 370 x H : 405 mm',
          'Flushing Type - Wash down',
          'Seat Cover - Soft close'
        ]
      },
      {
        subheading: 'ANGLOW',
        image: '/products/anglow.png',
        bullets: [
          'Outlet Type - S trap only',
          'Size - L : 600 x W : 430 x H : 390 mm',
          'Flushing Type - Wash down',
          'Seat Cover - Soft close'
        ]
      },
      {
        subheading: 'ANGLOW',
        image: '/products/anglow-1.png',
        bullets: [
          'Outlet Type - P trap only',
          'Size - L : 600 x W : 430 x H : 390 mm',
          'Flushing Type - Wash down',
          'Seat Cover - Soft close'
        ]
      },
      {
        subheading: 'EWC',
        image: '/products/ewc-1.png',
        bullets: [
          'Outlet Type - S trap only',
          'Size - L : 465 x W : 365 x H : 410 mm',
          'Flushing Type - Wash down',
          'Seat Cover - Soft close'
        ]
      },
      {
        subheading: 'BIDET',
        image: '/products/bidet.png',
        bullets: [
          'Outlet Type - Direct to Drainage',
          'Size - L : 240 x W : 525 x H : 395 mm',
          'Flushing Type - Wash down',
          'Seat Cover - Soft close'
        ]
      }
    ]
  },
  {
    heading: 'FLOOR MOUNT WATER CLOSET',
    subsections: [
      {
        subheading: 'SPACY',
        image: '/products/spacy-1.png',
        bullets: ['L : 520 x W : 340 x H : 390 mm', 'Flush : Wash Down', 'Code : 5010']
      },
      {
        subheading: 'CALVIN',
        image: '/products/calvin-1.png',
        bullets: ['L : 540 x W : 350 x H : 400 mm', 'Flush : Wash Down', 'Code : 5002']
      },
      {
        subheading: 'SWIZ',
        image: '/products/swiz-1.png',
        bullets: ['L : 520 x W : 340 x H : 390 mm', 'Flush : Wash Down', 'Code : 5010']
      }
    ]
  },
  {
    heading: 'WALL HUNG',
    subsections: [
      {
        subheading: 'WALL HUNG',
         image: '/products/wall-huge-1.png',
        bullets: ['L : 550 x W : 360 x H : 460 mm', 'Code : A - 02']
      },
      {
        subheading: 'WALL HUNG',
         image: '/products/wall-huge-2.png',
        bullets: ['L : 510 x W : 355 x H : 405 mm', 'Code : A - 03']
      },
      {
        subheading: 'WALL HUNG',
         image: '/products/wall-huge-3.png',
        bullets: ['L : 535 x W : 340 x H : 405 mm', 'Code : A - 04']
      },
      {
        subheading: 'WALL HUNG',
         image: '/products/wall-huge-4.png',
        bullets: ['L : 535 x W : 355 x H : 405 mm', 'Code : A - 05']
      },
      {
        subheading: 'WALL HUNG',
         image: '/products/wall-huge-5.png',
        bullets: ['L : 495 x W : 355 x H : 405 mm', 'Code : A - 06']
      },
      {
        subheading: 'WALL HUNG',
         image: '/products/wall-huge-6.png',
        bullets: ['L : 508 x W : 370 x H : 380 mm', 'Code : A - 07']
      },
      {
        subheading: 'WALL HUNG',
         image: '/products/wall-huge-7.png',
        bullets: ['L : 560 x W : 370 x H : 445 mm', 'Code : A - 08']
      },
      {
        subheading: 'WALL HUNG',
         image: '/products/wall-huge-8.png',
        bullets: ['L : 535 x W : 405 x H : 430 mm', 'Code : A - 09']
      },
      // {
      //   subheading: 'WALL HUNG',
      //    image: '/products/wall-huge-9.png',
      //   bullets: ['L : 508 x W : 355 x H : 355 mm', 'Code : A - 10']
      // },
      // {
      //   subheading: 'WALL HUNG',
      //    image: '/products/wall-huge-10.png',
      //   bullets: ['L : 490 x W : 355 x H : 345 mm', 'Code : A - 11']
      // },
      // {
      //   subheading: 'WALL HUNG',
      //    image: '/products/wall-huge-11.png',
      //   bullets: ['L : 490 x W : 345 x H : 390 mm', 'Code : A - 12']
      // }
    ]
  },
  {
    heading: 'TABLE TOP',
    subsections: [
      {
        subheading: 'TABLE TOP',
             image: '/products/table-top-1.png',
        bullets: ['Size : 485 x 380 x 130mm', 'Code : A - 02']
      },
      {
        subheading: 'TABLE TOP',
             image: '/products/table-top-2.png',
        bullets: ['Size : 400 x 325 x 150mm', 'Code : A - 03']
      },
      {
        subheading: 'TABLE TOP',
             image: '/products/table-top-3.png',
        bullets: ['Size : 585 x 355 x 130mm', 'Code : A - 04']
      },
      {
        subheading: 'TABLE TOP',
             image: '/products/table-top-4.png',
        bullets: ['Size : 570 x 370 x 120mm', 'Code : A - 05']
      },
      {
        subheading: 'TABLE TOP',
             image: '/products/table-top-5.png',
        bullets: ['Size : 580 x 400 x 125mm', 'Code : A - 06']
      },
      {
        subheading: 'TABLE TOP',
             image: '/products/table-top-6.png',
        bullets: ['Size : 570 x 350 x 150mm', 'Code : A - 07']
      }
    ]
  },
  {
    heading: 'WALL HUNG BASIN',
    subsections: [
      {
        subheading: 'CLASSIC',
        image: '/products/wall-huge-basin-1.png',
        bullets: ['Size : 20" X 16"']
      },
      {
        subheading: 'CAPTAIN',
        image: '/products/wall-huge-basin-2.png',
        bullets: ['Size : 18" X 14"']
      },
      {
        subheading: 'PRIME',
        image: '/products/wall-huge-basin-3.png',
        bullets: ['Size : 18" X 14"']
      },
      {
        subheading: 'CROWNY',
        image: '/products/wall-huge-basin-4.png',
        bullets: ['Size : 18" X 14"']
      },
      {
        subheading: 'MATRIX',
        image: '/products/wall-huge-basin-5.png',
        bullets: ['Size : 18" X 14"']
      },
      {
        subheading: 'SWASTIK',
        image: '/products/wall-huge-basin-6.png',
        bullets: ['Size : 18" X 14"']
      },
      {
        subheading: 'PETAL',
        image: '/products/wall-huge-basin-7.png',
        bullets: ['Size : 18" X 14"']
      },
      {
        subheading: 'SIMI',
        image: '/products/wall-huge-basin-8.png',
        bullets: ['Size : 18" X 14"']
      },
      {
        subheading: 'MARIN',
        image: '/products/wall-huge-basin-9.png',
        bullets: ['Size : 18" X 14"']
      },
      {
        subheading: 'SHELLY',
        image: '/products/wall-huge-basin-10.png',
        bullets: ['Size : 18" X 13"']
      },
      {
        subheading: 'GRACY',
        image: '/products/wall-huge-basin-11.png',
        bullets: ['Size : 18" X 09"']
      },
      {
        subheading: 'RANI',
        image: '/products/wall-huge-basin-12.png',
        bullets: ['Size : 18" X 13"']
      },
      {
        subheading: 'CHIPRA',
        image: '/products/wall-huge-basin-13.png',
        bullets: ['Size : 18" X 12"']
      },
      {
        subheading: 'EFFO',
        image: '/products/wall-huge-basin-14.png',
        bullets: ['Size : 18" X 12"']
      },
      {
        subheading: 'SMRAT',
        image: '/products/wall-huge-basin-15.png',
        bullets: ['Size : 17" X 11"']
      },
      {
        subheading: 'CORNOR',
        image: '/products/wall-huge-basin-16.png',
        bullets: ['Size : 16" X 16"']
      },
      {
        subheading: 'SWISS',
        image: '/products/wall-huge-basin-17.png',
        bullets: ['Size : 16" X 16"']
      },
      {
        subheading: 'ARENA',
        image: '/products/wall-huge-basin-18.png',
        bullets: ['Size : 16" X 13"']
      },
      {
        subheading: 'MORRIS',
        image: '/products/wall-huge-basin-19.png',
        bullets: ['Size : 16" X 12"']
      },
      {
        subheading: 'MINT',
        image: '/products/wall-huge-basin-20.png',
        bullets: ['Size : 16" X 10"']
      },
      {
        subheading: 'NEO',
        image: '/products/wall-huge-basin-21.png',
        bullets: ['Size : 15" X 12"']
      },
      {
        subheading: 'SMART CORNOR',
        image: '/products/wall-huge-basin-22.png',
        bullets: ['Size : 14" X 14"']
      },
      {
        subheading: 'FLORA',
        image: '/products/wall-huge-basin-23.png',
        bullets: ['Size : 14" X 11"']
      },
      {
        subheading: 'META',
        image: '/products/wall-huge-basin-24.png',
        bullets: ['Size : 12" X 9"']
      }
    ]
  },
  {
    heading: 'WASHBASIN WITH FULL PEDESTAL',
    subsections: [
      {
        subheading: 'BIG STERLING SET',
          image: '/products/wash-basin-with-full-pedestal-1.png',
        bullets: ['Size : 655 x 520 x 930mm']
      },
      {
        subheading: 'MINI STERLING SET',
         image: '/products/wash-basin-with-full-pedestal-2.png',
        bullets: ['Size : 575 x 450 x 895mm']
      },
      {
        subheading: 'SERENA SET',
        image: '/products/wash-basin-with-full-pedestal-3.png',
        bullets: ['Size : 585 x 450 x 890mm']
      },
      {
        subheading: 'SWINGER SET',
        image: '/products/wash-basin-with-full-pedestal-4.png',
        bullets: ['Size : 560 x 440 x 855mm']
      },
      {
        subheading: 'SONATA SET',
        image: '/products/wash-basin-with-full-pedestal-5.png',
        bullets: ['Size : 570 x 430 x 880mm']
      },
      {
        subheading: 'SUPREME SET',
        image: '/products/wash-basin-with-full-pedestal-6.png',
        bullets: ['Size : 580 x 420 x 870mm']
      },
      {
        subheading: 'AMAZONE SET',
        image: '/products/wash-basin-with-full-pedestal-7.png',
        bullets: ['Size : 590 x 430 x 835mm']
      },
      {
        subheading: 'POLO SET',
        image: '/products/wash-basin-with-full-pedestal-8.png',
        bullets: ['Size : 575 x 410 x 830mm']
      },
      {
        subheading: 'CLASSIC SET',
        image: '/products/wash-basin-with-full-pedestal-9.png',
        bullets: ['Size : 510 x 410 x 805mm']
      },
      {
        subheading: 'REPOSE SET',
        image: '/products/wash-basin-with-full-pedestal-10.png',
        bullets: ['Size : 560 x 410 x 805mm']
      },
      {
        subheading: 'CAPRI SET',
        image: '/products/wash-basin-with-full-pedestal-11.png',
        bullets: ['Size : 650 x 510 x 810mm']
      },
      {
        subheading: 'ARROWN SET',
        image: '/products/wash-basin-with-full-pedestal-12.png',
        bullets: ['Size : 540 x 420 x 830mm']
      },
      {
        subheading: 'MORRIS SET',
        image: '/products/wash-basin-with-full-pedestal-13.png',
        bullets: ['Size : 410 x 300 x 790mm']
      },
      {
        subheading: 'MATRIX SET',
        image: '/products/wash-basin-with-full-pedestal-14.png',
        bullets: ['Size : 460 x 350 x 450mm']
      },
      {
        subheading: 'SIMI SET',
        image: '/products/wash-basin-with-full-pedestal-15.png',
        bullets: ['Size : 460 x 375 x 780mm']
      },
      {
        subheading: 'SWISS SET',
        image: '/products/wash-basin-with-full-pedestal-16.png',
        bullets: ['Size : 405 x 410 x 790mm']
      },
      {
        subheading: 'VICTORIA SET',
        image: '/products/wash-basin-with-full-pedestal-17.png',
        bullets: ['Size : 560 x 440 x 930mm']
      },
      {
        subheading: 'DIAMOND SET',
        image: '/products/wash-basin-with-full-pedestal-18.png',
        bullets: ['Size : 585 x 500 x 895mm']
      },
      {
        subheading: 'SOPHIA SET',
        image: '/products/wash-basin-with-full-pedestal-19.png',
        bullets: ['Size : 550 x 400 x 825mm']
      },
      {
        subheading: 'SOPHIA - 1 SET',
        image: '/products/wash-basin-with-full-pedestal-20.png',
        bullets: ['Size : 560 x 410 x 870mm']
      },
      {
        subheading: 'SPICE SET',
        image: '/products/wash-basin-with-full-pedestal-21.png',
        bullets: ['Size : 560 x 435 x 860mm']
      },
      {
        subheading: 'CORAL SET',
        image: '/products/wash-basin-with-full-pedestal-22.png',
        bullets: ['Size : 500 x 390 x 800mm']
      },
      {
        subheading: 'STYLO SET',
        image: '/products/wash-basin-with-full-pedestal-23.png',
        bullets: ['Size : 570 x 460 x 840mm']
      },
      {
        subheading: 'SPACY SET',
        image: '/products/wash-basin-with-full-pedestal-24.png',
        bullets: ['Size : 560 x 460 x 825mm']
      }
    ]
  },
  {
    heading: 'ONE PIECE BASIN',
    subsections: [
      {
        subheading: 'ORIO',
        image: '/products/half-pedestal-1.png',
        bullets: ['Size : 31" x 16"', 'Code : A - 01']
      },
      {
        subheading: 'GLASS',
        image: '/products/half-pedestal-2.png',
        bullets: ['Size : 31" x 15"', 'Code : A - 02']
      },
      {
        subheading: 'SCORPIAN',
        image: '/products/half-pedestal-3.png',
        bullets: ['Size : 31.5" x 18"', 'Code : A - 03']
      },
      {
        subheading: 'CAPSULE',
        image: '/products/half-pedestal-4.png',
        bullets: ['Size : 31.5" x 14"', 'Code : A - 04']
      }
    ]
  },
  {
    heading: 'WASH BASIN & HALF PEDESTAL',
    subsections: [
      {
        subheading: 'LATINA',
        image: '/products/basin-half-pedestal-1.png',
        bullets: ['Size : 560 x 455 x 485mm']
      },
      {
        subheading: 'SWINGER',
        image: '/products/basin-half-pedestal-2.png',
        bullets: ['Size : 580 x 410 x 560mm']
      },
      {
        subheading: 'MATRIX',
        image: '/products/basin-half-pedestal-3.png',
        bullets: ['Size : 450 x 350 x 460mm']
      },
      {
        subheading: 'MORRIS',
        image: '/products/basin-half-pedestal-4.png',
        bullets: ['Size : 405 x 295 x 400mm']
      },
      {
        subheading: 'SIMI',
        image: '/products/basin-half-pedestal-5.png',
        bullets: ['Size : 455 x 345 x 410mm']
      },
      {
        subheading: 'PETAL',
        image: '/products/basin-half-pedestal-6.png',
        bullets: ['Size : 440 x 340 x 445mm']
      },
      {
        subheading: 'CLASSIC',
        image: '/products/basin-half-pedestal-7.png',
        bullets: ['Size : 510 x 410 x 460mm']
      },
      {
        subheading: 'REPOSE',
        image: '/products/basin-half-pedestal-8.png',
        bullets: ['Size : 560 x 410 x 460mm']
      },
      {
        subheading: 'STYLO',
        image: '/products/basin-half-pedestal-9.png',
        bullets: ['Size : 570 x 460 x 540mm']
      }
    ]
  },
  {
    heading: 'SINGLE PIECE WASHBASIN',
    subsections: [
      {
        subheading: 'JET',
        image: '/products/single-piece-washbasin-1.png',
        bullets: ['Size : 390 x 350 x 265mm']
      },
      {
        subheading: 'PROTON',
        image: '/products/single-piece-washbasin-2.png',
        bullets: ['Size : 400 x 400 x 280mm']
      },
      {
        subheading: 'MOFUJI',
        image: '/products/single-piece-washbasin-3.png',
        bullets: ['Size : 450 x 430 x 320mm']
      },
      {
        subheading: 'DELTA',
        image: '/products/single-piece-washbasin-4.png',
        bullets: ['Size : 470 x 440 x 330mm']
      }
    ]
  },
  {
    heading: 'ORISSA PAN',
    subsections: [
      {
        subheading: '20" - ORISSA PAN',
           image: '/products/orissa-pan-1.png',
        bullets: ['Size : 510 x 400 x 205mm']
      },
      {
        subheading: 'ORISSA PAN-02',
        image: '/products/orissa-pan-2.png',
        bullets: ['Size : 21']
      },
      {
        subheading: '20" - DELUX ORISSA PAN', 
        image: '/products/orissa-pan-3.png',
        bullets: ['Size : 510 x 400 x 205mm']
      },
      {
        subheading: '20" - ORISSA PAN CLOSE RIM',
        image: '/products/orissa-pan-4.png',
        bullets: ['Size : 510 x 400 x 205mm']
      },
      {
        subheading: '21" DELUX ORISSA PAN',
        image: '/products/orissa-pan-5.png',
        bullets: ['Size : 525 x 410 x 240mm']
      },
      {
        subheading: '23" - ORISSA PAN',
        image: '/products/orissa-pan-6.png',
        bullets: ['Size : 590 x 450 x 270mm']
      },
      {
        subheading: 'C T PAN',
        image: '/products/orissa-pan-7.png',
        bullets: ['Size : 510 x 400 x 160mm']
      },
      {
        subheading: 'MEDIUM DEEP PAN',
        image: '/products/orissa-pan-8.png',
        bullets: ['Size : 515 x 400 x 200mm']
      },
      {
        subheading: 'ESTERN PAN',
        image: '/products/orissa-pan-9.png',
        bullets: ['Size : 525 x 430 x 140mm']
      },
      {
        subheading: 'BOX SQUATTING PAN',
        image: '/products/orissa-pan-10.png',
        bullets: ['Size : 525 x 450 x 140mm']
      },
      {
        subheading: '18" - IWC PAN OPEN TYPE',
        image: '/products/orissa-pan-11.png',
        bullets: ['Size : 460 x 280 x 225mm']
      },
      {
        subheading: '18" - IWC PAN CLOSE RIM TYPE',
        image: '/products/orissa-pan-12.png',
        bullets: ['Size : 455 x 280 x 230mm']
      }
    ]
  },
  {
    heading: 'KITCHEN SINK',
    subsections: [
      {
        subheading: 'CERAMIC KITCHEN SINK',
         image: '/products/kitchen-1.png',
        bullets: ['Size : 620 x 465 x 260mm']
      },
      {
        subheading: 'CERAMIC LAB SINK',
        image: '/products/kitchen-2.png',
        bullets: ['Size : 500 x 350 x 150mm']
      },
      {
        subheading: 'CERAMIC LAB SINK',
        image: '/products/kitchen-3.png',
        bullets: ['Size : 450 x 300 x 150mm']
      }
    ]
  },
  {
    heading: 'URINAL',
    subsections: [
      {
        subheading: 'NOVEL',
        image: '/products/urinal-1.png',
        bullets: ['Size : 310 x 330 x 570mm']
      },
      {
        subheading: 'HALF STALL',
        image: '/products/urinal-2.png',
        bullets: ['Size : 340 x 400 x 605mm']
      },
      {
        subheading: 'MINI HALF STALL',
        image: '/products/urinal-3.png',
        bullets: ['Size : 265 x 295 x 407mm']
      },
      {
        subheading: 'WALL URINAL',
        image: '/products/urinal-4.png',
        bullets: ['Size : 250 x 330 x 405mm']
      },
      {
        subheading: 'LADIES URINAL',
        image: '/products/urinal-5.png',
        bullets: ['Size : 355 x 435 x 90mm']
      },
      {
        subheading: 'PARTITION PLAT',
        image: '/products/urinal-6.png',
        bullets: []
      }
    ]
  },
  {
    heading: 'ACCESSORIES',
    subsections: [
      {
        subheading: 'P - TRAP',
        image: '/products/accessories-1.png',
        bullets: []
      },
      {
        subheading: 'S - TRAP',
        image: '/products/accessories-2.png',
        bullets: []
      },
      {
        subheading: 'BIG P - TRAP',
        image: '/products/accessories-3.png',
        bullets: []
      },
      {
        subheading: '7 PIECE ACCESSORIES',
        image: '/products/accessories-4.png',
        content: ['3 SIZE SOFT DISH | PAPER HOLDER | HOOK | TOWL HOLDER | CERAMIC SHELF'],
        bullets: []
      },
      {
        subheading: 'SINGLE PUSH TYPE FITING',
        image: '/products/accessories-5.png',
        bullets: []
      },
      {
        subheading: 'DUAL PUSH TYPE FITING',
        image: '/products/accessories-6.png',
        bullets: []
      },
      {
        subheading: 'PULL TYPE FITING',
        image: '/products/accessories-7.png',
        bullets: []
      },
      {
        subheading: 'LLC TANK',
        image: '/products/accessories-8.png',
        bullets: []
      },
      {
        subheading: 'SIDE INLET BALL COCK',
        image: '/products/accessories-9.png',
        bullets: []
      },
      {
        subheading: 'FRONT FLUSH',
        image: '/products/accessories-10.png',
        bullets: []
      },
      {
        subheading: 'BOTTOM INLET BALL COCK',
        image: '/products/accessories-11.png',
        bullets: []
      },
      {
        subheading: 'SIDE HANDLE SYPHONE',
        image: '/products/accessories-12.png',
        bullets: []
      }
    ]
  }
];

export const sanitaryProductCount = sanitaryCatalog.reduce((count, group) => count + group.subsections.length, 0);
