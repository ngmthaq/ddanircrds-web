export default class UserModel {
  public constructor(
    public email: string | null = "user@unknow.com",
    public uid: string,
  ) {}
}
