<script setup>

import {ref} from 'vue'
import {
	Dialog,
	DialogOverlay,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
	RadioGroup,
	RadioGroupDescription,
	RadioGroupLabel,
	RadioGroupOption,
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels,
	TransitionChild,
	TransitionRoot,
} from '@headlessui/vue'
import {
	MenuIcon,
	SearchIcon,
	ShieldCheckIcon,
	ShoppingBagIcon,
	XIcon,
	HeartIcon as HeartOutlineIcon
} from '@heroicons/vue/outline'
import {CheckIcon, QuestionMarkCircleIcon, StarIcon, HeartIcon as HeartSolidIcon} from '@heroicons/vue/solid'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const {data: {value: person}} = await useFetch(`${process.env.API_ENDPOINT}/info/${useRoute().params.id}`)

const policies = [
	{
		name: 'Free delivery all year long',
		description:
			'Name another place that offers year long free delivery? We’ll be waiting. Order now and you’ll get delivery absolutely free.',
		imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
	},
	{
		name: '24/7 Customer Support',
		description:
			'Or so we want you to believe. In reality our chat widget is powered by a naive series of if/else statements that churn out canned responses. Guaranteed to irritate.',
		imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
	},
	{
		name: 'Fast Shopping Cart',
		description:
			"Look at the cart in that icon, there's never been a faster cart. What does this mean for the actual checkout experience? I don't know.",
		imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
	},
	{
		name: 'Gift Cards',
		description:
			"We sell these hoping that you will buy them for your friends and they will never actually use it. Free money for us, it's great.",
		imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
	},
]
const reviews = {
	average: 0,
	totalCount: 0,
	counts: [
		{rating: 5, count: 0},
		{rating: 4, count: 0},
		{rating: 3, count: 0},
		{rating: 2, count: 0},
		{rating: 1, count: 0},
	],
	featured: [
		/*{
			id: 1,
			rating: 5,
			content: `
		<p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
	  `,
			author: 'Emily Selman',
			avatarSrc:
				'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
		}*/
	],
}
const open = ref(false)
</script>

