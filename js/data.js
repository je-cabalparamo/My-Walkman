const songs = [
    {
        name:'Diablo Rojo',
        path: '../Music/Rodrigo y Gabriela - Diablo Rojo.mp3',
        artist: 'Rodrigo y Gabriela',
        cover: '../Images/diablo rojo.jpg'
    },
    {
        name:'Master Exploder',
        path: '../Music/07 - Master Exploder.mp3',
        artist: 'Tenacious D',
        cover: '../Images/TenaciousDInThePickOfDestinySoundtrack.jpg'
    },
    {
        name:'Voodoo Mama',
        path: '../Music/Voodoo Mama (Music from the Motion Picture Babylon).mp3',
        artist: 'Justin Hurwitz',
        cover: '../Images/Babylon.jpg'
    },
    {
        name:'Dance!',
        path: '../Music/01 - Dance!.mp3',
        artist: 'Shihoko Hirata',
        cover: '../Images/P4Dance.png'
    },
    {
        name:'Without Question',
        path: '../Music/01 - Without Question (Movie Version).mp3',
        artist: 'Elton John',
        cover: '../Images/ElDorado.jpg'
    },
    {
        name:'You Rock My World',
        path: '../Music/17 You Rock My World.mp3',
        artist: 'Michael Jackson',
        cover: '../Images/Yrmwsingle.png'
    },
    {
        name:'Alors On Danse',
        path: '../Music/05 - Alors On Danse.mp3',
        artist: 'Stromae',
        cover: '../Images/Cheese_Stromae.jpg'
    },
    {
        name:'CHAINSAW BLOOD',
        path: '../Music/CHAINSAW BLOOD.mp3',
        artist: 'VAUNDY',
        cover: '../Images/chainsaw-blood.jpg'
    },
    {
        name:'Circles',
        path: '../Music/Circles.mp3',
        artist: 'Post Malone',
        cover: '../Images/Hollywoods_Bleeding.png'
    },
    {
        name:'Don',
        path: '../Music/Don.mp3',
        artist: 'Miranda',
        cover: '../Images/Don.jpg'
    },
    {
        name:'Done For Me',
        path: '../Music/Done For Me.mp3',
        artist: 'Charlie Puth feat. Kehlani',
        cover: '../Images/Done For Me.png'
    },
    {
        name:'Don\'t Stop Me Now',
        path: '../Music/Dont Stop Me Now.mp3',
        artist: 'Queen',
        cover: '../Images/Queen_Jazz.png'
    },
    {
        name:'EARFQUAKE',
        path: '../Music/EARFQUAKE.mp3',
        artist: 'Tyler The Creator',
        cover: '../Images/Igor.png'
    },
    {
        name:'ELEMENT.',
        path: '../Music/ELEMENT..mp3',
        artist: 'Kendrick Lamar',
        cover: '../Images/Damn.png'
    },
    {
        name:'Enemy',
        path: '../Music/Enemy (from the series Arcane League of Legends).mp3',
        artist: 'Imagine Dragons',
        cover: '../Images/Enemy.png'
    },
    {
        name:'Everybody Wants to Rule The World',
        path: '../Music/Everybody Wants To Rule The World.mp3',
        artist: 'Tears for Fears',
        cover: '../Images/everybodywants.png'
    },
    {
        name:'goosebumps',
        path: '../Music/Goosebumps.mp3',
        artist: 'Travis Scott',
        cover: '../Images/goosebumps.png'
    },
    {
        name:'Glimpse of Us',
        path: '../Music/Glimpse of Us.mp3',
        artist: 'Joji',
        cover: '../Images/Joji_-_Glimpse_of_Us.png'
    },
    {
        name:'Here We Go',
        path: '../Music/Here We Go.mp3',
        artist: 'Chris Classic',
        cover: '../Images/herewego.jpg'
    },
    {
        name:'Hero',
        path: '../Music/Hero (feat. Josey Scott).mp3',
        artist: 'Chad Kroeger feat. Joey Scott',
        cover: '../Images/herochad.png'
    },
    {
        name:'Holding Out For a Hero',
        path: '../Music/Holding Out for a Hero.mp3',
        artist: 'Bonnie Tyler',
        cover: '../Images/footloose.jpg'
    },
    {
        name:'It Was a Good Day',
        path: '../Music/It Was a Good Day.mp3',
        artist: 'Ice Cube',
        cover: '../Images/goodday.jpg'
    },
    {
        name:'La Camisa Negra',
        path: '../Music/La Camisa Negra.mp3',
        artist: 'Juanes',
        cover: '../Images/camisanegra.png'
    },
    {
        name:'Leave Me Alone',
        path: '../Music/LEave Me Alone (2012 Remaster).mp3',
        artist: 'Michael Jackson',
        cover: '../Images/Bad.png'
    },
    {
        name:'Makes Me Wonder',
        path: '../Music/Makes Me Wonder.mp3',
        artist: 'Maroon 5',
        cover: '../Images/makes me wonder.png'
    },
    {
        name:'Master of Puppets',
        path: '../Music/Master Of Puppets (Remastered).mp3',
        artist: 'Metallica',
        cover: '../Images/Metallica_-_Master_of_Puppets_cover.jpg'
    },
    {
        name:'Me Enamora',
        path: '../Music/Me Enamora.mp3',
        artist: 'Juanes',
        cover: '../Images/me enamora.jpg'
    },
    {
        name:'Never Forget',
        path: '../Music/Never Forget.mp3',
        artist: 'Sampa The Great',
        cover: '../Images/never forget.png'
    },
    {
        name:'Never Gonna Give You Up',
        path: '../Music/Never Gonna Give You Up.mp3',
        artist: 'Rick Astley',
        cover: '../Images/never-gonna-give.png'
    },
    {
        name:'Odo',
        path: '../Music/Odo.mp3',
        artist: 'Ado',
        cover: '../Images/odo.png'
    },
    {
        name:'Redbone',
        path: '../Music/Redbone.mp3',
        artist: 'Childish Gambino',
        cover: '../Images/Childish_Gambino_-_Awaken,_My_Love!.png'
    },
    {
        name:'Saturno',
        path: '../Music/Saturno.mp3',
        artist: 'Pablo Alborán',
        cover: '../Images/pablo-alboran-prometo-e1516624234224.jpg'
    },
    {
        name:'Save Your Tears',
        path: '../Music/Save Your Tears.mp3',
        artist: 'The Weeknd',
        cover: '../Images/The_Weeknd_-_After_Hours.png'
    },
    {
        name:'Somewhere Only We Know',
        path: '../Music/Somewhere Only We Know.mp3',
        artist: 'Keane',
        cover: '../Images/Hopes_and_Fears.jpg'
    },
    {
        name:'Suit & Tie',
        path: '../Music/Suit & Tie.mp3',
        artist: 'Justin Timberlake',
        cover: '../Images/2020timber.png'
    },
    {
        name:'Feel (The Power Of Now)',
        path: '../Music/Steve Aoki - Feel (The Power Of Now).mp3',
        artist: 'Steve Aoki',
        cover: '../Images/FeelThePowerNow.jpg'
    },
    {
        name:'Tacones Rojos',
        path: '../Music/Tacones Rojos.mp3',
        artist: 'Sebastián Yatra',
        cover: '../Images/sebastian_yatra_tacones_rojos-portada.jpg'
    },
    {
        name:'Tears',
        path: '../Music/Tears (feat. Louisa Johnson).mp3',
        artist: 'Clean Bandit Feat. Louisa Johnson',
        cover: '../Images/Clean_Bandit_-_Tears_(art).png'
    },
    {
        name:'The Pink Phantom',
        path: '../Music/The Pink Phantom (feat. Elton John and 6LACK).mp3',
        artist: 'Gorillaz Feat. Elton John and 6LACK',
        cover: '../Images/Song_Machine_Season_One_Strange_Timez.png'
    },
    {
        name:'This Ain\'t a Scene, It\'s an Arms Race',
        path: '../Music/This Aint a Scene, Its an Arms Race.mp3',
        artist: 'Fall Out Boy',
        cover: '../Images/Infinityonhigh.jpg'
    },
    {
        name:'Time Left',
        path: '../Music/残機.mp3',
        artist: 'ZUTOMAYO',
        cover: '../Images/zuto-time-left.jpg'
    },
    {
        name:'Undefeatable (feat. Kellin Quinn)',
        path: '../Music/Undefeatable (feat. Kellin Quinn).mp3',
        artist: 'SEGA',
        cover: '../Images/sonicfrontiers.jpg'
    },
    {
        name:'What A Life',
        path: '../Music/What A Life (From the Motion Picture Another Round).mp3',
        artist: 'Scarlet Pleasure',
        cover: '../Images/anotherround.jpg'
    },
    {
        name:'What I\'ve Done',
        path: '../Music/What I\'ve Done.mp3',
        artist: 'LINKIN PARK',
        cover: '../Images/whativedone.jpg'
    },
    {
        name:'Wherever I May Roam',
        path: '../Music/Wherever I May Roam (Remastered).mp3',
        artist: 'Metallica',
        cover: '../Images/Metallica_-_Metallica_cover.jpg'
    },
    {
        name:'Welcome to The Black Parade',
        path: '../Music/Welcome To The Black Parade.mp3',
        artist: 'My Chemical Romance',
        cover: '../Images/Blackparadecover.jpg'
    },
]

/*
cak by the ocean
welcome to the black parade
locked out of heaven
viva la vida
escape from the city
*/