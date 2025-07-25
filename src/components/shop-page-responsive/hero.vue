<template>
    <div class="bg-[#D2982D]">
        <div class="flex lg:flex-row flex-col-reverse gap-y-5 px-10 justify-between">
          <div class="lg:w-1/2 flex lg:justify-end justify-center items-center">
              <img src="../../assets/shopPageImages/hero.png" alt="">
          </div>
        <div class="flex justify-center items-center flex-col gap-y-2 lg:w-1/2 lg:px-5">
            <h1 class="text-6xl lg:text-left text-center lg:w-2/3 font-semibold text-white">
                Atmos
            </h1>
            <p class="lg:text-left text-center lg:w-2/3">A weather app that lets you explore the atmosphere and learn more about the weather phenomena</p>
            <div class="flex md:flex-row flex-col justify-center lg:justify-start gap-2 lg:w-2/3 mt-3">
                <button class="uppercase bg-[#F5B747] lg:whitespace-nowrap rounded-lg px-7 font-medium cursor-pointer py-2">FREE TILL 15JUN2023</button>
                <button class="uppercase bg-transparent border-2 border-[#F5B747] lg:whitespace-nowrap text-white rounded-lg px-7 font-medium cursor-pointer py-2">TRY NOW</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name :"hero"
}
</script>