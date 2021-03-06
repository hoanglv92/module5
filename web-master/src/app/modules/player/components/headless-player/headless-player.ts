import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {IPlayer, IPlayerOptions, IPlayerSize} from '../../src/player.interface';
import {AbstractPlayer} from '../../src/abstract-player.class';
import {ImageSizes} from '../../../shared/src/image-sizes.enum';
import {ProviderMap} from '../../../shared/src/provider-map.class';
import {ITrack} from '../../../api/tracks/track.interface';
import {PlayerStatus} from '../../src/player-status.enum';

@Component({
  selector: 'app-headless-player',
  styleUrls: ['./headless-player.scss'],
  templateUrl: './headless-player.html'
})
export class HeadlessPlayerComponent extends AbstractPlayer implements IPlayer, OnInit, OnDestroy {
  @Input()
  public track: ITrack;

  public supportsMultiplePlayerInstances = false;
  public supportsCrossfade = false;
  public isHeadlessPlayer = true;

  public providerMap: ProviderMap = ProviderMap.map;

  constructor(private el: ElementRef) {
    super();
  }

  protected bindListeners() {
  }

  protected unBindListeners() {
  }

  protected initialisePlayerSDK(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  protected initialisePlayer(options: IPlayerOptions): Promise<Mixcloud.IPlayerWidget> {
    this.setStatus(PlayerStatus.Initialised);
    this.setDuration(this.track.duration);
    this.track.on('change:duration', () => {
      this.setDuration(this.track.duration);
    });
    return new Promise((resolve, reject) => {
      this.onReady();
      resolve();
    });
  }

  protected deInitialisePlayer(): void {
  }

  protected setPlayerVolume(volume: number) {
  }

  protected setPlayerSize(size: IPlayerSize) {
  }

  protected preloadTrack(track: ITrack, startTime: number = 0) {
  }

  protected startPlayer(): void {
    this.setAllowedToPlay(true);
    this.setAbleToPlay(true);
    this.setStatus(PlayerStatus.Playing);
  }

  protected pausePlayer(): void {
    this.setAllowedToPlay(false);
    this.setStatus(PlayerStatus.Paused);
  }

  protected stopPlayer(): void {
    this.setStatus(PlayerStatus.Stopped);
  }

  protected seekPlayerTo(to: number) {
    if (to) {
      this.onCurrentTimeUpdate(to);
    }
    this.statusChange.emit({newStatus: PlayerStatus.Playing, item: this.playQueueItem});
  }

  public getPlayerEl(): ElementRef {
    return this.el;
  }

  public getCoverSize(): ImageSizes {
    return ImageSizes.Large;
  }

  ngOnDestroy(): void {
  }
}
