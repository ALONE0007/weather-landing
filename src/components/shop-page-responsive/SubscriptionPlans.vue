<template>
    <div class="mt-20">
        <h1 class="text-center text-4xl font-semibold text-white">We offer <span class="text-black">three plans</span> to suit your</h1>
        <h1 class="text-center text-4xl font-semibold pt-2 text-white">needs and budget</h1>
        <p class="text-xl font-semibold text-center pt-2"> You can switch or cancel your plan at any time</p>
        


        <div class="flex items-center gap-5 justify-center mt-10 text-white">
            <p>YEARLY BILLING</p>
            <div @click="toggle"
                class="w-20 h-8 rounded-full cursor-pointer relative overflow-hidden bg-gray-300">
                <div class="absolute inset-0 flex items-center transition-colors duration-500">
                <div class="w-7 h-7 rounded-full transition-transform duration-500"
                    :class="isOn ? 'bg-gray-800 translate-x-13' : 'bg-gray-900 translate-x-0'">
                </div>
                </div>
            </div>
            <p>MONTHLY BILLING</p>
        </div>



    </div>
    <div class="flex flex-wrap justify-center gap-6 items-center mb-32 mt-20">

        <div class="templateBackground w-56 h-80 flex flex-col justify-between pt-2 px-7 pb-5 hover:scale-110 duration-300">
            <div class="flex flex-col justify-center text-center text-white">
                <span class="text-2xl">FREE</span>
                <span class="text-xl font-bold"><span class="text-sm">$</span> 0.00</span>
            </div>
            <div class="flex flex-col gap-1">
                <div class="flex text-white gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" /></svg>
                    <p class="cursor-default">
                        Basic weather info for your location
                    </p>
                </div>
                <div class="flex text-white gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" /></svg>
                    <p class="cursor-default">
                        Share with one partner
                    </p>
                </div>
                <div class="flex text-white gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" /></svg>
                    <p class="cursor-default">
                        Daily and hourly forecasts
                    </p>
                </div>
            </div>
            <a class="border-2 text-white/80 font-bold border-white/30 rounded-sm text-center" href="#">SUBSCRIBE</a>
        </div>

        <div class="templateBackground w-56 h-80 flex flex-col justify-between pt-2 px-7 pb-5 hover:scale-110 duration-300">
            <div class="flex flex-col justify-center text-center text-white">
                <span class="text-2xl">COUPLE</span>
                <span class="text-xl font-bold"><span class="text-sm">$</span> 2.49</span>
            </div>
            <div class="flex flex-col gap-1">
                <div class="flex text-white gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" /></svg>
                    <p class="cursor-default">
                        Advanced weather info for any location
                    </p>
                </div>
                <div class="flex text-white gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" /></svg>
                    <p class="cursor-default">
                        Share with up to five partners
                    </p>
                </div>
                <div class="flex text-white gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" /></svg>
                    <p class="cursor-default">
                        Weekly and monthly forecasts
                    </p>
                </div>
            </div>
            <a class="border-2 text-white/80 font-bold border-white/30 rounded-sm text-center" href="#">SUBSCRIBE</a>
        </div>

        <div class="templateBackground w-56 h-80 flex flex-col justify-between pt-2 px-7 pb-5 hover:scale-110 duration-300">
            <div class="flex flex-col justify-center text-center text-white">
                <span class="text-2xl">PRO</span>
                <span class="text-xl font-bold"><span class="text-sm">$</span>4.99</span>
            </div>
            <div class="flex flex-col gap-1">
                <div class="flex text-white gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" /></svg>
                    <p class="cursor-default">
                        Exclusive weather info from our cloud technology
                    </p>
                </div>
                <div class="flex text-white gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" /></svg>
                    <p class="cursor-default">
                        Share with unlimited partners
                    </p>
                </div>
                <div class="flex text-white gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" /></svg>
                    <p class="cursor-default">
                        Personalized forecasts based on your preferences and activities
                    </p>
                </div>
            </div>
            <a class="border-2 text-white/80 font-bold border-white/30 rounded-sm text-center" href="#">SUBSCRIBE</a>
        </div>
    </div>
</template>

<script>
export default {
    name :'SubsPlans',
    data() {
    return {
      isOn: false
    }
  },
  methods: {
    toggle() {
      this.isOn = !this.isOn
    }
  }
}
</script>

<style>
    .templateBackground{
        background-image: url(../../assets/shopPageImages/SubscriptionImages/template.png);
        background-size: cover;
        border-radius: 15px;
        box-shadow: 0 0 10px rgba(75, 75, 75, 0.219);
    }
</style>