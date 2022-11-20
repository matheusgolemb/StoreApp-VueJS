class UserClass{
    customerId;
    userName;
    first_name;
    last_name;
    email;
    constructor(customerId, userName, first_name, last_name, email){
        this.customerId = customerId;
        this.userName = userName;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }
    toObject(){
        return{
                customerId: this.customerId,
                userName: this.userName,
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email
            }
        
    }
}
export default UserClass