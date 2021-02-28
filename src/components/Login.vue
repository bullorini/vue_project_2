<template>
    <div class="container">
        <button v-if="!user" class="btn-sm" @click="doLogin">Login with Google</button>
        <template v-else>
            <h1> Hi {{user.displayName}} </h1>
            <button @click="doLogout"
            class="btn-danger"> Logout </button>
        </template>
    </div>
</template>
<script>
import { fb, auth} from '../firebase';
export default {
    name: "Home",
    data() {
        return {
            user: null
        };
    },
    methods: {

        async doLogin() {
            try {
                const provider = new fb.auth.GoogleAuthProvider();
                const user = await auth.signInWithPopup(provider);
                console.log(user);
                this.user = user.user;
            } catch(error) {
                console.error(error.message);
            }
        },
        async doLogout() {
            try {
                await auth.signOut();
                this.user = null;
            } catch(error) {
                console.error(error.message);

            }
        }
    }
};
</script>