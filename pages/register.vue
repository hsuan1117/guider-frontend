<script setup>
import {RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption} from '@headlessui/vue'
import JetAuthenticationCard from '../components/Jetstream/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '../components/Jetstream/AuthenticationCardLogo.vue';
import JetButton from '../components/Jetstream/Button.vue';
import JetInput from '../components/Jetstream/Input.vue';
import JetLabel from '../components/Jetstream/Label.vue';
import Header from "../components/Header";
import {ref, watch} from "vue";

const roles = [
	{name: '引路人', description: '來分享你的經驗吧～'},
	{name: '學生', description: '來提出你的疑問，並聽學長姐分享ㄅ'}
]

const form = ref({
	name: '',
	email: '',
	password: '',
	password_confirmation: '',
	terms: false,
	register_type: roles[0]
})

const submit = () => {
	/* form.transform((data) => ({
		 ...data,
		 register_type: data.register_type.name,
	 })).post(route('register'), {
		 onFinish: () => form.reset('password', 'password_confirmation'),
	 });*/
};
</script>

<template>
	<div class="min-h-screen flex flex-col">
		<Header/>
		<JetAuthenticationCard>
			<template #logo>
				<JetAuthenticationCardLogo/>
			</template>

			<div class="text-2xl font-bold w-full text-center">
				引路人註冊
			</div>

			<form @submit.prevent="submit">
				<div>
					<JetLabel for="name" value="姓名"/>
					<JetInput
						id="name"
						v-model="form.name"
						type="text"
						class="mt-1 block w-full"
						required
						autofocus
						autocomplete="name"
					/>
				</div>

				<div class="mt-4">
					<JetLabel for="email" value="電子郵件"/>
					<JetInput
						id="email"
						v-model="form.email"
						type="email"
						class="mt-1 block w-full"
						required
					/>
				</div>

				<div class="mt-4">
					<JetLabel for="password" value="密碼"/>
					<JetInput
						id="password"
						v-model="form.password"
						type="password"
						class="mt-1 block w-full"
						required
						autocomplete="new-password"
					/>
				</div>

				<div class="mt-4">
					<JetLabel for="password_confirmation" value="確認密碼"/>
					<JetInput
						id="password_confirmation"
						v-model="form.password_confirmation"
						type="password"
						class="mt-1 block w-full"
						required
						autocomplete="new-password"
					/>
				</div>


				<div class="mt-4">
					<JetLabel for="role" value="身份別"/>
					<RadioGroup v-model="form.register_type" class="mt-1 block w-full">
						<RadioGroupLabel class="sr-only">身份別</RadioGroupLabel>
						<div class="bg-white rounded-md -space-y-px">
							<RadioGroupOption as="template" v-for="(setting, settingIdx) in roles" :key="setting.name"
							                  :value="setting" v-slot="{ checked, active }"
							                  class="cursor-pointer"
							>
								<div
									:class="[settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '', settingIdx === roles.length - 1 ? 'rounded-bl-md rounded-br-md' : '', checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200', 'relative border p-4 flex cursor-pointer focus:outline-none']">
                                  <span
	                                  :class="[checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300', active ? 'ring-2 ring-offset-2 ring-indigo-500' : '', 'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center']"
	                                  aria-hidden="true">
                                    <span class="rounded-full bg-white w-1.5 h-1.5"/>
                                  </span>
									<div class="ml-3 flex flex-col">
										<RadioGroupLabel as="span"
										                 :class="[checked ? 'text-indigo-900' : 'text-gray-900', 'block text-sm font-medium']">
											{{ setting.name }}
										</RadioGroupLabel>
										<RadioGroupDescription as="span"
										                       :class="[checked ? 'text-indigo-700' : 'text-gray-500', 'block text-sm']">
											{{ setting.description }}
										</RadioGroupDescription>
									</div>
								</div>
							</RadioGroupOption>
						</div>
					</RadioGroup>
				</div>

				<div class="flex items-center justify-end mt-4">
					<a href="/login" class="underline text-sm text-gray-600 hover:text-gray-900">
						已經有帳號？
					</a>

					<JetButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
						註冊
					</JetButton>
				</div>

			</form>
		</JetAuthenticationCard>
	</div>
</template>