<template>
	<div class="bg-gray-50">
		<!-- Mobile menu -->
		<Header/>

		<main>
			<!-- Product -->
			<div class="bg-white">
				<div
					class="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
					<!-- Product details -->
					<div class="lg:max-w-lg lg:self-end">

						<div class="mt-4">
							<div class="flex flex-row items-center gap-4">
								<h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
									{{ person.name }}
								</h1>
								<HeartOutlineIcon class="w-8 h-8 cursor-pointer"/>
							</div>
							<h5 class="text-lg font-bold tracking-tight text-gray-700 sm:text-lg">
								{{ person.profile.school }}
							</h5>
							<h5 class="text-sm font-medium tracking-tight text-gray-500 sm:text-lg">
								{{ person.profile.enterMethod.join('、') }}
							</h5>
						</div>

						<section aria-labelledby="information-heading" class="mt-4">
							<h2 id="information-heading" class="sr-only">Product information</h2>

							<div class="flex items-center">
								<!-- <p class="text-lg text-gray-900 sm:text-xl"></p> -->

								<div class="border-gray-300"> <!-- ml-4 pl-4 border-l -->
									<h2 class="sr-only">學員回饋</h2>
									<div class="flex items-center">
										<div>
											<div class="flex items-center">
												<StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
												          :class="[reviews.average > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']"
												          aria-hidden="true"/>
											</div>
											<p class="sr-only">{{ reviews.average }} out of 5 stars</p>
										</div>
										<p class="ml-2 text-sm text-gray-500">{{ reviews.totalCount }} reviews</p>
									</div>
								</div>
							</div>

							<div class="mt-4 space-y-6">
								<p class="text-base text-gray-500 text-justify"
								   v-html="person.profile.introduction.replace(/\n/g, '<br/>')"></p>
							</div>
						</section>
					</div>

					<!-- Product image -->
					<div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
						<div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
							<img :src="person.profile_photo_url" alt="用戶頭像"
							     class="w-full h-full object-center object-cover"/>
						</div>
					</div>

					<!-- Product form -->
					<div class="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
						<section aria-labelledby="options-heading">
							<h2 id="options-heading" class="sr-only">Product options</h2>

							<form>
								<div class="mt-10 flex flex-col gap-4">
									<a :href="person.reservation_gcal_link"
									   target="_blank"
									   class="w-full bg-primary border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary">
										預約時間
									</a>
									<!--
									<a href="https://forms.gle/BguAtM16dnU3TzzK6"
									   target="_blank"
									   class="w-full bg-primary border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary">
										報名表單
									</a>-->
								</div>
							</form>
						</section>
					</div>
				</div>
			</div>

			<div class="max-w-2xl mx-auto px-4 sm:px-6 py-10 lg:max-w-7xl lg:px-8">
				<!-- 提供服務 -->
				<section aria-labelledby="details-heading">
					<div class="flex flex-col items-center text-center">
						<h2 id="details-heading"
						    class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">提供服務</h2>
						<p class="mt-3 max-w-3xl text-lg text-gray-600 text-left"
						   v-html="person.profile.service.replace(/\n/g, '<br/>')"></p>
					</div>
				</section>

				<!-- 基本資料 -->
				<section aria-labelledby="profile-heading" class="mt-10 pt-10 border-t-gray-400 border-t-[0.5px]">
					<div class="flex flex-col items-center text-center">
						<h2 id="profile-heading"
						    class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">基本資料</h2>

						<div
							class="self-start flex flex-col justify-center md:flex-row md:justify-between w-full mt-4">
							<h3 class="text-xl font-bold tracking-tight text-gray-900 md:mr-3">入學管道</h3>
							<span
								class="text-xl font-light tracking-tight text-gray-900">{{
									person.profile.enterMethod.join('、')
								}}</span>
							<a class="rounded-xl bg-orange-200 px-4 py-2 shadow-md" v-if="person.profile.file"
							   target="_blank"
							   :href="person.profile.file.startsWith('http') ? person.profile.file : '/storage/'+person.profile.file">查看備審資料
								➜</a>
						</div>

						<div
							class="self-start flex flex-col justify-center md:flex-row md:justify-between w-full mt-4">
							<h3 class="text-xl font-bold tracking-tight text-gray-900 mt-2">特殊經歷</h3>
							<div
								class="text-xl font-light tracking-tight text-gray-600 mt-1 text-center md:text-right break-all"
								v-html="person.profile.special.replace(/\n/g, '<br/>')"></div>
						</div>

					</div>
				</section>


				<!-- 想說的話 -->
				<section aria-labelledby="profile-heading" class="mt-10 pt-10 border-t-gray-400 border-t-[0.5px]">
					<div class="flex flex-col items-center text-center">
						<h2 id="profile-heading"
						    class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">想說的話</h2>

						<div class="text-xl font-light tracking-tight text-gray-600 mt-4 text-left"
						     v-html="person.profile.introduction.replace(/\n/g, '<br/>')"></div>
					</div>
				</section>

				<!-- 想說的話
				<section aria-labelledby="profile-heading" class="mt-16 pt-10 border-t-gray-400 border-t-[0.5px]">
					<div class="flex justify-around text-center">
						<a href="#" class="rounded-xl bg-orange-200 px-12 py-6 shadow-md text-2xl">我要預約</a>
						<a href="#" class="rounded-xl bg-orange-200 px-12 py-6 shadow-md text-2xl">我要收藏</a>
					</div>
				</section>-->
			</div>

			<section aria-labelledby="reviews-heading" class="bg-white">
				<div
					class="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
					<div class="lg:col-span-4">
						<h2 id="reviews-heading" class="text-2xl font-extrabold tracking-tight text-gray-900">
							學員回饋
						</h2>

						<div class="mt-3 flex items-center">
							<div>
								<div class="flex items-center">
									<StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
									          :class="[reviews.average > rating ? 'text-yellow-400' : 'text-gray-300', 'flex-shrink-0 h-5 w-5']"
									          aria-hidden="true"/>
								</div>
							</div>
							<p class="ml-2 text-sm text-gray-900">共 {{ reviews.totalCount }} 評論</p>
						</div>

						<div class="mt-6">
							<h3 class="sr-only">Review data</h3>

							<dl class="space-y-3">
								<div v-for="count in reviews.counts" :key="count.rating"
								     class="flex items-center text-sm">
									<dt class="flex-1 flex items-center">
										<p class="w-3 font-medium text-gray-900">{{ count.rating }}<span
											class="sr-only"> star reviews</span></p>
										<div aria-hidden="true" class="ml-1 flex-1 flex items-center">
											<StarIcon
												:class="[count.count > 0 ? 'text-yellow-400' : 'text-gray-300', 'flex-shrink-0 h-5 w-5']"
												aria-hidden="true"/>

											<div class="ml-3 relative flex-1">
												<div class="h-3 bg-gray-100 border border-gray-200 rounded-full"/>
												<div v-if="count.count > 0"
												     class="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
												     :style="{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }"/>
											</div>
										</div>
									</dt>
									<dd class="ml-3 w-10 text-right tabular-nums text-sm text-gray-900"
									    v-if="count.count / reviews.totalCount">
										{{ Math.round((count.count / reviews.totalCount) * 100) }}%
									</dd>
								</div>
							</dl>
						</div>

						<div class="mt-10">
							<h3 class="text-lg font-medium text-gray-900">分享您的評論</h3>
							<p class="mt-1 text-sm text-gray-600">分享親身體驗</p>

							<!--<a href="#"
							   class="mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full">
								寫個評論
							</a>-->
						</div>
					</div>

					<div class="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
						<div class="flow-root">
							<div class="-my-12 divide-y divide-gray-200">
								<div v-for="review in reviews.featured" :key="review.id" class="py-12">
									<div class="flex items-center">
										<img :src="review.avatarSrc" :alt="`${review.author}.`"
										     class="h-12 w-12 rounded-full"/>
										<div class="ml-4">
											<h4 class="text-sm font-bold text-gray-900">{{ review.author }}</h4>
											<div class="mt-1 flex items-center">
												<StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
												          :class="[review.rating > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']"
												          aria-hidden="true"/>
											</div>
										</div>
									</div>

									<div class="mt-4 space-y-6 text-base italic text-gray-600" v-html="review.content"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>

		<Footer/>
	</div>
</template>
