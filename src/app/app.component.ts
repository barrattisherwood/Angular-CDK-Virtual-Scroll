import { Component, ElementRef, ViewChild, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  @ViewChild('gridtemplate') elementView: ElementRef;
  numbers: number[] = [];
  rows = [];
  chunkedArray = [];
  title = 'Virtual Scroll Prototype';
  public gridHeight = 300;
  itemSize = 215;
  screenHeight: any;
  screenWidth: any;

  gameTiles = [
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/BookieofOdds_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ZombieHoard_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ArcticValor_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ShogunOfTime_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/BookofOz_295x215_New.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ReelTalent_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ShowdownSaloon_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/IcyGems_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ImmortalRomance_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/CashOfKingdoms_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/LuchaLegends_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ActionOpsSnowAndSable_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/TheGreatAlbini_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/RomanovRiches_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Thunderstruck2_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/CrystalRift_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/AstroLegends_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/WickedTalesDarkRed_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Sidewinder_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Rainbrew_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ExoticCats_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/RobinOfSherwood_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Fortunium_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/WildScarabs_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/AmazingAztecs_295x315.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/DiamondEmpire_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/TempleofTut_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/DreamDate_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/PlayboyGold_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/KingTusk_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/DecoDiamonds_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Highlander_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/WackyPanda_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/HollyJollyPenguins_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/LuckyLittleGods_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/LuckyLinks_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ThePhantomOfTheOpera_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Halloween_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/1827.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/MonstersWheel_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/108HeroesMF_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/GnomeWood_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/BookieofOdds_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ZombieHoard_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ArcticValor_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ShogunOfTime_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/BookofOz_295x215_New.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ReelTalent_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ShowdownSaloon_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/IcyGems_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ImmortalRomance_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/CashOfKingdoms_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/LuchaLegends_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ActionOpsSnowAndSable_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/TheGreatAlbini_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/RomanovRiches_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Thunderstruck2_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/CrystalRift_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/AstroLegends_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/WickedTalesDarkRed_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Sidewinder_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Rainbrew_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ExoticCats_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/RobinOfSherwood_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Fortunium_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/WildScarabs_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/AmazingAztecs_295x315.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/DiamondEmpire_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/TempleofTut_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/DreamDate_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/PlayboyGold_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/KingTusk_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/DecoDiamonds_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Highlander_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/WackyPanda_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/HollyJollyPenguins_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/LuckyLittleGods_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/LuckyLinks_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ThePhantomOfTheOpera_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Halloween_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/1827.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/MonstersWheel_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/108HeroesMF_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/GnomeWood_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/BookieofOdds_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ZombieHoard_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ArcticValor_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ShogunOfTime_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/BookofOz_295x215_New.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ReelTalent_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ShowdownSaloon_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/IcyGems_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ImmortalRomance_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/CashOfKingdoms_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/LuchaLegends_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ActionOpsSnowAndSable_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/TheGreatAlbini_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/RomanovRiches_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Thunderstruck2_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/CrystalRift_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/AstroLegends_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/WickedTalesDarkRed_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Sidewinder_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Rainbrew_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ExoticCats_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/RobinOfSherwood_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Fortunium_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/WildScarabs_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/AmazingAztecs_295x315.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/DiamondEmpire_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/TempleofTut_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/DreamDate_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/PlayboyGold_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/KingTusk_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/DecoDiamonds_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Highlander_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/WackyPanda_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/HollyJollyPenguins_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/LuckyLittleGods_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/LuckyLinks_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/ThePhantomOfTheOpera_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/Halloween_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/1827.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/MonstersWheel_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/108HeroesMF_295x215.jpg' },
  { url: 'https://cdn1.gmgamingsystems.com/Game/Thumbnail/GnomeWood_295x215.jpg' }        
  ];

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = +window.innerWidth;
    this.checkWindowWidth(this.screenWidth);
  }

  ngOnInit() {
    this.screenWidth = +window.innerWidth;
    this.checkWindowWidth(this.screenWidth);
  }

  checkWindowWidth(windowWidth) {
    let tilesInRow: any;
    let windowWidthInt: number;
    windowWidthInt = windowWidth;
    switch (true) {
      case windowWidthInt < 639:
          tilesInRow = 1;
         break;
      case windowWidthInt < 934:
        tilesInRow = 2;
         break;
      case windowWidthInt < 1229:
        tilesInRow = 3;
         break;
      case windowWidthInt < 1524:
        tilesInRow = 4;
         break;
      case windowWidthInt < 1819:
        tilesInRow = 5;
         break;
      case 1820 < windowWidthInt:
        tilesInRow = 6;
         break;
      default:
         tilesInRow = 6;
         break;
    }
    this.chunkedArray = this.chunkArray(this.gameTiles, tilesInRow);
  }

  chunkArray(myArray, chunk_size){
    let index = 0;
    const arrayLength = myArray.length;
    const tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
        const myChunk = myArray.slice(index, index+chunk_size);
        tempArray.push(myChunk);
    }

    return tempArray;
  }
}
