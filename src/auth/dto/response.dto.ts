import { UserEntitie } from 'src/user/entities/user.entitie';

export class ResponseDto {
  token: string;
  userCPF: UserEntitie;
}
