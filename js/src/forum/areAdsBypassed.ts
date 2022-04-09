import app from 'flarum/forum/app';

export default function areAdsBypassed() {
  return app.forum.attribute<boolean>('canBypassAds');
}
