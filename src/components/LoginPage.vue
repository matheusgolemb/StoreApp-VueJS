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
        doLogin(UserData){
            this.loginValid = false;
            this.usersData.forEach((user)=>{
                if(this.uName==user.userName && this.uPass == user.password){
                    this.userInfo = new UserClass(user.customerId, user.userName, user.first_name, user.last_name, user.email)
                    this.loginValid = true
                    UserData= this.userInfo.toObject();
                    this.$emit('getUserData', UserData);
                    // console.log(UserData)
                    this.$router.push('/')
                }
            })
        }
    },
    mounted(){
        this.loadData()
    }
}
</script>
