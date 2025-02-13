import { Component, OnInit } from '@angular/core';
import { ProgCard } from './models/prog-card.model';
import { CardVideo } from './models/card-video.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Declaration des Cards des PROGRAMMES
  progCard1!: ProgCard;
  progCard2!: ProgCard;
  progCard3!: ProgCard;
  progCard4!: ProgCard;

  // Declaration des Cards des VIDEOS
  cardVideo1!: CardVideo;
  cardVideo2!: CardVideo;
  cardVideo3!: CardVideo;
  cardVideo4!: CardVideo;
  cardVideo5!: CardVideo;
  cardVideo6!: CardVideo;
  cardVideo7!: CardVideo;
  cardVideo8!: CardVideo;

  ngOnInit() {
    // Appel des cartes des programmes
    this.progCard2 = new ProgCard(
      './assets/image/arch.jpg',
      'Arche de Noé'
    );
    this.progCard1 = new ProgCard(
      './assets/image/jardin.jpg',
      'Le Jardin d Eden'
    );

    this.progCard3 = new ProgCard(
      './assets/image/messi.jpg',
      'Le Messie'
    );
    this.progCard4 = new ProgCard(
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      'Le Bâton de Moïse'
    );



    // Appel des cartes des Vidéos

    this.cardVideo1 = new CardVideo(
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      'Titre1',
      '30:24',
      'Lorem, ipsum dolor sit Lorem, ipsum dolor sit'
    );

    this.cardVideo2 = new CardVideo(
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      'Titre2',
      '30:24',
      'Lorem, ipsum dolor sit Lorem, ipsum dolor sit'
    );

    this.cardVideo3 = new CardVideo(
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      'Titre3',
      '30:24',
      'Lorem, ipsum dolor sit Lorem, ipsum dolor sit'
    );

    this.cardVideo4 = new CardVideo(
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      'Titre4',
      '30:24',
      'Lorem, ipsum dolor sit Lorem, ipsum dolor sit'
    );

    this.cardVideo5 = new CardVideo(
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      'Titre5',
      '30:24',
      'Lorem, ipsum dolor sit Lorem, ipsum dolor sit'
    );

    this.cardVideo6 = new CardVideo(
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      'Titre6',
      '30:24',
      'Lorem, ipsum dolor sit Lorem, ipsum dolor sit'
    );

    this.cardVideo7 = new CardVideo(
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      'Titre7',
      '45:04',
      'Lorem, ipsum dolor sit Lorem, ipsum dolor sit'
    );
    this.cardVideo8 = new CardVideo(
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      'Titre8',
      '15:54',
      'ipsum dolor sit Lorem, ipsum dolor sit'
    );
  }
}
