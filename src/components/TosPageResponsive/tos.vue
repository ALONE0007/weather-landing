<template>
<div class="bg-[#D2982D] h-screen py-32">
    <div class="flex justify-center items-center w-full">
        <div class="w-[80%] h-[70vh] bg-[#E0A12E] rounded-2xl py-5 px-10 overflow-auto relative">
            <h1 class="text-3xl font-semibold">Terms Of Service</h1>
            <p class="pt-2">By accessing or using our services, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services. We reserve the right to modify these terms at any time, and continued use constitutes acceptance of the updated terms.
            You must provide accurate information when registering.You are responsible for maintaining the confidentiality of your account credentials.You agree not to use the service for illegal activities,harassment, spamming, or distributing harmful content.
            All content and trademarks on our platform are owned by us or licensed to us.Users retain ownership of their uploaded content but grant us a worldwide, non-exclusive license to use, display, and distribute it within the service.
            </p>
            <h1 class="text-3xl font-semibold pt-5">License</h1>
            <p class="pt-2">We grant you a limited, non-exclusive, non-transferable, and revocable license to use our app for your personal, non-commercial use only. You may not copy, modify, distribute, sell, or lease any part of our app or its content, nor may you reverse engineer or attempt to extract the source code of our app, unless you have our written permission.</p>
            <h1 class="text-3xl font-semibold pt-5">Privacy</h1>
            <p class="pt-2">We respect your privacy and are committed to protecting it. Our privacy policy explains how we collect, use, and share your personal information when you use our app. By using our app, you consent to our privacy policy.</p>
            <h1 class="text-3xl font-semibold pt-5">Content</h1>
            <p class="pt-2">
                You are responsible for any content that you upload, post, or share on or through our app, such as photos, videos, comments, or ratings. You must have the right to use such content and not violate any laws or rights of others. You grant us a worldwide, royalty-free, and non-exclusive license to use, store, display, and distribute your content on or through our app for the purposes of providing and improving our services.
            </p>
            <fileLock class="absolute top-2 right-2" />
        </div>
        
    </div>
</div>

</template>

<script>
    import fileLock from "../../assets/file-lock.vue";

    export default{
        name:'tos',
        components :{
            fileLock
        }
    }

</script>
