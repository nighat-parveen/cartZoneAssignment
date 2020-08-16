export class User{

    id: string;
    createdAt: string;
    avatar: string;
    f_name: string;
    l_name: string;
    company: string;
    city: string;
    zip: string;
    state: string;
    email: string;
    web: string;
    age: string;

    constructor(data?){
        data = data || {};
        this.id = data.id || '';
        this.createdAt = data.createdAt || '-';
        this.avatar = data.avatar || '';
        this.f_name = data.f_name || '';
        this.l_name = data.l_name || '';
        this.company = data.company || '';
        this.city = data.city || '';
        this.zip = data.zip || '';
        this.state = data.state || '';
        this.email = data.email || '';
        this.web = data.web || '-';
        this.age = data.age || '-'
    }

}