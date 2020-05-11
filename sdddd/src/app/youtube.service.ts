import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: 'iwGuiSnr2Qc', song: 'ERIK - Em Không Sai, Chúng Ta Sai (Official MV)'},
    {id: 'DZDYZ9nRHfU', song: 'HẾT THƯƠNG CẠN NHỚ - ĐỨC PHÚC | OFFICIAL MUSIC VIDEO'},
    {id: 'nMoIfA9clHk', song: 'Đức Phúc - Giấu Mặt (Official Video)'},
    {id: 'HPL74s4VPdk', song: 'Anh Thanh Niên - HuyR | OFFICIAL MV'},
    {id: 'wSxijea-o_M', song: 'Tướng Quân (DinhLong Remix) - Nhật Phong | Nhạc Remix 8D gây nghiện nhất 2019'}
  ];
  constructor() { }
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
