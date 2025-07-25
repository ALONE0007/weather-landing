<template>
    <div class="bg-[#D2982D] relative top-[300px] py-32">
        <h1 class="text-5xl text-center text-white font-semibold">The Weather App That Brings <br> You Wonder</h1>
        <p class="text-center pt-2">We care about your happiness and well-being, no matter the weather</p>

        <div class="flex flex-col gap-y-3 justify-center items-center w-full pt-16">

            <div class="cursor-pointer flex items-center border-b border-white/30 justify-between text-white font-semibold pb-3 w-[50%] group">
                <p class="group-hover:-translate-y-1 group-hover:text-black/50 duration-300">How can I customize the Juniper app to suit my needs?</p>
                <button class="text-white group-hover:text-black/50 group-hover:translate-x-2 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
                </button>
            </div>

            <div class="cursor-pointer flex items-center border-b border-white/30 justify-between text-white font-semibold pb-3 w-[50%] group">
                <p class="group-hover:-translate-y-1 group-hover:text-black/50 duration-300">How can I share my weather updates with my partner?</p>
                <button class="text-white group-hover:text-black/50 group-hover:translate-x-2 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
                </button>
            </div>

            <div class="cursor-pointer flex items-center border-b border-white/30 justify-between text-white font-semibold pb-3 w-[50%] group">
                <p class="group-hover:-translate-y-1 group-hover:text-black/50 duration-300">How long is the free trial for the Juniper app?</p>
                <button class="text-white group-hover:text-black/50 group-hover:translate-x-2 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
                </button>
            </div>

            <div class="cursor-pointer flex items-center border-b border-white/30 justify-between text-white font-semibold pb-3 w-[50%] group">
                <p class="group-hover:-translate-y-1 group-hover:text-black/50 duration-300">What happens after the free trial ends?</p>
                <button class="text-white group-hover:text-black/50 group-hover:translate-x-2 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
                </button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: "faq",
};
</script>
