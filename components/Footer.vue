<script setup>
import {MailIcon} from '@heroicons/vue/outline';

const footerNavigation = {
    service: [
        {name: '引路人', href: '#'},
        {name: '面試', href: '#'},
    ],
    org: [
        {name: '我們是誰', href: '#'},
        {name: '我們的使命', href: '#'},
    ],
    customerService: [
        {name: '聯絡', href: '#'},
        {name: '退款', href: '#'},
        {name: '常見問答', href: '#'},
        {name: '付款方式', href: '#'},
    ],
}
const appName = ""
const show_newsletter = false

const year = new Date().getFullYear()
</script>

<template>
    <footer class="w-full bg-gray-100 flex flex-col justify-center items-center py-16 gap-6">
        <div class="text-3xl">追蹤我們</div>
        <div class="flex flex-row gap-3">
            <a href="https://www.facebook.com/UnfilteredCollegeLife"
               target="_blank"
               class="rounded-full w-12 h-12 fill-[#1877F2]">
                <svg class="" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title>
                    <path
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            </a>
            <a href="https://lin.ee/hbKC7Ze"
               target="_blank"
               class="rounded-full w-12 h-12 bg-[#00C300] p-3">
                <svg class="fill-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>
                    LINE</title>
                    <path
                        d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
            </a>
            <a href="https://www.instagram.com/unfiltered_college_life/"
               target="_blank"
               class="rounded-full w-12 h-12 bg-[#E4405F] fill-white p-3">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title>
                    <path
                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
            </a>
            <a href="mailto:h34096518@gs.ncku.edu.tw"
               target="_blank"
               class="rounded-full w-12 h-12 bg-gray-500 text-white p-2">
                <MailIcon/>
            </a>
        </div>
    </footer>

    <!-- todo: 做好的時候把false改成true -->
    <footer aria-labelledby="footer-heading" class="bg-white border-t border-gray-200" v-if="false">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="py-20">
                <div
                    class="grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min">
                    <!-- Image section -->
                    <div class="col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1">
                        <img src="/logo.png"
                             alt="" class="h-8 w-auto"/>
                    </div>

                    <!-- Sitemap sections -->
                    <div
                        class="mt-10 col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6">
                        <div class="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                            <div>
                                <h3 class="text-sm font-medium text-gray-900">服務</h3>
                                <ul role="list" class="mt-6 space-y-6">
                                    <li v-for="item in footerNavigation.service" :key="item.name"
                                        class="text-sm">
                                        <a :href="item.href" class="text-gray-500 hover:text-gray-600">
                                            {{ item.name }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium text-gray-900">組織</h3>
                                <ul role="list" class="mt-6 space-y-6">
                                    <li v-for="item in footerNavigation.org" :key="item.name"
                                        class="text-sm">
                                        <a :href="item.href" class="text-gray-500 hover:text-gray-600">
                                            {{ item.name }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-sm font-medium text-gray-900">客戶關係</h3>
                            <ul role="list" class="mt-6 space-y-6">
                                <li v-for="item in footerNavigation.customerService" :key="item.name"
                                    class="text-sm">
                                    <a :href="item.href" class="text-gray-500 hover:text-gray-600">
                                        {{ item.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Newsletter section -->
                    <div
                        v-if="show_newsletter"
                        class="mt-12 md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4">
                        <h3 class="text-sm font-medium text-gray-900">Sign up for our newsletter</h3>
                        <p class="mt-6 text-sm text-gray-500">The latest deals and savings, sent to your inbox
                            weekly.</p>
                        <form class="mt-2 flex sm:max-w-md">
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="email-address" type="text" autocomplete="email" required=""
                                   class="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"/>
                            <div class="ml-4 flex-shrink-0">
                                <button type="submit"
                                        class="w-full bg-primary border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-100 py-10 text-center">
                <p class="text-sm text-gray-500">&copy;{{ year }} {{ appName }} 版權所有</p>
            </div>
        </div>
    </footer>
</template>
