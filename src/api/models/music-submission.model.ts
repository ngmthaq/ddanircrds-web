export default class MusicSubmissionModel {
  public constructor(
    public id: string,
    public email: string,
    public info: string,
    public instagram: string,
    public musicLinks: string[],
    public name: string,
    public spotify: string,
    public createdAt: number,
  ) {}
}
