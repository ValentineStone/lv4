<template>
    <form class="submission-form" action="#">
        <input class="title" type="text" placeholder="Введите заголовок...">
		<div class="text">
			<client-only>
				<VueEditor/>
			</client-only>
		</div>
		<div class="tag-forms-add-files">
			<input class="tags" type="text" placeholder="Введите теги...">
			<input type="file" id="upload">
            <label class="upload-label" for="upload"><img class="upload-button-img" src="upload.png" alt="Upload"></label>
            <input type="file" id="upload-img">
            <label class="upload-label-img" for="upload-img"><img class="upload-button-img" src="upload-img.png" alt="Upload"></label>
		</div>
		<button class="publish-btn" type="submit">Опубликовать</button>
    </form>
</template>

<script>


</script>

<style lang="css">
    .submission-form {
        width: auto;
        height: auto;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
        border-radius: 15px;
        padding-top: 15px;
    }

    .title {
        width: 820px;
        border-style: none;
        font-weight: 700;
        font-size: 32px;
        display: block;
        align-items: center;
        line-height: 40px;
        margin-left: 30px;
    }

    .text {
        display: block;
        margin-top: 40px;
    }

    .tags {
        width: 750px;
        border-style: none;
        font-weight: 500;
        font-size: 24px;
        align-items: center;
        line-height: 30px;
        margin-left: 30px;
		margin-top: 40px;
    }

    .tag-forms-add-files {
        display: grid;
        grid-template-columns: auto 40px 70px;
    }

    .tag-forms-add-files label {
        width: 31px;
        height: 31px;
        cursor: pointer;
		padding-top: 40px;
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
        margin-top: 90px;
    }
</style>
