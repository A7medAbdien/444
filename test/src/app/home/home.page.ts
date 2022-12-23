import { DataListService } from './../data-list.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { DocumentReference } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Idea {
  id?: string,
  name: string,
  notes: string
}



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public ideas: Observable<Idea[]>;
  private ideaCollection: AngularFirestoreCollection<Idea>;
  public idea: Idea = {} as Idea;

  constructor(private afs: AngularFirestore) {
    this.ideaCollection = this.afs.collection<Idea>('ideas');
    this.ideas = this.ideaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getIdeas(): Observable<Idea[]> {
    return this.ideas;
  }
  getIdea(id: string): Observable<Idea> {
    return this.ideaCollection.doc<Idea>(id).valueChanges().pipe(
      map(idea => {
        idea.id = id;
        return idea
      })
    );
  }

  addIdea(idea: Idea): Promise<DocumentReference> {
    return this.ideaCollection.add(idea);
  }

  updateIdea(idea: Idea): Promise<void> {
    return this.ideaCollection.doc(idea.id).update({ name: idea.name, notes: idea.notes });
  }

  deleteIdea(id: string): Promise<void> {
    return this.ideaCollection.doc(id).delete();
  }

  Insert() {
    this.ideaCollection.add(this.idea).then((res) => {
      alert('Inserted successfully');
    });
  }

}
