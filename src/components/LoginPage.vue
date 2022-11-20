<template>
    <div>
        Username: <input v-model="uName" type="text" placeholder="Write username">
        Password: <input v-model="uPass" type="password" placeholder="Write password">
        <button @click="doLogin">Login</button>
    </div>
</template>
<script>
import JsonService from '../services/JsonService.js';
import UserClass from '../classes/UserClass.js'

export default {
    name: 'LoginPage',
    data(){
        return{
            usersData: new Map(),
            userInfo: "",
            uName:'',
            uPass:'',
            loginValid: false,
        }
    },
    methods:{
        loadData(){
            JsonService.loadUsers()
            .then((res)=>{
                res.data.forEach((user)=>{
                    this.usersData.set(user.customerId, user)
                })
            })
            .catch((e)=>{
                console.log("Error")
                console.log(e)
            })
        },
        doLogin(){
            this.uName = "dfilchakov0"
            this.uPass = "yJqPtEVqR"
            // Remember to delete pass and user. Just to dont keep typing every login

            this.loginValid = false;
            this.usersData.forEach((user)=>{
                if(this.uName==user.userName && this.uPass == user.password){
                    this.userInfo = new UserClass(user.customerId, user.userName, user.first_name, user.last_name, user.email)
                    this.loginValid = true
                    let UserData = this.userInfo.toObject();
                    this.$emit('getUserData', UserData, this.loginValid);
                    // console.log(UserData)
                    this.$router.push('/')
                }
            })
            if(!this.loginValid){
                this.$emit('getUserData', this.userInfo, this.loginValid)
            }
        }
    },
    mounted(){
        this.loadData()
    }
}
</script>
