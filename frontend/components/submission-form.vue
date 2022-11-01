<template>
    <form class="submission-form" action="#">
        <input class="title" type="text" placeholder="Введите заголовок...">
        <textarea class="text" placeholder="Введите текст статьи..."></textarea>
		<client-only>
			<VueEditor/>
		</client-only>	
        <button class="publish-btn" type="submit">Опубликовать</button>
    </form>
</template>

<script>


</script>

<style lang="css">
    .submission-form {
        width: 950px;
        height: 750px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
        border-radius: 15px;
        padding-top: 15px;
    }

    .title {
        width: 890px;
        border-style: none;
        font-weight: 700;
        font-size: 32px;
        display: block;
        align-items: center;
        line-height: 40px;
        margin-left: 30px;
    }

    .text {
        width: 890px;
        height: 580px;
        border-style: none;
        font-weight: 500;
        font-size: 24px;
        display: block;
        align-items: center;
        line-height: 40px;
        margin-left: 30px;
        margin-top: 40px;
        resize: none;
    }

    .tags {
        width: 750px;
        border-style: none;
        font-weight: 500;
        font-size: 24px;
        align-items: center;
        line-height: 30px;
        margin-left: 30px;
    }

    .tag-forms-add-files {
        display: grid;
        grid-template-columns: auto 40px 70px;
    }

    .tag-forms-add-files label {
        width: 31px;
        height: 31px;
        cursor: pointer;
    }

    #upload {
        display: none;
    }

    #upload-img {
        display: none;
    }

    .publish-btn {
        font-weight: 500;
        background-color: #A8D4FC;
        color: #F3F6FF;
        width: 200px;
        height: 35px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        border: none;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px;
    }
</style>
