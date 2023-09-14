import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchTitle='';
  movieUrl='';
movieData={

  title:'',
  imageUrl:'',
  description:''
}
descriptionv2:'';

  constructor(
    private http:HttpClient,

    ) {

    }
    ngOnInit(){
     
    }


    readApi(URL:string){
     
      return this.http.get(URL)
     
      
    }
  searchMovie(){

    console.log("recherche de film "+this.searchTitle);
    const search =encodeURIComponent(this.searchTitle).trim();
    console.log(search);
    this.movieUrl="https://www.omdbapi.com/?apikey=851dde8f&t=" + search
    this.readApi(this.movieUrl)
.subscribe((data)=>{
  console.log('Data : ', data)
  this.movieData.title =data['Title'];
  this.movieData.description=data['Plot'];
  this.movieData.imageUrl=data['Poster']
  console.log(`Movie Title ${this.movieData.title}`);

})
  }
}
