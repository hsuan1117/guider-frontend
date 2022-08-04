<script setup>
import {ref} from 'vue'
import {
	Dialog,
	DialogOverlay,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels,
	TransitionChild,
	TransitionRoot,
} from '@headlessui/vue'
import {MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon, XIcon} from '@heroicons/vue/outline'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {AnnotationIcon, ClockIcon, DocumentSearchIcon} from '@heroicons/vue/outline';

const offers = [
	/*{name: 'Download the app', description: 'Get an exclusive $5 off code', href: '#'},
	{name: "Return when you're ready", description: '60 days of free returns', href: '#'},
	{name: 'Sign up for our newsletter', description: '15% off your first order', href: '#'},*/
]
const guiders = []
const posts = []
// 學員心得
const testimonials = [
	{
		id: 1,
		quote: '自從有了學涯引路人，我對大學校系更了解了',
		attribution: '台南高中 王小美',
	},
	{
		id: 2,
		quote:
			'超喜歡學涯引路人的學長姐們',
		attribution: '台北高中 張小明',
	},
	{
		id: 3,
		quote:
			'學涯引路人讓我找到人生方向',
		attribution: '嘉林師範大學 王萌萌',
	},
]

const mobileMenuOpen = ref(false)
</script>
<template>
	<div class="bg-white">
		<Header/>

		<main>
			<!-- Hero -->
			<div class="flex flex-col border-b border-gray-200 lg:border-0">
				<nav aria-label="Offers" class="order-last lg:order-first">
					<div class="max-w-7xl mx-auto lg:px-8">
						<ul role="list"
						    class="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
							<li v-for="offer in offers" :key="offer.name" class="flex flex-col">
								<a :href="offer.href"
								   class="relative flex-1 flex flex-col justify-center bg-white py-6 px-4 text-center focus:z-10">
									<p class="text-sm text-gray-500">
										{{ offer.name }}
									</p>
									<p class="font-semibold text-gray-900">
										{{ offer.description }}
									</p>
								</a>
							</li>
						</ul>
					</div>
				</nav>

				<div class="relative">
					<div aria-hidden="true" class="hidden absolute w-1/2 h-full bg-gray-100 lg:block"/>
					<div class="relative bg-gray-100 lg:bg-transparent">
						<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
							<div class="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
								<div class="lg:pr-16">
									<h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
										學涯引路人
									</h1>
									<p class="mt-4 text-xl text-gray-600">
										#unfilteredcollegelife
									</p>
									<div class="mt-6">
										<a href="/guiders"
										   class="inline-block bg-primary border border-transparent py-3 px-8 rounded-md font-bold text-white hover:bg-primary">
											開始尋找引路人！
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
						<img src="~/assets/images/homepage.jpg" alt=""
						     class="w-full h-full object-center object-cover"/>
					</div>
				</div>
			</div>

			<!-- 引路人 -->
			<section aria-labelledby="trending-heading" class="bg-white">
				<div class="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:py-32 lg:px-8" id="guiders">
					<div class="px-4 flex items-center justify-between sm:px-6 lg:px-0">
						<h2 id="trending-heading" class="text-2xl font-extrabold tracking-tight text-gray-900">
							引路人</h2>
						<a href="/guiders"
						   class="hidden sm:block text-sm font-semibold text-primary hover:text-primary">查看更多<span
							aria-hidden="true"> &rarr;</span></a>
					</div>

					<div class="mt-8 relative">
						<div class="relative w-full overflow-x-auto">
							<ul role="list"
							    class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
								<li v-for="guider in guiders" :key="guider.id"
								    class="w-64 inline-flex flex-col text-center lg:w-auto">
									<div class="group relative">
										<div
											class="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
											<img :src="guider.profile_photo_url" :alt="guider.name + '照片'"
											     class="w-full h-full object-center object-cover group-hover:opacity-75"/>
										</div>
										<div class="mt-6">
											<h3 class="mt-1 font-semibold text-gray-900 text-xl">
												<a href="/{user:guider}">
													<span class="absolute inset-0"/>
													{{ guider.name }}
												</a>
											</h3>
											<p class="mt-1 text-gray-600 text-md">
												{{ guider.profile.school }}
											</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>

					<div class="mt-12 px-4 sm:hidden">
						<a href="#" class="text-sm font-semibold text-primary hover:text-primary">See
							everything<span aria-hidden="true"> &rarr;</span></a>
					</div>
				</div>
			</section>

			<!-- Collections -->
			<section aria-labelledby="collections-heading" class="bg-gray-100">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
						<h2 id="collections-heading" class="text-2xl font-extrabold text-gray-900">專欄</h2>

						<div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
							<div v-for="post in posts" :key="post.title" class="group relative">
								<div
									class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
									<img :src="'/storage/' + post.feature"
									     :alt="post.name + '精選圖片'"
									     class="w-full h-full object-center object-cover"/>
								</div>
								<h3 class="mt-6 text-md text-gray-700">
									<a href="/post/{post: post}">
										<span class="absolute inset-0"/>
										{{ post.author.name }}
									</a>
								</h3>
								<p class="text-lg font-semibold text-gray-900">{{ post.title }}</p>
								<p class="text-sm font-light text-gray-500">{{ post.description }}</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- 平台介紹 -->
			<section class="bg-white px-4 py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:py-32 lg:px-8">
				<div class="px-4 border-b-2 pb-4 border-b-gray-500 flex items-center justify-center sm:px-6 lg:px-0">
					<h2 class="text-5xl font-bold tracking-tight text-gray-900">選擇學涯引路人的３大原因</h2>
				</div>
				<div class="text-center my-4 mt-8 text-xl">
					我們透過視訊，建立一對一的高中生與大學生交流管道，解決高中生對科系的疑惑！
				</div>

				<div class="mt-8 flex flex-col md:flex-row items-center justify-between gap-9 px-8">
					<div class="rounded-xl bg-gray-100 w-full h-80 flex flex-col items-center justify-center p-4">
						<AnnotationIcon class="w-32 h-32"/>
						<p class="text-2xl bg-primary font-bold px-3 my-2">雙向交流</p>
						<p class="text-xl my-2">讓學長姐來傾聽您的疑問與想法，並解決您的困惑！</p>
					</div>
					<div class="rounded-xl bg-gray-100 w-full h-80 flex flex-col items-center justify-center p-4">
						<ClockIcon class="w-32 h-32"/>
						<p class="text-2xl bg-primary font-bold px-3 my-2">即時性</p>
						<p class="text-xl my-2">
							網路上許多資訊早已成舊過時，讓正在就讀的學長姐告訴您最即時的第一手消息吧！</p>
					</div>
					<div class="rounded-xl bg-gray-100 w-full h-80 flex flex-col items-center justify-center p-4">
						<DocumentSearchIcon class="w-32 h-32"/>
						<p class="text-2xl bg-primary font-bold px-3 my-2">真實性</p>
						<p class="text-xl my-2">網路上往往只談優點不談缺點，學涯引路人致力於將最真實的資訊分享給您們！</p>
					</div>
				</div>
			</section>

			<!-- Sale and testimonials -->
			<div class="relative overflow-hidden">
				<!-- Decorative background image and gradient -->
				<div aria-hidden="true" class="absolute inset-0">
					<div class="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8">
						<img src="~/assets/images/homepage2.jpg" alt=""
						     class="w-full h-full object-center object-cover"/>
					</div>
					<div class="absolute inset-0 bg-white bg-opacity-75"/>
					<div class="absolute inset-0 bg-gradient-to-t from-white via-white"/>
				</div>

				<!-- Sale -->
				<section aria-labelledby="sale-heading"
				         class="relative max-w-7xl mb-4 mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8">
					<div class="max-w-2xl mx-auto lg:max-w-none">
						<h2 id="sale-heading"
						    class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
							想加入引路人的行列嗎？</h2>
						<p class="mt-4 max-w-xl mx-auto text-xl text-gray-600">
							填寫表單後，我們會儘速與您聯絡預約面試。<br/>若有任何問題歡迎至粉絲專頁詢問
						</p>
						<a href="/register"
						   class="mt-6 inline-block w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto">
							成為引路人
						</a>
					</div>
				</section>

				<!--<section aria-labelledby="testimonial-heading"
						 class="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:py-32 lg:px-8">
					<div class="max-w-2xl mx-auto lg:max-w-none">
						<h2 id="testimonial-heading" class="text-2xl font-extrabold tracking-tight text-gray-900">
							學員心得
						</h2>

						<div class="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
							<blockquote v-for="testimonial in testimonials" :key="testimonial.id"
										class="sm:flex lg:block">
								<svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg"
									 aria-hidden="true" class="flex-shrink-0 text-gray-300">
									<path
										d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
										fill="currentColor"/>
								</svg>
								<div class="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
									<p class="text-lg text-gray-600">
										{{ testimonial.quote }}
									</p>
									<cite class="mt-4 block font-semibold not-italic text-gray-900">
										{{ testimonial.attribution }}
									</cite>
								</div>
							</blockquote>
						</div>
					</div>
				</section>-->
			</div>
		</main>

		<Footer/>
	</div>
</template>
