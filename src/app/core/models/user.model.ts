export interface IUser  {
    uid?: any;
    firstName?: string;
    lastName?: string;
    email?:string
    role?: string;
    state?:string
    city?:string,
    currentCity?:string,
    photoURL?:string;
    phoneNumber?:number
    followerCount?:number
    followingCount?:number
  }
  
  export class User implements IUser {
    constructor(public uid?: string, 
      public firstName?: string,
      public lastName?: string,
      public email?: string,
      public role?: string,
      public state?: string,
      public city?: string,
      public currentCity?:string,
      public photoURL?: string,
      public phoneNumber?:number) {}
      public followerCount?:number = 0
      public followingCount?:number = 0
  }
  
  export class UserProfile extends User {
    polls: Array<any> = [];
  }
  
  