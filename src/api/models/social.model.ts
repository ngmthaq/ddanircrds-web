export default class SocialModel {
  public constructor(
    public id: string,
    public name: string,
    public profile: string,
    public icon: string,
    public logo: string,
    public isOpen: boolean,
    public order: number,
  ) {}
}
