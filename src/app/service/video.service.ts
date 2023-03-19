import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class VideoService{
    public url = 'https://api.twitch.tv/helix/clips'
    constructor(
        private _http:HttpClient,
    ){}

    getGameClip(gameId:string, userToken:string):Observable<any>{        
        const headers = {'Authorization': `Bearer ${userToken}`, 'Client-Id':'683flemowotj1459z7x1qrbpqrom4p'};
        return this._http.get(this.url+`?game_id=${gameId}`,{headers:headers});
    }
    getStreamerClip(broadcasterId:string, userToken:string):Observable<any>{
        const headers = {'Authorization': `Bearer ${userToken}`, 'Client-Id':'683flemowotj1459z7x1qrbpqrom4p'};
        return this._http.get(this.url+`?broadcaster_id=${broadcasterId}`,{headers:headers});
    }
}