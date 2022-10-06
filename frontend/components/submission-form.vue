<template>
    <form class="submission-form" action="#">
        <input class="title" type="text" placeholder="Введите заголовок...">
        <textarea class="text" placeholder="Введите текст статьи..."></textarea>
        <input class="tags" type="text" placeholder="Добавьте хэштеги">
        <input type="file" id="upload">
        <label class="upload-button" for="upload"><img class="upload-button-img" src="upload.png" alt="Upload"></label>
    </form>
</template>

<style lang="css">
    .submission-form {
        width: 950px;
        height: 770px;
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
        width: 805px;
        border-style: none;
        font-weight: 500;
        font-size: 24px;
        display: block;
        align-items: center;
        line-height: 30px;
        margin-left: 30px;
        margin-top: 15px;
    }

    #upload {
        display: none;
    }

    .upload-button {
        display: block;
        cursor: pointer;
        margin-left: 840px;
        margin-bottom: 20px;
    }
</style>