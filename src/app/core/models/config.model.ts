export interface ConfigModel {
  id: number;
  login: string;
  email: string;
}

export class Config implements ConfigModel {
  constructor(
    public id: number = null,
    public login: string = '',
    public email: string = '',
  ) {}
}
