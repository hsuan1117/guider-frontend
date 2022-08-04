<script setup>
import {computed, ref, watch} from 'vue'
import {
	Dialog,
	DialogOverlay,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	TransitionChild,
	TransitionRoot,
} from '@headlessui/vue'
import {StarIcon as StarOutlineIcon, XIcon} from '@heroicons/vue/outline'
import {ChevronDownIcon, PlusSmIcon, StarIcon} from '@heroicons/vue/solid'
import _ from 'lodash';
import Header from "../components/Header";
import Footer from "../components/Footer";

const {data: {value: guiders}} = await useFetch(`${useRuntimeConfig().public.API_ENDPOINT}/guiders`)

const mobileMenuOpen = ref(false)
const mobileFiltersOpen = ref(false)

const filteredDepartment = computed(() => {
	if (!originFilter) return _.uniq(guiders.map(p => p.profile.department)).map(department => ({
		label: department,
		value: department
	}))

	console.log(originFilter)
	let remove = _.xor(originFilter, appliedFilter.value).filter(x => x.startsWith('School-')).map(x => x.split('-')[1]);
	return _.uniq(guiders.filter(p => !remove.includes(p.profile.school)).map(p => p.profile.department)).map(department => ({
		label: department,
		value: department
	}))
})

const filters = ref([
	{
		id: 'EnterMethod',
		name: '入學方式',
		options: _.uniq(guiders.reduce((prev, curr) => [...prev, ...curr.profile.enterMethod ?? []], [])).map(method => ({
			label: method,
			value: method
		})),
	},
	{
		id: 'School',
		name: '學校',
		options: _.uniq(guiders.map(p => p.profile.school)).map(school => ({
			label: school,
			value: school
		}))
	},
	{
		id: 'College',
		name: '學院',
		options: _.uniq(guiders.map(p => p.profile.school + p.profile.college)).map(college => ({
			label: college,
			value: college
		}))
	},
	{
		id: 'Department',
		name: '系所',
		options: _.uniq(guiders.map(p => p.profile.department)).map(school => ({
			label: school,
			value: school
		}))
	},
])
const originFilter = [...filters.value.reduce((prev, curr) => [...prev, ...curr.options.map(x => curr.id + '-' + x.value)], []), ...filters.value.map(f => f.id).map(id => id + '-all')]
// Array<{ID}-{Name}>
const appliedFilter = ref(originFilter)
const filteredGuiders = computed(() => {
	let remove = _.xor(originFilter, appliedFilter.value);
	return guiders.filter(g => {
		let enterMethodRemoval = 0
		for (let rm of remove) {
			if (rm.startsWith('EnterMethod-')) {
				if (g.profile.enterMethod.includes(rm.split('-')[1])) {
					enterMethodRemoval++;
				}
			} else if (rm.startsWith('School-')) {
				if ((g.profile.school).indexOf(rm.split('-')[1]) > -1) {
					return false;
				}
			} else if (rm.startsWith('College-')) {
				if ((g.profile.school + g.profile.college).indexOf(rm.split('-')[1]) > -1) {
					return false;
				}
			} else if (rm.startsWith('Department-')) {
				if ((g.profile.department).indexOf(rm.split('-')[1]) > -1) {
					return false;
				}
			}
		}
		return enterMethodRemoval !== g.profile.enterMethod.length;
	})
})
watch(appliedFilter, (newValue) => {
	let remove = _.xor(originFilter, newValue);
	const allRemovedSchool = remove.filter(rm => rm.startsWith('School-')).map(rm => rm.split('-')[1])
	const allRemovedCollege = remove.filter(rm => rm.startsWith('College-')).map(rm => rm.split('-')[1])

	if (remove.filter(rm => rm.endsWith('-all')).length>0) {
		remove.filter(rm => rm.endsWith('-all')).forEach(r=>{
			appliedFilter.value = appliedFilter.value.filter(f => !f.startsWith(r.split('-')[0]))
		})
	}

	// College
	filters.value[2].options = _.uniq(guiders.filter(guider => !allRemovedSchool.includes(guider.profile.school)).map(p => p.profile.school + p.profile.college)).map(college => ({
		label: college,
		value: college
	}))

	// Department
	filters.value[3].options = _.uniq(guiders.filter(guider => !allRemovedSchool.includes(guider.profile.school) && !allRemovedCollege.includes(guider.profile.school + guider.profile.college)).map(p => p.profile.department)).map(department => ({
		label: department,
		value: department
	}))
})
</script>
<template>
	<div class="bg-white">
		<div>
			<Header/>
		</div>

		<div>
			<!-- Mobile filter dialog -->
			<TransitionRoot as="template" :show="mobileFiltersOpen">
				<Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="mobileFiltersOpen = false">
					<TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
					                 enter-from="opacity-0" enter-to="opacity-100"
					                 leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
					                 leave-to="opacity-0">
						<DialogOverlay class="fixed inset-0 bg-black bg-opacity-25"/>
					</TransitionChild>

					<TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
					                 enter-from="translate-x-full" enter-to="translate-x-0"
					                 leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
					                 leave-to="translate-x-full">
						<div
							class="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
							<div class="px-4 flex items-center justify-between">
								<h2 class="text-lg font-medium text-gray-900">過濾器</h2>
								<button type="button"
								        class="-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500"
								        @click="mobileFiltersOpen = false">
									<span class="sr-only">Close menu</span>
									<XIcon class="h-6 w-6" aria-hidden="true"/>
								</button>
							</div>

							<!-- Filters -->
							<form class="mt-4">
								<Disclosure as="div" v-for="section in filters" :key="section.name"
								            class="border-t border-gray-200 pt-4 pb-4" v-slot="{ open }">
									<fieldset>
										<legend class="w-full px-2">
											<DisclosureButton
												class="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500">
                        <span class="text-sm font-medium text-gray-900">
                          {{ section.name }}
                        </span>
												<span class="ml-6 h-7 flex items-center">
                          <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform']"
                                           aria-hidden="true"/>
                        </span>
											</DisclosureButton>
										</legend>
										<DisclosurePanel class="pt-4 pb-2 px-4">
											<div class="space-y-6">
												<div v-for="(option, optionIdx) in section.options" :key="option.value"
												     class="flex items-center">
													<input :id="`${section.id}-${optionIdx}-mobile`"
													       :name="`${section.id}[]`"
													       :value="section.id+'-'+option.value"
													       type="checkbox"
													       v-model="appliedFilter"
													       class="h-4 w-4 border-gray-300 rounded text-primary focus:ring-primary"/>
													<label :for="`${section.id}-${optionIdx}-mobile`"
													       class="ml-3 text-sm text-gray-500">
														{{ option.label }}
													</label>
												</div>
											</div>
										</DisclosurePanel>
									</fieldset>
								</Disclosure>
							</form>
						</div>
					</TransitionChild>
				</Dialog>
			</TransitionRoot>

			<main class="max-w-2xl mx-auto px-8 lg:max-w-7xl lg:px-8">
				<div class="border-b border-gray-200 pt-24 pb-10">
					<h1 class="text-4xl font-extrabold tracking-tight text-gray-900">引路人</h1>
					<!--<p class="mt-4 text-base text-gray-500">所有引路人列表</p>-->
				</div>

				<div class="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
					<aside>
						<h2 class="sr-only">過濾器</h2>

						<button type="button" class="inline-flex items-center lg:hidden"
						        @click="mobileFiltersOpen = true">
							<span class="text-sm font-medium text-gray-700">過濾器</span>
							<PlusSmIcon class="flex-shrink-0 ml-1 h-5 w-5 text-gray-400" aria-hidden="true"/>
						</button>

						<div class="hidden lg:block">
							<form class="divide-y divide-gray-200 space-y-10">
								<div v-for="(section, sectionIdx) in filters" :key="section.name"
								     :class="sectionIdx === 0 ? null : 'pt-10'">
									<fieldset>
										<legend class="block text-sm font-medium text-gray-900">
											{{ section.name }}
										</legend>
										<div class="pt-6 space-y-3">
											<div class="flex items-center">
												<input :id="`${section.id}-all`" :name="`${section.id}[]`"
												       type="checkbox"
												       :value="`${section.id}-all`"
												       v-model="appliedFilter"
												       class="h-4 w-4 border-gray-300 rounded text-primary focus:ring-primary"
												       checked/>
												<label :for="`${section.id}-all`"
												       class="ml-3 text-sm text-gray-600 font-extrabold">
													全選
												</label>
											</div>
											<div v-for="(option, optionIdx) in section.options" :key="option.value"
											     class="flex items-center">

												<input :id="`${section.id}-${optionIdx}`" :name="`${section.id}[]`"
												       :value="section.id+'-'+option.value" type="checkbox"
												       v-model="appliedFilter"
												       class="h-4 w-4 border-gray-300 rounded text-primary focus:ring-primary"/>
												<label :for="`${section.id}-${optionIdx}`"
												       class="ml-3 text-sm text-gray-600">
													{{ option.label }}
												</label>
											</div>
										</div>
									</fieldset>
								</div>
							</form>
						</div>
					</aside>

					<section aria-labelledby="product-heading" class="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
						<h2 id="product-heading" class="sr-only">引路人列表</h2>

						<div v-if="filteredGuiders.length === 0">
							Oops~ 查無引路人，嘗試放寬篩選標準吧
						</div>
						<div
							class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
							<a v-for="guider in filteredGuiders" :key="guider.id"
							   :href="`/info/${guider.id}`"
							   class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden px-4 py-6"
							>
								<div
									class="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
									<nuxt-img :src="guider.profile_photo_url" :alt="guider.name + '頭像'"
									          class="w-full h-full object-center object-cover sm:w-full sm:h-full"/>
								</div>
								<div class="flex-1 p-4 space-y-2 flex flex-col">
									<h3 class="text-2xl font-medium text-gray-900">
										<a :href="guider.href">
											<span aria-hidden="true" class="absolute inset-0"/>
											{{ guider.name }}
										</a>
									</h3>
									<p class="text-xl text-gray-700">{{
											guider.profile.school
										}}{{ guider.profile.department }} | {{
											guider.profile.enterMethod.join('、')
										}}</p>
									<p class="text-sm text-gray-500">
										{{ guider.profile.introduction.substring(0, 40) + "..." }}</p>

									<div class="flex flex-row">
										<StarIcon v-for="rating in [1, 2, 3, 4, 5].filter(r=>r<0)" :key="rating"
										          class="text-yellow-400"/>
										<StarOutlineIcon v-for="rating in [1, 2, 3, 4, 5].filter(r=>r>0)" :key="rating"
										                 class="text-gray-300 flex-shrink-0 h-5 w-5"/>
										<!-- todo: 新增評論時加入星星判斷 -->
										<span class="text-sm ml-1">{{ 0 }} 個評價</span>
									</div>
									<!--<div class="flex-1 flex flex-col justify-end">
										<p class="text-base font-medium text-gray-900"></p>
									</div>-->
								</div>
							</a>
						</div>
					</section>
				</div>
			</main>
			<Footer/>
		</div>
	</div>
</template>
