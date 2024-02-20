export interface UserDataType {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }

  export interface UserData2Type {
    [userObjectKeyE.key]: number,
    [userObjectKeyE.name]: string,
    [userObjectKeyE.username]: string,
    [userObjectKeyE.email]: string,
    [userObjectKeyE.address]: string,
    [userObjectKeyE.phone]: string,
    [userObjectKeyE.website]: string,
    [userObjectKeyE.company]: string
  }

  export enum userObjectKeyE {
    key,
    name,
    username,
    email,
    address,
    phone,
    website,
    company
  }