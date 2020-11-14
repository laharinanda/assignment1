

var config = {
  style: 'mapbox://styles/laharinanda/ckgtoizxc2cb819p5ombu6rg3',
accessToken: 'pk.eyJ1IjoibGFoYXJpbmFuZGEiLCJhIjoiY2toYTcwdWdlMTluNDJ0bDI4dW00ODkxMCJ9.3-WXcscfuwcqIrkaUFD9dA',
showMarkers: true,
theme: 'light',
alignment: 'left',
title: 'The Liquid Paradox in Odisha',
subtitle: 'The most water scarcity in Odisha is next to freshwater',
byline: 'By Lahari Nanda',
footer: 'Source: Govt. of Odisha',
chapters: [
    {
        id: 'Odishamap',
        title: 'Odisha, India',
        description: 'The East Indian state of Odisha shares a boundary with the Indian Ocean, and is home to some of the longest rivers and largest freshwater bodies in India.',
        location: {
          center: [84.33617, 19.90407],
          zoom: 6.52,
          pitch: 47.50,
          bearing: -13.60
        },
        onChapterEnter: [
            {
                layer: 'polygons-orissadistricts',
                opacity: 0.75
            }
        ],
        onChapterExit: [
            {
              layer: 'polygons-orissawater',
              opacity: 0.75
            }
        ]
    },
    {
        id: 'waterconcentration',
        description: 'Some of the largest freshwater bodies of Odisha are concentrated on the northeast end of the state. These are near Dhenkanal, Kamakshyanagar, Khorda, Chandbali, Kujang and Choudwar. The largest of these is the Mahanadi, of which 494km are in Odisha. ',
        location: {
          center: [83.48294, 21.60139],
          zoom: 8.91,
          pitch: 60.00,
          bearing: 134.40
        },
        onChapterEnter: [
          {
            layer: 'polygons-orissawater',
            opacity: 0.75

          }

        ],

        onChapterExit: [
            {
              layer: 'lines-orissawater',
              opacity: 0.75
            }
        ]
    },

    {
        id: 'waterscarcity',
        description: 'Ironically, four of the areas of Odisha that are facing dangerous levels of water scarcity are located next to the Mahanadi. ',
        location: {
          center: [86.28628, 20.49834],
          zoom: 9.17,
          pitch: 60.00,
          bearing: 27.92
        },
        onChapterEnter: [
          {
            layer: 'polygons-orissawater',
            opacity: 0.75

          }


        ],
        onChapterExit: [
          {
            layer: 'lines-orissawater',
            opacity: 0.75

          }

        ]
    }


    {
        id: 'scarce',
        description: 'These districts are water scarce for various reasons. Odisha has been facing a water shortage crisis and drought for many years now. The reasons are increased dry periods in the year, erratic rain and seasonal low pressure systems in the Bay of Bengal. ',
        location: {
          center: [86.44712, 20.57301],
          zoom: 8.31,
          pitch: 60.00,
          bearing: 39.73
        },
        onChapterEnter: [
          {
            layer: 'lines-orissawater',
            opacity: 0.75

          }


        ],
        onChapterExit: [
          {
            layer: 'waterscarcedistricts-orissa',
            opacity: 0.75

          }

        ]
    }



]
}

};
