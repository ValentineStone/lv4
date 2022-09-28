<template>
    <div>
        <ul class="lower-navigate">
            <li>
                <router-link to="/">О проекте</router-link>
            </li>
            <li>
                <router-link to="/">Справки</router-link>
            </li>
            <li>
                <router-link to="/">Правила</router-link>
            </li>
            <li>
                <router-link to="/">Помощь проекту</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="css">
    .lower-navigate {
        margin-top: 60px;
        list-style: none;
    }

    .lower-navigate li {
        margin-top: 10px;
    }
</style>