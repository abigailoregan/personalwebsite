export type ArtworkItem = {
    id: string
    img: string
    imgH: string
    desc: string
    height: number
    width: number
}

export const artworks: Record<string, ArtworkItem[]> = {
    abstract: [
        {
            id:"abstract-1",
            img:"/images/abstract/abigail_time.jpg",
            imgH:"/images/hi-resolution/abstract/abigail_time.jpg",
            desc:'Time, Collage on Board, 20"x24"',
            height: 1000,
            width: 1201
        },
        {
            id:"abstract-2",
            img:"/images/abstract/abigail_pigeon.jpg",
            imgH:"/images/hi-resolution/abstract/abigail_pigeon.jpg",
            desc:'Celestial Oddities, Collage on Paper, 14"x10"',
            height: 1000,
            width: 700
        },
        {
            id:"abstract-3",
            img:"/images/abstract/abigail_inverse.jpg",
            imgH:"/images/hi-resolution/abstract/abigail_inverse.jpg",
            desc:"Proto-Shapes, Micron Pens on Watercolor Paper - Study for Overgrowth",
            height: 1000,
            width: 788
        },
        {
            id:"abstract-4",
            img:"/images/abstract/abigail_shapes.jpg",
            imgH:"/images/hi-resolution/abstract/abigail_shapes.jpg",
            desc:'Shattered Harmony, Micron Pens on Watercolor Paper, 30"x22"',
            height: 1000,
            width: 745
        },
        {
            id:"abstract-5",
            img:"/images/abstract/abigail_protovine.jpg",
            imgH:"/images/hi-resolution/abstract/abigail_protovine.jpg",
            desc:"Proto-Vines, Micron Pens on Watercolor Paper - Study for Overgrowth",
            height: 1000,
            width: 646
        },
        {
            id:"abstract-6",
            img:"/images/abstract/abigail_vines.jpg",
            imgH:"/images/hi-resolution/abstract/abigail_vines.jpg",
            desc:'Overgrowth, Micron Pens on Watercolor Paper, 30"x22"',
            height: 1000,
            width: 765
        },
        {
            id:"abstract-7",
            img:"/images/abstract/abigail_rocks.jpg",
            imgH:"/images/hi-resolution/abstract/abigail_rocks.jpg",
            desc:"Fragments of Solitude, Graphite on Drawing Paper Primed with Acrylic",
            height: 1000,
            width: 839
        },
        {
            id:"abstract-8",
            img:"/images/abstract/abigail_galaxy.jpg",
            imgH:"/images/hi-resolution/abstract/abigail_galaxy.jpg",
            desc:'Cosmic Symphony, Oil on Canvas, 24"x24"',
            height: 1000,
            width: 1032
        },
        {
            id:"abstract-9",
            img:"/images/abstract/abigail_flowers.jpg",
            imgH:"/images/hi-resolution/abstract/abigail_flowers.jpg",
            desc:'Flowers, Oil on canvas, 24”x36”',
            height: 1000,
            width: 1390
        },
        {
            id:"abstract-10",
            img:"/images/abstract/abigail_ingested.png",
            imgH:"/images/hi-resolution/abstract/abigail_ingested.png",
            desc:'Ingested, Oil, Acrylic, and pieces of food on canvas, each 18"x24"',
            height: 807,
            width: 2048
        }
    ],

    figures:[
        {
            id:"figures-1",
            img:"/images/figures/abigail_siren.jpg",
            imgH:"/images/hi-resolution/figures/abigail_siren.jpg",
            desc:"The Siren, digital drawing on Photoshop, 9000x6600px",
            height: 1000,
            width: 733
        },
        {
            id:"figures-2",
            img:"/images/figures/abigail_dancer.jpg",
            imgH:"/images/hi-resolution/figures/abigail_dancer.jpg",
            desc:"The Flamenco Dancer, digital drawing on Procreate",
            height: 1000,
            width: 750
        },
        {
            id:"figures-3",
            img:"/images/figures/abigail_lady.jpg",
            imgH:"/images/hi-resolution/figures/abigail_lady.jpg",
            desc:'Crying Lady, Charcoal on Drawing Paper, 22.5"x18"',
            height: 1000,
            width: 802
        },
        {
            id:"figures-4",
            img:"/images/figures/abigail_dude2.jpg",
            imgH:"/images/hi-resolution/figures/abigail_dude2.jpg",
            desc:"Male figure sketch, Charcoal on Drawing Paper",
            height: 1000,
            width: 761
        },
        {
            id:"figures-5",
            img:"/images/figures/abigail_figures.jpg",
            imgH:"/images/hi-resolution/figures/abigail_figures.jpg",
            desc:"Studies of the female form, Graphite on Newsprint",
            height: 1000,
            width: 847
        },
        {
            id:"figures-6",
            img:"/images/figures/abigail_oldman.jpg",
            imgH:"/images/hi-resolution/figures/abigail_oldman.jpg",
            desc:'Male figure drawing, Charcoal on Drawing Paper, 24"x18"',
            height: 1000,
            width: 749
        },
        {
            id:"figures-7",
            img:"/images/figures/abigail_woman.jpg",
            imgH:"/images/hi-resolution/figures/abigail_woman.jpg",
            desc:"Female figure drawing, Charcoal on Paper",
            height: 1000,
            width: 797
        },
        {
            id:"figures-8",
            img:"/images/figures/abigail_zombies.jpg",
            imgH:"/images/hi-resolution/figures/abigail_zombies.jpg",
            desc:'Santa\'s Helpers, Oil on Canvas, 30"x22"',
            height: 1000,
            width: 748
        },
        {
            id:"figures-9",
            img:"/images/figures/abigail_campfire.jpg",
            imgH:"/images/hi-resolution/figures/abigail_campfire.jpg",
            desc:'The James, Charcoal on Toned-Tan Drawing Paper, 36"x24"',
            height: 1000,
            width: 746
        },
        {
            id:"figures-10",
            img:"/images/figures/abigail_tryptich.png",
            imgH:"/images/hi-resolution/figures/abigail_tryptich.png",
            desc:"Veils of the Self, Oil on canvas, two 36”x24” and other 36”x36”",
            height: 1000,
            width: 2495
        }
    ],

    landscapes:[
        {
            id:"landscapes-1",
            img:"/images/landscapes/abigail_forest.jpg",
            imgH:"/images/hi-resolution/landscapes/abigail_forest.jpg",
            desc:'Winter, Acrylic on Canvas Board, 14"x11"',
            height: 1000,
            width: 767
        },
        {
            id:"landscapes-2",
            img:"/images/landscapes/abigail_fireycreek.jpg",
            imgH:"/images/hi-resolution/landscapes/abigail_fireycreek.jpg",
            desc:'Fiery Creek, Chalk Pastel on Pastel Paper, 12"x16"',
            height: 1000,
            width: 1342
        },
        {
            id:"landscapes-3",
            img:"/images/landscapes/abigail_forest2.jpg",
            imgH:"/images/hi-resolution/landscapes/abigail_forest2.jpg",
            desc:'Tranquility, Oil on Canvas Board, 8"x10" - Art Study with Johannes Vloothuis',
            height: 1000,
            width: 1230
        },
        {
            id:"landscapes-4",
            img:"/images/landscapes/abigail_suffocation.jpg",
            imgH:"/images/hi-resolution/landscapes/abigail_suffocation.jpg",
            desc:'Suffocation, Mixed Media on Canvas Board, 20"x24"',
            height: 1000,
            width: 1181
        },
        {
            id:"landscapes-5",
            img:"/images/landscapes/abigail_fallschurch.jpg",
            imgH:"/images/hi-resolution/landscapes/abigail_fallschurch.jpg",
            desc:'The Little City, Oil on Canvas, 12"x16"',
            height: 1000,
            width: 1350
        },
        {
            id:"landscapes-6",
            img:"/images/landscapes/abigail_birds.jpg",
            imgH:"/images/hi-resolution/landscapes/abigail_birds.jpg",
            desc:"David's Birds, Oil on Canvas, 20\"x30\"",
            height: 1000,
            width: 1523
        },
        {
            id:"landscapes-7",
            img:"/images/landscapes/abigail_tree.jpg",
            imgH:"/images/hi-resolution/landscapes/abigail_tree.jpg",
            desc:"Twilight's Guardian, Gouache on Hardcover Book",
            height: 1000,
            width: 648
        },
        {
            id:"landscapes-8",
            img:"/images/landscapes/abigail_richmond.jpg",
            imgH:"/images/hi-resolution/landscapes/abigail_richmond.jpg",
            desc:'Richmond, Acrylic on Canvas, 20"x16"',
            height: 1000,
            width: 804
        },
        {
            id:"landscapes-9",
            img:"/images/landscapes/abigail_boats.jpg",
            imgH:"/images/hi-resolution/landscapes/abigail_boats.jpg",
            desc:"Carrickfergus Marina, Graphite on Drawing Paper",
            height: 1000,
            width: 1290
        },
        {
            id:"landscapes-10",
            img:"/images/landscapes/abigail_bridge.jpg",
            imgH:"/images/hi-resolution/landscapes/abigail_bridge.jpg",
            desc:"Hurricane Gulch Bridge (Alaska), Charcoal on Drawing Paper, 18\"x24\"",
            height: 1000,
            width: 1318
        },
        {
            id:"landscapes-11",
            img:"/images/landscapes/abigail_monroe.jpg",
            imgH:"/images/hi-resolution/landscapes/abigail_monroe.jpg",
            desc:'Monroe Park, Charcoal on Drawing Paper, 24"x18"',
            height: 1000,
            width: 774
        },
        {
            id:"landscapes-12",
            img:"/images/landscapes/abigail_heaven.jpg",
            imgH:"/images/hi-resolution/landscapes/abigail_heaven.jpg",
            desc:"Heaven, Oil on canvas, 40”x30”",
            height: 1000,
            width: 787
        },
        {
            id:"landscapes-13",
            img:"/images/landscapes/abigail_hell.jpg",
            imgH:"/images/hi-resolution/landscapes/abigail_hell.jpg",
            desc:"Hell, Oil on canvas, 40”x30”",
            height: 1000,
            width: 776
        },
        {
            id:"landscapes-14",
            img:"/images/landscapes/abigail_religious.jpg",
            imgH:"/images/hi-resolution/landscapes/abigail_religious.jpg",
            desc:"Testament of Light, Acrylic on canvas, 12”x16”",
            height: 1000,
            width: 1375
        }
    ],

    love:[
        {
            id:"love-1",
            img:"/images/love/abigail_noahsana.jpg",
            imgH:"/images/hi-resolution/love/abigail_noahsana.jpg",
            desc:'Dancing with Death, Charcoal on Paper, 44"x30"',
            height: 1000,
            width: 687
        },
        {
            id:"love-2",
            img:"/images/love/abigail_noah.jpg",
            imgH:"/images/hi-resolution/love/abigail_noah.jpg",
            desc:'The Veil, Charcoal on Paper, 24"x18"',
            height: 1000,
            width: 742
        },
        {
            id:"love-3",
            img:"/images/love/abigail_summon.jpg",
            imgH:"/images/hi-resolution/love/abigail_summon.jpg",
            desc:'Flickering Fate, Charcoal on Paper, 18"x24"',
            height: 1000,
            width: 1335
        }
    ],

    murals:[
        {
            id:"murals-1",
            img:"/images/murals/abigail_drain.jpg",
            imgH:"/images/hi-resolution/murals/abigail_drain.jpg",
            // url:"https://sites.google.com/view/falls-church-art-walk/home-artwork-inventory/storm-drain-mural-1?authuser=0",
            desc:"Storm Drain Mural 1 (Co-Artist: Alex Schwartz)",
            height: 1000,
            width: 1594
        },
        {
            id:"murals-2",
            img:"/images/murals/abigail_goddess.jpg",
            imgH:"/images/hi-resolution/murals/abigail_goddess.jpg",
            desc:"Goddess of Justice (Co-Artist: Sophia Koo), Acrylic Mural, Meridian High School - Falls Church, VA",
            height: 1000,
            width: 800
        }
    ],

    portraits:[
        {
            id:"portraits-1",
            img:"/images/portraits/abigail_blue.jpg",
            imgH:"/images/hi-resolution/portraits/abigail_blue.jpg",
            desc:"Female Portrait Study, Gouache on Mixed Media Paper",
            height: 1000,
            width: 797
        },
        {
            id:"portraits-2",
            img:"/images/portraits/abigail_hera.jpg",
            imgH:"/images/hi-resolution/portraits/abigail_hera.jpg",
            desc:"Hera, Micron Pen and White Charcoal on Toned-Tan Mixed Media Paper",
            height: 1000,
            width: 873
        },
        {
            id:"portraits-3",
            img:"/images/portraits/abigail_julia.jpg",
            imgH:"/images/hi-resolution/portraits/abigail_julia.jpg",
            desc:'Julia, Charcoal on Paper, 24"x18"',
            height: 1000,
            width: 770
        },
        {
            id:"portraits-4",
            img:"/images/portraits/abigail_digital.jpg",
            imgH:"/images/hi-resolution/portraits/abigail_digital.jpg",
            desc:"Color Study, digital drawing on Procreate",
            height: 1000,
            width: 750
        },
        {
            id:"portraits-5",
            img:"/images/portraits/abigail_self1.jpg",
            imgH:"/images/hi-resolution/portraits/abigail_self1.jpg",
            desc:'"Graffiti" Self-Portrait, Mixed Media Painting on Canvas, 30"x20"',
            height: 1000,
            width: 660
        },
        {
            id:"portraits-6",
            img:"/images/portraits/abigail_eye.jpg",
            imgH:"/images/hi-resolution/portraits/abigail_eye.jpg",
            desc:'The Eye, Acrylic on Canvas Board, 4"x6"',
            height: 1000,
            width: 1335
        },
        {
            id:"portraits-7",
            img:"/images/portraits/abigail_einstein.jpg",
            imgH:"/images/hi-resolution/portraits/abigail_einstein.jpg",
            desc:"Einstein, Micron Pen and White Charcoal on Toned-Tan Mixed Media Paper",
            height: 1000,
            width: 1107
        },
        {
            id:"portraits-8",
            img:"/images/portraits/abigail_phone.jpg",
            imgH:"/images/hi-resolution/portraits/abigail_phone.jpg",
            desc:"Man on Phone, Charcoal on Drawing Paper",
            height: 1000,
            width: 714
        },
        {
            id:"portraits-9",
            img:"/images/portraits/abigail_metal.jpg",
            imgH:"/images/hi-resolution/portraits/abigail_metal.jpg",
            desc:'Hope, Acrylic on Canvas, 18"x14"',
            height: 1000,
            width: 803
        },
        {
            id:"portraits-10",
            img:"/images/portraits/abigail_beardold.jpg",
            imgH:"/images/hi-resolution/portraits/abigail_beardold.jpg",
            desc:"Old Man, Charcoal on Drawing Paper",
            height: 1000,
            width: 901
        },
        {
            id:"portraits-11",
            img:"/images/portraits/abigail_holland.jpg",
            imgH:"/images/hi-resolution/portraits/abigail_holland.jpg",
            desc:'Tom Holland - Uncharted, Oil on Canvas Board, 8"x10"',
            height: 1000,
            width: 1278
        },
        {
            id:"portraits-12",
            img:"/images/portraits/abigail_self2.jpg",
            imgH:"/images/hi-resolution/portraits/abigail_self2.jpg",
            desc:'Abigail O\'Regan, Acrylic on Wood Panel, 40"x30"',
            height: 1000,
            width: 752
        },
        {
            id:"portraits-13",
            img:"/images/portraits/abigail_droregan.jpg",
            imgH:"/images/hi-resolution/portraits/abigail_droregan.jpg",
            desc:'Dr David J O\'Regan, Oil on Canvas, 18"x14"',
            height: 1000,
            width: 778
        }
    ],

    stills:[
        {
            id:"stills-1",
            img:"/images/stills/abigail_pepper2.jpg",
            imgH:"/images/hi-resolution/stills/abigail_pepper2.jpg",
            desc:"Pepper, digital drawing on Procreate",
            height: 1000,
            width: 750
        },
        {
            id:"stills-2",
            img:"/images/stills/abigail_pepper1.jpg",
            imgH:"/images/hi-resolution/stills/abigail_pepper1.jpg",
            desc:'Pepper, Oil on Canvas, 10"x10"',
            height: 1000,
            width: 1013
        },
        {
            id:"stills-3",
            img:"/images/stills/abigail_bottle.jpg",
            imgH:"/images/hi-resolution/stills/abigail_bottle.jpg",
            desc:'Bottle, Oil on Canvas, 14"x14"',
            height: 1000,
            width: 1055
        },
        {
            id:"stills-4",
            img:"/images/stills/abigail_brown.jpg",
            imgH:"/images/hi-resolution/stills/abigail_brown.jpg",
            desc:"Vase, Oil on Canvas Board",
            height: 1000,
            width: 782
        },
        {
            id:"stills-5",
            img:"/images/stills/abigail_milk.jpg",
            imgH:"/images/hi-resolution/stills/abigail_milk.jpg",
            desc:'Milk Jug, Oil on Canvas, 12"x9"',
            height: 1000,
            width: 779
        },
        {
            id:"stills-6",
            img:"/images/stills/abigail_hopestudy.jpg",
            imgH:"/images/hi-resolution/stills/abigail_hopestudy.jpg",
            desc:'Flowers, Oil on Canvas, 10"x10"',
            height: 1000,
            width: 750
        },
        {
            id:"stills-7",
            img:"/images/stills/abigail_echoes.jpg",
            imgH:"/images/hi-resolution/stills/abigail_echoes.jpg",
            desc:'Echos of Stillness, Charcoal on Drawing Paper, 24"x18"',
            height: 1000,
            width: 740
        },
        {
            id:"stills-8",
            img:"/images/stills/abigail_bust.jpg",
            imgH:"/images/hi-resolution/stills/abigail_bust.jpg",
            desc:"Greek Style Bust, Oil on Canvas Board",
            height: 1000,
            width: 757
        },
        {
            id:"stills-9",
            img:"/images/stills/abigail_orange.jpg",
            imgH:"/images/hi-resolution/stills/abigail_orange.jpg",
            desc:'Breakfast, Oil on Canvas, 20"x20"',
            height: 1000,
            width: 997
        },
        {
            id:"stills-10",
            img:"/images/stills/abigail_grapes.jpg",
            imgH:"/images/hi-resolution/stills/abigail_grapes.jpg",
            desc:'Grapes, Oil on Canvas, 20"x20"',
            height: 1000,
            width: 1028
        },
        {
            id:"stills-11",
            img:"/images/stills/abigail_ring.jpg",
            imgH:"/images/hi-resolution/stills/abigail_ring.jpg",
            desc:'Butterfly Ring, Oil on Canvas, 24"x24"',
            height: 1000,
            width: 1000
        },
        {
            id:"stills-12",
            img:"/images/stills/abigail_bottles2.jpg",
            imgH:"/images/hi-resolution/stills/abigail_bottles2.jpg",
            desc:'Bottles Sketch, Graphite on Drawing Paper, 18"x24"',
            height: 1000,
            width: 1227
        },
        {
            id:"stills-13",
            img:"/images/stills/abigail_bottles.jpg",
            imgH:"/images/hi-resolution/stills/abigail_bottles.jpg",
            desc:'Bottles, Oil on Canvas, 24"x24"',
            height: 1000,
            width: 1014
        },
        {
            id:"stills-14",
            img:"/images/stills/abigail_teapot.jpg",
            imgH:"/images/hi-resolution/stills/abigail_teapot.jpg",
            desc:'Teapot, Oil on Canvas, 12"x12"',
            height: 1000,
            width: 1002
        },
        {
            id:"stills-15",
            img:"/images/stills/abigail_nose.jpg",
            imgH:"/images/hi-resolution/stills/abigail_nose.jpg",
            desc:'The Nose, Oil on Canvas, 16"x20"',
            height: 1000,
            width: 1248
        },
        {
            id:"stills-16",
            img:"/images/stills/abigail_cup.jpg",
            imgH:"/images/hi-resolution/stills/abigail_cup.jpg",
            desc:'Teatime, Charcoal on Paper, 18"x24"',
            height: 1000,
            width: 1357
        },
        {
            id:"stills-17",
            img:"/images/stills/abigail_jar.jpg",
            imgH:"/images/hi-resolution/stills/abigail_jar.jpg",
            desc:'The Jar, Oil on Canvas, 24"x18"',
            height: 1000,
            width: 770
        },
        {
            id:"stills-18",
            img:"/images/stills/abigail_bird.jpg",
            imgH:"/images/hi-resolution/stills/abigail_bird.jpg",
            desc:"Taxidermy Still Life, Charcoal on Drawing Paper",
            height: 1000,
            width: 669
        },
        {
            id:"stills-19",
            img:"/images/stills/abigail_plush.jpg",
            imgH:"/images/hi-resolution/stills/abigail_plush.jpg",
            desc:'Hiraeth, Oil on Canvas, 24"x18"',
            height: 1000,
            width: 750
        }
    ]
}